export interface MenuItemsType {
    ruta?: string,
    titulo?: string,
    icon?: any,
    canExpand?: boolean,
    key?: string,
    submenu?: Array<MenuItemsType>;
}