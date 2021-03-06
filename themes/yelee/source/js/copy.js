//此函数用于创建复制按钮
function createCopyBtns() {
    var $codeArea = $("figure table");
    //查看页面是否具有代码区域，没有代码块则不创建复制按钮
    if ($codeArea.length > 0) {
        //复制成功后将要干的事情
        function changeToSuccess(item) {
            // console.log(item);
            swal({   
                title: "",   
                text: '复制成功',  
                type: 'success',
                html: false,
                timer: 1000,   
                showConfirmButton: false
            });
        };
        //创建 全局复制按钮，仅有一组。包含：复制按钮，复制成功响应按钮
        //值得注意的是：1.按钮默认隐藏，2.位置使用绝对位置 position: absolute; (position: fixed 也可以，需要修改代码)
        $(".article-entry").before('<div id="copyBtn" style="cursor:pointer;position:absolute;top:0px;display:none;line-height: 1; font-size:1.5em"><span id="imgCopy"><i class="fa fa-paste fa-fw fa-inverse"></i></span></div>');
        //创建 复制 插件，绑定单机时间到 指定元素，支持JQuery
        var clipboard = new Clipboard('#copyBtn', {
            target: function() {
                //返回需要复制的元素内容
                return document.querySelector("[copyFlag]");
            },
            isSupported: function() {
                //支持复制内容
                return document.querySelector("[copyFlag]");
            }
        });
        //复制成功事件绑定
        clipboard.on('success',
            function(e) {
                //清除内容被选择状态
                e.clearSelection();
                changeToSuccess(e);
            });
        //复制失败绑定事件
        clipboard.on('error',
            function(e) {
                console.error('Action:', e.action);
                console.error('Trigger:', e.trigger);
            });
        $("#copyBtn").hover(
            function() {
                $("#copyBtn").css("display", "block");
            },
            function() {
                $("#copyBtn").css("display", "none");
            }
        );
    }
}
//感应鼠标是否在代码区
$("figure").hover(
    function(e) {
        //-------鼠标活动在代码块内
        //移除之前含有复制标志代码块的 copyFlag
        $("[copyFlag]").removeAttr("copyFlag");
        //在新的（当前鼠标所在代码区）代码块插入标志：copyFlag
        $(this).find(".code").attr("copyFlag", 1);
        //获取复制按钮
        $copyBtn = $("#copyBtn");
        // debugger
        if ($copyBtn.lenght != 0) {
            //获取到按钮的前提下进行一下操作
            //停止按钮动画效果
            //设置为 显示状态
            //修改 复制按钮 位置到 当前代码块开始部位
            //设置代码块 左侧位置
            $copyBtn.css("display", "block");
            $copyBtn.css("top", parseInt($copyBtn.css("top")) + $(this).offset().top - $copyBtn.offset().top + 8);
            $copyBtn.css("right", $copyBtn.width() + 5);
        }
    }, function(e){
        $("#copyBtn").css("display", "none");
    }
);

//页面载入完成后，创建复制按钮
$(document).ready(function() {
    createCopyBtns();
});