import Logo from "../../images/logo.png"

const Header = () => {
	return (
		<header className="flex justify-center pt-5">
			<img src={Logo} alt="logo breaking bad" className="w-96 h-full" />
		</header>
	)
}

export default Header
