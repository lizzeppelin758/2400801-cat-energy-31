/* в этот файл добавляет скрипты*/
const buttonMenu = document.querySelector('.main-header__navigation-toggle');
const menu = document.querySelector('.main-header__navigation');

buttonMenu.addEventListener('click', () =>{
  const display = menu.style.display;
  if(display === 'none' || display === '') {
    menu.style.display = 'flex';
    buttonMenu.classList.add('main-header__navigation-toggle--close');
  } else {
    menu.style.display = 'none';
    buttonMenu.classList.remove('main-header__navigation-toggle--close');
  }
});
