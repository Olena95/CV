const welcomeMessage = document.querySelector('.name');
welcomeMessage.addEventListener('click', () => {
     alert('Hi, my name is Olena! Welcome to my CV');
 } );

const colChange = document.querySelector('button');

function random(number) {
    return Math.floor(Math.random() * (number+1));
  }

colChange.onclick = function() {
    
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    const sideBarColor = document.querySelector('.sidebar');
    sideBarColor.style.backgroundColor = rndCol;
  };


const changeImg = document.querySelector('img');
changeImg.addEventListener ('click', () => {
    changeImg.remove();
});