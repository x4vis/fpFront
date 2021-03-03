import React, { useState, useEffect } from 'react'
import ProvidersService from "../../../services/Admin/ProvidersService";
import Proptypes from "prop-types";

import Provider from "../../../components/Admin/Providers/Provider";
import EmptyTable from "../../../components/EmptyTable";
import Paginator from "../../../components/Paginator";

import { ProvidersType } from "../../../interfaces/Admin/ProvidersType";
import usePagination from '../../../hooks/Admin/usePagination';

const ProvidersTable = ({ search, update }) => {
	const [providers, setProviders] = useState<Array<ProvidersType>>([]);
	const { pagination, setTotalRecords } = usePagination();
	const { page, resourceQty } = pagination;
	
	useEffect(() => {
		const getProviders = async () => {
			try {
				const providers = await ProvidersService
				.getProviders(true, page, search, resourceQty);

				setTotalRecords(providers.headers.totalrecords);
				setProviders(providers.data);
			} catch (error) {
				console.log('err', error);
			}
		}
		getProviders();
	}, [search, resourceQty, page, update])

	return (
		<>
			<div className="table-responsive mt-5">
				<table className="table table-striped">
					<thead>
						<tr>
							<th scope="col">Nombre</th>
							<th scope="col">Nombre Comercial</th>
							<th scope="col">Tipo de Persona</th>
							<th scope="col">Teléfono</th>
							<th scope="col">Correo</th>
							<th scope="col">Acciones</th>
						</tr>
					</thead>
					<tbody>
						{
							providers.length !== 0 &&
							providers.map(prov => (
								<Provider key={prov.id} prov={prov} />
							))
						}
						{
							providers.length === 0 &&
							<EmptyTable colspan={6} />
						}
					</tbody>
				</table>
			</div>

			<div className="row justify-content-end">
				<div className="col-12 col-md-8">
					<Paginator pagination={pagination} />
				</div>
			</div>
		</>
	)
}

Paginator.displayName = "Paginator";

ProvidersTable.propTypes = {
	search: Proptypes.string.isRequired,
	update: Proptypes.bool.isRequired,
}

export default React.memo(ProvidersTable);