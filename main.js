let month = document.querySelector(".plans .start .info .month");
let year = document.querySelector(".plans .start .info .year");
let check = document.querySelector(".plans .start .info input");
let span = document.querySelectorAll(".plans .offers div span:first-of-type");
let divs = document.querySelectorAll('.plans .offers div');
let sliders = document.querySelectorAll('.faq div');
let headers = document.querySelectorAll('.faq div h3');
let icons = document.querySelectorAll('.faq div i');
let back = document.querySelectorAll('.background');
let head = document.querySelector(".head");
let bars = document.querySelector(".head .bars");
let bar1 = document.querySelector(".head .bars span:first-of-type");
let bar2 = document.querySelector(".head .bars span:nth-child(2)");
let bar3 = document.querySelector(".head .bars span:last-of-type");
const logo = document.querySelector('.head img:not(.menu .head img)');
const menu = document.querySelector('.menu');
bars.onclick = function () {
    if (bar2.style.backgroundColor !== 'transparent') {
        bar1.style.cssText = 'transform:translateY(10px);';
        bar2.style.cssText = 'background-color:transparent;';
        bar3.style.cssText = 'transform:translateY(-10px);';
        window.setTimeout(() => {
            bar1.style.cssText = 'transform:translateY(10px) rotate(45deg);';
            bar3.style.cssText = 'transform:translateY(-10px) rotate(-45deg);';
        }, 500);
        window.setTimeout(() => {
            logo.style.cssText = 'transform: translateX(-200px);';
        }, 300);
        menu.style.cssText = 'right:0;';
    } else {
        bar1.style.cssText = 'transform:none;';
        bar2.style.cssText = 'background-color:#4c4d5f;';
        bar3.style.cssText = 'transform:none;';
        menu.style.cssText = 'right:-100%;'
        logo.style.cssText = 'transform: unset;';
    }
};

////////////////////// fixed header /////////////////////////
window.onscroll = function () {
    if (window.pageYOffset > 5) {

        head.style.backgroundColor = 'white'
    } else { head.style.backgroundColor = 'transparent' }
}

let ul = document.querySelector(".head ul ul");
let li = document.querySelector(".head ul.first li:not(.head ul ul li)");
year.style.cssText = 'opacity:0.6;'
//////////////////////// scroll button /////////////////////////////
check.onclick = function () {
    if (check.checked === true) {
        month.style.cssText = 'opacity:0.6;'
        year.style.cssText = 'opacity:1;'
        span[0].textContent = "17";
        span[1].textContent = "32";
        span[2].textContent = "52";
        document.styleSheets[0].insertRule('.plans .offers div span:first-of-type::after{transform: translateY(-28px)}');
        for (let i = 0; i <= 2; i++) {
            let add = document.createElement('span');
            add.textContent = 'Billed yearly';
            add.style.cssText = 'font-weight: normal;font-size: 14px;margin: 5px 0;text-align: right;display: block;';
            span[i].insertAdjacentElement('beforeend', add);
        }
    } else {
        year.style.cssText = 'opacity:0.6;'
        month.style.cssText = 'opacity:1;'
        span[0].textContent = "24";
        span[1].textContent = "39";
        span[2].textContent = "79";
        document.styleSheets[0].deleteRule(0);
    };
};
sliders.forEach((slider) => {
    slider.onclick = function (e) {
        e.stopPropagation();
        if (e.target.nextElementSibling.style.display != 'block') {
            e.target.nextElementSibling.style.cssText = "display:block;";
            e.target.lastElementChild.style.cssText = 'transform:rotate(180deg);opacity:1;';
        } else {
            e.target.nextElementSibling.style.cssText = "display:none;";
            e.target.lastElementChild.style.cssText = 'transform:rotate(0deg);';
        }
    };
});
headers.forEach((header) => {
    header.onclick = function (e) {
        e.target.parentElement.click();
        e.stopPropagation();
    };
});
icons.forEach((icon) => {
    icon.onclick = function (e) {
        e.target.parentElement.click();
        e.stopPropagation();
    };
});