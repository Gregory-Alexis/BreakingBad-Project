import React, { createContext, useContext, useEffect, useReducer } from "react"
import axios from "axios"
import reducer from "../reducer/reducer"

export const BreakingBadContext = createContext()

export const BreakingBadContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, {
		data: [],
		loading: false,
		error: "",
		currentPage: 1,
		postPerPages: 12,
		query: "",
	})
	const { data, loading, error, currentPage, postPerPages, query } = state

	const indexOfLastPost = currentPage * postPerPages
	const indexOfFirstPost = indexOfLastPost - postPerPages
	const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)
	const totalPost = data.length

	const getQuery = (q) => {
		dispatch({ type: "QUERY", payload: q })
	}

	const paginate = (number) =>
		dispatch({ type: "CURRENT_PAGE", payload: number })

	useEffect(() => {
		const fetchData = async () => {
			dispatch({ type: "FETCH_INIT" })
			try {
				const result = await axios.get(
					`https://www.breakingbadapi.com/api/characters?name=${query}`
				)
				dispatch({ type: "FETCH_SUCCESS", payload: result.data })
			} catch (error) {
				dispatch({ type: "FETCH_FAILURE", payload: error.message })
			}
		}
		fetchData()
	}, [query])

	return (
		<BreakingBadContext.Provider
			value={{
				data,
				loading,
				error,
				paginate,
				currentPosts,
				totalPost,
				postPerPages,
				dispatch,
				currentPage,
				query,
				getQuery,
			}}
		>
			{children}
		</BreakingBadContext.Provider>
	)
}

export const useBreakingBad = () => {
	const context = useContext(BreakingBadContext)
	if (context === undefined) {
		throw new Error(
			"It seems that you are trying to use GradientContext outside of its provider"
		)
	}
	return context
}
