/* в этот файл добавляет скрипты*/
const buttonMenu = document.querySelector('.main-header__navigation-toggle');
const menu = document.querySelector('.main-header__navigation');

const mqLarge = window.matchMedia('(max-width: 767px)');
if (mqLarge.matches){
  buttonMenu.classList.add('main-header__navigation-toggle--open');
  menu.classList.add('main-header__navigation--close');

  buttonMenu.addEventListener('click', () =>{
    if(menu.classList.contains('main-header__navigation--close')) {
      menu.classList.remove('main-header__navigation--close');
      menu.classList.add('main-header__navigation--open');
      buttonMenu.classList.add('main-header__navigation-toggle--close');
    } else {
      menu.classList.remove('main-header__navigation--open');
      menu.classList.add('main-header__navigation--close');
      buttonMenu.classList.remove('main-header__navigation-toggle--close');
    }
  });
}
