import React from 'react';
import { Pagination } from 'antd';
import usePagination from '../hooks/Admin/usePagination';

const Paginator = () => {
	const { pagination, setPage } = usePagination();
	const { totalRecords, resourceQty, page } = pagination;  

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

export default React.memo(Paginator);