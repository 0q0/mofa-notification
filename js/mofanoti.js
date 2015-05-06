$(function() {

    var notify  = $(".triangle-up, .notify-box");
    var exclude = $(".triangle-up, .notify-box, .notify-link");

    $(".notify-link").click(function() {

        notify.fadeToggle(100);

        //显示滚动条
        $('.notify-body').mofabar({
            padding: 23,
            initialDisplay: true
        });

        //隐藏通知数
        $('.notify-num').fadeOut(300);

        // Mofafix.js
        $('.notify-content').mofafix();

    });

    //点击通知面板外面时也将关闭面板
    $(document).mouseup(function (e) {
    
        if (!exclude.is(e.target) //如果点击的不是面板本身和通知按钮...
            && exclude.has(e.target).length === 0) //...也不是面板的后代元素
        {
            notify.hide(); //就关闭面板
        }

    });

});