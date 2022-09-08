import React, {PropsWithChildren, PureComponent} from 'react';
import ProductListingPage from "../ProductListingPage/ProductListingPage";
import ProductDescriptionPage from "../ProductDescriptionPage/ProductDescriptionPage";
import Cart from "../Cart/Cart";
import {Route, Routes} from 'react-router-dom';
import CurrencySwitcher from '../CurrencySwitcher/CurrencySwitcher';
import MiniCart from '../MiniCart/MiniCart';
import NavBar from "../NavBar/NavBar.layout";
import MiniCartIcon from '../MiniCartIcon/MiniCartIcon';
import CategoryTabs from '../CategoryTabs/CategoryTabs';
import {AppProps} from './App.types';


class App extends PureComponent<PropsWithChildren<AppProps>> {
    componentWillMount() {
        this.props.dispatchInit();
    }

    render() {
        return (
            <>

                <NavBar>
                    <CategoryTabs/>

                    <MiniCartIcon/>
                    <CurrencySwitcher/>
                </NavBar>

                <Routes>

                    {}
                    <Route path="/" element={<ProductListingPage shouldInclude={() => true} />}>
                    </Route>

                    <Route path="/categories/clothes" element={<ProductListingPage shouldInclude={(product) => product.category === 'clothes'} />}>
                    </Route>

                    <Route path="/categories/tech" element={<ProductListingPage shouldInclude={(product) => product.category === 'tech'} />}>
                    </Route>

                    <Route path="/details" element={<ProductDescriptionPage/>}>
                    </Route>

                    <Route path="/cart" element={<Cart/>}>
                    </Route>

                    <Route path="/mini-cart" element={<MiniCart/>}>
                    </Route>

                </Routes>

            </>
        );
    }
}

export default App;
