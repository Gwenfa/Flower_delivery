$(".tab>div").hover(function(){			
					$(".tab>div").removeClass("active").eq($(this).index()).addClass("active");
					
				})