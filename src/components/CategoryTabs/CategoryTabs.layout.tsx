import React, {PropsWithChildren, PureComponent} from 'react';
import {StyledCategoryTabs} from './CategoryTabs.styled';
import {Category, CategoryTabsProps} from './CategoryTabs.types';
import Tab from './Tab/Tab';
import {Link} from 'react-router-dom';
import {getTabLink} from '../helpers';


export class CategoryTabs extends PureComponent<PropsWithChildren<CategoryTabsProps>> {
  render() {

    return (
      <StyledCategoryTabs>
        {this.props.categories.map(({name}: Category, idx) => <Tab key={name + idx + name}><Link
          to={getTabLink(name)}>{name}</Link></Tab>)}
      </StyledCategoryTabs>
    );
  }
}

export default CategoryTabs;
