import {PropsWithChildren, PureComponent} from "react";
import {StyledCategoryTabs} from "./CategoryTabs.styled";
import {CategoryTabsProps} from "./CategoryTabs.types";
import Tab from "./Tab/Tab";
import {Link} from "react-router-dom";
import {getTabLink} from "../helpers";


export class CategoryTabs extends PureComponent<PropsWithChildren<CategoryTabsProps>> {
    render() {

        return (
            <StyledCategoryTabs>
                {this.props.categories.map(({name}: any) => <Tab key={name}><Link
                    to={getTabLink(name)}>{name}</Link></Tab>)}
            </StyledCategoryTabs>
        );
    }
}

export default CategoryTabs;
