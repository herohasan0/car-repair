import Link from './Link';

function Navigation() {
  return (
    <nav className="Navigation">
      <div className="container">
        <div className="Navigation-left">
          <Link text="Services" class="expand" />
          <Link text="Specials" />
          <Link text="Estimates" />
          <Link text="Reviews" />
          <Link text="Shop" class="expand" />
          <Link text="About" />
        </div>
        <div className="Navigation-right">
          <img src="/search.png" alt="" className="icon" />
          <div className="shopping-cart">
            <div className="shopping-cart-indicator">2</div>
            <img src="shopping-cart.png" alt="" className="icon" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
