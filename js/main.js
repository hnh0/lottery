var lottey = window.lottey || {};
(function () {
	lottey = {
		checkInfo: function () {
			var name = $('#name').val(),
				phone = $('#phone').val(),
				addr = $('#addr').val();
			var info = false;
			if(name == '' || phone == '' || addr == ''){

			}else{
				info = true;
			}

			return info
		},
		showPass: function () {
			$('.layer_bg').show();
			$('.win_result_ok').show();

			setTimeout(function () {
				$('.layer_bg').hide();
				$('.win_result_ok').hide();
			},3000)
		},
		showFail: function () {
			$('.layer_bg').show();
			$('.win_result_fail').show();

			setTimeout(function () {
				$('.layer_bg').hide();
				$('.win_result_fail').hide();
			},3000)
		}
	}
	$('#submit_info').on('click', function () {
		var info = lottey.checkInfo();
		if (info) {
			lottey.showPass();
		}else{
			lottey.showFail();
		}
	});
})()