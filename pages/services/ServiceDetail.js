import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import serviceData from './serviceData';

function ServiceDetail(props) {
const {serviceId} = useParams()
// history = useHistory()

const thisService = serviceData.find(service => service._id === serviceId)

// function handleClick() {
//    setTimeout(() => {
// 	   history.pushState("/services")
//    }, 2000)
//    history.replace("")
// }

	return (<div>

		<h1>Service Detail Page</h1>
		<h2> {thisService.name} - {thisService.price}</h2>
		<p>
			{thisService.description}
		</p>
		<button>Go back to all services</button>
		</div>);
}

export default ServiceDetail;
