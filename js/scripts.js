// inject current year in factor
const dateNow = new Date();
console.log(dateNow);
document.querySelector('#year').textContent = dateNow.getFullYear();
