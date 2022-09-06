import React from 'react';
import ProductListingPage from "../ProductListingPage/ProductListingPage.container";
import ProductDescriptionPage from "../ProductDescriptionPage/ProductDescriptionPage.container";
import Cart from "../Cart/Cart.container";
import {Link, Route, Routes} from 'react-router-dom';
import CurrencySwitcher from '../CurrencySwitcher/CurrencySwitcher.container';
import MiniCart from '../MiniCart/MiniCart.container';
import NavBar from "../NavBar/NavBar";


class App extends React.Component {
    render() {
        return (
            <div>

                <NavBar>
                    <Link to="/women">Women</Link>
                    <Link to="/men">Men</Link>
                    <Link to="/kids">Kids</Link>
                    <MiniCart/>
                    <CurrencySwitcher/>
                </NavBar>

                <Routes>
                    <Route path="/" element={<ProductListingPage/>}>
                    </Route>

                    <Route path="/details" element={<ProductDescriptionPage/>}>
                    </Route>

                    <Route path="/cart*" element={<Cart/>}>
                    </Route>

                </Routes>


            </div>
        );
    }
}

export default App;
