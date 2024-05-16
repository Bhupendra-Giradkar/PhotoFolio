// importing the logo 
import logo from "../logo1.png"

        // Function to navigate to the home page
        function navigateToHomePage() {
            // Navigate to the home page or perform any other action
            window.location.href = "Navbar.js" // Replace "home_page.html" with the URL of your home page
        }
       
function Navbar() {
  return (
    <nav className="navbar" onClick={navigateToHomePage} >
      <img src={logo} alt="logo" width={60} />
      <div className="name">PhotoFolio</div>
    </nav>
  );
}


export default Navbar;
