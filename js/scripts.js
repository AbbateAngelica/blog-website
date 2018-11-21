
window.onscroll = function () {
    var htmlTop = document.documentElement.scrollTop;
    if (htmlTop > 150 && window.innerWidth > 600) {
        document.getElementById('header').classList.add("header--scroll");
    }
    else {
        document.getElementById('header').classList.remove("header--scroll");
    }
}

window.onload = function () {
    // SKILL BAR SETUP
    var bars = document.getElementsByClassName('skill__inner-bar');
    for (var i = 0; i < bars.length; i++) {
        var perc = bars[i].getAttribute('data-perc');
        bars[i].style = "width: " + perc + "%;";
        bars[i].innerHTML = perc + "%";
    }

    // GALLERY SETUP
    var images = document.querySelectorAll('.grid-photo img');
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = function (i) {
            document.getElementById('gallery-img').setAttribute('src', images[i].getAttribute('src'));
            document.getElementById('gallery-text').innerHTML = images[i].getAttribute('alt');
            document.querySelector('.fixed-gallery').classList.add('fixed-gallery--visible');
        }.bind(this, i);
    }
    document.querySelector('.fixed-gallery__btn').onclick = function () {
        document.querySelector('.fixed-gallery').classList.remove('fixed-gallery--visible');
    }

    //SCROLL SETUP
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            console.log(this.getAttribute('href'));
            console.log('this', this);
            console.log('this.scrollIntoView', this.scrollIntoView);
            document.querySelector("#header").scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // MAIN RESPONSIVE
    function resizeLogo() {
        if (window.innerWidth <= 600) {
            document.getElementsByClassName('main__title')[0].innerHTML = 'My logo';
        }
        else {
            document.getElementsByClassName('main__title')[0].innerHTML = 'My website logo';
        }
    }
    document.body.onresize = resizeLogo;
    resizeLogo();

    // MENU BAR SETUP 
    document.getElementById("nav-btn").onclick = function () {
        if (document.getElementById("nav-btn").classList.contains('nav-mobile__btn--active')) {
            document.getElementById("nav-btn").classList.remove('nav-mobile__btn--active');
            document.getElementById("nav-list").classList.remove('nav-mobile__list--active');
            document.getElementById("nav-btn").innerHTML = '<i class="fas fa-bars"></i>';
        }
        else {
            document.getElementById("nav-btn").classList.add('nav-mobile__btn--active');
            document.getElementById("nav-list").classList.add('nav-mobile__list--active');
            setTimeout(function () {
                document.getElementById("nav-btn").innerHTML = 'Close <i class="fas fa-times"></i>';
            }, 500)
        }
    }
}