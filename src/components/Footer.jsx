import { Email, LocalPhone } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "../styles/Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <a href="/">
          <img src="/assets/logo.png" alt="logo" />
        </a>
      </div>

      <div className="footer_center">
        <h3>Useful Links</h3>
        <ul>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
          </li>
          <li>
            <Link to="/return-and-refund-policy">Return and Refund Policy</Link>
          </li>
        </ul>
      </div>

      <div className="footer_right">
        <h3>Contact</h3>
        <div className="footer_right_info">
          <LocalPhone />
          <p>+84 383769194</p>
        </div>
        <div className="footer_right_info">
          <Email />
          <p>homestay@gmail.com</p>
          
        </div>
        <img src="/assets/payment.png" alt="payment" />
      </div>
    </div>
  );
};

export default Footer;
