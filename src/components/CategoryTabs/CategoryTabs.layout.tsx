import {PropsWithChildren, PureComponent} from "react";
import { StyledCategoryTabs } from "./CategoryTabs.styled";
import { CategoryTabsProps } from "./CategoryTabs.types";
import Tab from "./Tab/Tab";
import {Link} from "react-router-dom";


export class CategoryTabs extends PureComponent<PropsWithChildren<CategoryTabsProps>> {
    render() {
        return (
            <StyledCategoryTabs>
                {this.props.categories.map(({name}: any) => <Tab key={name}><Link to={`category/${name}`}>{name}</Link></Tab>)}
            </StyledCategoryTabs>
        );
    }
}

export default CategoryTabs;
