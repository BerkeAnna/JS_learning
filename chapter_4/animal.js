const il = document.querySelector('.animal');

let animals = ['lion', 'tiger', 'cat', 'panther'];

let html2 = ``;

animals.forEach(function(animal){
    html2+=`<li  style= "color: red">${animal}</li>`;
})

console.log(html2);

il.innerHTML = html2;
