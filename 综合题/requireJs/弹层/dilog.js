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
        open:function(){
          var html = '<div class = "mask">'+
              '<div class = "contain">'+
                  '<div class="title">'+
                      '<h2>aaa</h2>'+
                      '<span class="close">x</span>'+
                  '</div>'+
                  '<div class="content">fffffff </div>'
              +'</div>'
         +'</div>';
          $("body").append(html)
        },
        close:function(){

        }

    }
})