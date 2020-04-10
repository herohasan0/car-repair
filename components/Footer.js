function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-main">
        <div className="container">
          <div className="Footer-main-section">
            <img
              src="/logo-black.svg"
              alt=""
              className="Footer-main-section-logo"
            />
            <p className="Footer-main-section-text">
              This is a blurb about the company sed do eiusmod tempor incididunt
              ut labore et dolore ex magna aliqua.
            </p>
            <div className="Footer-main-section-social">
              <a href="" className="Footer-main-section-social-media">
                <img src="/facebook.svg" alt="" />
              </a>
              <a href="" className="Footer-main-section-social-media">
                <img src="/twitter.svg" alt="" />
              </a>
              <a href="" className="Footer-main-section-social-media">
                <img src="/instagram.svg" alt="" />
              </a>
              <a href="" className="Footer-main-section-social-media">
                <img src="/youtube.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="Footer-main-links">
            <h4 className="Footer-main-links-title">EXPLORE LINKS</h4>
            <div className="Footer-main-links-container">
              <a href="" className="Footer-main-links-container-link">
                About
              </a>
              <a href="" className="Footer-main-links-container-link">
                Services
              </a>
              <a href="" className="Footer-main-links-container-link">
                Specials
              </a>
              <a href="" className="Footer-main-links-container-link">
                Estimates
              </a>
              <a href="" className="Footer-main-links-container-link">
                Reviews
              </a>
              <a href="" className="Footer-main-links-container-link">
                Shop
              </a>
              <a href="" className="Footer-main-links-container-link">
                Careers
              </a>
              <a href="" className="Footer-main-links-container-link">
                FAQs
              </a>
            </div>
          </div>
          <div className="Footer-main-contact">
            <h4 className="Footer-main-contact-title">CONTACT</h4>
            <div className="Footer-main-contact-container">
              <div className="Footer-main-contact-container-line">
                <img
                  src="/place.svg"
                  alt=""
                  className="Footer-main-contact-container-line-img"
                />
                <p className="Footer-main-contact-container-line-text">
                  321 Pikes Place Parkway Seattle, WA 54321
                </p>
              </div>
              <div className="Footer-main-contact-container-line">
                <img
                  src="/smartphone.svg"
                  alt=""
                  className="Footer-main-contact-container-line-img"
                />
                <p className="Footer-main-contact-container-line-text">
                  (555) 765-4321
                </p>
              </div>
              <div className="Footer-main-contact-container-line">
                <img
                  src="/email.svg"
                  alt=""
                  className="Footer-main-contact-container-line-img"
                />
                <p className="Footer-main-contact-container-line-text">
                  Info@company.com
                </p>
              </div>
              <div className="Footer-main-contact-container-line">
                <img
                  src="/timer.svg"
                  alt=""
                  className="Footer-main-contact-container-line-img"
                />
                <p className="Footer-main-contact-container-line-text">
                  Mon - Sat: 7:000 am - 6:00 pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Footer-bottom">
        <div className="container">
          <p className="Footer-bottom-left">
            Tagline lorem ipsum dolor sit amet, consectetur adipiscing eiusmod
          </p>
          <p className="Footer-bottom-right">
            © 2018 Company. <span>Privacy Policy | Terms & Conditions</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
