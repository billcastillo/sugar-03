const fetchData = ({ url }) => {
	return fetch(url)
		.then(
			response => {
				response.json();
			},
			error => {
				console.error('Oh no! something went wrong =(', error);
			},
		)
		.then(response => {
			return response;
		});
};

export default fetchData;
