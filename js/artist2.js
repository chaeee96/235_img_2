
      //  아티스트 디테일 페이지 


      $('button.next-btn').click(function(){


        var indexNo = $('.artist-img-box .on').index();
        
        console.log(indexNo);
        
        move(indexNo);
       
      });
      
      
      
      
      function move(indexNo){
       
        
        let onNo =  indexNo + 1;
        
        if(onNo < 0){
          onNo = 12;
        } 
        else if (onNo > 12){
          onNo = 0;
        }
        
        console.log(onNo);
        
         $(".artist-img-box>div").eq(onNo).addClass('on').siblings().removeClass('on');
       
        
      }
      
       
      
      