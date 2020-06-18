import style from './style.scss';

document.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('.box');
  box.addEventListener('transitionend', (e) => {
    console.log(e, e.propertyName);
  });

  const box2 = document.querySelector('.box2');
  box2.addEventListener('animationend', (e) => {
    console.log(e, e.animationName);
  });
});
