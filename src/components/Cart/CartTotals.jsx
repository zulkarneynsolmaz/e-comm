import { useContext, useState } from "react";
import { CardContext } from "../../context/CardProvider"
const CartTotals = () => {
  const [fastCargoChecked, setFastCargoChecked] = useState(false)
  const {cartItems} = useContext(CardContext);

  const cartItemTotals = cartItems.map((item)=> {
    const itemTotal = item.price.newPrice * item.quantity;

    return itemTotal
  });
  const subTotals = cartItemTotals.reduce((previousValue, 
    currentValue)=> {
      return previousValue + currentValue;
  }, 0);

  const cargoFee = 15;

  const CartTotals = fastCargoChecked ? (subTotals + cargoFee).toFixed(2) : subTotals.toFixed(2);
  return (
    <div className="cart-totals">
      <h2>Sepet toplamları</h2>
      <table>1
        <tbody>
          <tr className="cart-subtotal">
            <th>Ara Toplam</th>
            <td>
              <span id="subtotal">${subTotals.toFixed(2)}</span>
            </td>
          </tr>
          <tr>
            <th>Nakliye</th>
            <td>
              <ul>
                <li>
                  <label>
                  Hızlı Kargo: ₺15.00                    <input type="checkbox" id="fast-cargo" checked={fastCargoChecked} onChange={()=> setFastCargoChecked(!fastCargoChecked)} />
                  </label>
                </li>
                <li>
                  <a href="#">Adres Değiştir</a>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>Total</th>
            <td>
              <strong id="cart-total">₺{CartTotals}</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="checkout">
        <button className="btn btn-lg">Ödeme işlemine geçin</button>
      </div>
    </div>
  );
};

export default CartTotals;
