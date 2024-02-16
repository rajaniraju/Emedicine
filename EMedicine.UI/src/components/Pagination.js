import "./Pagination.css";
import Button from "@mui/joy/Button";
export default function Pagination({ getCustomers }) {
	function handleClick() {
		let customers = getCustomers();
		console.log(customers);
	}

	return (
		<>
			{" "}
			<div className='paginationContainer'>
				<div className='pagination'>
					<Button onClick={handleClick}>&laquo;</Button>
					<Button onClick={handleClick}>Current</Button>
					<Button onClick={handleClick}>&raquo;</Button>
				</div>
			</div>
		</>
	);
}
