export interface MenuItemsType {
    path?: string,
    title?: string,
    icon?: any,
    canExpand?: boolean,
    key?: string,
    submenu?: Array<MenuItemsType>;
}