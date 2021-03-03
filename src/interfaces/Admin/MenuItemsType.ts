export interface IMenuItems {
    path?: string,
    title?: string,
    icon?: any,
    canExpand?: boolean,
    key?: string,
    submenu?: Array<IMenuItems>;
}