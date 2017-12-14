/**
 * Created by ASUS-PC on 2017/12/10.
 */
requirejs.config({
    path:{
        jquery:"jquery-1.12.4"
    }
})
require(["jquery","dialog"],function($,dialog){
    $("#btn").on("click",function(){
        dialog.open()
    })
})