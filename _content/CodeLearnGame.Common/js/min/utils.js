function playAudio(o){let e=new Audio(o);e.play()}function scrollTo(o){let e=document.getElementById(o);e&&e.scrollIntoView({behavior:"smooth",block:"end"})}function scrollToTop(){document.body.scrollTop=document.documentElement.scrollTop=0}function isMobile(){return/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}