import { MenuItemsType } from "../interfaces/Admin/MenuItemsType";
import { BookOutlined, UserOutlined, FundProjectionScreenOutlined, BankOutlined } from '@ant-design/icons';

export const MenuItems: Array<MenuItemsType> = [
    {
        titulo: 'Estadísticas',
        icon: FundProjectionScreenOutlined,
        canExpand: true,
        key: "1",
        submenu: [
            {
                ruta: '/admin/ventas',
                titulo: 'Ventas',
                icon: FundProjectionScreenOutlined,
                canExpand: false,
                key: "2",
            },
        ]
    },
    {
        titulo: 'Personal',
        icon: UserOutlined,
        canExpand: true,
        key: "3",
        submenu: [
            {
                ruta: '/admin/usuarios',
                titulo: 'Usuarios',
                icon: UserOutlined,
                canExpand: false,
                key: "4"
            },
            {
                ruta: '/admin/clientes',
                titulo: 'Clientes',
                icon: UserOutlined,
                canExpand: false,
                key: "5"
            },
            {
                ruta: '/admin/proveedores',
                titulo: 'Proveedores',
                icon: UserOutlined,
                canExpand: false,
                key: "6"
            },
        ]
    },
    {
        titulo: 'Catalogos',
        icon: BookOutlined,
        canExpand: true,
        key: "7",
        submenu: [
            {
                ruta: '/admin/categorias',
                titulo: 'Categorias',
                icon: BookOutlined,
                canExpand: false,
                key: "8"
            },
            {
                ruta: '/admin/subcategorias',
                titulo: 'SubCategorias',
                icon: BookOutlined,
                canExpand: false,
                key: "9"
            },
            {
                ruta: '/admin/unidades-medida',
                titulo: 'Uni. de Medida',
                icon: BookOutlined,
                canExpand: false,
                key: "10"
            },
            {
                ruta: '/admin/descuentos',
                titulo: 'Descuentos',
                icon: BookOutlined,
                canExpand: false,
                key: "11"
            },
            {
                ruta: '/admin/productos',
                titulo: 'Productos',
                icon: BookOutlined,
                canExpand: false,
                key: "12"
            },
        ]
    },
    {
        titulo: 'Negocio',
        icon: BankOutlined,
        canExpand: true,
        key: "13",
        submenu: [
            {
                ruta: '/admin/ventas',
                titulo: 'Ventas',
                icon: BankOutlined,
                canExpand: false,
                key: "14"
            },
            {
                ruta: '/admin/pedidos',
                titulo: 'Pedidos',
                icon: BankOutlined,
                canExpand: false,
                key: "15"
            },
            {
                ruta: '/admin/compras',
                titulo: 'Compras',
                icon: BankOutlined,
                canExpand: false,
                key: "16"
            },
            {
                ruta: '/admin/gasto-producto',
                titulo: 'Gasto Producto',
                icon: BankOutlined,
                canExpand: false,
                key: "17"
            },
            {
                ruta: '/admin/devouluciones',
                titulo: 'Devoluciones',
                icon: BankOutlined,
                canExpand: false,
                key: "18"
            },
        ]
    },
]