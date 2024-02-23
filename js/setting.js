"use strict";function updateTotal(){for(var t=0,l=$(".tabs-content input"),e=0;e<l.length;e++)!0===l[e].checked&&t++;$(".box-selected__heading .qty").html("("+t+")")}$(".main-header__mobile-icon").on("click",(function(){$(this).toggleClass("mobile-close"),$(".main-header__navGlobal").fadeToggle(300).toggleClass("is-show"),$("html").toggleClass("js-locked")})),$(window).scroll((function(){$(this).scrollTop()>0?$(".main-header").addClass("is-active"):$(".main-header").removeClass("is-active")})),$(".toggle-pass").click((function(){var t=$($(this).attr("toggle"));"password"==t.attr("type")?t.attr("type","text"):t.attr("type","password")})),$(".js-close-alert").click((function(){$(this).parent().fadeOut(300)})),$(".js-alert").click((function(t){t.preventDefault()(),$(".alert-success").fadeIn(300)})),$(".js-show-modal").click((function(t){t.preventDefault();var l=$(this).attr("data-modal");$(".c-modal").removeClass("is-show"),$("#"+l).addClass("is-show")})),$(".js-cancel").click((function(t){t.preventDefault(),$(this).closest(".c-modal").removeClass("is-show")})),$(".js-qualifications").click((function(t){t.preventDefault();var l=$(this).attr("data-id");$("#qualifications").attr("data-modal",l),$("#qualifications").addClass("is-show")})),$(".js-tooltip").on("mouseenter",(function(){$(this).closest(".form-group").addClass("is-show")})),$(".js-tooltip").on("mouseleave",(function(){$(this).closest(".form-group").removeClass("is-show")})),$(".js-tabs li a").click((function(t){t.preventDefault();var l=$(this).attr("data-tab");$(".js-tabs li").removeClass("is-active"),$(".tabs-content").removeClass("current"),$(this).parent().addClass("is-active"),$("#"+l).addClass("current")})),$(".tabs-content input").each((function(){$(this).change((function(){var t=$(this).val();$(this).prop("checked")?$(".box-selected__result").append("<li class="+t+"><span class='txt-val'>"+t+"</span><span class='btn-detete-selected'></span></li>"):$(".box-selected__result li").each((function(){var l=$(this).find(".txt-val").text();t==l&&$("."+t).hide()})),updateTotal(),$(".btn-detete-selected").click((function(){var t=$(this).parent().attr("class");console.log($("."+t).html()),$("."+t).hide();var l=$(this).prev().text();$(".tabs-content input").each((function(){var t=$(this).val();l==t&&($(this).prop("checked",!1),updateTotal())}))}))}))})),$(".js-submit-skills").click((function(t){t.preventDefault(),$(".tabs-content input").each((function(){$(this).prop("checked")&&$("#register-form__list-skills").val($(this).val())})),$(".c-modal").removeClass("is-show")})),$(".txt-delete-all").click((function(t){t.preventDefault(),$(".box-selected__result li").hide(),$(".box-selected__heading .qty").html("(0)"),$(".tabs-content input").prop("checked",!1)})),$(".btn-delete-skills-after").click((function(){$("#fillter").hide(),$(this).parent().hide()})),$(".fillter-acc__label").click((function(){$(this).next().slideToggle(),$(this).parent().toggleClass("is-active")})),$(".acc-skills__dt").click((function(){$(this).next().slideToggle(100),$(this).parent().toggleClass("is-active")}));var skill_template='<div class="form-grid form-grid--styles02">\n\t\t\t\t\t\t\t\t\t\t\t<dl class="form-group">\n\t\t\t\t\t\t\t\t\t\t\t\t<dt class="form-group__label">資格証明書</dt>\n\t\t\t\t\t\t\t\t\t\t\t\t<dd class="form-group__input">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="" class="txt-link js-qualifications">参考</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" placeholder="基本情報技術者">\n\t\t\t\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t\t\t\t\t\t</dl>\n\t\t\t\t\t\t\t\t\t\t\t<dl class="form-group">\n\t\t\t\t\t\t\t\t\t\t\t\t<dt class="form-group__label">取得日</dt>\n\t\t\t\t\t\t\t\t\t\t\t\t<dd class="form-group__input">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" placeholder="2021年06月" class="form-control form-control--date">\n\t\t\t\t\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t\t\t\t\t\t</dl>\n\t\t\t\t\t\t\t\t\t\t\t<a href="" class="box-project__close"><img src="../img/common/close-circle-red.png" alt="" width="24"></a>\n\t\t\t\t\t\t\t\t\t\t</div>',project='<div class="box-project">\n<a href="" class="box-project__close"><img src="../img/common/close-circle-red.png" alt="" width="24"></a>\n<div class="form-grid">\n\t<dl class="form-group form-group--full">\n\t\t<dt class="form-group__label">プロジェクト名</dt>\n\t\t<dd class="form-group__input">\n\t\t\t<input type="text" class="form-control" placeholder="プロジェクト名を入力してください。">\n\t\t</dd>\n\t</dl>\n\t<dl class="form-group">\n\t\t<dt class="form-group__label">開始</dt>\n\t\t<dd class="form-group__input">\n\t\t\t<input type="text" class="form-control" placeholder="Select time">\n\t\t</dd>\n\t</dl>\n\t<dl class="form-group">\n\t\t<dt class="form-group__label">終了</dt>\n\t\t<dd class="form-group__input">\n\t\t\t<input type="text" class="form-control" placeholder="Select time">\n\t\t</dd>\n\t</dl>\n</div>\n<div class="project-business">\n\t<h3 class="project-business__ttl"><span>業務内容</span></h3>\n\t<dl class="form-group form-group--full form-group--styles02">\n\t\t<dt class="form-group__label"><span>*</span>プロジェクト内容</dt>\n\t\t<dd class="form-group__input">\n\t\t\t<img src="../img/common/editor-02.png" alt="プロジェクト内容">\n\t\t</dd>\n\t</dl>\n\t<dl class="form-group form-group--full">\n\t\t<dt class="form-group__label"><span>*</span>組織</dt>\n\t\t<dd class="form-group__input">\n\t\t\t<img src="../img/common/input-01.png" alt="プロジェクト内容">\n\t\t</dd>\n\t</dl>\n\t<dl class="form-group form-group--full">\n\t\t<dt class="form-group__label"><span>*</span>組織</dt>\n\t\t<dd class="form-group__input">\n\t\t\t<img src="../img/common/input-02.png" alt="プロジェクト内容">\n\t\t</dd>\n\t</dl>\n\t<dl class="form-group form-group--full">\n\t\t<dt class="form-group__label"><span>*</span>役割</dt>\n\t\t<dd class="form-group__input">\n\t\t\t<img src="../img/common/input-02.png" alt="プロジェクト内容">\n\t\t</dd>\n\t</dl>\n\t<dl class="form-group form-group--full">\n\t\t<dt class="form-group__label"><span>*</span>開発環境</dt>\n\t\t<dd class="form-group__input">\n\t\t\t<img src="../img/common/input-03.png" alt="プロジェクト内容">\n\t\t</dd>\n\t</dl>\n\t<dl class="form-group form-group--full">\n\t\t<dt class="form-group__label"><span>*</span>担当業務</dt>\n\t\t<dd class="form-group__input">\n\t\t\t<img src="../img/common/input-04.png" alt="担当業務">\n\t\t</dd>\n\t</dl>\n</div>\n</div>',project02='<div class="register-form__dd-wp form-grid project-content02">\n<a href="" class="box-project__close"><img src="../img/common/close-circle-red.png" alt="" width="24"></a>\n<dl class="form-group form-group--full">\n\t<dt class="form-group__label">勤務先</dt>\n\t<dd class="form-group__input">\n\t\t<input type="text" placeholder="氏名を入力してください。" class="form-control">\n\t</dd>\n</dl>\n<dl class="form-group">\n\t<dt class="form-group__label"><span>*</span>勤務先</dt>\n\t<dd class="form-group__input">\n\t\t<select name="" id="" class="form-control form-control--select">\n\t\t\t<option value="いつから">いつから</option>\n\t\t\t<option value=""></option>\n\t\t</select>\n\t</dd>\n</dl>\n<dl class="form-group">\n\t<dt class="form-group__label"><span>*</span>終了日</dt>\n\t<dd class="form-group__input">\n\t\t<select name="" id="" class="form-control form-control--select">\n\t\t\t<option value="いつから">いつから</option>\n\t\t\t<option value=""></option>\n\t\t</select>\n\t</dd>\n</dl>\n<dl class="form-group">\n\t<dt class="form-group__label">資本金</dt>\n\t<dd class="form-group__input">\n\t\t<input type="text" class="form-control" placeholder="資本金を選択してください。">\n\t</dd>\n</dl>\n<dl class="form-group">\n\t<dt class="form-group__label">資本金</dt>\n\t<dd class="form-group__input">\n\t\t<input type="text" class="form-control" placeholder="従業員数を入力してください。">\n\t</dd>\n</dl>\n<a href="#" class="btn-add-project mt0">この会社のプロジェクを追加</a>\n</div>';$(".box-project__close").click((function(t){t.preventDefault(),$(this).parent().remove()}));var id=2;$(".js-add-qualifications").click((function(t){t.preventDefault(),id++,$(this).before('<div class="form-grid form-grid--styles02">\n\t<dl class="form-group">\n\t\t<dt class="form-group__label">資格証明書</dt>\n\t\t<dd class="form-group__input">\n\t\t\t<a href="" class="txt-link js-qualifications" data-id="'+id+'">参考</a>\n\t\t\t<input type="text" class="form-control" placeholder="基本情報技術者" id="'+id+'">\n\t\t</dd>\n\t</dl>\n\t<dl class="form-group">\n\t\t<dt class="form-group__label">取得日</dt>\n\t\t<dd class="form-group__input">\n\t\t\t<input type="text" placeholder="2021年06月" class="form-control form-control--date">\n\t\t</dd>\n\t</dl>\n\t<a href="" class="box-project__close"><img src="../img/common/close-circle-red.png" alt="" width="24"></a>\n</div>'),$(".box-project__close").click((function(t){t.preventDefault(),$(this).parent().remove()})),$(".js-qualifications").click((function(t){t.preventDefault();var l=$(this).attr("data-id");$("#qualifications").attr("data-modal",l),$("#qualifications").addClass("is-show")}))})),$(".js-add-project").click((function(t){t.preventDefault(),$(this).before(project),$(".box-project__close").click((function(t){t.preventDefault(),$(this).parent().remove()}))})),$(".js-add-project02").click((function(t){t.preventDefault(),$(this).before(project02),$(".box-project__close").click((function(t){t.preventDefault(),$(this).parent().remove()}))})),$(".js-submit-qualifications").click((function(t){t.preventDefault();var l=$(this).closest(".c-modal").attr("data-modal");console.log(l),$(".qualifications-content__wp input").each((function(){$(this).prop("checked")&&$("#"+l).val($(this).val())})),$(".c-modal").removeClass("is-show")})),jQuery((function(){jQuery("#datepicker01").datepicker({dateFormat:"yy年mm月dd日",minDate:0,firstDay:1,showOtherMonths:!0,selectOtherMonths:!0}),jQuery("#datepicker02").datepicker({dateFormat:"yy年mm月dd日",minDate:0,firstDay:1,showOtherMonths:!0,selectOtherMonths:!0})})),jQuery((function(){jQuery(".multiSelect").each((function(t){var l=jQuery(this),e=l.find(".multiSelect_field"),s=e.find("option"),o=e.attr("data-placeholder");e.hide().after('<div class="multiSelect_dropdown"></div>\n\t\t\t\t\t\t  <span class="multiSelect_placeholder">'+o+'</span>\n\t\t\t\t\t\t  <ul class="multiSelect_list"></ul>\n\t\t\t\t\t\t  <span class="multiSelect_arrow"></span>'),s.each((function(t){jQuery(".multiSelect_list").append('<li class="multiSelect_option" data-value="'+jQuery(this).val()+'">\n\t\t\t\t\t\t\t\t\t\t\t  <a class="multiSelect_text">'+jQuery(this).text()+"</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>")}));var n=l.find(".multiSelect_dropdown"),a=l.find(".multiSelect_list"),c=l.find(".multiSelect_option");l.find(".multiSelect_text");n.attr("data-multiple","true"),a.css("top",n.height()+5),c.click((function(t){var l=jQuery(this);t.stopPropagation(),l.addClass("-selected"),e.find("option:contains("+l.children().text()+")").prop("selected",!0),n.append((function(t){return jQuery('<span class="multiSelect_choice">'+l.children().text()+"</span>").click((function(t){var l=jQuery(this);t.stopPropagation(),l.remove(),a.find(".multiSelect_option:contains("+l.text()+")").removeClass("-selected"),a.css("top",n.height()+5).find(".multiSelect_noselections").remove(),e.find("option:contains("+l.text()+")").prop("selected",!1),0===n.children(":visible").length&&n.removeClass("-hasValue")}))})).addClass("-hasValue"),a.css("top",n.height()+5),c.not(".-selected").length||a.append('<h5 class="multiSelect_noselections">No Selections</h5>')})),n.click((function(t){t.stopPropagation(),t.preventDefault(),n.toggleClass("-open"),a.toggleClass("-open").scrollTop(0).css("top",n.height()+5)})),jQuery(document).on("click touch",(function(t){n.hasClass("-open")&&(n.toggleClass("-open"),a.removeClass("-open"))}))}))}));