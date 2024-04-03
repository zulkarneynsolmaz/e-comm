import "./Policy.css";
const Policy = () => {
  return (
    <section className="policy">
    <div className="container">
      <ul className="policy-list">
        <li className="policy-item">
          <i className="bi bi-truck"></i>
          <div className="policy-texts">
            <strong>ÜCRETSİZ TESLİMAT</strong>
            <span>59,89 ₺ den başlayan fiyatlarla</span>
          </div>
        </li>
        <li className="policy-item">
          <i className="bi bi-headset"></i>
          <div className="policy-texts">
            <strong>7/24 DESTEK</strong>
            <span>24 saat çevrimiçi</span>
          </div>
        </li>
        <li className="policy-item">
          <i className="bi bi-arrow-clockwise"></i>
          <div className="policy-texts">
            <strong> 30 GÜN İADE</strong>
            <span>Sadece 30 gün içinde iade edin</span>
          </div>
        </li>
        <li className="policy-item">
          <i className="bi bi-credit-card"></i>
          <div className="policy-texts">
            <strong> ÖDEME YÖNTEMİ</strong>
            <span>Güvenli Ödeme</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
  )
}

export default Policy
