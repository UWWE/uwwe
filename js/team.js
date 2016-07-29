jQuery(function($){
    var team = {
        "list": [
            {
                "name": "Carl Weng",
                "program": "Arts & Business",
                "description": "<p>一个把吃、玩和旅行当作人生主旋律的人</p>",
                "department": "exec",
                "social": {
                    "facebook": "https://www.facebook.com/carl.weng",
                    "instagram": "http://instagram.com/carl_tk",
                    "linkedin": "https://ca.linkedin.com/in/carlweng/en"
                }
            },
            {
                "name": "Peiran Wang",
                "program": "Computer Science",
                "description": "<p>没什么特点, </p><p>普通人。</p>",
                "department": "editorial",
                "social": {
                    "envelope": "mailto:contactus@uwwe.ca",
                    "linkedin": "https://linkedin.com/in/peiran"
                }
            },
            {
                "name": "Marc Lo",
                "program": "Computer Eng.",
                "description": "<p>英雄莫問出處，學渣莫問成績，拍視頻棄成績就是我。</p>",
                "department": "exec tech",
                "social": {
                    "youtube": "https://www.youtube.com/channel/UCaWVOzI9SqHA19nnOW7pHHA",
                    "instagram": "http://instagram.com/marcblast",
                    "linkedin": "https://ca.linkedin.com/pub/hung-yui-lo/94/327/206/en"
                }
            },
            {
                "name": "Sophie Shi",
                "program": "Computer Science",
                "description": "<p>敌视现实，</p><p>虚构远方。</p>",
                "department": "exec editorial",
                "social": {
                    "instagram": "http://instagram.com/__sooophiie",
                    "linkedin": "https://ca.linkedin.com/pub/sophie-shi/9a/254/930/en",
                    "facebook": "https://www.facebook.com/sophie.shi.31"
                }
            },
            {
                "name": "Richard Li",
                "program": "Computer Science",
                "description": "<p>我叫LCD，平时喜欢</p><p>拍拍照，扯扯淡，打打球。</p>",
                "department": "pr",
                "social": {
                    "facebook": "https://www.facebook.com/profile.php?id=100006362884353&fref=ts",
                    "linkedin": "https://ca.linkedin.com/pub/richard-li/90/b11/179/en"
                }
            },
            {
                "name": "Susan Cao",
                "program": "CFM",
                "description": "<p>摄影是病，得治。祖传PS</p><p>包治百病。(T^T摄影除外)</p>",
                "department": "exec design",
                "social": {
                    "linkedin": "http://ca.linkedin.com/pub/susan-cao/9b/bb0/405/en",
                    "500px": "https://500px.com/susancao"
                }
            },
            {
                "name": "Nicole Xiao",
                "program": "Civil Eng.",
                "description": "<p>爱猫却偏偏过敏，</p><p>爱玩却偏学工程的奇女子</p>",
                "department": "event",
                "social": {
                    "facebook": "https://www.facebook.com/wenwen.xiao.161?fref=ts",
                    "instagram": "http://instagram.com/nicole_x0418?ref=badge"
                }
            },
            {
                "name": "Sophie Gao",
                "program": "Computer Science",
                "description": "<p>不做蝼蚁，不做神，</p><p>做个默默吃东西的人。</p>",
                "department": "editorial",
                "social": {
                    "instagram": "http://instagram.com/sophiemjj_?ref=badge",
                    "linkedin": "http://www.linkedin.com/profile/view?id=107544866"
                }
            },
            {
                "name": "Frank Zeng",
                "program": "Computer Science",
                "description": "<p>安美男 游戏控 飞机迷</p><p>做海报就用Frank Style!</p>",
                "department": "design",
                "social": {
                    "envelope": "mailto:zjyfrank17@gmail.com"
                }
            },
            {
                "name": "Chandler Yan",
                "program": "Computer Science",
                "description": "<p>我就是我 做最不一样的</p><p>水（cheng）果（zi）</p>",
                "department": "editorial",
                "social": {
                    "facebook": "https://www.facebook.com/profile.php?id=100006857493231",
                    "wechat": "as574601359",
                    "envelope": "mailto:yanyucheng007@hotmail.com"
                }
            },
            {
                "name": "Ivy Ling",
                "program": "Math",
                "description": "<p>一直期待张悬出新歌的苏打绿粉</p>",
                "department": "exec",
                "social": {
                    "facebook": "https://www.facebook.com/ivy.ling.739?fref=ts",
                    "instagram": "http://instagram.com/ivyrosykevin?ref=badge",
                    "wechat": "lzy591156784"
                }
            },
            {
                "name": "Ivy Ouyang",
                "program": "Actuarial Science",
                "description": "<p>体胖勤跑步，</p><p>人丑多读书。</p>",
                "department": "event exec",
                "social": {
                    "instagram": "http://instagram.com/ivvvytcmh?ref=badge",
                    "wechat": "OuyangMinghao923"
                }
            },
            {
                "name": "Kathy Zheng",
                "program": "AFM",
                "description": "<p>一吃一大碗</p><p>一睡一整天</p>",
                "department": "pr exec",
                "social": {
                    "instagram": "http://instagram.com/kakazhenng?ref=badge",
                    "facebook": "https://www.facebook.com/kathy.zheng.75",
                    "wechat": "kathy052727"
                }
            },
            {
                "name": "Orchid Ma",
                "program": "Computer Science",
                "description": "<p>高冷的暖男</p><p>就是我~</p>",
                "department": "editorial",
                "social": {
                    "facebook": "https://www.facebook.com/orchid.ma.97?fref=ts",
                    "instagram": "http://instagram.com/orchiiidda_aoe?ref=badge"
                }
            },
            {
                "name": "Cloris Tang",
                "program": "Computer Science",
                "description": "<p>诗酒趁年华</p>",
                "department": "design",
                "social": {
                    "facebook": "https://www.facebook.com/cloris97"
                }
            },
            {
                "name": "Emily Jiang",
                "program": "FARM/CFA",
                "description": "<p>黄段子写手</p>",
                "department": "editorial",
                "social": {
                    "envelope": "mailto:dongjiang@live.ca",
                    "wechat": "5196350218"
                }
            },
            {
                "name": "Fiona Wang",
                "program": "Civil Eng.",
                "description": "<p>人丑体胖</p><p>只能学搬砖的女汉子= =</p>",
                "department": "event",
                "social": {
                    "facebook": "https://www.facebook.com/profile.php?id=100006590940723&fref=ts",
                    "wechat": "wangmingyue18"
                }
            },
            {
                "name": "Steven Feng",
                "program": "FARM",
                "description": "<p>= - =</p>",
                "department": "pr",
                "social": {
                    "envelope": "mailto:j53feng@uwaterloo.ca",
                    "wechat": "sf970730"
                }
            },
            {
                "name": "Bill Cao",
                "program": "Computer Science",
                "description": "<p>曾经停下来看松鼠</p><p>差点迟到了课orz</p>",
                "department": "tech",
                "social": {
                    "facebook": "https://www.facebook.com/Zimincao",
                    "linkedin": "https://ca.linkedin.com/pub/zimin-cao/105/77b/8b0",
                    "wechat": "1665690190"
                }
            },
            {
                "name": "Catherine Zeng",
                "program": "AFM",
                "description": "<p>高冷担当。</p>",
                "department": "pr",
                "social": {
                    "envelope": "mailto:miaoxuan24@gmail.com",
                    "wechat": "1820462029"
                }
            },
            {
                "name": "Amy Sui",
                "program": "Computer Eng.",
                "description": "<p>爱就是在一起，</p><p>吃很多很多顿饭 :p</p>",
                "department": "editorial",
                "social": {
                    "facebook": "https://www.facebook.com/yi.sui.399"
                }
            },
            {
                "name": "Yolanda Shi",
                "program": "Math",
                "description": "<p>肥媛</p>",
                "department": "event",
                "social": {
                    "envelope": "shiyiyuan.eddie.pyy@gmail.com",
                    "wechat": "aaaaafeiyuan"
                }
            },
            {
                "name": "Claire Shi",
                "program": "Math",
                "description": "<p>爱音乐爱健身爱做饭</p>",
                "department": "pr",
                "social": {
                    "envelope": "shichang0421@gmail.com",
                    "wechat": "shichang0421"
                }
            },
            {
                "name": "Jingyi Guo",
                "program": "Civil Eng",
                "description": "<p>除了学习啥都干</p>",
                "department": "editorial",
                "social": {
                    "instagram": "http://instagram.com/avant_leo",
                    "wechat": "hypnos_akaneko"
                }
            },
            {
                "name": "Hayden Lan",
                "program": "Computer Science",
                "description": "<p>爱喝酒爱音乐爱车</p><p>爱交朋友的学渣</p>",
                "department": "event",
                "social": {
                    "instagram": "http://instagram.com/haydenlan93",
                    "wechat": "lanhaitian001"
                }
            },
            {
                "name": "Linda He",
                "program": "Computer Science",
                "description": "<p>爱朋友爱音乐</p><p>爱狗狗爱卖萌</p>",
                "department": "event",
                "social": {
                    "facebook": "https://www.facebook.com/yixuan.he.58",
                    "wechat": "hyx609381403"
                }
            },
            {
                "name": "Autumn Xu",
                "program": "Math",
                "description": "<p>数学系的文科生，</p><p>鹅大爷的好闺蜜。</p>",
                "department": "editorial",
                "social": {
                    "facebook": "https://www.facebook.com/autumn.xu.52",
                    "wechat": "autumnxjingjing"
                }
            },
            {
                "name": "Daisy Yu",
                "program": "Arts",
                "description": "<p>爱猫，爱狗，爱文艺的大龄单身女青年。</p>",
                "department": "editorial",
                "social": {
                    "envelope": "mailto:daisyh1023@yahoo.com",
                    "wechat": "1196090716"
                }
            },
            {
                "name": "Kyle Zhao",
                "program": "Computer Science",
                "description": "<p>GPA是什么？</p><p>能吃么？</p>",
                "department": "tech",
                "social": {
                    "facebook": "https://www.facebook.com/xrav3nz",
                    "wechat": "hiimkyle"
                }
            }
        ],
        "html": "",
        "template": "<div class=\"col-lg-3 col-md-3 col-sm-4\" data-department=\"%s\"> <div class=\"single_team wow fadeInUp\"> <div class=\"team_img\"> <img src=\"img/team/%s.jpg\"> </div> <h5>%s</h5> <span>%s</span> <div class=\"description\">%s</div> <div class=\"team_social\">%s</div> </div> </div>",
        "social": "<a href=\"%s\" target=\"blank\"><i class=\"fa fa-%s\"></i></a>",
        "wechat": "<a class=\"wechat-button\" data-toggle=\"tooltip\" title=\"复制粘贴 ID: %s 到微信加入好友\" data-trigger=\"click focus\"><i class=\"fa fa-wechat\"></i></a>",
        "prepare": function () {
            var self = this;
            this.list.map(function(member) {
                var social_list = "";
                Object.keys(member.social).forEach(function (site) {
                    if (site == "wechat") {
                        social_list += sprintf(team.wechat, member.social[site]);
                    } else {
                        social_list += sprintf(team.social, member.social[site], site);
                    }
                });
                self.html += sprintf(self.template,
                    member["department"],
                    member["name"].replace(/ /g,'').toLowerCase(),
                    member["name"],
                    member["program"],
                    member["description"],
                    social_list);
            });
        },
        "load": function () {
            $("#load_team").append(this.html);
            $('.team_slider').slick({
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 4,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true }
                    },
                    {
                        breakpoint: 600,
                        settings: {slidesToShow: 2, slidesToScroll: 2 }
                    },
                    {
                        breakpoint: 480,
                        settings: {slidesToShow: 1, slidesToScroll: 1 }
                    }
                ]
            });
            // initialize tooltip
            $('[data-toggle="tooltip"]').tooltip();
        }
    };
    team.prepare();
    jQuery(window).load(function() {
        team.load();
    });

    var team_filters = $("#team-filter").find("a"),
        is_filtering = false;

    team_filters.on("click", function (e) {
        e.preventDefault();
        if (is_filtering) return ;
        is_filtering = true;
        if ($(this).parent().hasClass("active")) {
            return;
        }
        team_filters.parent().removeClass("active");
        $(this).parent().addClass("active");
        var selection = $(this).attr("href").substring(1);
        $("#filter-dropdown span:first-child").html($(this).text());
        $('.team_slider').animate({
            opacity: "0"
        }, 500, function() {
            $('.team_slider').slick('slickUnfilter');
            if (selection) {
                $('.team_slider').slick('slickFilter', 'div[data-department~="' + selection + '"]');
            }
        }).animate({
            opacity: "1"
        }, 500, function() {
            is_filtering = false;
        });
    });

    $('.team_slider').on('setPosition', function(slick) {
        $("#filter-dropdown").width(slick.currentTarget.clientWidth - 56);
    });

});
