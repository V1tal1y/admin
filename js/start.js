jQuery(document).ready(function($) {

    // start datepicker ======================================================
    $("#datepicker").datepicker({
            inline: true,
            changeYear: true,
        	changeMonth: true,

        	closeText: 'Закрыть',
            prevText: '&#x3c;Пред',
            nextText: 'След&#x3e;',
            currentText: 'Сегодня',
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
            dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
            dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            weekHeader: 'Нед',
            dateFormat: 'dd/mm/yy',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
        },
        $.datepicker.regional['ru']
    );


// dropdown - item filter panel ======================================================

$('.filter_panel .dropdown-menu li a').click(function() {
    var textSpan = $(this).text();
    // alert(textSpan);
    $(this).parents(".dropdown").find(".dropdown-toggle span").text(textSpan);
});


// choose a source of the article ======================================================

$('.innerItem .dropdown-menu li a').click(function() {
    var textSource = $(this).text();
    // alert(textSpan);
    $(".pushSource input").val(textSource);
    return false;
});


// change the user themplate Version

$('.checkTemplate li').click(function() {
    var thisTemplate = $(this);
    // alert('sdf');
    $('.checkTemplate li').removeClass('activeVers');
    thisTemplate.addClass('activeVers');
});
// show current template
$('.checkTemplate .vers1').click(function() {
    $('.content__article').each(function() {
        $('.content__article').removeClass('currentShow');
    });
    $('.templateVers1').addClass('currentShow').css({"top":"130px"}).animate({top:"0", opacity:"1"},300);
});
// show current template
$('.checkTemplate .vers2').click(function() {
    $('.content__article').each(function() {
        $('.content__article').removeClass('currentShow');
    });
    $('.templateVers2').addClass('currentShow').css({"top":"130px"}).animate({top:"0", opacity:"1"},300);
});
// show current template
$('.checkTemplate .vers3').click(function() {
    $('.content__article').each(function() {
        $('.content__article').removeClass('currentShow');
    });
    $('.templateVers3').addClass('currentShow').css({"top":"130px"}).animate({top:"0", opacity:"1"},300);
});
// show current template
$('.checkTemplate .vers4').click(function() {
    $('.content__article').each(function() {
        $('.content__article').removeClass('currentShow');
    });
    $('.templateVers4').addClass('currentShow').css({"top":"130px"}).animate({top:"0", opacity:"1"},300);
});
$('.currentShow').css({"opacity":"1"});


//modal rucovadstvo
$('.close_modal, .shadow').click(function(){
    $('.modal_add, .shadow').fadeOut();
})
$('.plus1').click(function(){
    $('.modal_add_group, .shadow').fadeIn();
    scroll_top = $(window).scrollTop() - $('.content_center').scrollTop() - $(window).height()/6 + 'px';
    $('.modal_add').css('top', scroll_top);
})
$('.plus2').click(function(){
    $('.modal_add_human, .shadow').fadeIn();
    scroll_top = $(window).scrollTop() - $('.content_center').scrollTop() - $(window).height()/3.5 + 'px';
    $('.modal_add').css('top', scroll_top);
})

$('.content_center .dropdown li a, .item_dropdown li, .item_dropdown li a').click(function(){
    $(this).parents('.dropdown').find('.dropdown-toggle').html($(this).text()+'<b class="caret"></b>')
    $(this).parents('.dropdown').removeClass('open');
   return false;
})

    $( ".partners ul" ).sortable();
    $( ".partners ul" ).disableSelection();



}); // end ready
