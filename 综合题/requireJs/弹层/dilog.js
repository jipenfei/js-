// /**
//  * Created by ASUS-PC on 2017/12/22.
//  */
// requirejs.config({
//     paths: {
//         jquery: 'jquery-1.12.4'
//     }
// });
// define(["jquery"],function ($) {
//     return{
//         open:function(arg){
//             this.defaultValue = {
//                 width:300,
//                 height:200
//             }
//
//           var html = '<div class = "mask">'+
//               '<div class = "contain">'+
//                   '<div class="title">'+
//                       '<h2>aaa</h2>'+
//                       '<span class="close">x</span>'+
//                   '</div>'+
//                   '<div class="content">fffffff </div>'
//               +'</div>'
//          +'</div>';
//           $("body").append(html);
//           var value = $.extend(this.defaultValue,arg)
//             $(".contain").css({
//                 width:value.width,
//                 height:value.height,
//                 marginLeft:-value.width/2,
//                 marginTop:-value.height/2,
//             })
//             $(".title").html(arg.title);
//             $(".content").html(arg.content)
//
//         },
//         close:function(){
//
//         }
//
//     }
// })