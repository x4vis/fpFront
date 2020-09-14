export interface MenuItemsInterface {
    ruta?: string,
    titulo?: string,
    icon?: any,
    canExpand?: boolean,
    key?: string,
    submenu?: SubMenuItemsInterface;
}

export interface SubMenuItemsInterface {
    subtitulo?: string,
    menu?: Array<MenuItemsInterface> 
}