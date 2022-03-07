
const cards = document.querySelector('.kalendarCard');
const result = document.querySelector('#result');

const removeClass = () => {
    cards.classList.remove('show')
}


const chooseDay = (e) => {

    if(e < 10) {
        result.innerHTML = '0' +  e + '.04.2021';
    } else {
        result.innerHTML = e + '.04.2021';
    }
    cards.classList.remove('show')

}