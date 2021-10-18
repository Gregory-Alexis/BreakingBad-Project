import { useBreakingBad } from "../../context/BreakingBadContext"

const Filter = () => {
	const { getQuery, query } = useBreakingBad()

	const handleChange = (event) => {
		getQuery(event)
	}
	return (
		<section className="flex justify-center m-auto mt-5">
			<label htmlFor="search" className="text-white"></label>
			<input
				type="text"
				id="search"
				name="search"
				placeholder="  Search character..."
				autoFocus
				value={query}
				onChange={(e) => handleChange(e.target.value)}
			/>
		</section>
	)
}

export default Filter
