$('.menuWrapper').on('click',function(){
  let text = 'menu';
  if($(this).hasClass('on')){
    text= 'menu';
  }else{
    text= 'close';
  }
  $(this).toggleClass('on').find('.menuBtn').text(text);
});