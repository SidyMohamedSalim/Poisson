import { Link } from "react-router-dom"

const Header = () => {
    return ( 
        <header class="header" id="header">
        <div class="top-nav">
          <div class="container d-flex">
            <p>Order Online Or Call Us: (001) 2222-55555</p>
            <ul class="d-flex">
              <li><Link to="#">About Us</Link></li>
              <li><Link to="#">FAQ</Link></li>
              <li><Link to="#contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div class="navigation">
          <div class="nav-center container d-flex">
          <Link to="/" class="logo"><h1>Dans</h1></Link>
  
            <ul class="nav-list d-flex">
              <li class="nav-item">
                <Link to="/" class="nav-link">Home</Link>
              </li>
              <li class="nav-item">
                <Link to="product.html" class="nav-link">Shop</Link>
              </li>
              <li class="nav-item">
              <Link to="#terms" class="nav-link">Terms</Link>
              </li>
              <li class="nav-item">
                <Link to="#about" class="nav-link">About</Link>
              </li>
              <li class="nav-item">
                <Link to="#contact" class="nav-link">Contact</Link>
              </li>
              <li class="icons d-flex">
              <Link to="login.html" class="icon">
                <i class="bx bx-user"></i>
             </Link>
              <div class="icon">
                <i class="bx bx-search"></i>
              </div>
              <div class="icon">
                <i class="bx bx-heart"></i>
                <span class="d-flex">0</span>
              </div>
              <Link to="cart.html" class="icon">
                <i class="bx bx-cart"></i>
                <span class="d-flex">0</span>
              </Link>
            </li>
            </ul>
  
            <div class="icons d-flex">
              <Link to="login.html" class="icon">
                <i class="bx bx-user"></i>
              </Link>
              <div class="icon">
                <i class="bx bx-search"></i>
              </div>
              <div class="icon">
                <i class="bx bx-heart"></i>
                <span class="d-flex">0</span>
              </div>
              <Link to="cart.html" class="icon">
                <i class="bx bx-cart"></i>
                <span class="d-flex">0</span>
              </Link>
            </div>
  
            <div class="hamburger">
              <i class="bx bx-menu-alt-left"></i>
            </div>
          </div>
        </div>
  
      <div class="hero">
        <div class="glide" id="glide_1">
          <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
              <li class="glide__slide">
                <div class="center">
                  <div class="left">
                    <span class="">New Inspiration 2020</span>
                    <h1 class="">NEW COLLECTION!</h1>
                    <p>Trending from men's and women's  style collection</p>
                    <Link to="#" class="hero-btn">SHOP NOW</Link>
                  </div>
                  <div class="right">
                      <img class="img1" src="./images/hero-1.png" alt="" />
                  </div>
                </div>
              </li>
              <li class="glide__slide">
                <div class="center">
                  <div class="left">
                    <span>New Inspiration 2020</span>
                    <h1>THE PERFECT MATCH!</h1>
                    <p>Trending from men's and women's  style collection</p>
                    <Link to="#" class="hero-btn">SHOP NOW</Link>
                  </div>
                  <div class="right">
                    <img class="img2" src="./images/hero-2.png" alt="" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </header>

     );
}
 
export default Header;