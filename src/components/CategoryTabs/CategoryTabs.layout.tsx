import React, {PropsWithChildren, PureComponent} from 'react';
import {StyledCategoryTabLink, StyledCategoryTabs} from './CategoryTabs.styled';
import {Category, CategoryTabsProps} from './CategoryTabs.types';
import Tab from './Tab/Tab';
import {getTabLink, getTabPath} from '../helpers';


export class CategoryTabs extends PureComponent<PropsWithChildren<CategoryTabsProps>> {
  render() {

    return (
      <StyledCategoryTabs>
        {this.props.categories.map(({name}: Category, idx) => {
          return (
            <Tab
              key={name + idx + name}
              shouldHighlight={this.props.currentNavigation === getTabPath(name)}
              pathName={getTabPath(name)}
            >
              <StyledCategoryTabLink
                to={getTabLink(name)}>
                {name}
              </StyledCategoryTabLink>
            </Tab>
          );
        })}
      </StyledCategoryTabs>
    );
  }
}

export default CategoryTabs;
