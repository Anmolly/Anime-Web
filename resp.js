burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
navlist = document.querySelector('.nav-list')


burger.addEventListener('click', ()=>{
			rightnav.classList.toggle('v-nav-resp');
			navlist.classList.toggle('v-nav-resp');
			navbar.classList.toggle('h-nav-resp');
})