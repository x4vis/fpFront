import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd';

import Proptypes from "prop-types";

const CreateResourceBtn = ({ resource }) => (
	<Link to={`/admin/${resource}/crear`}>
		<Button className="blue-back white fullWidth"
			type="primary"
			size="large"
			shape="round">
			Crear
        </Button>
	</Link>
)

CreateResourceBtn.propTypes = {
	resource: Proptypes.string.isRequired
}

export default React.memo(CreateResourceBtn);