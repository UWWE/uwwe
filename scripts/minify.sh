#!/bin/bash
html-minifier index.html -o index.html -c html-minifier.conf

for f in $(ls *.css css/*.css css/*/*.css)
do
  cssnano $f $f --safe --no-autoprefixer --no-discardOverridden --no-discardUnused --no-mergeIdents --no-reduceIdents
done

for f in $(ls js/*.js)
do
  uglifyjs --compress --mangle -o $f -- $f
done
