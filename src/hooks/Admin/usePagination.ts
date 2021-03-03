import { useState } from 'react';
import { PaginationType } from '../../interfaces/Generic/PaginationType';

const usePagination = () => {
  const [pagination, setPagination] = useState<PaginationType>({
    totalRecords: 0,
		resourceQty: 10,
		page: 1
  });

  const setTotalRecords = (totalRecords) => {
    totalRecords = Number(totalRecords);

    setPagination({
      ...pagination,
      totalRecords
    })
  }

  const setPage = (page) => {
    setPagination({
      ...pagination,
      page
    })
  }

  console.log('pagination :>> ', pagination);
  
  return { pagination, setTotalRecords, setPage };
}

export default usePagination;
