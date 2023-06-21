function Header() {
  return (
    <header className="header section max-w-container">
      <h1 className="header__title">
        <span>Everything</span>
        <span>Happens For</span>
        <span>A Reason</span>
      </h1>
      <p className="header__subtitle">
        LOCOMOTIVE SCROLL <br /> & GREENSOCK 3
      </p>
      <div className="header__decor-circle"></div>
      <div className="header__gallery">
        <div className="header__gallery--left">
          <div className="header__gallery-image header__gallery-image--l"><img src="/images/2.jpg" /></div>
          <div className="header__gallery-image header__gallery-image--m"><img src="/images/3.jpg"/></div>
          <div className="header__gallery-image header__gallery-image--s"><img src="/images/4.jpg"/></div>
        </div>
        <div className="header__gallery--right">
          <div className="header__gallery-image header__gallery-image--l"><img src="/images/5.jpg"/></div>
          <div className="header__gallery-image header__gallery-image--m"><img src="/images/6.jpg"/></div>
          <div className="header__gallery-image header__gallery-image--s"><img src="/images/7.jpg"/></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
