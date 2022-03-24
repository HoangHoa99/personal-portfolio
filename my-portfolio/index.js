let aTag = document.querySelectorAll('a');
let backToTop = document.querySelector('.back-to-top');

aTag.forEach(a => {
    a.addEventListener('click', function(event) {
        event.preventDefault();
        let toSection = a.href.substring(a.href.indexOf('#') + 1);
        document.getElementById(`${toSection}`).scrollIntoView({behavior: 'smooth'});
    })
})

window.onscroll = function(e) {
    let currentScrollPos = document.documentElement.scrollTop;
    let windowHeight = window.screen.height;
    if(currentScrollPos * 2 >= windowHeight) {
        backToTop.classList.add('show-on-scroll');
    }
    else {
        backToTop.classList.remove('show-on-scroll');
    }

}