import React from 'react';
import ProductListingPage from "../ProductListingPage/ProductListingPage";
import ProductDescriptionPage from "../ProductDescriptionPage/ProductDescriptionPage";
import Cart from "../Cart/Cart";
import {Route, Routes} from 'react-router-dom';
import CurrencySwitcher from '../CurrencySwitcher/CurrencySwitcher';
import MiniCart from '../MiniCart/MiniCart';
import NavBar from "../NavBar/NavBar.layout";
import MiniCartIcon from '../MiniCartIcon/MiniCartIcon';
import CategoryTabs from '../CategoryTabs/CategoryTabs';


class App extends React.Component {
    render() {
        return (
            <>

                <NavBar>
                    <CategoryTabs>

                    </CategoryTabs>

                    <MiniCartIcon/>
                    <CurrencySwitcher />
                </NavBar>

                <Routes>
                    <Route path="/" element={<ProductListingPage/>}>
                    </Route>

                    <Route path="/details" element={<ProductDescriptionPage/>}>
                    </Route>

                    <Route path="/cart*" element={<Cart/>}>
                    </Route>

                    <Route path="/mini-cart*" element={<MiniCart/>}>
                    </Route>

                </Routes>

            </>
        );
    }
}

export default App;
