import React from 'react'
import "./Css/Subtotal.css"
import { useHistory } from "react-router-dom";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "./StateProvider";
import {getBasketTotal} from "./reducer";

function Subtotal() {
  const history= useHistory();
  const [{ basket }, dispatch] = useStateValue();
    return (
        <div class="subtotal">
          <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      /> 
       <button onClick = {e => history.push('/payment')}>Proceed to Checkout</button> 
        </div>
    )
}

export default Subtotal
