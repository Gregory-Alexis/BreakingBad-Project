import Logo from "../../images/logo.png"

const Header = () => {
	return (
		<header className="flex justify-center pt-5">
			<img
				src={Logo}
				alt="logo breaking bad"
				style={{ width: "288px", height: "100%" }}
			/>
		</header>
	)
}

export default Header
