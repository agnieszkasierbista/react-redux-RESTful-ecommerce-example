import React, {PropsWithChildren, PureComponent} from 'react';
import ProductListingPage from '../ProductListingPage/ProductListingPage';
import ProductDescriptionPage from '../ProductDescriptionPage/ProductDescriptionPage';
import Cart from '../Cart/Cart';
import {Route, Routes} from 'react-router-dom';
import CurrencySwitcher from '../CurrencySwitcher/CurrencySwitcher';
import MiniCart from '../MiniCart/MiniCart';
import NavBar from '../NavBar/NavBar.layout';
import MiniCartIcon from '../MiniCartIcon/MiniCartIcon';
import CategoryTabs from '../CategoryTabs/CategoryTabs';
import {AppProps} from './App.types';
import {getProductDescriptionPagePath} from '../helpers';
import {Category} from '../CategoryTabs/CategoryTabs.types';


class App extends PureComponent<PropsWithChildren<AppProps>> {
  componentWillMount() {
    this.props.dispatchInit();
  }

  render() {

    const tabsRoutes = this.props.categories.map((category) => {
      return (
        <Route path={`categories/${category.name}`}
          key={category.name}
          element={
            <ProductListingPage
              shouldInclude={(product) => product.category === category.name}
            />
          }>
        </Route>
      );
    });

    const categoryAll: Category = this.props.categories.filter((category, idx) => category.name === 'all')[0];
    const productsRoutes = categoryAll?.products.map((product) => {

      const productPath = getProductDescriptionPagePath(product);

      return (
        <Route
          path={productPath}
          key={`${product.name}_${product.id}`}
          element={<ProductDescriptionPage/>}
        >
        </Route>
      );
    });
    return (
      <>
        <NavBar>
          <CategoryTabs/>
          <MiniCartIcon/>
          <CurrencySwitcher/>
        </NavBar>

        <Routes>

          <Route path="/" element={<ProductListingPage shouldInclude={() => true}/>}>
          </Route>

          {tabsRoutes}

          {productsRoutes}

          <Route path="/details" element={<ProductDescriptionPage/>}>
          </Route>

          <Route path="/cart" element={<Cart/>}>
          </Route>

        </Routes>
      </>
    );
  }
}

export default App;
