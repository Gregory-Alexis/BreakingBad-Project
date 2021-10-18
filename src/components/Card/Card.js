import { useBreakingBad } from "../../context/BreakingBadContext"
import Filter from "../Filter/Filter"

import CardItems from "./CardItems"

const Card = () => {
	const { currentPosts } = useBreakingBad()
	return (
		<>
			<div className="">
				<Filter />
			</div>
			<div className="flex justify-center items-center py-5">
				<ul className="grid gap-y-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-5">
					{currentPosts.map((el) => {
						const {
							char_id,
							name,
							birthday,
							occupation,
							img,
							status,
							appearance,
							portrayed,
							category,
							nickname,
						} = el
						return (
							<li key={char_id}>
								<CardItems
									name={name}
									birthday={birthday}
									occupation={occupation}
									img={img}
									status={status}
									appearance={appearance}
									portrayed={portrayed}
									category={category}
									nickname={nickname}
								/>
							</li>
						)
					})}
				</ul>
			</div>
		</>
	)
}

export default Card
