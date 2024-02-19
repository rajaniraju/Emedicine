import React, { useEffect } from "react";
import { useState } from "react";
import "./Registration.css";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Sheet from "@mui/joy/Sheet";
import Button from "@mui/joy/Button";
import axios from "axios";

function Register() {
	const [firstname, setFirstname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [lastname, setLastname] = useState("");

	const handleFirstnameChange = (event) => {
		setFirstname(event.target.value);
	};
	const handleLastnameChange = (event) => {
		setLastname(event.target.value);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = {
			firstName: firstname,
			lastName: lastname,
			password: password,
			email: email,
			type: "user",
		};
		const url = "https://localhost:7148/api/Users/registration";
		console.log(data);
		try {
			const response = await axios.post(url, data);
			console.log(response.data);
		} catch (error) {
			console.log(error);
		}

		// Add your registration logic here
		/*console.log("First Name:", firstname);
    console.log("Last Name:", lastname);
    console.log("Email:", email);
    console.log("Password is:", password);*/
	};

	return (
		<div className='register-container'>
			<form onSubmit={handleSubmit}>
				<Typography textAlign={"center"} level='h4' component='h1'>
					<b className='registration'>EMedicine</b>
				</Typography>
				<Sheet
					sx={{
						width: 500,
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
					<Typography textAlign={"center"} level='h4' component='h1'>
						<b className='registration'>Registration</b>
					</Typography>
					<FormControl>
						<FormLabel>Password</FormLabel>
						<Input
							type='text'
							placeholder='Firstname'
							value={firstname}
							onChange={handleFirstnameChange}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>LastName</FormLabel>
						<Input
							type='text'
							placeholder='Lastname'
							value={lastname}
							onChange={handleLastnameChange}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Email</FormLabel>
						<Input
							type='email'
							placeholder='Email'
							value={email}
							onChange={handleEmailChange}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Password</FormLabel>
						<Input
							// html input attribute

							type='password'
							value={password}
							placeholder='password'
							onChange={handlePasswordChange}
						/>
					</FormControl>
					<div className='button'>
						<Button
							sx={{ mt: 1 /* margin top */ }}
							onClick={handleSubmit}>
							Submit
						</Button>
					</div>
					<Typography
						endDecorator={<Link href='/'>Sign in</Link>}
						fontSize='sm'
						sx={{ alignSelf: "center" }}>
						Have an account?
					</Typography>
				</Sheet>
			</form>
		</div>
	);
}

export default Register;
