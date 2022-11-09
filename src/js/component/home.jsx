import '../../styles/index.css'
import React ,{useState} from "react";


//create your first component
const Home = () => {
	const main = {
		width:"200px",
		height:"650px",
		display: "flex",
  		flexDirection: "column",
  		alignItems: "center",
  		justifyContent: "center",
		backgroundColor: "black",
		borderRadius: "20px", 
		margin:"30px"
	}
	
	const [ color, setColor] = useState();

	const redChange = () =>{
		setColor("red")
	}

	const amberChange = () =>{
		setColor("naranjito");
	}

	const greenChange = () =>{
		setColor("green")
	}

	const purple = () =>{
		setColor("purple")
	}

	return (
		<>
		<div className="main" style={main}>

			<div className="red" style={{boxShadow: (color=="red") ? '0px 0px 40px red' : '',}} onClick={redChange}></div>

			<div className="amber" style={{boxShadow: (color=="naranjito") ? '0px 0px 40px orange' : '',}} onClick={amberChange}></div>

			<div className="green" style={{boxShadow: (color=="green") ? '0px 0px 40px #4f9' : '',}} onClick={greenChange}></div>
			
			<div className="purple" style={{visibility: (color=="purple") ? 'visible':'',}}></div>
		</div>
		<div className='buttondiv'>
			<button className="button" onClick={purple}><h1>Purple</h1></button>
		</div>
		</>
	);
};

export default Home;
