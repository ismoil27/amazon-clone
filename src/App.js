import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <Fragment>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/basket" element={<Cart />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
