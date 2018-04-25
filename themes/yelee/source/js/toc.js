define(function (){

    var toggleTocArea = function(){
        var valueHide = yiliaConfig.toc[0];
        var valueShow = yiliaConfig.toc[1];
        if ($(".left-col").is(":hidden")) {
            $("#tocButton").attr("value", valueHide);
        }
        $("#tocButton").click(function() {
            if ($("#toc-div").is(":hidden")) {
                $("#tocButton").attr("value", valueHide);
                $("#toc-div").slideDown(320);
                $(".switch-btn, .switch-area").fadeOut(300);
            }
            else {
                $("#tocButton").attr("value", valueShow);
                $("#toc-div").slideUp(350);
                $(".switch-btn, .switch-area").fadeIn(500);
            }
        })
    }()
    
    var HideTOCifNoHeader = function(){
        if (!$(".toc").length) {
            $("#toc-div, #tocButton").hide();
            $(".switch-btn, .switch-area").show();
        }
    }()

    $.fn.scrollUnique = function() {
        return $(this).each(function() {
            var eventType = 'mousewheel';
            // 火狐是DOMMouseScroll事件
            if (document.mozHidden !== undefined) {
                eventType = 'DOMMouseScroll';
            }
            $(this).on(eventType, function(event) {
                // 一些数据
                var scrollTop = this.scrollTop,
                    scrollHeight = this.scrollHeight,
                    height = this.clientHeight;
    
                var delta = (event.originalEvent.wheelDelta) ? event.originalEvent.wheelDelta : -(event.originalEvent.detail || 0);        
    
                if ((delta > 0 && scrollTop <= delta) || (delta < 0 && scrollHeight - height - scrollTop <= -1 * delta)) {
                    // IE浏览器下滚动会跨越边界直接影响父级滚动，因此，临界时候手动边界滚动定位
                    this.scrollTop = delta > 0? 0: scrollHeight;
                    // 向上滚 || 向下滚
                    event.preventDefault();
                }        
            });
        });	
    };

    $('#toc-div').scrollUnique();

    var $itemHasChild = $("#toc-div .toc-item:has(> .toc-child)");
    var $titleHasChild = $itemHasChild.children(".toc-link");
    $itemHasChild.prepend("<i class='fa fa-caret-down'></i><i class='fa fa-caret-right'></i>");

    var clickIcon = function(){
        $("#toc-div .toc-item > i").click(function(){
            $(this).siblings(".toc-child").slideToggle(100);
            $(this).toggleClass("hide");
            $(this).siblings("i").toggleClass("hide");
        })
    }()

    var clickTitle = function(){
        $titleHasChild.dblclick(function(){
            $(this).siblings(".toc-child").hide(100);
            $(this).siblings("i").toggleClass("hide");
        })
        // After dblclick enent
        $titleHasChild.click(function(){
            var $curentTocChild = $(this).siblings(".toc-child");
            if ($curentTocChild.is(":hidden")) {
                $curentTocChild.show(100);
                $(this).siblings("i").toggleClass("hide");
            }
        })
    }()

    var clickTocTitle = function(){
        var $iconToExpand = $(".toc-item > .fa-caret-right");
        var $iconToFold = $(".toc-item > .fa-caret-down");
        var $subToc = $titleHasChild.next(".toc-child");
        $iconToExpand.addClass("hide");

        var $tocTitle = $("#toc-div .toc-title");
        if ($titleHasChild.length) {
            $tocTitle.addClass("clickable");
            $tocTitle.click(function(){
                if ($subToc.is(":hidden")) {
                    $subToc.show(150);
                    $iconToExpand.addClass("hide");
                    $iconToFold.removeClass("hide");
                } else {
                    $subToc.hide(100);
                    $iconToExpand.removeClass("hide");
                    $iconToFold.addClass("hide");
                }
            })
            // TOC on mobile
            if ($(".left-col").is(":hidden")) {
                $("#container .toc-article .toc").css("padding-left", "1.4em");
                $("#container .toc-article .toc-title").css("display", "initial");
            }
        }
    }()

    var TocNoWarp = function(cond){
        if (cond) {
            var $tocLink = $(".toc li a");
            $tocLink.each(function(){
                var title = $(this).find('.toc-text').text();
                // Find elements with ellipsis
                if (this.offsetWidth < this.scrollWidth) {
                    $(this).attr("title", title);
                    if (!!$().tooltip) { $(this).tooltip() }
                }
            })
            var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
            if (isSafari) {
                $("#toc-div .toc-item i").css("bottom", ".1em");
            }
        }
    }
    TocNoWarp(yiliaConfig.toc[2]);

})
