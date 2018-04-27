define([], function(){
    var $tag, $aboutme, $friends;

    //第一步 -- 组合
    var combine = function(){
        if($tag){
            document.getElementById("js-mobile-tagcloud").innerHTML = $tag.innerHTML;
        }
        if($aboutme){
            document.getElementById("js-mobile-aboutme").innerHTML = $aboutme.innerHTML;
        }
        if($friends){
            document.getElementById("js-mobile-friends").innerHTML = $friends.innerHTML;
        }
    }
    //第三步 -- 根据数据渲染DOM
    var renderDOM = function(){
        if($('#viewer').length == 0){
            //生成节点
            var $viewer = document.createElement("div");
            $viewer.id = "viewer";
            $viewer.className = "hide";
            $tag = document.getElementById("js-tagcloud");
            $aboutme = document.getElementById("js-aboutme");
            $friends = document.getElementById("js-friends");
            function menuList(name) {
                return $("link.menu-list").attr(name);
            };
            var tagStr = $tag?'<span class="viewer-title">'+ menuList("tags") + '</span><div class="viewer-div tagcloud" id="js-mobile-tagcloud"></div>':"";
            var friendsStr = $friends?'<span class="viewer-title">'+ menuList("friends") + '</span><div class="viewer-div friends" id="js-mobile-friends"></div>':"";
            var aboutmeStr = $aboutme?'<span class="viewer-title">'+ menuList("about") + '</span><div class="viewer-div aboutme" id="js-mobile-aboutme"></div>':"";

            $viewer.innerHTML = '<div id="viewer-box">\
            <div class="viewer-box-l">\
                <div class="viewer-box-wrap">'+aboutmeStr+friendsStr+tagStr+'</div>\
            </div>\
            </div>';
            
            document.getElementsByTagName("body")[0].appendChild($viewer);
        }
    };

    //第四步 -- 绑定 DOM 事件
    var bindDOM = function(){
        require([yiliaConfig.slideout],function(Slideout){
            var slideout = new Slideout({
                'panel': document.getElementsByClassName('mid-col')[0],
                'menu': document.getElementById('viewer'),
                'padding': 250,
                'tolerance': 70,
                'touch': false
              });
        
            // Toggle button
            document.querySelector('.slider-trigger').addEventListener('click', function() {
                slideout.open();
            });
    
            function close(eve) {
                eve.preventDefault();
                slideout.close();
            }
              
            slideout.on('beforeopen', function() {
                this.panel.classList.add('mid-col-open');
                $('.slideout-panel').css('z-index', 999);
            })
            .on('open', function() {
                this.panel.addEventListener('click', close);
            })
            .on('beforeclose', function() {
                this.panel.classList.remove('mid-col-open');
                this.panel.removeEventListener('click', close);
                $('.slideout-panel').css('z-index', 3);
            });
            $(window).resize(function(){
                if(slideout.isOpen()){
                    slideout.close();
                }
            })
        })
        //滚动样式
        var $overlay = $("#mobile-nav .overlay");
        var $header = $(".js-mobile-header");
        fixHeader();
        window.onscroll = function(){
            fixHeader();
        };
        function fixHeader(scrollTop){
            var scrollTop = document.documentElement.scrollTop + document.body.scrollTop;
            if(scrollTop >= 69){
                $overlay.addClass("fixed");
            }else{
                $overlay.removeClass("fixed");
            }
            if(scrollTop >= 160){
                $header.removeClass("hide").addClass("fixed");
            }else{
                $header.addClass("hide").removeClass("fixed");
            }
        }
    };

    return{
        init: function(){
            //构造四步
            renderDOM();
            combine();
            bindDOM();
            resetTags();
        }
    }
})