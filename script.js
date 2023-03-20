$(document).ready(function () {
    $('#owltwo.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },

            1220: {
                items: 4
            },

            1460: {
                items: 5
            },
        }

    })
    $('#owlSecond.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },

            1220: {
                items: 1
            },

            1460: {
                items: 1
            },
        }

    })
    $('#owlFirst.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },

            1220: {
                items: 4
            },

            1460: {
                items: 5
            },
        }

    })

    $('#owlone.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        responsive: {
            0: {
                items: 2
            },
            400: {
                items: 3
            },
            600: {
                items: 4
            },
            800: {
                items: 5
            },
            1000: {
                items: 6
            },

            1220: {
                items: 6
            },

            1460: {
                items: 9
            },
        }

    });
    $('#owlthree.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            },

            1220: {
                items: 3
            },

            1460: {
                items: 3
            },
        }

    });
    $('#owlnine.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },

            1220: {
                items: 3
            },

            1460: {
                items: 4
            },
        }

    });

});

function tapButtonBuy(para) {
    let boxC = document.getElementsByClassName('boxc1')[0];
    boxC.classList.remove("boxc1");
    para.classList.add("boxc1");
    let a = para.innerHTML.trim();
    // console.log(a);
    readData3(a);

}
function tapButtonFeature(para) {
    let boxC = document.getElementsByClassName('boxc1-feature')[0];
    boxC.classList.remove("boxc1-feature");
    para.classList.add("boxc1-feature");
    let a = para.innerHTML.trim();
    // console.log(a);
    readData2(a);


}
function tapButtonBlog(para) {
    let boxC = document.getElementsByClassName('boxc1-blog')[0];
    boxC.classList.remove("boxc1-blog");
    para.classList.add("boxc1-blog");
    let a = para.innerHTML.trim();
    readDataBlog(a);

}


function isLoggedIn() {
    let users = JSON.parse(localStorage.getItem("myInfo"))
    console.log(users)

    let loggedUser = users?.find(user => user.islogin === true)
    console.log(loggedUser)

    console.log(loggedUser.Uname)

    let html = `
    <i class="fa-solid fa-user"></i>
    <p id="para-login">
    <a class="login-in-main-page" href="./login/login.html" id=" ">
    ${loggedUser.Uname}
    </a></p>
    `
    let loginName = document.getElementById("lim");
    console.log(loginName)
    loginName.innerHTML = html;
}

// isLoggedIn()