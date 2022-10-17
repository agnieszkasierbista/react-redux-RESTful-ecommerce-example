import React, {PropsWithChildren, PureComponent} from 'react';
import ProductListingPage from '../ProductListingPage/ProductListingPage';
import ProductDescriptionPage from '../ProductDescriptionPage/ProductDescriptionPage';
import Cart from '../Cart/Cart';
import {Route, Routes} from 'react-router-dom';
import CurrencySwitcher from '../CurrencySwitcher/CurrencySwitcher';
import UserPanel from '../UserPanel/UserPanel';
import NavBar from '../NavBar/NavBar';
import MiniCartIcon from '../MiniCartIcon/MiniCartIcon';
import CategoryTabs from '../CategoryTabs/CategoryTabs';
import {AppProps} from './App.types';
import {StyledActions, StyledLink, StyledLogo} from './App.styled';
import MiniCartOverlay from '../MiniCartOverlay/MiniCartOverlay';
import WithoutMiniCart from '../WithoutMiniCart/WithoutMiniCart';
import MiniCart from '../MiniCart/MiniCart';

class App extends PureComponent<PropsWithChildren<AppProps>> {
  componentDidMount() {
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
          <StyledLink to="/" onClick={() => this.props.dispatchSetCurrentNavigation('/')}>
            <StyledLogo src="/pictures/shapes.svg" alt="logo"/>
          </StyledLink>
          <CategoryTabs/>
          <StyledActions>
            <UserPanel />
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
