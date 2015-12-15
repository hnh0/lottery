var lottery = window.lottery || {};
(function () {
	lottery = {
		btn: $('#btn'),
		gif: $('#gif'),
		interval: {},
		init: function(){
			var self = this
			self.bind()
		},
		bind: function(){
			var self = this
			self.interval = setInterval('lottery.loop()', 500)
			self.btn.click(function(event) {
				self.play()
			});
		},
		loop: function(){
			var self = this	
			self.btn.toggleClass('down')
		},
		play: function(){
			var self = this
			self.gif.addClass('show')
			setTimeout('lottery.go()', 3000)
		},
		go: function(){
			var self = this,
			sUrl = self.btn.data('url')
			window.location.href = sUrl
		},
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
	};

	$('#submit_info').on('click', function () {
		var info = lottey.checkInfo();
		if (info) {
			lottey.showPass();
		}else{
			lottey.showFail();
		}
	});

	$(function(){
		lottery.init()
	});
})()