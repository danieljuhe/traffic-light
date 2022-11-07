
import React ,{useState} from "react";


//create your first component
const Home = () => {

	const [ color, setColor] = useState("");
	const main = {
		width:"200px",
		height:"550px",
		display: "flex",
  		flexDirection: "column",
  		alignItems: "center",
  		justifyContent: "center",
		backgroundColor: "black",
		borderRadius: "20px"
	}
	const red = {
		width:"150px",
		height:"150px",
		borderRadius:"50%",
		backgroundColor:"red",
		margin:"10px"
	}
	const amber = {
		width:"150px",
		height:"150px",
		borderRadius:"50%",
		backgroundColor:"orange",
		margin:"10px"
	}
	const green = {
		width:"150px",
		height:"150px",
		borderRadius:"50%",
		backgroundColor:"green",
		margin:"10px"
	}

	return (
		<div className="main" style={main}>
			<div className="red" style={red} onClick={()=>{}}></div>
			<div className="amber" style={amber} onClick={()=>{}}></div>
			<div className="green" style={green} onClick={()=>{}}></div>
		</div>
	);
};

export default Home;
