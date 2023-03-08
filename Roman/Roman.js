// var li = document.getElementById('box1')
// var shan1 = document.getElementsByClassName('shan1')
// for (var i= 0;i<box1.length;i++){
// 	box1[i].setAttribute('indexkey',i)
// 	box1[i].onclick = function(){
// 		var index = this.getAttribute('indexkey')
// 		for (var j= 0; j<box1.length;j++){
// 			box1[j].className= ''
// 		}
// 		this.className = 'cou'
// 		for(var y = 0;y<shan1.length;y++){
// 			shan1[y].style.display = 'none'
			
// 		}
// 		shan1[index].style.display = 'block'
// 	}
// }
$(function(){
	$(window).scroll(function(){
		var scrollTop = $(document).scrollTop();
		if (scrollTop<= 800) {
			$('.img-ding').hide()
		}else{
			$('.img-ding').show()
		}
	})
	$('.img-ding').click(function(){
		$('html,body').animate({
			scrollTop:0
		},700)
	})
});