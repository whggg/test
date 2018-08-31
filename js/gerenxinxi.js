$(function(){
			$('.tab_t ul li').click(function(event) {
				var index = $(this).index();
				$(this).find('span').addClass('selec');
				$(this).siblings().find('span').removeClass('selec');
				$('.tab_c .tabs').eq(index).show().siblings().hide();
			});

			$('.tab3 ul li').click(function() {
				$(this).toggleClass('lishow');			
			});

			$('.xiangmu ul li').click(function() {
				$(this).toggleClass('lishow');			
			});

			// 性别选择01
			$('.liebiao1 .cy_f .right').click(function(event) {
				$('.liebiao1 .zhezhao').show();
				$('.liebiao1 .xingbie').show();
			});
			$('.liebiao1 .close').click(function(event) {
				$('.liebiao1 .zhezhao').hide();
				$('.liebiao1 .xingbie').hide();
			});
			$('.liebiao1 .zhezhao').click(function(event) {
				$('.liebiao1 .zhezhao').hide();
				$('.liebiao1 .xingbie').hide();
			});
			$('.liebiao1 .xingbie p').click(function(event) {
				var sex = $(this).text();
				$('.liebiao1 .cy_f .right span').text(sex);
				$('.liebiao1 .zhezhao').hide();
				$('.liebiao1 .xingbie').hide();
			});

			// 成员选择01
			$('.liebiao1 .cy_cr').click(function(event) {
				$('.liebiao1 .zhezhao').show();
				$('.liebiao1 .chengy').show();
			});
			$('.liebiao1 .close').click(function(event) {
				$('.liebiao1 .zhezhao').hide();
				$('.liebiao1 .chengy').hide();
			});
			$('.liebiao1 .zhezhao').click(function(event) {
				$('.liebiao1 .zhezhao').hide();
				$('.liebiao1 .chengy').hide();
			});
			$('.liebiao1 .chengy p').click(function(event) {
				var sex = $(this).text();
				$('.liebiao1 .cy_cr span').text(sex);
				$('.liebiao1 .zhezhao').hide();
				$('.liebiao1 .chengy').hide();
				if ($('.liebiao1 .cy_cr span').text()=="小孩") {
					$('.liebiao1 .shengri').show();
					$('.liebiao1 .tel').hide();
					$('.liebiao1 .shengri').css('display','flex');
				}else {
					$('.liebiao1 .shengri').hide();
					$('.liebiao1 .tel').show();
				}
			}); 
			// 性别选择01
			$('.liebiao2 .cy_f .right').click(function(event) {
				$('.liebiao2 .zhezhao').show();
				$('.liebiao2 .xingbie').show();
			});
			$('.liebiao2 .close').click(function(event) {
				$('.liebiao2 .zhezhao').hide();
				$('.liebiao2 .xingbie').hide();
			});
			$('.liebiao2 .zhezhao').click(function(event) {
				$('.liebiao2 .zhezhao').hide();
				$('.liebiao2 .xingbie').hide();
			});
			$('.liebiao2 .xingbie p').click(function(event) {
				var sex = $(this).text();
				$('.liebiao2 .cy_f .right span').text(sex);
				$('.liebiao2 .zhezhao').hide();
				$('.liebiao2 .xingbie').hide();
			});

			// 成员选择02
			$('.liebiao2 .cy_cr').click(function(event) {
				$('.liebiao2 .zhezhao').show();
				$('.liebiao2 .chengy').show();
			});
			$('.liebiao2 .close').click(function(event) {
				$('.liebiao2 .zhezhao').hide();
				$('.liebiao2 .chengy').hide();
			});
			$('.liebiao2 .zhezhao').click(function(event) {
				$('.liebiao2 .zhezhao').hide();
				$('.liebiao2 .chengy').hide();
			});
			$('.liebiao2 .chengy p').click(function(event) {
				var sex = $(this).text();
				$('.liebiao2 .cy_cr span').text(sex);
				$('.liebiao2 .zhezhao').hide();
				$('.liebiao2 .chengy').hide();
				if ($('.liebiao2 .cy_cr span').text()=="小孩") {
					$('.liebiao2 .shengri').show();
					$('.liebiao2 .tel').hide();
					$('.liebiao2 .shengri').css('display','flex');
				}else {
					$('.liebiao2 .shengri').hide();
					$('.liebiao2 .tel').show();
				}
			}); 
			// 性别选择03
			$('.liebiao3 .cy_f .right').click(function(event) {
				$('.liebiao3 .zhezhao').show();
				$('.liebiao3 .xingbie').show();
			});
			$('.liebiao3 .close').click(function(event) {
				$('.liebiao3 .zhezhao').hide();
				$('.liebiao3 .xingbie').hide();
			});
			$('.liebiao3 .zhezhao').click(function(event) {
				$('.liebiao3 .zhezhao').hide();
				$('.liebiao3 .xingbie').hide();
			});
			$('.liebiao3 .xingbie p').click(function(event) {
				var sex = $(this).text();
				$('.liebiao3 .cy_f .right span').text(sex);
				$('.liebiao3 .zhezhao').hide();
				$('.liebiao3 .xingbie').hide();
			});

			// 成员选择03
			$('.liebiao3 .cy_cr').click(function(event) {
				$('.liebiao3 .zhezhao').show();
				$('.liebiao3 .chengy').show();
			});
			$('.liebiao3 .close').click(function(event) {
				$('.liebiao3 .zhezhao').hide();
				$('.liebiao3 .chengy').hide();
			});
			$('.liebiao3 .zhezhao').click(function(event) {
				$('.liebiao3 .zhezhao').hide();
				$('.liebiao3 .chengy').hide();
			});
			$('.liebiao3 .chengy p').click(function(event) {
				var sex = $(this).text();
				$('.liebiao3 .cy_cr span').text(sex);
				$('.liebiao3 .zhezhao').hide();
				$('.liebiao3 .chengy').hide();
				if ($('.liebiao3 .cy_cr span').text()=="小孩") {
					$('.liebiao3 .shengri').show();
					$('.liebiao3 .tel').hide();
					$('.liebiao3 .shengri').css('display','flex');
				}else {
					$('.liebiao3 .shengri').hide();
					$('.liebiao3 .tel').show();
				}
			}); 
			
			function p(s) {
			    return s < 10 ? '0' + s: s;
			}
			var myDate = new Date();
			//获取当前年
			var year=myDate.getFullYear();
			//获取当前月
			var month=myDate.getMonth()+1;
			//获取当前日
			var date=myDate.getDate(); 
			$('.shengri input').val(year+'-'+p(month)+"-"+p(date));

			// 家庭成员添加
			var y=0;
			$('.cy_tr').click(function(event) {
				y++;
				$('.liebiao2').show();
				if (y==2) {
					$('.liebiao3').show();
					y--;
				}
			});

			$('.tab1 .sex1').click(function(event) {
				$('.tab1 .tanchu').show();
				$('.tab1 .zhezhao').show();
			});
			$('.tab1 .tanchu button').click(function(event) {
				$('.tab1 .tanchu').hide();
				$('.tab1 .zhezhao').hide();
			});
		})