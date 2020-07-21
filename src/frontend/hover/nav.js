import NavigationHover from './NavigationHover.js';


logoHover() {
  var navLogo = document.getElementsByClassName('nav_logo')[0],
    randAnimation = Math.floor(Math.random() * 10) + 1;
  if (!navLogo.className.includes(' show-a')) {
    navLogo.className += ' show-a' + randAnimation;
  }
  this.setState({showHoverMenu: true})
}
logoHoverOut() {
  var navLogo = document.getElementsByClassName('nav_logo')[0];
  if (navLogo.className.includes(' show-a')) {
    navLogo.className = 'nav_logo';
  }
  this.setState({showHoverMenu: false})
}

render() {
  var { isLangMore, isSound, showHoverMenu } = this.state;
  var { langMore, switchSound, NotificationBell, NavigationCart } = this;
  var {


    <div className="nav_top">
          <div className="section">
            <div
              onMouseEnter={this.logoHover}
              onMouseOut={this.logoHoverOut}
            >
              <Link
                className="nav_logo"
                to="/"
                onClick={this.goTop}
              >
                <img className="static_logo" src={logo} />
                <img className="animated_logo l1" src={logo1} />
                <img className="animated_logo l2" src={logo2} />
                <img className="animated_logo l3" src={logo3} />
                <img className="animated_logo l4" src={logo4} />
                <img className="animated_logo l5" src={logo5} />
                <img className="animated_logo l6" src={logo6} />
                <img className="animated_logo l7" src={logo7} />
                <img className="animated_logo l8" src={logo8} />
                <img className="animated_logo l9" src={logo9} />
                <img className="animated_logo l10" src={logo10} />
              </Link>
              <NavigationHover show={showHoverMenu}/>
            </div>