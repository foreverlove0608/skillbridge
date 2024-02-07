/*----------------------------------------
	Header
----------------------------------------*/
$('.main-header__mobile-icon').on('click', function () {
	$(this).toggleClass("mobile-close");
	$(".main-header__navGlobal").fadeToggle(300).toggleClass("is-show");
	$('html').toggleClass('js-locked');
});


$(window).scroll(function() {
	if ($(this).scrollTop() > 0) {
		$('.main-header').addClass('is-active');
	} else {
		$('.main-header').removeClass('is-active');
	}
});



/*----------------------------------------
	Size
----------------------------------------*/

// object fit
$(function () {
	objectFitImages('.u-img-of');
});


// matchHeight
jQuery(function ($) {
	$('.mh').matchHeight();
	$(window).on("load resize", function () {
		$('.mh-child').matchHeight();
	});
});



/*----------------------------------------
	Common Utility
----------------------------------------*/

// Top page ページ読み込み後のクラス付与
$(window).on('load',function() {
	setTimeout(function(){
		$('.top-mainvisual').addClass('is-active');
	},1000);
});


// Scroll animation
$(function(){
	$(window).scroll(function (){
		$('.js-scrollin').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('is-visible');
			}
		});
	});
});


// Smooth Scroll
var headerHeight = $('#main-header').outerHeight();
	
var urlHash = location.hash;
if(urlHash) {
	$('body,html').stop().scrollTop(0);
	setTimeout(function(){
		var target = $(urlHash);
		var position = target.offset().top - headerHeight;
		$('body,html').stop().animate({scrollTop:position}, 500);
	}, 100);
}

$(function(){
	$('a[href*="#"], area[href*="#"]').not(".noScroll").click(function() {
		var speed = 400,
			href = $(this).prop("href"),
			hrefPageUrl = href.split("#")[0],
			currentUrl = location.href,
			currentUrl = currentUrl.split("#")[0];

		if(hrefPageUrl == currentUrl){

			href = href.split("#");
			href = href.pop();
			href = "#" + href;

			var target = $(href == "#" || href == "" ? 'html' : href),
				position = target.offset().top - headerHeight;
			   $('body,html').stop().animate({scrollTop:position}, 500);
			return false;
		}

	});
});


//Footer fixed button
$(function() {
	var btn = $('.js-contact');
	$(window).on('load scroll', function(){
		if($(this).scrollTop() > 200) {
			btn.addClass('is-show');
		}else{
			btn.removeClass('is-show');
		}
	});
  
  $(window).on('load scroll', function(){
	  var height = $(document).height(),
		  position = window.innerHeight + $(window).scrollTop(),
		  footer = $(".main-footer").height();
	  if ( height - position  < footer ){ 
	  	btn.addClass('absolute');
	  } else { 
	  	btn.removeClass('absolute');
	  }
  });  
});


/*----------------------------------------
	Pages
----------------------------------------*/
$(".toggle-pass").click(function() {

	var input = $($(this).attr("toggle"));
	if (input.attr("type") == "password") {
	  input.attr("type", "text");
	} else {
	  input.attr("type", "password");
	}
  });

$(".js-close-alert").click(function () {
	$(this).parent().fadeOut(300);
});

$(".js-alert").click(function (e) {
	e.preventDefault()();
	$('.alert-success').fadeIn(300);
});

$('.js-login').click(function (e) {
	e.preventDefault();
	$('.c-modal').removeClass('is-show');
	$('#login').addClass('is-show');
});


$('.js-notyfi-login').click(function (e) {
	e.preventDefault();
	$('.c-modal').removeClass('is-show');
	$('#notyfication-login').addClass('is-show');
});

$('.js-login-success').click(function (e) {
	e.preventDefault();
	$('.c-modal').removeClass('is-show');
	$('#login-success').addClass('is-show');
});

$('.js-forgetpass').click(function (e) {
	e.preventDefault();
	$('.c-modal').removeClass('is-show');
	$('#forget-pass').addClass('is-show');
});

$('.js-register').click(function (e) {
	e.preventDefault();
	$('.c-modal').removeClass('is-show');
	$('#register').addClass('is-show');
});

$('.js-logout').click(function (e) {
	e.preventDefault();
	$('#logout').addClass('is-show');
});

$('.js-changepass').click(function (e) {
	e.preventDefault();
	$('#changepass-success').addClass('is-show');
});

$('.js-fillter').click(function (e) {
	e.preventDefault();
	$('#fillter').addClass('is-show');
});

$('.js-skills-register').click(function (e) {
	e.preventDefault();
	$('#register-skill').addClass('is-show');
});

$('.js-qualifications').click(function (e) {
	e.preventDefault();
	var id = $(this).attr('data-id');
	$('#qualifications').attr('data-modal', id);
	$('#qualifications').addClass('is-show');



});

$('.js-cancel').click(function (e) {
	e.preventDefault();
	$(this).closest('.c-modal').removeClass('is-show');
});

$('.c-modal__btn-close').click(function (e) {
	e.preventDefault();
	$('.c-modal').removeClass('is-show');
});

$('.js-close-modal').click(function (e) {
	e.preventDefault();
	$('.c-modal').removeClass('is-show');
});

$('.js-tooltip').on( "mouseenter", function() {
	$(this).closest('.form-group').addClass('is-show');
});

$('.js-tooltip').on( "mouseleave", function() {
	$(this).closest('.form-group').removeClass('is-show');
});


$('.js-tabs li a').click(function(e){
	e.preventDefault();
	var tab_id = $(this).attr('data-tab');

	$('.js-tabs li').removeClass('is-active');
	$('.tabs-content').removeClass('current');

	$(this).parent().addClass('is-active');
	$("#"+tab_id).addClass('current');
});

