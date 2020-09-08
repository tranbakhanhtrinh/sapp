$(function () {
    $('.lazy').Lazy();
    $('#khuvuc').select2();
    $('#khuvuc_ft').select2();
    $('body').on('click', '.page-scroll a', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 70
        }, 600);
        event.preventDefault();
    });
    if ($(window).width() < 768) {
        $(".navbar-light .nav-link").on('click', function () {
            $(".navbar-toggler").click();
        })
    }
    $(".btn_top").on('click', function () {
        $('html, body').animate({
            scrollTop: $('#trangchu').offset().top - 80
        }, 600);
    });
    $(".uudai__btnDk_js").on('click', function () {
        $('html, body').animate({
            scrollTop: $('#trangchu').offset().top - 80
        }, 600);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() >= window.innerHeight) {
            $(".btn_top").fadeIn();
        }
        else $(".btn_top").fadeOut();
    });

    $('.benefits').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '20px',
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 360,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.doingu').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 5,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 360,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    dots: true,
                }
            }
        ]
    });

    $('.camnhan-hocvien').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 360,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    dots: true,
                }
            }
        ]
    });
})

function isValidEmail(emailText) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailText);
};

function checkPhoneNumber() {
    var flag = false;
    var phone = $('#phone').val().trim(); // ID của trường Số điện thoại
    phone = phone.replace('(+84)', '0');
    phone = phone.replace('+84', '0');
    phone = phone.replace('0084', '0');
    phone = phone.replace(/ /g, '');
    if (phone != '') {
        var firstNumber = phone.substring(0, 2);
        if ((firstNumber == '09' || firstNumber == '08' || firstNumber == '03' || firstNumber == '05' || firstNumber == '07') && phone.length == 10) {
            if (phone.match(/^\d{10}/)) {
                flag = true;
            }
        }
    }
    return flag;
}

function checkPhoneNumber_ft() {
    var flag = false;
    var phone = $('#phone_ft').val().trim(); // ID của trường Số điện thoại
    phone = phone.replace('(+84)', '0');
    phone = phone.replace('+84', '0');
    phone = phone.replace('0084', '0');
    phone = phone.replace(/ /g, '');
    if (phone != '') {
        var firstNumber = phone.substring(0, 2);
        if ((firstNumber == '09' || firstNumber == '08' || firstNumber == '03' || firstNumber == '05' || firstNumber == '07') && phone.length == 10) {
            if (phone.match(/^\d{10}/)) {
                flag = true;
            }
        }
    }
    return flag;
}


function kiemtra() {
    if ($('#fullname').val() == "") {
        alert("Vui lòng nhập Họ tên!");
        $('#fullname').focus();
    }
    else if (!checkPhoneNumber()) {
        alert("Số điện thoại bạn điền không hợp lệ !");
        $('#phone').focus();
        return false;
    }
    // else if (!isValidEmail($('#email').val())) {
    //     alert("Email bạn điền không hợp lệ !");
    //     $('#email').focus();
    //     return false;
    // }
    else if ($('#khuvuc').val() == "") {
        alert("Vui lòng chọn Khu vực !");
        $('#khuvuc').focus();
        return false;
    }
    else {
        const phone = $('#phone').val();
        const fullname = $('#fullname').val();
        const email = $('#email').val();
        const khuvuc = $('#khuvuc').val();
        const form_header = $('#form_header').val();
        $(".field_register_header").attr('disabled', 'disabled');
        $.ajax({
            type: "POST",
            url: "api/register.php",
            data: { fullname: fullname, email: email, phone: phone, khuvuc: khuvuc, form: form_header },
            success: function (data) {
                data = JSON.parse(data);
                if (data.result === "0") {
                    alert("Bạn đã đăng ký rồi");
                }
                else {
                    window.location.href = "thanks.html";
                }
            }
        });
    }
}
function kiemtra_ft() {
    if ($('#fullname_ft').val() == "") {
        alert("Vui lòng nhập Họ tên!");
        $('#fullname_ft').focus();
    }
    else if (!checkPhoneNumber_ft()) {
        alert("Số điện thoại bạn điền không hợp lệ !");
        $('#phone_ft').focus();
        return false;
    }
    // else if (!isValidEmail($('#email_ft').val())) {
    //     alert("Email bạn điền không hợp lệ !");
    //     $('#email_ft').focus();
    //     return false;
    // }
    else if ($('#khuvuc_ft').val() == "") {
        alert("Vui lòng chọn Khu vực !");
        $('#khuvuc_ft').focus();
        return false;
    }
    else {
        const phone = $('#phone_ft').val();
        const fullname = $('#fullname_ft').val();
        const email = $('#email_ft').val();
        const khuvuc = $('#khuvuc_ft').val();
        const form_footer = $('#form_footer').val();
        $(".field_register_footer").attr('disabled', 'disabled');
        $.ajax({
            type: "POST",
            url: "api/register.php",
            data: { fullname: fullname, email: email, phone: phone, khuvuc: khuvuc, form: form_footer },
            success: function (data) {
                data = JSON.parse(data);
                if (data.result === "0") {
                    alert("Bạn đã đăng ký rồi");
                }
                else {
                    window.location.href = "thanks.html";
                }
            }
        });
    }
}

