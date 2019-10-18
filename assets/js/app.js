// JQueryのみ
$(function(){
  // idを使うときは#
  $('#js-click-btn').on('click',function(){
    $(this).addClass('large-btn');
  });

  // js-hover-btn

  $('#js-hover-btn').on('mouseover',function(){
    $(this).addClass('opacity');
  }).on('mouseleave',function(){
    $(this).removeClass('opacity');
  })

  //要素の表示切り替え
  $('#js-show-btn').on('click',function(){
    $('#js-target-element').fadeIn(1000);
  });

  $('#js-hide-btn').on('click',function(){
    $('#js-target-element').fadeOut(5000);
  });

  // 要素の追加
  // 要素の前後（外）に追加
  $('#js-add-btn').on('click',function(){
    let beforerBtn = $('<li>')
    .addClass('btn')
    .text('ボタンの前に追加');
    let afterBtn = $('<li>')
    .addClass('btn')
    .text('ボタンの後ろに追加');
    // <li class="btn">ボタンの前に追加</li>
    $(this).before(beforerBtn);
    $(this).after(afterBtn);
  // $(this).before('<li class="btn">ボタンの前に追加</li>');
  // $(this).after('<li class="btn">ボタンの後ろに追加</li>');
  });
  // 要素の前後（中に）追加
  $('#js-add-btn2').on('click',function(){
    $(this).prepend('前');
    $(this).append('後');
  });

  // 宿題
  $('#pic-show').on('click',function(){
    $('#pic').fadeIn(1000);
  });

  $('#pic-hide').on('click',function(){
    $('#pic').fadeOut(5000);
  });

  // toggleメニュー
  $('.js-toggle').on('click',function(){
    $(this).toggleClass('on');
    $(this)
      .siblings()
      .slideToggle();
  });

// ハンバーガーメニュー
  $('.js-hamburger').on('click',function(){
    $(this).toggleClass('on');
  });

// スムーススクロール
$('.js-scroll').one('click',function(){
  $('body,html').animate({scrollTop:0}, 500);
});

// モーダル
$('.js-modal').on('click',function(){
  $('body').addClass('modal-open');
  $('.modal-content').fadeIn('slow');
  $('#modal-bg').fadeIn('slow');
});

$('.js-modal-close').on('click',function(){
  $('body').removeClass('modal-open');
  $('.modal-content').fadeOut(1000);
  $('#modal-bg').fadeOut(1000);
});

// タブメニュー
$('.tab-nav a').on('click',function(){
  if($(this).hasClass('active')){
    return false;
  }
  console.log(this.hash);

  $('.tab-nav a').removeClass('active');
  $(this).addClass('active');

  $('.tab-content > div').removeClass('active');
  $('.tab-content > div')
  .filter(this.hash)
  .addClass('active');

  return false;

})

  // 閉じタグ先
});