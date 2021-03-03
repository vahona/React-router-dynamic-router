import React from 'react';
import { Link } from 'react-router-dom';
import serviceData from './serviceData';

function ServicesList() {
	return (
		<div>
			<h1>Services List Page</h1>
			{serviceData.map((service) => 
			<div key={service._id}>
					<h2> <Link to={`service/${service._id}`}> {service.name}</Link> - {service.price}</h2>
				<p>
				{service.description}
				</p>
			</div>
			)};
			<Link to="./serviceData/id">{serviceData._id} </Link>
		</div>
	);
}

export default ServicesList;
