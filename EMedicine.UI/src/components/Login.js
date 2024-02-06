import * as React from "react";
import { useState } from "react";
import { useColorScheme } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import CssBaseline from "@mui/joy/CssBaseline";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import axios from "axios";
import Dashboard from "./users/Dashboard";

function ModeToggle() {
	const { mode, setMode } = useColorScheme();
	const [mounted, setMounted] = React.useState(false);

	// necessary for server-side rendering
	// because mode is undefined on the server
	React.useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) {
		return <Button variant='soft'>Change mode</Button>;
	}

	return (
		<Button
			variant='soft'
			onClick={() => {
				setMode(mode === "light" ? "dark" : "light");
			}}>
			{mode === "light" ? "Turn dark" : "Turn light"}
		</Button>
	);
}

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [activeUser, setActiveuser] = useState(false);
	var responseData = " ";

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};
	const getUser = async (e) => {
		e.preventDefault();
		const data = {
			firstName: "",
			lastName: "",
			password: password,
			email: email,
			type: "",
		};
		const url = "https://localhost:7148/api/Users/login";
		try {
			const response = await axios.post(url, data);
			console.log(response.data);

			responseData = response.data;
			console.log(responseData.user);
		} catch (error) {
			console.log(error);
		}

		if (responseData.statusCode === 200) {
			setActiveuser(true);
		}
	};

	return activeUser ? (
		<Dashboard />
	) : (
		<main>
			<ModeToggle />

			<CssBaseline />
			<Sheet
				sx={{
					width: 300,
					mx: "auto", // margin left & right
					my: 4, // margin top & bottom
					py: 3, // padding top & bottom
					px: 2, // padding left & right
					display: "flex",
					flexDirection: "column",
					gap: 2,
					borderRadius: "sm",
					boxShadow: "md",
				}}
				variant='outlined'>
				<div>
					<Typography level='h4' component='h1'>
						<b>Welcome!</b>
					</Typography>

					<Typography level='body-sm'>Sign in to continue.</Typography>
				</div>
				<FormControl>
					<FormLabel>Email</FormLabel>
					<Input
						// html input attribute

						value={email}
						type='email'
						placeholder='johndoe@email.com'
						onChange={handleEmailChange}
					/>
				</FormControl>
				<FormControl>
					<FormLabel>Password</FormLabel>
					<Input
						// html input attribute

						value={password}
						type='password'
						placeholder='password'
						onChange={handlePasswordChange}
					/>
				</FormControl>
				<Button sx={{ mt: 1 /* margin top */ }} onClick={getUser}>
					Log in
				</Button>
				<Typography
					endDecorator={<Link href='/registration'>Sign up</Link>}
					fontSize='sm'
					sx={{ alignSelf: "center" }}>
					Don&apos;t have an account?
					{<Link href='/dashboard'>view header</Link>}
				</Typography>
			</Sheet>
		</main>
	);
}
export default Login;
