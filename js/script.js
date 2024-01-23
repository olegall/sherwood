$(window).load(function() {
	$('#slider').nivoSlider();
	$("a.grouped_elements").fancybox();
	
	// центрирование .content_wrapper
	/*
	$(".content_wrapper").css("margin-left", ($("body").width()-$(".content_wrapper").width())/2);
	$( window ).resize(function() {
		$(".content_wrapper").css("margin-left", ($("body").width()-$(".content_wrapper").width())/2);
	});
	*/
	$(".content_wrapper").css("margin-left", ($("body").width()-$(".content_wrapper").width())/2);
	$(window).resize(function() {
		$(".content_wrapper").css("margin-left", ($("body").width()-$(".content_wrapper").width())/2);
		if ($(document).width() <= $(".content_wrapper").width()){
			$(".header, #slider, .content_wrapper").css("width", "100%");
			$(".header > a").css("left", ($(document).width()-$("#content").width())/2);
			$(".header ul").css("right", ($(document).width()-$("#content").width())/2);
		} 
		if ($(document).width() > 1340){
			$(".header, #slider, .content_wrapper").css("width", "1340px");
			$(".header > a").css("left", "125px");
			$(".header ul").css("right", "120px");  
		}
	});
	
	
	// Контакты
	/*
	$("input[type='image']").hover(
		function(){
			$(this).attr("src","images/button_send_hover.jpg");
		}
	);
	$("input[type='image']").mouseleave(
		function(){
			$(this).attr("src","images/button_send.jpg");
		}
	);	
	*/
	
	
	$("textarea").text("Сообщение:");
	

	$("form .name, form .contacts").click(function(){
		$(this).attr("value", "");
	});
	$("textarea").click(function(){
		$(this).text("");
	});
	

	$("form .name, form .contacts, textarea").focusout(function(){
		$("form .name").attr("value", "Как Вас зовут?");
		$("form .contacts").attr("value", "Ваш телефон или электронная почта:");
		$("form textarea").text("Сообщение:");
	});
	
	
	$(".plan").click(function(e) {
		var left1 = 100;
		var top1 = 100;
		var right1 = 200;
		var bottom1 = 200;
		
		var offset = $(this).offset();
		var MouseXInsideImg = (e.pageX - offset.left);
		
		var MouseYInsideImg = (e.pageY - offset.top);
		console.log(MouseXInsideImg, MouseYInsideImg);
		
		if (MouseXInsideImg > left1 && MouseXInsideImg < right1 &&
			MouseYInsideImg > top1 && MouseXInsideImg < bottom1) {
			alert("Inside");
			console.log(MouseXInsideImg, MouseYInsideImg);
			$(".img_wrap").append('<div class="red_rectangle"></div>');
		}
	});
	
	
	
	$(".cafe, .table1, .table2, .table3, .table4, .table5, .table6, .table7, .table8, .table9, .table10, .table11, .table12, .table13, .table14, .table15, .table16, .table17, .table18, .smoke_table").hover(
		function(){
			$(this).addClass("table_hovered");
		}
	);
	$(".cafe, .table1, .table2, .table3, .table4, .table5, .table6, .table7, .table8, .table9, .table10, .table11, .table12, .table13, .table14, .table15, .table16, .table17, .table18, .smoke_table").mouseleave(
		function(){
			$(this).removeClass("table_hovered");
		}
	);
	
	
	ymaps.ready(init);
	var myMap, 
		myPlacemark;

	function init(){ 

		myMap = new ymaps.Map ("yandex_map", {
			center: [54.626318, 39.749715],
			zoom: 17,
            behaviors: ['scrollZoom']
		}); 
		
		myMap.controls
        // Кнопка изменения масштаба.
        .add('zoomControl', { left: 5, top: 5 })
        // Список типов карты
        .add('typeSelector')
        // Стандартный набор кнопок
        .add('mapTools', { left: 35, top: 5 });
		
		myPlacemark = new ymaps.Placemark([54.626318, 39.749715], {
			content: 'Шервуд',
			balloonContent: 'Кафе-бар "Шервуд"'
		});
		
		myMap.geoObjects.add(myPlacemark);
	}
	
});