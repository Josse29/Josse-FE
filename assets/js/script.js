// MENU N SIDEBAR
let menu = document.querySelector('header nav .menu');
let ham1 = document.querySelector('header nav .menu span:nth-child(1)');
let ham2 = document.querySelector('header nav .menu span:nth-child(2)');
let ham3 = document.querySelector('header nav .menu span:nth-child(3)');
let aside = document.querySelector('aside');

menu.addEventListener('click',function(){
	ham1.classList.toggle('satu');
	ham2.classList.toggle('dua');
	ham3.classList.toggle('tiga');
	aside.classList.toggle('hide');
})

// Carousel
let carousel = document.getElementById('carousel');
setInterval(function()
 	{ 
 		let acakGambar = Math.round(Math.random()*3);
		let path = 'assets/img/carousel/' + acakGambar + '.jpg';
 		carousel.src = path;
 	}
,2000);
