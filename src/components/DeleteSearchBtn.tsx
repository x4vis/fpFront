import React from 'react'
import { Button, Tooltip } from 'antd';
import Proptypes from "prop-types";

const DeleteSearchBtn = ({ setSearch, setvalueSearch }) => {
	return (
		<Tooltip title="borrar búsqueda">
			<Button shape="circle"
				style={{ minWidth: "26px", height: "26px" }}
				onClick={() => { setSearch(""); setvalueSearch("") }}>
				<i className="fa fa-times blue d-flex align-items-center justify-content-center"></i>
			</Button>
		</Tooltip>
	)
}

DeleteSearchBtn.propTypes = {
	setSearch: Proptypes.func.isRequired,
	setvalueSearch: Proptypes.func.isRequired
}

export default React.memo(DeleteSearchBtn);