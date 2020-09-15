export interface MenuItemsInterface {
    ruta?: string,
    titulo?: string,
    icon?: any,
    canExpand?: boolean,
    key?: string,
    submenu?: Array<MenuItemsInterface>;
}