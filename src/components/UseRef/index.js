import { useState, useMemo, useRef, useEffect } from 'react';
import Tab from '../Tab';

const UseRef = () => {
	console.count('UseRef Section> Re-Render Count');

	const [value, setValue] = useState(0);
	const [operator, setOperator] = useState("?");
	const [result, setResult] = useState("?");

	const onOperatorChange = (newOperator) => {
		setOperator(newOperator);
		switch (newOperator) {
			case "x":
				setResult(value * 2);
				break;
			case "/":
				setResult(value / 2);
				break;
			case "+":
				setResult(value + 2);
				break;
			default:
				setResult("?");
		}
	};

	const refValue = useRef(0);
	const [refOperator, setRefOperator] = useState("?");

	const refResult = useMemo(() => {
		switch (refOperator) {
			case "x":
				return refValue.current * 2;
			case "/":
				return refValue.current / 2;
			case "+":
				return refValue.current + 2;
			default:
				return "?";
		}
	}, [refOperator]);

	const onInputChange = ({ target }) => {
		setValue(target.value);
		if (operator !== "?") {
			setOperator("?");
		}
	};

	const onRefInputChange = ({ target }) => {
		refValue.current = target.value;
		if (refOperator !== "?") {
			setRefOperator("?");
		}
	};

	const [isPink, setIsPink] = useState(true);
	const refBoxEl = useRef();

	useEffect(() => {
		refBoxEl.current.style.backgroundColor = "pink";
	}, []);

	const refSwitchColor = () => {
		const color = refBoxEl.current.style.backgroundColor;
		refBoxEl.current.style.backgroundColor = color === "pink" ? "white" : "pink";
	};

	return <div>
		<h2>UseRef</h2>
		<h3>Sample 1</h3>
		<p>Updating value is causing an unnecessary re-render</p>
		<code>
			1&nbsp; | const [value, setValue] = useState(0);<br />
			2&nbsp; | const [operator, setOperator] = useState("?");<br/>
			3&nbsp; | const [result, setResult] = useState("?");<br/>
			4&nbsp; |<br />
			5&nbsp; | {"const onInputChange = ({ target }) => {"}<br />
			6&nbsp; | <Tab />setValue(target.value);<br />
			7&nbsp; | <Tab />{"if (operator !== '?') {"}<br />
			8&nbsp; | <Tab /><Tab />setOperator("?");<br />
			9&nbsp; | <Tab />{"}"}<br />
			10 | {"};"}<br/>
			11 |<br />
			12 | return {"<div>"}<br/>
			13 | <Tab />{"<input value={value} onChange={onInputChange} /> {operator} 2 = {result}"}<br />
			14 | <Tab />{"<button onClick={() => onOperatorChange('x')}>multiply</button>"}<br />
			15 | <Tab />{"<button onClick={() => onOperatorChange('/')}>divide</button>"}<br />
			16 | <Tab />{"<button onClick={() => onOperatorChange('+')}>add</button>"}<br />
			17 | {"</div>;"}
		</code>
		<div className="sample">
			<input value={value} onChange={onInputChange} /> {operator} 2 = {result}
			<br />
			<button onClick={() => onOperatorChange("x")}>multiply</button>
			<button onClick={() => onOperatorChange("/")}>divide</button>
			<button onClick={() => onOperatorChange("+")}>add</button>
		</div>
		<p>A re-render is only needed when the operator is set. Using useRef for the input value will prevent re-rendering on it's update, and will hold the state across re-renders.</p>
		<code>
			1&nbsp; | const value = useRef(0);<br />
			2&nbsp; | const [operator, setOperator] = useState("?");<br/>
			3&nbsp; | const [result, setResult] = useState("?");<br/>
			4&nbsp; |<br />
			5&nbsp; | {"const onInputChange = ({ target }) => {"}<br />
			6&nbsp; | <Tab />value.current = target.value;<br />
			7&nbsp; | <Tab />{"if (operator !== '?') {"}<br />
			8&nbsp; | <Tab /><Tab />setOperator("?");<br />
			9&nbsp; | <Tab />{"}"}<br />
			10 | {"};"}<br/>
			11 |<br />
			12 | return {"<div>"}<br/>
			13 | <Tab />{"<input ref={value} onChange={onInputChange} /> {operator} 2 = {result}"}<br />
			14 | <Tab />{"<button onClick={() => onOperatorChange('x')}>multiply</button>"}<br />
			15 | <Tab />{"<button onClick={() => onOperatorChange('/')}>divide</button>"}<br />
			16 | <Tab />{"<button onClick={() => onOperatorChange('+')}>add</button>"}<br />
			17 | {"</div>;"}
		</code>
		<div className="sample">
			<input ref={refValue} onChange={onRefInputChange} /> {refOperator} 2 = {refResult}
			<br />
			<button onClick={() => setRefOperator("x")}>multiply</button>
			<button onClick={() => setRefOperator("/")}>divide</button>
			<button onClick={() => setRefOperator("+")}>add</button>
		</div>
		<h3>Sample 2</h3>
		<p>Logic in the inline styles require re-rendering from useState to visualize changes. This will call the render, generate the virtual DOM, and compare the DOMs. All this for a style change.</p>
		<code>
			1 | const [isPink, setIsPink] = true;<br />
			2 | <br />
			3 | return {"<div>"}<br />
			4 | <Tab />{"<div style={{ backgroundColor: isPink ? 'pink' : 'white' }}></div>"}<br />
			5 | <Tab />{"<button onClick={() => setIsPink(!isPink)}>Switch Color</button>"}<br />
			6 | {"</div>;"}<br />
		</code>
		<div className="sample">
			<div style={{ height: '50px', width: '50px', backgroundColor: isPink ? 'pink' : 'white' }}></div>
			<button onClick={() => setIsPink(!isPink)}>Switch Color</button>
		</div>
		<p>Using useRef instead of useState prevents re-rendering due to update. By assigning the returned object from useRef to the element's ref attribute, changes will be registered as simple style changes.</p>
		<code>
			1 &nbsp;| const boxEl = useRef();<br />
			2 &nbsp;|<br />
			3 &nbsp;| {"const toggleColor = () => {"}<br />
			4 &nbsp;| <Tab />const color = boxEl.current.style.backgroundColor;<br />
			5 &nbsp;| <Tab />boxEl.current.style.backgroundColor = color === "pink" ? "white" : "pink";<br />
			6 &nbsp;| {"}"}<br />
			7 &nbsp;|<br />
			8 &nbsp;| return {"<div>"}<br />
			9 &nbsp;| <Tab />{"<div ref={boxEl}></div>"}<br />
			10 | <Tab />{"<button onClick={() => toggleColor}>Switch Color</button>"}<br />
			11 | {"</div>;"}<br />
		</code>
		<div className="sample">
			<div ref={refBoxEl} style={{ height: '50px', width: '50px' }}></div>
			<button onClick={refSwitchColor}>Switch Color</button>
		</div>
	</div>;
}

export default UseRef;