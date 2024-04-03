import React from "react";
import "./Footer.css"
import Policy from "../Policy/Policy";
const Footer = () => {
  return (
    <React.Fragment>
      <Policy />
     <footer className="footer">
      <div className="subscribe-row">
        <div className="container">
          <div className="footer-row-wrapper">
            <div className="footer-subscribe-wrapper">
              <div className="footer-subscribe">
                <div className="footer-subscribe-top">
                  <h3 className="subscribe-title">
                  Yeni ürünler, indirimler ve daha fazlası hakkında bilgi almak için e-postalarımızı alın.
                  </h3>
                  <p className="subscribe-desc">
                  İlk siparişinizde 100₺ değerinde indirim kuponunu size e-posta ile göndereceğiz
                    150 ₺ üzerinde.
                  </p>
                </div>
                <div className="footer-subscribe-bottom">
                  <form>
                    <input
                      type="text"
                      placeholder="E-posta adresinizi girin."
                    />
                    <button className="btn">Abone Olun</button>
                  </form>
                  <p className="privacy-text">
                  Abone olarak aşağıdakileri kabul etmiş olursunuz{" "}
                    <a href="#">
                    Şartlar ve Koşullar ve Gizlilik ve Çerez Politikası.
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="footer-contact-wrapper">
              <div className="footer-contact-top">
                <h3 className="contact-title">
                Yardıma ihtiyacınız var mı? <br />
                  (+90) 123 456 78 90
                </h3>
                <p className="contact-desc">Sabah 8:00 - Akşam 7:00 arası hizmetinizdeyiz</p>
              </div>
              <div className="footer-contact-bottom">
                <div className="download-app">
                  <a href="#">
                    <img src="/imgimg/footer/app-store.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="/imgimg/footer/google-play.png" alt="" />
                  </a>
                </div>
                <p className="privacy-text">
                  <strong>Alışveriş Uygulaması:</strong> Manzaramızı Odanızda Deneyin
                  özelliğini kullanabilir, kayıtları yönetebilir ve ödeme bilgilerini kaydedebilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="widgets-row">
        <div className="container">
          <div className="footer-widgets">
            <div className="brand-info">
              <div className="footer-logo">
                <a href="index.html" className="logo">
                  LOGO
                </a>
              </div>
              <div className="footer-desc">
                <p>
                  {" "}
                  Başkent Mağazası: Kalite, çeşitlilik ve uygun fiyatlarla alışverişin adresi. Her ihtiyaca uygun ürünlerimizle sizleri memnun etmek için buradayız.
                </p>
              </div>
              <div className="footer-contact">
                <p>
                  <a href="tel:555 555 55 55">(+800) 1234 5678 90</a> –{" "}
                  <a href="mailto:info@example.com">info@example.com</a>
                </p>
              </div>
            </div>
            <div className="widget-nav-menu">
              <h4>Bilgi</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">Hakkımızda</a>
                </li>
                <li>
                  <a href="#">Gizlilik Politikası</a>
                </li>
                <li>
                  <a href="#">İade Politikası</a>
                </li>
                <li>
                  <a href="#">Nakliye Politikası</a>
                </li>
                <li>
                  <a href="#">Dropshipping</a>
                </li>
              </ul>
            </div>
            <div className="widget-nav-menu">
              <h4>Hesap</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">Gösterge Tablosu</a>
                </li>
                <li>
                  <a href="#">Siparişlerim</a>
                </li>
                <li>
                  <a href="#">İstek Listem</a>
                </li>
                <li>
                  <a href="#">Hesap Bilgileri</a>
                </li>
                <li>
                  <a href="#">Siparişlerimi Takip Et</a>
                </li>
              </ul>
            </div>
            <div className="widget-nav-menu">
              <h4>Mağaza</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">İştirak</a>
                </li>
                <li>
                  <a href="#">En Çok Satanlar</a>
                </li>
                <li>
                  <a href="#">İndirim</a>
                </li>
                <li>
                  <a href="#">Son Ürünler</a>
                </li>
                <li>
                  <a href="#">Satış Ürünleri</a>
                </li>
              </ul>
            </div>
            <div className="widget-nav-menu">
              <h4>Categories</h4>
              <ul className="menu-list">
                <li>
                  <a href="#">Kadınlar</a>
                </li>
                <li>
                  <a href="#">Erkekler</a>
                </li>
                <li>
                  <a href="#">Çantalar</a>
                </li>
                <li>
                  <a href="#">Dış Giyim</a>
                </li>
                <li>
                  <a href="#">Ayakkabılar</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-row">
        <div className="container">
          <div className="footer-copyright">
            <div className="site-copyright">
              <p>
              Telif Hakkı 2024 © E-Ticaret Teması. Tüm hakları saklıdır. Güçlendirilmiş
                Zülkarneyn Solmaz tarafından.
              </p>
            </div>
            <a href="#">
              <img src="/imgimg/footer/cards.png" alt="" />
            </a>
            <div className="footer-menu">
              <ul className="footer-menu-list">
                <li className="list-item">
                  <a href="#">Gizlilik Politikası</a>
                </li>
                <li className="list-item">
                  <a href="#">Şartlar ve Koşullar</a>
                </li>
                <li className="list-item">
                  <a href="#">İade Politikası</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </React.Fragment>
   
  );
};
export default Footer;
