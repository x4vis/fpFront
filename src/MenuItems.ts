import { IMenuItems } from "./interfaces/Admin/MenuItemsType";
import { BookOutlined, UserOutlined, FundProjectionScreenOutlined, BankOutlined } from '@ant-design/icons';

export const MenuItems: Array<IMenuItems> = [
	{
		title: 'Estadísticas',
		icon: FundProjectionScreenOutlined,
		canExpand: true,
		key: "1",
		submenu: [
			{
				path: '/admin/ventas',
				title: 'Ventas',
				icon: FundProjectionScreenOutlined,
				canExpand: false,
				key: "2",
			},
		]
	},
	{
		title: 'Personal',
		icon: UserOutlined,
		canExpand: true,
		key: "3",
		submenu: [
			{
				path: '/admin/usuarios',
				title: 'Usuarios',
				icon: UserOutlined,
				canExpand: false,
				key: "4"
			},
			{
				path: '/admin/clientes',
				title: 'Clientes',
				icon: UserOutlined,
				canExpand: false,
				key: "5"
			},
			{
				path: '/admin/proveedores',
				title: 'Proveedores',
				icon: UserOutlined,
				canExpand: false,
				key: "6"
			},
		]
	},
	{
		title: 'Catalogos',
		icon: BookOutlined,
		canExpand: true,
		key: "7",
		submenu: [
			{
				path: '/admin/categorias',
				title: 'Categorias',
				icon: BookOutlined,
				canExpand: false,
				key: "8"
			},
			{
				path: '/admin/subcategorias',
				title: 'SubCategorias',
				icon: BookOutlined,
				canExpand: false,
				key: "9"
			},
			{
				path: '/admin/unidades-medida',
				title: 'Uni. de Medida',
				icon: BookOutlined,
				canExpand: false,
				key: "10"
			},
			{
				path: '/admin/descuentos',
				title: 'Descuentos',
				icon: BookOutlined,
				canExpand: false,
				key: "11"
			},
			{
				path: '/admin/productos',
				title: 'Productos',
				icon: BookOutlined,
				canExpand: false,
				key: "12"
			},
		]
	},
	{
		title: 'Negocio',
		icon: BankOutlined,
		canExpand: true,
		key: "13",
		submenu: [
			{
				path: '/admin/ventas',
				title: 'Ventas',
				icon: BankOutlined,
				canExpand: false,
				key: "14"
			},
			{
				path: '/admin/pedidos',
				title: 'Pedidos',
				icon: BankOutlined,
				canExpand: false,
				key: "15"
			},
			{
				path: '/admin/compras',
				title: 'Compras',
				icon: BankOutlined,
				canExpand: false,
				key: "16"
			},
			{
				path: '/admin/gasto-producto',
				title: 'Gasto Producto',
				icon: BankOutlined,
				canExpand: false,
				key: "17"
			},
			{
				path: '/admin/devouluciones',
				title: 'Devoluciones',
				icon: BankOutlined,
				canExpand: false,
				key: "18"
			},
		]
	},
]