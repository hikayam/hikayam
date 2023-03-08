var input1 = document.getElementById('input1')
var img2 = document.getElementById('img2')
img2.onclick= function(){
	input1.value = ''
	
}
input1.onclick = function(){
	img2.style.display = 'block'
}
input1.onblur = function() {
	if (input1.value) {
		img2.style.display = 'block'
	} else {
		img2.style.display = 'none'
	}
}
// 图片切换
var imagerr = ['1.jpg','2.jpg','6.jpg','3.jpg','4.jpg','5.jpg'];
var imagid = document.getElementById('img1');
var sumStr= document.getElementById('sum')
var i= 0;
function onPrve(){
	i--;
	if(i<=0)
	i = imagerr.length -1
	imagid.src ='./img/'+ imagerr[i]
	sumStr.innerHTML = (i+1)
}
function onNext(){
	i++;
	if(i >imagerr.length -1){
		i=0
	}
	imagid.src ='./img/'+ imagerr[i]
	sumStr.innerHTML = (i+1)
}
setInterval(function(){
	onNext()
},5000)