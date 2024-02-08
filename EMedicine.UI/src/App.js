import { CssVarsProvider } from "@mui/joy/styles";
import "./App.css";
import RouterPage from "./components/RouterPage";

function App() {
	return (
		<CssVarsProvider>
			<RouterPage />
		</CssVarsProvider>
	);
}

export default App;
