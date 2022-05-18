import {getElement} from '../../helper';

class AppBar extends HTMLElement {
  constructor() {
    super();
    this._isMenuDisplayed = false;
    this._menuItemClickHandler = this._onMenuItemClick.bind(this);
    this._pageScrollHendler = this._onPageScroll.bind(this);
  }

  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML =  `
      <div class="container">
        <div>
          <a href="/" class="app-bar__logo">
          <!--
            <img src="" alt="Logo" width="27px" height="27px">
          -->  
            <span>DRestaureant</span>
          
          </a>
        </div>
        <button id="menu-btn" aria-label="Hamburger Menu  ">☰</button>
        <nav class="menu">
          <ul class="menu__list"></ul>
        </nav>
      </div>
    `;
  }


  setMenu(menuList) {
    const menuListElement = getElement('.menu__list');
    menuList.forEach(({url, label}) => {
      const menuItemElement = `
        <li class="menu__item">
          <a href="${url}">${label}</a>
        </li>
      `;
      menuListElement.insertAdjacentHTML('beforeend', menuItemElement);
    });
    this._initAppBar();
  }

  _initAppBar() {
    this._bodyElement = getElement('body');
    this._menuButton = getElement('#menu-btn');
    this._menuItems = this.querySelectorAll('.menu__item');

    this._menuButton.addEventListener('click', (event) => {
      event.stopPropagation();
      this._menuHandler();
    });
  }

  _menuHandler() {
    this._isMenuDisplayed = !this._isMenuDisplayed;
    this._toggleMenu();
    this._toggleBodyOverflow();
    this._isMenuDisplayed ?
      this._addMenuItemsListener():
      this._removeMenuItemsListener();
  }

  _toggleMenu() {
    this._menuButton.textContent = this._isMenuDisplayed ? '⨉' : '☰';
    this.classList.toggle('menu__open');
  }

  //scroll event
  _toggleBodyOverflow() {
    this._bodyElement.classList.toggle('hideoverflow');
  }

  _addMenuItemsListener() {
    this._menuItems.forEach((menuItem) => {
      menuItem.addEventListener('click', this._menuItemClickHandler);
    });
  }

  _removeMenuItemsListener() {
    this._menuItems.forEach((menuItem) => {
      menuItem.removeEventListener('click', this._menuItemClickHandler);
    });
  }

  _onMenuItemClick(event) {
    event.stopPropagation();
    this._hideMenu();
  }

  _hideMenu() {
    if (this._isMenuDisplayed) {
      this._menuHandler();
    }
  }

  changeActiveMenuItem(url) {
    const activeMenu = getElement('.menu__item.active');
    const menuToActivate = getElement(`[href="#${url}"]`);

    activeMenu?.classList.remove('active');
    menuToActivate?.parentElement.classList.add('active');
    this._hideMenu();
  }

  set background(isContainHeroElement) {
    if (isContainHeroElement) {
      this._removeAppBarBackground();
      this._addTransition();
      window.addEventListener('scroll', this._pageScrollHendler);
    } else {
      this._removeTransition();
      window.removeEventListener('scroll', this._pageScrollHendler);
      this._addBackgroundToAppBar();
    }
  }

  _onPageScroll() {
    const HERO_ELEMENT_HEIGHT = 320;
    const pagePostion = window.pageYOffset;

    pagePostion > HERO_ELEMENT_HEIGHT ?
      this._addBackgroundToAppBar() :
      this._removeAppBarBackground();
  }

  _addTransition() {
    this.style.transition = 'background-color 0.4s';
  }

  _removeTransition() {
    this.style.transition = null;
  }

  _addBackgroundToAppBar() {
    this.classList.add('background');
  }

  _removeAppBarBackground() {
    this.classList.remove('background');
  }
}

customElements.define('app-bar', AppBar);
