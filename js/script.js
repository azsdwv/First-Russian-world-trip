const anchors = document.querySelectorAll('.scroll-to')
let burg = document.getElementById('burger')
let menu = document.getElementById('ref')
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href')

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        burg.classList.remove('active');
        menu.classList.remove('open')

    })
    window.scrollBy(0, -40);
}
function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] == obj) {
            return true;
        }
    }
    return false;
}
const prev = document.querySelector('#prev')
const next = document.querySelector("#next")
const bios = document.querySelectorAll('.bio_content')
prev.addEventListener('click', function(e) {
    for (let bio of bios) {
        if (contains(bio.classList, 'active')) {
            bio.classList.remove('active')
        } else {
            bio.classList.add('active')
        }
    }
})
next.addEventListener('click', function (e) {
    for (let bio of bios) {
        if (contains(bio.classList, 'active')) {
            bio.classList.remove('active')
        } else {
            bio.classList.add('active')
        }
    }
})