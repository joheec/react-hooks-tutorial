import { useState } from 'react';
import Tab from '../Tab';

const ReactState = () => {
	const [value, setValue] = useState(0);
	const randomNumber = Math.floor(Math.random()*100);
	const isEven = value % 2 === 0 ? true : false;

	console.count('React States Section> Re-Render Count');

	return <div>
		<h2>React States</h2>
		<p>Examples</p>
		<ul>
			<li>useState</li>
			<li>useReducer</li>
			<li>this.state</li>
		</ul>
		<p>When to use?</p>
		<ul>
			<li>Change in value requires re-render</li>
			<li>Change in value requires a trigger of useEffect</li>
		</ul>
		<code>
			1 | const [value, setValue] = useState(0);<br />
			2 | <br/>
			3 | return {"<div>"}<br/>
			4 | <Tab />{"<button onClick={() => setValue(Math.random())}>change</button>"}<br />
			5 | <Tab />{"value: {value}"}<br/>
			6 | {"</div>;"}
		</code>
		<div className="sample">
			<button onClick={() => setValue(Math.floor(Math.random()*100))}>change</button> value: {value}
		</div>
		<p>With each re-render, randomNumber will be re-calculated</p>
		<code>
			1 | const [value, setValue] = useState(0);<br />
			2 | const randomNumber = Math.random();<br />
			3 | <br/>
			4 | return {"<div>"}<br/>
			5 | <Tab />{"<button onClick={() => setValue(Math.random())}>change</button>"}<br />
			6 | <Tab />{"value: {value} | random: {randomNumber}"}<br/>
			7 | {"</div>;"}
		</code>
		<div className="sample">
			<button onClick={() => setValue(Math.floor(Math.random()*100))}>change</button> value: {value} | random: {randomNumber}
		</div>
		<p> This is great if we want to re-calcuate something when a React state changes. For example, isEven needs to be re-calculated whenever value changes, which will always re-render the component on update anyways.</p>
		<code>
			1 | const [value, setValue] = useState(0);<br />
			2 | const isEven = value % 2 === 0 ? true : false;<br/>
			3 | <br/>
			4 | return {"<div>"}<br/>
			5 | <Tab />{"<button onClick={() => setValue(Math.random())}>change</button>"}<br />
			6 | <Tab />{"value: {value} | is even: {isEven.toString()}"}<br/>
			7 | {"</div>;"}
		</code>
		<div className="sample">
			<button onClick={() => setValue(Math.floor(Math.random()*100))}>change</button> value: {value} | is even: {isEven.toString()}
		</div>
		<p>What if we want to...</p>
		<ul>
			<li>Not recalculate a variable between re-renders?</li>
			<li>Change a value without causing a re-render?</li>
		</ul>
	</div>;
}

export default ReactState;
