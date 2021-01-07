$(function(){
   
   $(".btn").click(function(){
         var bien= function(){
         // $(".list").hide();
         var b= $(".list li").last();
         $(".list ").prepend(b);
         }
         
         setInterval(bien,1000);
        
            // for( var i=0;i<10;i++){
            //    $('ul li:eq('+ i +')').hide(5000);
                  
            
            //   }
      
 
});
});