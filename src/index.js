import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { BreakingBadContextProvider } from "./context/BreakingBadContext"

ReactDOM.render(
	<React.StrictMode>
		<BreakingBadContextProvider>
			<App />
		</BreakingBadContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
)
