import { MenuItemsInterface } from "../interfaces/Admin/MenuItemsInterfaces";
import { AppleOutlined } from '@ant-design/icons';

export const MenuItems: Array<MenuItemsInterface> = [
    {
        ruta: '/admin/usuarios',
        titulo: 'Usuarios',
        icon: AppleOutlined,
        canExpand: false,
        key: "1"
    },
    {
        ruta: '/admin/productos',
        titulo: 'Productos',
        icon: AppleOutlined,
        canExpand: false,
        key: "2"
    },
    /* {
        ruta: '/admin/editar-usuario',
        titulo: 'Editar usuario',
        icon: AppleOutlined,
        canExpand: true,
        key: "2",
        submenu: [
                {
                    ruta: '/admin/editar-usuario',
                    titulo: 'menu sub menu 1 Editar usuario',
                    icon: AppleOutlined,
                    key: "3",
                    canExpand: false,
                },
                {
                    ruta: '',
                    titulo: 'menu sub menu 2',
                    icon: AppleOutlined,
                    key: "4",
                    canExpand: false,
                }
        ]
    }, */
]