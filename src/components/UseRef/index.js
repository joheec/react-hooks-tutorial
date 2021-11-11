import { useState, useMemo, useRef } from 'react';
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

	return <div>
		<h2>UseRef</h2>
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
	</div>;
}

export default UseRef;