import { useState, useMemo } from 'react';
import { IPagination } from '../../interfaces/GenericTypes';

const usePagination = () => {
  const [pagination, setPagination] = useState<IPagination>({
    totalRecords: 0,
		resourceQty: 10,
		page: 1
  });

  const setTotalRecords =  useMemo(() => (totalRecords: string) => {
    const records: number = Number(totalRecords);
    setPagination({
      resourceQty: 10,
      page: 1,
      totalRecords: records
    })
  }, [])

  const setPage = (page: number) => {
    setPagination({
      ...pagination,
      page
    })
  }

  return { pagination, setTotalRecords, setPage };
}

export default usePagination;
