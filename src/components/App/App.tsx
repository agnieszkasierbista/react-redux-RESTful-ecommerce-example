import React from 'react';
import ProductListingPage from "../ProductListingPage/ProductListingPage";
import ProductDescriptionPage from "../ProductDescriptionPage/ProductDescriptionPage";
import Cart from "../Cart/Cart";
import {Link, Route, Routes} from 'react-router-dom';
import CurrencySwitcher from '../CurrencySwitcher/CurrencySwitcher';
import MiniCart from '../MiniCart/MiniCart';
import NavBarLayout from "../NavBar/NavBar.layout";


class App extends React.Component {
    render() {
        return (
            <div>

                <NavBarLayout>
                    <Link to="/women">Women</Link>
                    <Link to="/men">Men</Link>
                    <Link to="/kids">Kids</Link>
                    <MiniCart/>
                    <CurrencySwitcher/>
                </NavBarLayout>

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
