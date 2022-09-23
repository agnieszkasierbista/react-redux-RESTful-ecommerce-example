import React, {PropsWithChildren, PureComponent} from 'react';
import ProductListingPage from '../ProductListingPage/ProductListingPage';
import ProductDescriptionPage from '../ProductDescriptionPage/ProductDescriptionPage';
import Cart from '../Cart/Cart';
import {Route, Routes} from 'react-router-dom';
import CurrencySwitcher from '../CurrencySwitcher/CurrencySwitcher';
import NavBar from '../NavBar/NavBar';
import MiniCartIcon from '../MiniCartIcon/MiniCartIcon';
import CategoryTabs from '../CategoryTabs/CategoryTabs';
import {AppProps} from './App.types';
import {getProductDescriptionPagePath} from '../helpers';
import {Category} from '../CategoryTabs/CategoryTabs.types';
import {StyledActions, StyledLogo} from './App.styled';
import MiniCartOverlay from '../MiniCartOverlay/MiniCartOverlay';


class App extends PureComponent<PropsWithChildren<AppProps>> {
  componentWillMount() {
    this.props.dispatchInit();
  }

  render() {

    const tabsRoutes = this.props.categories.map((category) => {
      return (
        <Route path={`categories/${category.name}`}
          key={category.name}
          element={<ProductListingPage
            shouldInclude={(product) => product.category === category.name}
            categoryName={category.name}
          />}
        >
        </Route>
      );
    });

    const categoryAll: Category = this.props.categories.filter((category) => category.name === 'all')[0];
    const productsRoutes = categoryAll?.products.map((product) => {

      const productPagePath = getProductDescriptionPagePath(product);

      return (
        <Route
          path={productPagePath}
          key={`${product.name}_${product.id}`}
          element={<ProductDescriptionPage/>}
        >
        </Route>
      );
    }
    )
        ;

    return (
      <>
        <NavBar>
          <CategoryTabs/>
          <StyledLogo src="/pictures/a-logo.svg"/>
          <StyledActions>
            <CurrencySwitcher/>
            <MiniCartIcon/>
          </StyledActions>
        </NavBar>

        <Routes>

          <Route path="/" element={<ProductListingPage shouldInclude={() => true} categoryName='all'/>}>
          </Route>

          {tabsRoutes}

          {productsRoutes}

          <Route path="/cart" element={<Cart isBigCart={true}/>}>
          </Route>

        </Routes>
        <MiniCartOverlay/>
      </>
    );
  }
}

export default App;
