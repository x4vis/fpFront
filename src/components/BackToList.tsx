import React from 'react';

import { Link } from 'react-router-dom';
import { Form, Button } from 'antd';

import PropTypes from 'prop-types'

const BackToList = ({ resource }) => {
	return (
		<Form.Item className="mt-3 mt-sm-5">
			<Link to={`/admin/${resource}`}>
				<Button className="fullWidth border-r"
					htmlType="button"
					size="large">
					<p className="bw-text blue">
						<i className="fa fa-arrow-left mr-3"></i>
                        Regresar a listado
                    </p>
				</Button>
			</Link>
		</Form.Item>
	)
}

BackToList.propTypes = {
	resource: PropTypes.string.isRequired,
}

export default BackToList
