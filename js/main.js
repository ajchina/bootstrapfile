/*creat by anjin */

//轮播图自适应
$(function () {
    function resize() {
        var windowWidth = $(window).width(); //获取屏幕的宽度
        //进行判断
        var SmallScreen = windowWidth <768;
        $('#main_ad > .carousel-inner > .item').each(function (i,item){
            var $item = $(item);
            var imgSrc = $item.data(SmallScreen ? 'images-xs' : 'images-lg');
            $item.css('backgroundImage','url("'+imgSrc+'")');
            if (SmallScreen) {
                $item.html('<img src="'+imgSrc+'" alt=""/>');
            } else {
                $item.empty();
            }
        })
    }
    $(window).on('resize',resize).trigger('resize');
});
