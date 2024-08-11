import "./Header.css";
function Header() {
  return (
    <div>
      <header>
        <nav className="navbar-content">
          <ul>
            <li>
              <a href="Home">Home</a>
            </li>
            <br></br>
            <li>
              <a href="About us">About us</a>
            </li>
            <br></br>
            <li>
              <a href="Contact us"> Contact us</a>
            </li>
            <br></br>
            <li>
              <a href="Sign up"> Sign up</a>
            </li>
            <br></br>
            <li>
              <a href="Login">Login</a>
            </li>
            <br></br>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
