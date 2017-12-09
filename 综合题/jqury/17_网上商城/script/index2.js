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
  $("#bigImg").attr("src",$path+"_one_small"+$finally)

})