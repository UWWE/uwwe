<?php

ignore_user_abort(true);

function syscall($cmd, $cwd)
{
    $descriptorspec = array(
        1 => array('pipe', 'w'),
        2 => array('pipe', 'w')
    );

    $resource = proc_open($cmd, $descriptorspec, $pipes, $cwd);

    if (is_resource($resource)) {
        $output = stream_get_contents($pipes[2]);
        $output .= PHP_EOL;
        $output .= stream_get_contents($pipes[1]);
        $output .= PHP_EOL;
        fclose($pipes[1]);
        fclose($pipes[2]);
        proc_close($resource);
        return $output;
    }
}

if (!empty($_POST['payload'])) {
    $payload = json_decode($_POST['payload']);

    $branch = substr($payload->ref, strrpos($payload->ref, '/') + 1);

    $repository = $payload->repository->name;
    $cwd = '/home/uwaterloowe/public_html';

    if ($branch == "production") {

        $cmd = "git reset --hard && git checkout production && git pull origin production && ./minify.sh";

        $result = syscall($cmd, $cwd);
        $output = '';

        foreach ($payload->commits as $commit) {
            $output .= $commit->author->name.' a.k.a. '.$commit->author->username;
            $output .= PHP_EOL;
            foreach (array('added', 'modified', 'removed') as $action) {
                if (count($commit->{$action})) {
                    $output .= sprintf('%s: %s; ', $action, implode(',', $commit->{$action}));
                }
            }
            $output .= PHP_EOL;
            $output .= sprintf('because: %s', $commit->message);
            $output .= PHP_EOL;
            $output .= $commit->url;
            $output .= PHP_EOL;
        }

        $output .= PHP_EOL;
        $output .= $result;

        // TODO setup mail to send the result
        // mail('root', 'GitHub hook production push result', $output);
    }
}
