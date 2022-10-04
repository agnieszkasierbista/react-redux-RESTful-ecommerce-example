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
import {StyledActions, StyledLogo} from './App.styled';
import MiniCartOverlay from '../MiniCartOverlay/MiniCartOverlay';
import WithoutMiniCart from '../WithoutMiniCart/WithoutMiniCart';
import MiniCart from '../MiniCart/MiniCart';

class App extends PureComponent<PropsWithChildren<AppProps>> {
  componentWillMount() {
    this.props.dispatchInit();
  }

  render() {

    const tabsRoutes = this.props.categories.map((category) => {
      if(category.name === 'all') {
        return (
          <Route path="/" key={category.name} element={<ProductListingPage shouldInclude={() => true} categoryName='all'/>}>
          </Route>
        );
      } else {
        return (
          <Route path={`categories/${category.name}`}
            key={category.name}
            element={<ProductListingPage
              shouldInclude={(product) => product.category === category.name}
              categoryName={category.name}
            />}
          >
          </Route>
        );}
    });



    return (
      <>
        <NavBar>
          <CategoryTabs/>
          <StyledLogo src="/pictures/a-logo.svg" alt="logo"/>
          <StyledActions>
            <CurrencySwitcher/>
            <MiniCartIcon/>
          </StyledActions>
        </NavBar>

        <Routes>

          {tabsRoutes}

          <Route path="/cart" element={
            <WithoutMiniCart>
              <Cart isBigCart={true}/>
            </WithoutMiniCart>
          }>
          </Route>

          <Route path="/categories/:category/:id" element={<ProductDescriptionPage/>} />

        </Routes>
        <MiniCartOverlay/>
        <MiniCart/>
      </>
    );
  }
}

export default App;
