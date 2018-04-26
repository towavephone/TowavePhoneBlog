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
        var slideout = new Slideout({
            'panel': document.getElementsByClassName('mid-col')[0],
            'menu': document.getElementById('viewer'),
            'padding': 300,
            'tolerance': 70
          });
    
        // Toggle button
        document.querySelector('.slider-trigger').addEventListener('click', function() {
            slideout.toggle();
        });

        $(window).resize(function(){
            debugger
            if(slideout.isOpen()){
                slideout.close();
            }
        })
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