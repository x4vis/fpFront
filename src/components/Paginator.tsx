import React from 'react';
import { Pagination } from 'antd';
import Proptypes from "prop-types";

const Paginator = ({pagination, page, setPage, resourceQty, setResourceQty}) => {

    const { totalRecords } = pagination;

    if(totalRecords === 0) {
        return null;
    }

    return (
        <Pagination
            className="d-flex justify-content-end mt-4"
            total={totalRecords}
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

Paginator.propTypes = {
    pagination: Proptypes.object.isRequired,
    page: Proptypes.number.isRequired,
    setPage: Proptypes.func.isRequired,
    resourceQty: Proptypes.number.isRequired,
    setResourceQty: Proptypes.func.isRequired
}


export default Paginator;