
//runs loadRamenMenu after loading
document.addEventListener('DOMContentLoaded', loadRamenMenu());

//loads ramen images
function loadRamenMenu(){
    fetch('http://localhost:3000/ramens')
    .then(res => res.json())
    .then(data => addRamenMenu(data))
}

//helps load ramen images
function addRamenMenu(img) {
    for (let i in img){
        let menu = document.querySelector('#ramen-menu');
        let pic = document.createElement('img');

        pic.src = img[i].image;
        pic.id = img[i].name
        pic.className = 'ramenInMenu'

        pic.addEventListener('click', changeMainImg(pic));

        menu.append(pic);
    }
}

//changes main image after even listener is called
function changeMainImg(img){
    let main = document.querySelector('img.detail-image');
    let name = document.querySelector('h2.name');
    let restaurant = ('h3.restaurant');

    main.src = img.src;
    name.textContent = img.id;
    restaurant.textContent = img.className;
}

// function addListenersToImgs(imgs){
//     console.log(imgs.length)
    
//     imgs.forEach(element => {
//         element.addEventListener('click', changeMainImg(element))
//     });

// }

// // console.log(document.querySelectorAll('.ramenInMenu'));

// const menuRamen = document.querySelectorAll('.ramenInMenu')

// console.log(menuRamen);

// addListenersToImgs(menuRamen);