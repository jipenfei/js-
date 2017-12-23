/**
 * Created by ASUS-PC on 2017/12/22.
 */
requirejs.config({

    paths: {
        jquery: 'jquery-1.12.4'
    }
});
require(['jquery','dilog1'],function($,dilog){
    $("#btn").on("click",function(){
      dilog.open({
          width:800,
          title:"bbb",
          content:"ssss"
      })
       })
})