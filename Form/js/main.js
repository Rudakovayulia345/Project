let mainnav = document.querySelector('.main-nav'),
menuBtn= document.querySelector ('.mobile-toggle');
menuBtn.addEventListener ('click', function(){
    mainnav.classList.toggle ('open');
})