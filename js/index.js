// スライダー設定
$(document).ready(function(){
    $(".content_top_slide").slick({
        accessibility: true,
        autoplay: true,
        dots: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplaySpeed: 3000,
        speed: 500,
        infinite: true,
        // pauseOnHover: false,
        // pauseOnDotsHover: true,
        cssEase: 'linear',
        fade: true,
        arrows: true,
        initialSlide: 0,
        // lazyLoad: 'ondemand',
        swipe: true,
        centerMode: true,
    });
});

// ヘッダの動き
$(".header_link").click(function(){
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false; 
});

// お問い合わせバリデーション
$("#contact_submit").click(function(){
    // バリデーションをクリア
    $("#error_email").empty();
    $("#error_name").empty();
    $("#error_company").empty();
    $("#error_content").empty();

    var email = $("#email").val();
    var name = $("#name").val();
    var company = $("#company").val();
    var content = $("#content").val();
    var error = {};
    // 必須チェック
    if (!email){
        error["email"] = "メールアドレスを入力してください";
    }
    if (!name) {
        error["name"] = "氏名を入力してください";
    }
    if (!company) {
        error["company"] = "会社名を入力してください";
    }
    if (!content) {
        error["content"] = "お問い合わせ内容を入力してください";
    }

    // メールアドレスの形式チェック
    var reg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
    if (!reg.test(email) && !error["email"]) {
        error["email"] = "正しいメールアドレスを入力してください";
    }

    // 入力エラーがある場合
    if (Object.keys(error).length) {
        if (error["email"]) {
            $("#error_email").append(error["email"]);
        }
        if (error["name"]) {
            $("#error_name").append(error["name"]);
        }
        if (error["company"]) {
            $("#error_company").append(error["company"]);
        }
        if (error["content"]) {
            $("#error_content").append(error["content"]);
        }
        return false;
    }
    return true;
});

// 資料請求バリデーション
$("#brochures_submit").click(function(){
    // バリデーションをクリア
    $("#error__email").empty();
    $("#error__name").empty();

    var email = $("#_email").val();
    var name = $("#_name").val();
    var error = {};

    // 必須チェック
    if (!email) {
        error["email"] = "メールアドレスを入力してください";
    }
    if (!name) {
        error["name"] = "氏名を入力してください";
    }
    // メールアドレスの形式チェック
    var reg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
    if (!reg.test(email) && !error["email"]) {
        error["email"] = "正しいメールアドレスを入力してください";
    }
    // 入力エラーがある場合
    if (Object.keys(error).length) {
        if (error["email"]) {
            $("#error__email").append(error["email"]);
        }
        if (error["name"]) {
            $("#error__name").append(error["name"]);
        }
        return false;
    }
    return true;
});
