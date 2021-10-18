const reducer = (state, action) => {
	switch (action.type) {
		case "FETCH_INIT":
			return {
				...state,
				loading: true,
			}
		case "FETCH_SUCCESS":
			return {
				...state,
				data: action.payload,
				loading: false,
				error: false,
			}
		case "FETCH_FAILURE":
			return {
				...state,
				error: action.payload,
				loading: false,
			}
		case "CURRENT_PAGE":
			return {
				...state,
				currentPage: action.payload,
			}
		case "QUERY":
			return {
				...state,
				query: action.payload,
			}
		default:
			throw new Error(`Unsupported action type ${action.type} in reducer `)
	}
}

export default reducer
