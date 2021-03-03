export interface IPagination {
    pageQty?: number,
    totalRecords?: number,
    page?: number,
    resourceQty?: number,
}

export interface ICustomHeaders extends Headers {
    pageqty: string,
    totalrecords: string
}
  
export interface IDataApi {
    data: [],
    headers: ICustomHeaders,
    request: Request,
    status: number, 
    statusText: string
}