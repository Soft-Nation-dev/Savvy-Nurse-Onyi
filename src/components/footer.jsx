import "../styles/footer.css"


function Footer (){
    return(
       <footer className="site-footer">
  <div className="footer-container">
    <div className="footer-column">
      <h4>About</h4>
      <p>Tech Savvy Nurse Onyi is dedicated to providing quality educational resources for nursing students and professionals.</p>
    </div>

    <div className="footer-column">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">About Onyi</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>

    <div className="footer-column">
      <h4>Follow Us</h4>
      <ul className="social-links">
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">YouTube</a></li>
      </ul>
    </div>
  </div>
  <div className="footer-bottom">
    &copy; {new Date().getFullYear()} Tech Savvy Nurse Onyi. All rights reserved.
  </div>
</footer>
 
    )
}

export default Footer;