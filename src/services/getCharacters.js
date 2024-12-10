export const getCharacters = async () => {
	const url = "https://dragonball-api.com/api/characters";

	try {
		const data = await fetch(url);
		const response = await data.json();


		if (response.error) {
			return response;
		}

		return response.items || [];
	} catch (error) {
		console.error("Fetch Error", error);
	}
};