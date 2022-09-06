import {PropsWithChildren, PureComponent} from "react";
import { StyledCategoryTabs } from "./CategoryTabs.styled";
import { CategoryTabsProps } from "./CategoryTabs.types";
import Tab from "./Tab/Tab";
import {Link} from "react-router-dom";

const categories = ["one", "two", "three"];

export class CategoryTabs extends PureComponent<PropsWithChildren<CategoryTabsProps>> {
    render() {
        return (
            <StyledCategoryTabs>
                {categories.map((item, idx) => <Tab key={idx}><Link to={`details/${item}`}>{item}</Link></Tab>)}
            </StyledCategoryTabs>
        );
    }
}

export default CategoryTabs;
