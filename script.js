


// これ何？
// $(function () {

// 	$('.container > div').addClass('myStyle');
// });
// 




$(function(){
	$('a[href^=#]').click(function(){  //+ 'a:not([href *= "sec1"])' + 'a:not([href*="sec2"])'
	var adjust = 0;
	var speed = 400;
	var href= $(this).attr("href");
	var target = $(href == "#" || href == "" ? 'html' : href);
	var position = target.offset().top + adjust;
	$('body,html').animate({scrollTop:position}, speed, 'swing');
	return false;
});
});

// $(function(){
// 	// 全てのアンカータグを対象にする
// 	$('a').click(function(e){
// 	var anchor = $(this),
// 	href = anchor.attr('href'),
// 	pagename = window.location.href;
// 	// 現在のurlのハッシュ以降を削除
// 	pagename = pagename.replace(/#.*/,'');
// 	// リンク先のurlから現在の表示中のurlを削除
// 	href = href.replace( pagename , '' );
// 	if( href.search(/^#/) &gt;= 0 ){
// 	// 整形したリンクがページ内リンクの場合はページ無いスクロールの対象とする
// 	// 通常の遷移処理をキャンセル
// 	e.preventDefault();
// 	var speed = 500;
// 	// 前段階で整形したhrefを使用する
// 	// var href= $(this).attr("href");
// 	var target = $(href == "#" || href == "" ? 'html' : href);
// 	var position = target.offset().top;
// 	$("html, body").animate({scrollTop:position}, speed, "swing");
// 	// ロケーションバーの内容を書き換え
// 	location.hash = href ;
// 	return false;
// 	}
// 	});
// 	});


// $(function(){
// 	// #で始まるアンカーをクリックした場合に処理
// 	$('a[href^=#]').click(function() {
// 		 // スクロールの速度
// 		 var speed = 400; // ミリ秒
// 		 // アンカーの値取得
// 		 var href= $(this).attr("href");
// 		 // 移動先を取得
// 		 var target = $(href == "#" || href == "" ? 'html' : href);
// 		 // 移動先を数値で取得
// 		 var position = target.offset().top;
// 		 // スムーススクロール
// 		 $('body,html').animate({scrollTop:position}, speed, 'swing');
// 		 return false;
// 	});
// });
