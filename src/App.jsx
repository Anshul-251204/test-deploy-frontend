import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
	const [count, setCount] = useState(["a"]);
	const [input, setinput] = useState("");

	useEffect(() => {
		const fetchvalue = async () => {
			const res = await axios.get(
				"/api/g"
			);
			console.log(res);
			setCount(res.data);
		};
		fetchvalue();
	}, []);

	const add = async () => {
		const res = await axios.post("/api/p", {
			input,
		});

		console.log(res);
	};

	return (
		<>
			<div>
				<input
					type="text"
					value={input}
					onChange={(e) => setinput(e.target.value)}
				/>

				<button onClick={add}>add</button>

				<div>
					{count.map((i, n) => (
						<h1 key={n}>{i}</h1>
					))}
				</div>
			</div>
		</>
	);
}

export default App;