$('.tabs-content input').each(function () {
	$(this).change(function () {
		let val_checkbox = $(this).val();

		//add item select while input check is checked
		if($(this).prop('checked')){
			$('.box-selected__result').append("<li class=" + val_checkbox + "><span class='txt-val'>" + val_checkbox + "</span><span class='btn-detete-selected'></span></li>");
		}else{
			$('.box-selected__result li').each(function () {
				let txt_val = $(this).find('.txt-val').text();
				if(val_checkbox == txt_val){
					$('.' + val_checkbox).hide();
				}
			})

			// $('.box-filter__label .form-control li').each(function () {
			// 	let txt_val = $(this).find('.txt-val').text();
			// 	if(val_checkbox == txt_val){
			// 		$('.' + val_checkbox).hide();
			// 	}
			// })
		}


		//cout item selected
		updateTotal();


		//delete only item white click 
		$('.btn-detete-selected').click(function () {
			var _this = $(this).parent().attr('class');
			console.log($("." + _this).html());
			$("." + _this).hide();
			let data_checkbox = $(this).prev().text();
			// console.log(data_checkbox);
			$('.tabs-content input').each(function () {
				let val_checkbox = $(this).val();
				if(data_checkbox == val_checkbox){
					$(this).prop('checked', false);
					updateTotal();
				}
			})
		})
	})
});


//update skills selected on input
$('.js-submit-skills').click(function (e) {
	e.preventDefault();
	$('.tabs-content input').each(function () {
		if ($(this).prop('checked')) {
			$('#register-form__list-skills').val($(this).val());
		}
	})
	$('.c-modal').removeClass('is-show');
})


$('.txt-delete-all').click(function (e) {
	e.preventDefault();
	$('.box-selected__result li').hide();
	$('.box-selected__heading .qty').html('(0)');
	$('.tabs-content input').prop('checked', false);
})


$('.btn-delete-skills-after').click(function () {
	$('#fillter').hide();
	$(this).parent().hide();
})

function updateTotal() {
	let count = 0;
	let checkbox_el = $('.tabs-content input');
	for (let i = 0; i < checkbox_el.length; i++) {
		if (checkbox_el[i].checked === true) {
			count++;
		}
	}

	$('.box-selected__heading .qty').html('('+count+')');
}

$('.fillter-acc__label').click(function () {
	$(this).next().slideToggle();
	$(this).parent().toggleClass('is-active');
})


$('.acc-skills__dt').click(function () {
	$(this).next().slideToggle(100);
	$(this).parent().toggleClass('is-active');
})


var skill_template = `<div class="form-grid form-grid--styles02">
											<dl class="form-group">
												<dt class="form-group__label">資格証明書</dt>
												<dd class="form-group__input">
													<a href="" class="txt-link js-qualifications">参考</a>
													<input type="text" class="form-control" placeholder="基本情報技術者">
												</dd>
											</dl>
											<dl class="form-group">
												<dt class="form-group__label">取得日</dt>
												<dd class="form-group__input">
													<input type="text" placeholder="2021年06月" class="form-control form-control--date">
												</dd>
											</dl>
											<a href="" class="box-project__close"><img src="../img/common/close-circle-red.png" alt="" width="24"></a>
										</div>`;

$('.box-project__close').click(function (e) {
	e.preventDefault();
	$(this).parent().remove();
})


var id = 2;
$('.js-add-qualifications').click(function () {
	// $(this).parent().append(skill_template);
	id++;
	$(this).before( `<div class="form-grid form-grid--styles02">
	<dl class="form-group">
		<dt class="form-group__label">資格証明書</dt>
		<dd class="form-group__input">
			<a href="" class="txt-link js-qualifications" data-id="`+ id +`">参考</a>
			<input type="text" class="form-control" placeholder="基本情報技術者" id="`+ id +`">
		</dd>
	</dl>
	<dl class="form-group">
		<dt class="form-group__label">取得日</dt>
		<dd class="form-group__input">
			<input type="text" placeholder="2021年06月" class="form-control form-control--date">
		</dd>
	</dl>
	<a href="" class="box-project__close"><img src="../img/common/close-circle-red.png" alt="" width="24"></a>
</div>` );
	$('.box-project__close').click(function (e) {
		e.preventDefault();
		$(this).parent().remove();
	})
	$('.js-qualifications').click(function (e) {
		e.preventDefault();
		var id = $(this).attr('data-id');
		$('#qualifications').attr('data-modal', id);
		$('#qualifications').addClass('is-show');
	});
})


$('.js-submit-qualifications').click(function (e) {
	e.preventDefault();
	var data_modal = $(this).closest('.c-modal').attr('data-modal');
	console.log(data_modal);
	$('.qualifications-content__wp input').each(function () {
		if ($(this).prop('checked')) {
			$('#' + data_modal).val($(this).val());
		}
	})
	$('.c-modal').removeClass('is-show');
})

// $('.js-submit-skills').click(function (e) {
// 	e.preventDefault();
// 	$('.tabs-content input').each(function () {
// 		if ($(this).prop('checked')) {
// 			$('#register-form__list-skills').val($(this).val());
// 		}
// 	})
// 	$('.c-modal').removeClass('is-show');
// })


jQuery(function() {
	jQuery('#datepicker01').datepicker({
		dateFormat: 'yy年mm月dd日',
		minDate: 0,
		firstDay: 1,
		showOtherMonths: true,
      selectOtherMonths: true
	});
	jQuery('#datepicker02').datepicker({
		dateFormat: 'yy年mm月dd日',
		minDate: 0,
		firstDay: 1,
		showOtherMonths: true,
      selectOtherMonths: true
	});
});