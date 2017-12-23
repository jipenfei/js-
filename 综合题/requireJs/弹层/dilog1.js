/**
 * Created by ASUS-PC on 2017/12/23.
 */
/**
 * Created by ASUS-PC on 2017/12/22.
 */
requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
define(["jquery"],function ($) {
    return{
        open:function(arg){
            this.value = {
                width:300,
                height:200
            }
            var value = $.extend(this.defaultValue,arg)
            // var html = '<div class = "mask">'+
            //     '<div class = "contain">'+
            //     '<div class="title">'+
            //     '<h2>aaa</h2>'+
            //     '<span class="close">x</span>'+
            //     '</div>'+
            //     '<div class="content">fffffff </div>'
            //     +'</div>'
            //     +'</div>';
                var $mask = $('<div class="mask"></div>');
                var $contain = $('<div class = "contain"></div>');
                var $title = $('<div class = "title"></div>');
                var $h2 = $('<h2></h2>');
                var $span = $('<span class = "close"></span>');
                var $content = $('<div class = "content"></div>');
                $contain.appendTo($mask).append($title).append($content)
                    .css({
                       width:value.width,
                        height:value.height,
                        marginLeft:-value.width/2,
                        marginTop:-value.height/2,
                })
               $title.append($h2).append($span).html(value.title);
                $content.html(value.content)
            $('body').append($mask);

            // $(".contain").css({
            //     width:value.width,
            //     height:value.height,
            //     marginLeft:-value.width/2,
            //     marginTop:-value.height/2,
            // })
            // $(".title").html(arg.title);
            // $(".content").html(arg.content)

        },
        close:function(){

        }

    }
})