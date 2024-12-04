import React from "react";
import Todo from './Todo'

//create your first component
const Home = () => {

	return (
		<>
			<div className="row"></div>
			<div className="Home col-6 d-flex justify-content-center">
			<Todo />
			</div>
			
		</>
	);
};

export default Home;
