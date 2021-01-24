import React, { useState } from 'react'
import { Button, Input } from 'antd';
import CreateResourceBtn from "../../../components/CreateResourceBtn";
import DeleteSearchBtn from "../../../components/DeleteSearchBtn"
import ProvidersTable from "../../../components/Admin/Providers/ProvidersTable";
import { Resources } from "../../../enums/Resources";

const ProvidersList = () => {

    const { Search } = Input;

    //set states
    const [ search, setSearch ] = useState<string>("");
    const [ valueSearch, setValueSearch ] = useState<string>("");
    const [ update, setUpdate ] = useState<boolean>(false);

    const handleSearch = (value: string) => {
        setSearch(value);
    }

    return (
        <div className="container-fluid">
            <h1 className="blue bw-text biggest-text">Proveedores</h1>

            <div className="main-card mt-4 p-5">
                <div className="row">
                    <div className="col-6 col-md-3 col-lg-2">
                        <CreateResourceBtn resource={Resources.Providers} />
                    </div>
                    <div className="col-6 col-md-3 col-lg-2">
                        <Button type="link"
                                size="large"
                                className="text-center fullWidth p-0 text-break"
                                onClick={() => setUpdate(!update)}>
                            <i className="fa fa-refresh mr-2"></i>
                            Actualizar
                        </Button>
                        
                    </div>
                    <div className="col-12 col-md-6 col-lg-8 mt-4 mt-md-0">
                        <Search placeholder="buscar proveedor por nombre"
                                size="large"
                                suffix={<DeleteSearchBtn setSearch={setSearch} setvalueSearch={setValueSearch}/>}
                                value={valueSearch}
                                onChange={e => setValueSearch(e.target.value)}
                                onSearch={handleSearch} 
                                enterButton />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <ProvidersTable search={search} update={update}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

CreateResourceBtn.displayName = "CreateResourceBtn";
DeleteSearchBtn.displayName = "DeleteSearchBtn";
ProvidersTable.displayName = "ProvidersTable";
 
export default ProvidersList;