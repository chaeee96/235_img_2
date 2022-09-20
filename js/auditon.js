var idx_lgth = $(".img-box>div").length;


console.log(idx_lgth);
  var srt = 0;
  var idx = 0;
  
var AutoSlide = setInterval(AutoRun, 4500);

function AutoRun(){
  srt++;  
  
  if(srt == idx_lgth){
      srt = 0;  
  }

  $(".img-box>div").eq(srt).addClass('on').siblings().removeClass('on');
  

 
}

var clickcount = 0;

document.getElementById("menu-btn-click").onclick = function() {
  
  if(clickcount == 0){
     
     $('.mobile-menu-btn').css('-ms-transform', ' rotate(45deg)');
    $('.mobile-menu-btn').css('-webkit-transform', ' rotate(45deg)');
     $('.mobile-menu-btn').css('transform', ' rotate(45deg)');
    
     
   $('.mobile-menu-txt-box').css('right', '0');
    
     clickcount = 1;
  }
  else{
      $('.mobile-menu-btn').css('-ms-transform', ' rotate(90deg)');
    $('.mobile-menu-btn').css('-webkit-transform', ' rotate(90deg)');
     $('.mobile-menu-btn').css('transform', ' rotate(90deg)');
    $('.mobile-menu-txt-box').css('right', '-100%');
     clickcount = 0;
  }
   
  
  
  
  
  
 
    return false;
  
  
};
