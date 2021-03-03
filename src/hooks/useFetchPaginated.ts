import { useState, useEffect, useRef } from 'react';
import usePagination from './Admin/usePagination';
import { IDataApi } from '../interfaces/GenericTypes';

export const useFetchPaginated = (
  search: string, 
  update: boolean, 
  callBack: Function
) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: ''
  });

  const { pagination, setTotalRecords } = usePagination();
  const { page, resourceQty } = pagination;

  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, []);

  useEffect(() => {
    setState({ data: [], loading: true, error: ''});

    const getData = async() => {
      try {
        const dataApi: IDataApi = await callBack(true, page, search, resourceQty);
        
        if (isMounted.current) {
          setTotalRecords(dataApi.headers.totalrecords);
          setState({
            data: dataApi.data,
            loading: false,
            error: ''
          })
        }
        
      } catch (error) {
        setState({
          data: [],
          loading: false,
          error: 'No se pudo cargar la info'
        })
      }

    }

    getData();
  }, [callBack, page, search, resourceQty, update]);

  return state;
}
