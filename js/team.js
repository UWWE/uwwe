jQuery(function($){
    var team = {
        "list": [
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
                "name": "Amy Sui",
                "program": "Computer Eng.",
                "description": "<p>爱就是在一起，</p><p>吃很多很多顿饭 :p</p>",
                "department": "editorial",
                "social": {
                    "facebook": "https://www.facebook.com/yi.sui.399"
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
            },
            {
                "name": "Jason Ruan",
                "program": "FARM",
                "description": "<p>每个故事里都会有的那个乐于助人且运气不错的小胖</p>",
                "department": "event",
                "social": {
                    "envelope": "jasonrzy2013@gmail.com",
                    "wechat": "LR_JLC"
                }
            },
            {
                "name": "Wendy Lin",
                "program": "Actuarial Science",
                "description": "<p>每天莫名其妙的乐呵</p>",
                "department": "event",
                "social": {
                    "envelope": "wandi0118@gmail.com",
                    "wechat": "wandi0118",
                    "facebook": "https://www.facebook.com/wandi.lin1"
                }
            },
            {
                "name": "Michael Chi",
                "program": "Computer Eng",
                "description": "<p>喜欢一切跟吃有关的东西</p>",
                "department": "tech",
                "social": {
                    "envelope": "michael.chi1997@gmail.com",
                    "wechat": "michael1997725",
                    "facebook": "https://www.facebook.com/michael.chi.9"
                }
            },
            {
                "name": "Joanna Zhou",
                "program": "Computer Science",
                "description": "<p>爱笑的女生运气不会差 爱傻笑的女生糊里糊涂地被耍</p>",
                "department": "tech",
                "social": {
                    "envelope": "joanna.chow.jc.jc@gmail.com",
                    "wechat": "Joanna_chow_",
                    "instagram": "gaaayee",
                    "facebook": "https://www.facebook.com/joanna.chow.jc.jc"
                }
            },
            // {
            //     "name": "Tim Zhong",
            //     "program": "Computer Science",
            //     "description": "",
            //     "department": "tech",
            //     "social": {
            //     }
            // },
            {
                "name": "Spencer Tao",
                "program": "Economics",
                "description": "<p>Try to be an Explorer.</p>",
                "department": "event",
                "social": {
                    "envelope": "spencerts@outlook.com",
                    "wechat": "speocean",
                    "instagram": "speocean"
                }
            },
            // {
            //     "name": "Agnes",
            //     "program": "",
            //     "description": "",
            //     "department": "editorial",
            //     "social": {
            //     }
            // },
            {
                "name": "Sandy Xu",
                "program": "AFM",
                "description": "<p>做喜欢做的事儿~</p>",
                "department": "design",
                "social": {
                    "envelope": "sandyxu0927@gmail.com",
                    "wechat": "onenonly0927",
                    "facebook": "https://www.facebook.com/sandy0927"
                }
            },
            {
                "name": "Sylvia Zhang",
                "program": "AFM",
                "description": "<p>虽然一把年纪了，但还是很想成为被选召的孩子啊</p>",
                "department": "design",
                "social": {
                    "event": "zzhangshuyan@gmail.com",
                    "wechat": "sylviaokita"
                }
            },
            {
                "name": "Nicole Sheng",
                "program": "Actuarial Science",
                "description": "<p>一個心有文科的理科生</p>",
                "department": "editorial",
                "social": {
                    "envelope": "nicoleshengsal@gmail.com",
                    "wechat": "372233161",
                    "instagram": "ithought_nicolllle",
                    "facebook": "https://www.facebook.com/nicole.sheng.5"
                }
            },
            {
                "name": "Jonathan Wang",
                "program": "Computer Science",
                "description": "<p>猜猜我是谁</p>",
                "department": "editorial",
                "social": {
                    "envelope": "jonwzh@gmail.com",
                    "wechat": "jonathanwzh"
                }
            },
            {
                "name": "Ryan Han",
                "program": "Computer Science",
                "description": "<p>I have a UW, I have a WE Ugh! UWWE.</p>",
                "department": "editorial",
                "social": {
                    "envelope": "ryanhan.ca@outlook.com",
                    "wechat": "ryan_hannn",
                    "facebook": "https://www.facebook.com/ryan.xj.han",
                    "linkedin": "https://www.linkedin.com/in/uwryan",
                    "desktop": "https://ryanhan.me/"
                }
            },
            // {
            //     "name": "Winston",
            //     "program": "event",
            //     "description": "<p></p>",
            //     "department": "event",
            //     "social": {
            //     }
            // },
            // {
            //     "name": "Myracle",
            //     "program": "event",
            //     "description": "<p></p>",
            //     "department": "event",
            //     "social": {
            //     }
            // },
            // {
            //     "name": "Sherry?",
            //     "program": "event",
            //     "description": "<p></p>",
            //     "department": "event",
            //     "social": {
            //     }
            // },
            // {
            //     "name": "Kevin Diao",
            //     "program": "event",
            //     "description": "<p></p>",
            //     "department": "event",
            //     "social": {
            //     }
            // },
            {
                "name": "Cici Wu",
                "program": "GBDA",
                "description": "<p>标准吃货一枚</p>",
                "department": "editorial",
                "social": {
                    "envelope": "cicimengxiw847@gmail.com",
                    "wechat": "wumengxi980817",
                    "instagram": "ciciwumengxi"
                }
            },
            {
                "name": "Ariel Ji",
                "program": "Computer Science",
                "description": "<p>喝最烈的酒</p> <p>做最野的汪</p>",
                "department": "editorial",
                "social": {
                    "envelope": "ariel.jsy@gmail.com",
                    "wechat": "16479889796",
                    "instagram": "stupidariel"
                }
            },
            {
                "name": "Alicia Gu",
                "program": "",
                "description": "<p>彪悍勇敢，乐观温暖</p>",
                "department": "event",
                "social": {
                    "wechat": "tarotapioca"
                }
            },
            {
                "name": "Angela Fan",
                "program": "",
                "description": "<p>话唠～ 活泼 喜欢吃</p>",
                "department": "event",
                "social": {
                    "wechat": "fansijia0731"
                }
            },
            {
                "name": "Chandler Yan",
                "program": "Computer Science",
                "description": "<p>我就是我，做最不一样的水（cheng）果（zi）</p>",
                "department": "exec",
                "social": {
                    "wechat": "as574601359"
                }
            },
            {
                "name": "Claudia Ying",
                "program": "",
                "description": "<p>只想暴瘦</p><p>只想暴富</p>",
                "department": "event",
                "social": {
                    "wechat": "xin600025",
                    "instagram": "ccclaudia.y"
                }
            },
            {
                "name": "Echo Qiu",
                "program": "",
                "description": "<p>长期来面临的主要矛盾：美食与减肥</p>",
                "department": "event",
                "social": {
                    "wechat": "13601563031"
                }
            },
            {
                "name": "Joyce Luo",
                "program": "",
                "description": "<p>怀着改变世界的英雄梦，祈求安稳的平凡人生</p>",
                "department": "pr",
                "social": {
                    "wechat": "joyceee96"
                }
            },
            {
                "name": "Leon Ma",
                "program": "Computer Engineering",
                "description": "<p>Work Hard Play Hard</p>",
                "department": "pr",
                "social": {
                    "wechat": "leonma333"
                }
            },
            {
                "name": "Rachel Ni",
                "program": "",
                "description": "<p>实在没有才艺了 给大家翻个白眼吧</p>",
                "department": "editorial",
                "social": {
                    "wechat": "yunakim2014",

                }
            },
            {
                "name": "Timmy Zhu",
                "program": "",
                "description": "<p>想当歌手和电竞选手的程序员</p>",
                "department": "event",
                "social": {
                    "wechat": "hualuozuihuanshang",
                    
                }
            },
            {
                "name": "Violet",
                "program": "",
                "description": "<p>最大的爱好就是吃饭</p><p>爱吃午饭 晚饭 夜宵</p><p>如果早上起得来</p><p>也爱吃早饭</p>",
                "department": "event",
                "social": {
                    "wechat": "934644451",
                    
                }
            },
            {
                "name": "Vivi Cao",
                "program": "",
                "description": "<p>近期目标：和男票养三只猫，两只狗，一只蜥蜴。已达成：½</p>",
                "department": "editorial",
                "social": {
                    "wechat": "lilyice19980226",
                }
            },
            {
                "name": "Vivian Bai",
                "program": "",
                "description": "<p>声优都是怪物，惹不起惹不起</p>",
                "department": "pr",
                "social": {
                    "wechat": "x_1970-2000",
                }
            },
            {
                "name": "Yichen Wang",
                "program": "",
                "description": "<p>想要一夜暴富。钱啊 快来吧</p>",
                "department": "editorial",
                "social": {
                    "wechat": "bujianbusan778629",
                }
            },
            {
                "name": "Zoey Yang",
                "program": "FARM",
                "description": "<p>谁动了本宝的蛋黄酥？</p>",
                "department": "event",
                "social": {
                    "wechat": "y199701142199",
                }
            }

        ],
        "html": "",
        "template": "<div class=\"col-lg-3 col-md-3 col-sm-4\" data-department=\"%s\"> <div class=\"single_team wow fadeInUp\"> <div class=\"team_img\"> <img src=\"img/team/%s.jpg\" onerror=\"this.src='img/team/placeholder-user-photo.png';\"> </div> <h5>%s</h5> <span>%s</span> <div class=\"description\">%s</div> <div class=\"team_social\">%s</div> </div> </div>",
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
