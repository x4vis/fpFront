import React from 'react';
import { Pagination } from 'antd';
import Proptypes from "prop-types";
import usePagination from '../hooks/Admin/usePagination';

const Paginator = ({ pagination }) => {
	const { totalRecords, resourceQty, page } = pagination;
	const { setPage } = usePagination();

	if (totalRecords === 0) {
		return null;
	}

	return (
		<Pagination
			className="d-flex justify-content-end mt-4"
			total={totalRecords}
			pageSize={resourceQty}
			showTotal={(total, range) => `${range[0]}-${range[1]} de ${total}`}
			defaultCurrent={page}
			onChange={(page) => setPage(page)}
		/>
	)
};

Paginator.propTypes = {
	pagination: Proptypes.object.isRequired
}

export default React.memo(Paginator);