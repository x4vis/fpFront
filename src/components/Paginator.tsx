import React from 'react';
import { Pagination } from 'antd';
import Proptypes from "prop-types";

const Paginator = ({pagination, setPagination}) => {

    const { totalRecords, resourceQty, page } = pagination;

    if(totalRecords === 0) {
        return null;
    }

    return (
        <Pagination
            className="d-flex justify-content-end mt-4"
            total={totalRecords}
            pageSize={resourceQty}
            showTotal={(total, range) => `${range[0]}-${range[1]} de ${total}`}
            defaultCurrent={page}
            onChange={(page) => setPagination({ ...pagination, page: page })}
        />
    )
}

Paginator.propTypes = {
    pagination: Proptypes.object.isRequired,
    setPagination: Proptypes.func.isRequired
}

export default Paginator;