import React, { useState } from "react";

//create your first component
const Home = () => {

	const [name, setName] = useState("");
	const [age, setAge] = useState("");

	const validateInput = () => {
		if (name === "") {
			alert("Please input your name.")
		}
	}

	return (
		<>
			<input 
				type="text"
				onChange={e => setName(e.target.value)}
				value={name}
			/>
			<button onClick={validateInput}>Click to update</button>
			<div>
					<h1>{name}</h1>
			</div>

			<input
				type="number"
				onChange={e => setAge(e.target.value)}
				value={age}
			/>
			<div>
				<h1>{age}</h1>
			</div>
		</>
	);
};

export default Home;
