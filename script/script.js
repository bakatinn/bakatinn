$(function(){
    $('#hide-wrapper').hide();
    setTimeout(function(){
        $('#hide-wrapper').fadeIn();
    },2350);

    setTimeout(function(){
        $('#home-name').css('transform','translateY(0)');
    },2500);

    setTimeout(function(){
        $('#about-title').removeClass('endAnime');
    },2351);

    function headerClose(){
        if($('#mobile-header').hasClass('hide')){
            $('#mobile-header').slideDown(500).toggleClass('show').toggleClass('hide');
        }else{
            $('#mobile-header').slideUp(500).toggleClass('show').toggleClass('hide');
        };
    };

    $('.openbtn').click(function(){
        $(this).toggleClass('active');
        headerClose();
    });

    $('.mobile-header-link').click(function(){
        headerClose();
    });

    $('.mobile-header-link').click(function(){
        $('.mobile-header').hide().addClass('hide').removeClass('show');
        $('.openbtn').removeClass('active');
    });

    $('html,body').animate({ scrollTop: 0 }, '1');

});

//JS

//テキストのカウントアップ+バーの設定
var bar = new ProgressBar.Line(splash_text, {//id名を指定
	easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
	duration: 750,//時間指定(1000＝1秒)
	strokeWidth: 0.2,//進捗ゲージの太さ
	color: '#2a9d8f',//進捗ゲージのカラー
	trailWidth: 0.2,//ゲージベースの線の太さ
	trailColor: '#264653',//ゲージベースの線のカラー
	text: {//テキストの形状を直接指定				
		style: {//天地中央に配置
			position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '-30px 0 0 0',//バーより上に配置
			transform:'translate(-50%,-50%)',
			'font-size':'1rem',
			color: '#fff',
		},
		autoStyleContainer: false //自動付与のスタイルを切る
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
	}
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
	$("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
});  



$(window).on('load',function(){
    
    //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    $("#splash").delay(700).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
    
    $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
    
    });
    //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    
    //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
    $('.splashbg').on('animationend', function() { 
    //この中に動かしたいJSを記載
    });
    //=====ここまで背景が伸びた後に動かしたいJSをまとめる
    
    });


    $('a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
        var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
        let wW = $(window).width();
        if(wW <= 1100){
            var pos = $(elmHash).offset().top-60;
        }else{
            var pos = $(elmHash).offset().top-70;
        };
        $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
        return false;
    });

