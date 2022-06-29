const ul = document.querySelector('.people');

const people = ['mario', 'huan', 'cristoph', 'miguel'];

let html = ``;

people.forEach(function(person){
    html += `<li style="color: purple">${person}</li>`;
})

console.log(html);

ul.innerHTML = html;

/*const logPeople = (person, index) => {
    console.log(`${index} - hello ${person}`);

};

people.forEach(logPeople)
*/