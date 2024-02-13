// пропишем функцию random
const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
}


const btn = document.querySelector('#btn');

btn.addEventListener('mouseenter', () => {
    btn.style.left = `${random(0, 90)}%`;
    btn.style.top = `${random(0, 90)}%`;
});


btn.addEventListener('click', () => {
    alert('Поздравляем! Вы нажали на кнопку! Чем занимаетесь в своей жизни? :D');
});


const btn2 = document.getElementById('btn2');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const gifAnimation1 = document.getElementById('gifAnimation1');
const gifAnimation2 = document.getElementById('gifAnimation2');

btn2.addEventListener('click', function () {
    image1.classList.add('hidden');
    image2.classList.remove('hidden');
    gifAnimation1.classList.add('hidden');
    gifAnimation2.classList.remove('hidden');
});


//Написал и довёл до ума Ton1S , у меня кста 14 февраля День Рождения )




























// // функция рандом
// const random = (min, max) => {
//   const rand = min + Math.random() * (max - min + 1);
//   return Math.floor(rand);
// };

// // убегающая кнопка
// const btn = document.querySelector('#btn');
// btn.addEventListener('mouseenter', () => {
//     btn.style.left = `${random(0, 90)}%`;
//     btn.style.top = `${random(0, 90)}%`;
// });

// // победа
// btn.addEventListener('click',
//   () => alert('Congratulations! You hit the button! What are you doing with your life?')
// );