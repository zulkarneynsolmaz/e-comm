
const CartCoupon = () => {
  return (
    <div className="actions-wrapper">
    <div className="coupon">
        <input type="text" className="input-text" placeholder="Kupon kodu" />
        <button className="btn">Kupon Uygula</button>
    </div>
    <div className="update-cart">
        <button className="btn">Güncelleme Sepeti</button>
    </div>
</div>
  )
}

export default CartCoupon
