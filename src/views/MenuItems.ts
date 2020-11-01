import { MenuItemsInterface } from "../interfaces/Admin/MenuItemsInterfaces";
import { AppleOutlined } from '@ant-design/icons';

export const MenuItems: Array<MenuItemsInterface> = [
    {
        titulo: 'Personal',
        icon: AppleOutlined,
        canExpand: true,
        key: "1",
        submenu: [
            {
                ruta: '/admin/usuarios',
                titulo: 'Usuarios',
                icon: AppleOutlined,
                canExpand: false,
                key: "2"
            },
            {
                ruta: '/admin/clientes',
                titulo: 'Clientes',
                icon: AppleOutlined,
                canExpand: false,
                key: "3"
            },
            {
                ruta: '/admin/proveedores',
                titulo: 'Proveedores',
                icon: AppleOutlined,
                canExpand: false,
                key: "4"
            },
        ]
    },
    {
        titulo: 'Catalogos',
        icon: AppleOutlined,
        canExpand: true,
        key: "5",
        submenu: [
            {
                ruta: '/admin/categorias',
                titulo: 'Categorias',
                icon: AppleOutlined,
                canExpand: false,
                key: "6"
            },
            {
                ruta: '/admin/subcategorias',
                titulo: 'SubCategorias',
                icon: AppleOutlined,
                canExpand: false,
                key: "7"
            },
            {
                ruta: '/admin/unidades-medida',
                titulo: 'Uni. de Medida',
                icon: AppleOutlined,
                canExpand: false,
                key: "8"
            },
            {
                ruta: '/admin/descuentos',
                titulo: 'Descuentos',
                icon: AppleOutlined,
                canExpand: false,
                key: "9"
            },
            {
                ruta: '/admin/productos',
                titulo: 'Productos',
                icon: AppleOutlined,
                canExpand: false,
                key: "10"
            },
        ]
    },
    {
        titulo: 'Negocio',
        icon: AppleOutlined,
        canExpand: true,
        key: "11",
        submenu: [
            {
                ruta: '/admin/ventas',
                titulo: 'Ventas',
                icon: AppleOutlined,
                canExpand: false,
                key: "12"
            },
            {
                ruta: '/admin/pedidos',
                titulo: 'Pedidos',
                icon: AppleOutlined,
                canExpand: false,
                key: "13"
            },
            {
                ruta: '/admin/compras',
                titulo: 'Compras',
                icon: AppleOutlined,
                canExpand: false,
                key: "14"
            },
            {
                ruta: '/admin/gasto-producto',
                titulo: 'Gasto Producto',
                icon: AppleOutlined,
                canExpand: false,
                key: "15"
            },
            {
                ruta: '/admin/devouluciones',
                titulo: 'Devoluciones',
                icon: AppleOutlined,
                canExpand: false,
                key: "16"
            },
        ]
    },
]