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
		}
	}

	$(function(){
		lottery.init()
	})
})()