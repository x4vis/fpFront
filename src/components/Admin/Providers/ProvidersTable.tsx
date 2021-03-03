import React from 'react'
import ProvidersService from "../../../services/Admin/ProvidersService";
import Proptypes from "prop-types";

import Provider from "../../../components/Admin/Providers/Provider";
import EmptyTable from "../../../components/EmptyTable";
import Paginator from "../../../components/Paginator";

import { IProviders } from "../../../interfaces/Admin/ProvidersType";
import { useFetchPaginated } from '../../../hooks/useFetchPaginated';

const ProvidersTable = ({ search, update }) => {
	const { data: providers, loading }: { 
		data: Array<IProviders>, 
		loading: boolean
	} = useFetchPaginated(search, update, ProvidersService.getProviders);


	console.log('providers', providers);

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
							(providers.length === 0 && !loading) &&
							<EmptyTable colspan={6} />
						}
					</tbody>
				</table>
			</div>

			<div className="row justify-content-end">
				<div className="col-12 col-md-8">
					<Paginator />
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

export default ProvidersTable;