import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { Fragment, useEffect } from "react";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./components/context/contextProvider";
import Payment from "./components/Payment";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(
  "pk_test_51Kld01KwHuGztBZbDJxHv6jOtLGBBrJ6jlK3f90ggsMVt5Kj5niRFh0WLpK39yjLswKTLONgnD7HpsnET6mLb0XI00uJ1Xut0k"
);

function App() {
  const [{}, dispatch] = useStateValue();

  const stripe = useStripe();
  const element = useElements();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("The user is >>>>", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <Fragment>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/basket" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/payment__page"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
