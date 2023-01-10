// For Policy Section

var Policy = [{
        "id": 1,
        "name": "EIR Process And Policy OverView",
        "detail": "This Screen provides an overview on yhe process and policies taht needs to be followed by Claim Adjusters for achieving EIR effectively.",
        "img": "./img/device.PNG",
        "time": "2:25"

    },
    {
        "id": 2,
        "name": "Important Philosophies and Expectations",
        "detail": "This section deals with the critical philosophies that Claim Adjusters should follow in order to achieve effective EIR",
        "img": "./img/device.PNG",
        "time": "5:07"
    }, {
        "id": 3,
        "name": "Types of Injuries Relevant to EIR",
        "detail": "This section deals with the types of injuries(simple injuries such as sprains and whipiash) that are relevent to EIR.",
        "img": "./img/device.PNG",
        "time": "7:34"
    }, {
        "id": 3,
        "name": "Injuries Not Covered in EIR",
        "detail": "This section covers complex injuries that are not covered/relevants to EIR.",
        "img": "./img/device.PNG",
        "time": "7:34"
    }, {
        "id": 4,
        "name": "Resolving Claims Effectively",
        "detail": "This section explains the steps a Claim Adjuster needs to follow in order to bring Early Injury Resolution.",
        "img": "./img/device.PNG",
        "time": "7:34"
    }

]


document.addEventListener("DOMContentLoaded", () => {
    for (var i = 0; i < Policy.length; i++) {

        content = ' <div class="d-flex m-0"><div class="lft"><div class="box m-3 "><img src="./img/gallery.PNG" class="img-fluid" alt=""></div> </div><div class="rght p-3"><div class="d-flex  align-items-start"><img src="' + Policy[i]['img'] + '" alt=""><div class="d-flex flex-column  ps-2"> <div class="rght-content flex-grow-1"> <a class="m-0" href="#">' + Policy[i]['name'] + '</a><p class="mb-2 text">' + Policy[i]['detail'] + '</p></div><span class="time"><p class="m-0 ">' + Policy[i]['time'] + ' mins</p> </span></div> </div></div></div>'

        document.getElementById('Policy-list').innerHTML += content;

    }

});


// Sticky Scroll

var nav = document.querySelector("nav");
var nav_link = document.querySelector('.nav-link');
var linkImg1 = document.querySelector('.linkImg1');
var linkImg2 = document.querySelector('.linkImg2');
var textName = document.querySelector('.logo-name');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 80) {
        linkImg1.style.display = "none";
        linkImg2.style.display = "none";
        nav.classList.add('bg-light1', 'shadow');
        nav.classList.remove('py-4');
        nav.classList.add('py-2', 'px-3');
        nav_link.classList.add('fw-bold');
        nav_link.classList.remove('text-white')
        textName.classList.remove('text-white');
        textName.css('color', '#000');

    } else {
        linkImg1.style.display = "block";
        linkImg2.style.display = "block";
        nav.classList.remove('bg-light1', 'shadow');
        nav.classList.remove('py-2', 'px-3');
        nav.classList.add('py-4');
        textName.classList.add('text-white');
        nav_link.classList.remove('fw-bold');
        nav_link.classList.add('text-white')

    }
})