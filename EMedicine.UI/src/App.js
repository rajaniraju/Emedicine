import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";
import { CssVarsProvider } from "@mui/joy";
import Dashboard from "./components/users/Dashboard";
import Orders from "./components/users/Orders";
import Profile from "./components/users/Profile";
import Cart from "./components/users/Cart";
import MedicineDisplay from "./components/users/MedicineDisplay";
import Admindashboard from "./components/admin/AdminDashboard";
import AdminOrders from "./components/admin/AdminOrders";
import CustomerList from "./components/admin/CustomerList";
import Medicine from "./components/admin/Medicine";
function App() {
	const login = window.localStorage.getItem("IsLoggedIn");
	return (
		<>
			<Router>
				<Routes>
					<Route
						path='/'
						element={
							login ? (
								<Dashboard />
							) : (
								<CssVarsProvider>
									<Login />
								</CssVarsProvider>
							)
						}
					/>
					<Route path='/registration' element={<Registration />} />
					<Route path='/dashboard' element={<Dashboard />} />
					<Route path='/myorders' element={<Orders />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/products' element={<MedicineDisplay />} />

					<Route path='/admindashboard' element={<Admindashboard />} />
					<Route path='/adminorders' element={<AdminOrders />} />
					<Route path='/customers' element={<CustomerList />} />
					<Route path='/medicine' element={<Medicine />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
