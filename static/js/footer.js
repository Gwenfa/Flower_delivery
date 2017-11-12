
$('.tab_item').click(function(){			
					$(".tab>div").removeClass('active').eq($(this).index()).addClass('active');	
					alert("hello")
				})
