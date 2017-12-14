require.config({
    paths:{
        jQuery:
    }
})
define(["jquery"],function($){
    return {
        open:function(){
            this.defaultValue = {
                width:300;
                height:200
            }
        }
    }
})