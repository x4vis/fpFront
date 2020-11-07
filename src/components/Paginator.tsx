import React, { useEffect } from 'react';
import { Pagination } from 'antd';

const Paginator = ({pagination, page, setPage, resourceQty, setResourceQty}) => {

    const { totalRegistros } = pagination;

    if(totalRegistros === 0) {
        return null;
    }

    return (
        <Pagination
            className="d-flex justify-content-end mt-4"
            total={totalRegistros}
            pageSize={resourceQty}
            showTotal={(total, range) => `${range[0]}-${range[1]} de ${total}`}
            defaultPageSize={resourceQty}
            defaultCurrent={page}
            pageSizeOptions={['10', '20', '30']}
            onChange={(page) => setPage(page)}
            showSizeChanger={true}
            onShowSizeChange={(current, size) => setResourceQty(size)}
        />
    )
}

export default Paginator;