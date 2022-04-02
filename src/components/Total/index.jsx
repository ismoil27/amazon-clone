import React from "react";
import CurrencyFormat from "react-currency-format";
import "./total.css";

const Total = () => {
  return (
    <div className="total">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Total (0 item):
              <strong> {`${value}`} </strong>
            </p>
            <small className="total__gift">
              <input className="total__input" type="checkbox" /> This order
              contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className="total__btn">Proceed to Checkout</button>
    </div>
  );
};

export default Total;
