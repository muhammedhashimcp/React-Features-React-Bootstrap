import { useState } from 'react';
import './App.css';
import RichTextEditor from './components/RichTextEditor';

const config = {
	buttons:["bold","italic"]
}
function App() {
	const [value,setValue]=useState('')
	return (
		<div className="App row">
			<h1> jodit Text Editor</h1>
			{/* <RichTextEditor setValue={setValue} config={config} /> */}
			<RichTextEditor setValue={setValue} config={config} />
			<br />
			<p>{ value}</p>
		</div>
	);
}

export default App;
