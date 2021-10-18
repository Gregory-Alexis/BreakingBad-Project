import React from "react"
import { useBreakingBad } from "../../context/BreakingBadContext"

const Pagination = () => {
	const { postPerPages, totalPost, paginate, dispatch, currentPage } =
		useBreakingBad()

	const pageNumber = []
	for (let i = 1; i <= totalPost / postPerPages + 1; i++) {
		pageNumber.push(i)
	}

	return (
		<footer>
			<div className="flex-1 flex justify-around pb-5 sm:hidden">
				<button
					type="button"
					className="text-white  border border-breakingGreen py-1 px-3 rounded-lg"
					onClick={() =>
						dispatch({ type: "CURRENT_PAGE", payload: currentPage - 1 })
					}
					disabled={currentPage === 1}
				>
					Previous
				</button>
				<button
					type="button"
					className="text-white flex items-center justify-center border border-breakingGreen py-1 px-3 rounded-lg"
					onClick={() =>
						dispatch({ type: "CURRENT_PAGE", payload: currentPage + 1 })
					}
					disabled={currentPage === pageNumber.length + 1}
				>
					Next
				</button>
			</div>
			<nav className="hidden pb-5 sm:flex-1 sm:flex sm:items-center sm:justify-center">
				<ul>
					{pageNumber.map((number) => (
						<li key={number} className="">
							<a
								href="!#"
								className=" py-1 px-3 mx-2 rounded-lg flex justify-center items-center text-white bg-breakingGreen"
								onClick={(e) => {
									paginate(number)
									e.preventDefault()
								}}
							>
								{number}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</footer>
	)
}

export default Pagination
