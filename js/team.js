jQuery(function($){
    var team = {
        "list": [
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
                "name": "Spencer Tao",
                "program": "Economics",
                "description": "<p>Try to be an Explorer.</p>",
                "department": "pr",
                "social": {
                    "envelope": "spencerts@outlook.com",
                    "wechat": "speocean",
                    "instagram": "speocean"
                }
            },
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
                    "envelope": "zzhangshuyan@gmail.com",
                    "wechat": "sylviaokita"
                }
            },
            {
                "name": "Nicole Sheng",
                "program": "Actuarial Science",
                "description": "<p>吃面不吃米的南方人，心有文科的理科生</p>",
                "department": "editorial",
                "social": {
                    "envelope": "nicoleshengsal@gmail.com",
                    "wechat": "372233161",
                    "instagram": "ithought_nicolllle",
                    "facebook": "https://www.facebook.com/nicole.sheng.5"
                }
            },
            {
                "name": "Cici Wu",
                "program": "GBDA",
                "description": "<p>标准吃货一枚</p>",
                "department": "design",
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
                "department": "design",
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
                "program": "Biology & Psychology",
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
                "program": "Science and Business",
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
            },
            {
                "name": "Selina Xie",
                "program": "Math",
                "description": "<p>想要个暑假</p>",
                "department": "pr",
                "social": {
                    "wechat": "Xie222x",
                }
            },
            {
                "name": "V",
                "program": "",
                "description": "<p>一句话也没有</p>",
                "department": "pr",
                "social": {
                    "wechat": "VANniah",
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
