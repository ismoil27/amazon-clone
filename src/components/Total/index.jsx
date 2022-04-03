import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../context/contextProvider";
import { getBasketTotal } from "../context/reducer";
import "./total.css";

const Total = (value) => {
  const [{ basket }] = useStateValue();

  return (
    <div className="total">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Total ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="total__gift">
              <input className="total__input" type="checkbox" /> This order
              contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className="total__btn">Proceed to Checkout</button>
    </div>
  );
};

export default Total;
