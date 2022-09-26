import {PropsWithChildren, PureComponent} from 'react';
import { WithoutMiniCartProps } from './WithoutMiniCart.types';

export default class WithoutMiniCart extends PureComponent<PropsWithChildren<WithoutMiniCartProps>> {

  componentDidMount() {
    this.props.dispatchSetMiniCartState(false);
  }

  componentWillUnmount() {
    this.props.dispatchSetMiniCartState(true);
  }

  render() {
    return this.props.children;
  }
}