/**
 * Created by ASUS-PC on 2017/12/22.
 */
requirejs.config({

    paths: {
        jquery: 'jquery-1.12.4'
    }
});
require(['jquery','dilog'],function($,dilog){
    $("#btn").on("click",function(){
      dilog.open()
       })
})