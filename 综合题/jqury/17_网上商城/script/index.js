var prevIdx = 0;
var timer;
$("#jnBtn a").on("mouseover",function () {
    $this = $(this);
    $(this).addClass("chos").siblings().removeClass("chos");
    if($this.index() > prevIdx){
        $("#JS_imgWrap img").eq($(this).index()).show().siblings().hide();
    }else{
        $("#JS_imgWrap img").eq($this.index()).stop().fadeIn().siblings().stop().fadeOut();
    }
    prevIdx = $this.index();

    // $("#JS_imgWrap img").eq($(this).index()).fadeIn().siblings().fadeOut();
})

run()
function run() {
    timer =setInterval(function dd() {
        prevIdx++;
        if(prevIdx == $("#JS_imgWrap img").length){
            prevIdx = 0;

        }
        $("#jnBtn a").eq(prevIdx).triggerHandler("mouseover");
        console.log(prevIdx)
    },1000);
}

$("#jnImageroll").on("mouseover",function () {
    clearInterval(timer)
}).on("mouseout",function () {
    run()
})
// $("#JS_imgWrap a").eq(0).trigger("mouseover")