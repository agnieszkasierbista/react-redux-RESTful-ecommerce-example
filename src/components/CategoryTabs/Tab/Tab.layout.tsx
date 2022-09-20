import {PropsWithChildren, PureComponent} from 'react';
import { StyledTab } from './Tab.styled';
import { TabProps } from './Tab.types';

export class Tab extends PureComponent<PropsWithChildren<TabProps>> {
  render() {
    return (
      <StyledTab
        shouldHighlight={this.props.shouldHighlight}
        onClick={() => this.props.dispatchSetCurrentNavigation(this.props.pathName)}
      >
        {this.props.children}
      </StyledTab>
    );
  }
}

export default Tab;
