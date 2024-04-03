import "./CampaignItem.css"
const CampaignItem = () => {
  return (
    <div className="campaign-item">
          <h3 className="campaign-title">Moda Ayı <br />
          Başkent Mağazasında  <br />
          Hazır</h3>
          <p className="campaign-desc">Başkent Mağazası, alışverişinizi keyifli ve pratik hale getiren geniş ürün yelpazesiyle hizmetinizde! İhtiyaçlarınıza uygun hazır giyim, ayakkabı, ev tekstili ve daha fazlasını bulabileceğiniz mağazamız, kaliteli ürünleri uygun fiyatlarla sunarak müşteri memnuniyetini ön planda tutuyor. </p>
          <a href="#" className="btn btn-primary">
          Tümünü Görüntüle
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
  )
}

export default CampaignItem
