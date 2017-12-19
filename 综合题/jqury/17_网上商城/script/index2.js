/**
 * Created by ASUS-PC on 2017/12/9.
 */
// $(".color_change img").on("click",function(){
//    $(this).addClass("hover").parent().siblings().find("img").removeClass("hover")
$(".color_change img").on("click",function(){
  var $src = $(this).attr("src");
  var i = $src.indexOf(".");
  var $path = $src.substring(0,i);
  var $finally =$src.substring(i);

  $("#bigImg").attr("src",$path+"_one_small"+$finally);
    var $color = $path.replace('images/pro_img/','');
    $(".imgList li").addClass("hide");
    $(".imgList_"+$color).removeClass("hide")
    //'images/pro_img/green'  == >greenconsole.log(1)
})
// 放大镜
$(".imgList img").on("click",function() {
  var $src = $(this).attr("src");
  var i = $src.indexOf(".");
  var $path = $src.substring(0,i);
  var $finally = $src.substring(i);
  $("#bigImg").attr("src",$path+"_small"+$finally);
})