(function() {
"use strict"

const body = document.querySelector('body');
const nav = document.querySelector('#nav');
const navToggle = document.querySelector('a[href="#nav"]');
const navClose = document.querySelector('#nav .close');
const backToTop = document.querySelector('#backtotop');

let hideNav = function() {
    nav.classList.remove('visible');
    body.classList.remove('menu-visible');
}

let toggleNav = function() {
    nav.classList.toggle('visible');
    body.classList.toggle('menu-visible');
}

//Hide nav and cart on body click
body.addEventListener('click', function(e){
    if (body.classList.contains('menu-visible')) {
        e.preventDefault();
        e.stopPropagation();
        hideNav();
    }
}, false);

nav.addEventListener('click', function(e){
    e.stopPropagation();
}, false);

navToggle.addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    toggleNav();
}, false);
navClose.addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    hideNav();
}, false);

// Transition effect
let transition = function(e) {
    let href = this.getAttribute('href');
    let target = this.getAttribute('target');
    if (!href || href.indexOf('#') != -1 || href.indexOf('tel') != -1 || href.indexOf('wa.me') != -1 || href.indexOf('mailto') != -1 || target == '_blank')
        return;
    e.preventDefault();
    e.stopPropagation();
    hideNav();
    body.classList.add('transition');
    console.log('click2');
    window.setTimeout(function() {
        window.location.href = href;
    }, 250);
}

body.addEventListener('click', function(e) {
    for (let target = e.target; target && target != this; target = target.parentNode) {
        if (target.matches('a')) {
            transition.call(target, e);
            break;
        }
    }
}, false);

nav.addEventListener('click', function(e) {
    for (let target = e.target; target && target != this; target = target.parentNode) {
        if (target.matches('a')) {
            transition.call(target, e);
            break;
        }
    }
}, false);

// Remove transition if page loaded from bfcache
window.addEventListener('pageshow', function(event) {
    if (event.persisted === true) {
        body.classList.remove('transition');
    }
}, false);

// Loading animation
window.addEventListener('load', function() {
    body.classList.remove('is-loading');
    body.classList.remove('transition');
});
})();
