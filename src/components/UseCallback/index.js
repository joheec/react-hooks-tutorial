import React, { useState, useCallback } from 'react';
import Tab from '../Tab';

const PureComponent = React.memo(() => {
	console.count("Pure Component Re-Render Count");
	return <div>PureComponent</div>;
});

const PureComponentWithProp = React.memo(({ someFunction }) => {
	console.count("Pure Component with Prop Re-Render Count");
	return <div>PureComponentWithProp</div>;
});

const PureComponentWithPropWrap = React.memo(() => {
	const [value, setValue] = useState(0);
	console.count('UseCallback Section> Re-Render Count');
	
	const someFunction = () => {};

	return <div>
		<PureComponentWithProp someFunction={someFunction}/>
		<button onClick={() => setValue(value + 1)}>Re-Render</button>
	</div>;
});

const PureComponentWithPropAndUseCallback = React.memo(({ someFunction }) => {
	console.count("Pure Component with Prop and useCallback Re-Render Count ");
	return <div>PureComponentWithPropAndUseCallback</div>;
});

const UseCallback = () => {
	console.count('UseCallback Section> Re-Render Count');
	const [value, setValue] = useState(0);

	const someFunction = useCallback(() => {}, []);

	return <div>
		<h2>UseCallback</h2>
		<p>A pure component can utilize React.memo to re-render only when props change, even when the parent re-renders</p>
		<code>
			1 | {"const PureComponent = React.memo(() => {"}<br />
			2 | <Tab />console.count("Pure Component Re-Render Count");<br />
			3 | <Tab />{"return <div>PureComponent</div>;"}<br />
			4 | {"});"}<br />
			5 | <br />
			6 | {"const App = () => {"}<br />
			8 | <Tab />{"console.count('UseCallback Section> Re-Render Count');"}<br />
			9 | <br />
			10| <Tab />const [value, setValue] = useState(0);<br />
			11| <br />
			12| <Tab />{"return <div>"}<br />
			13| <Tab /><Tab />{"<PureComponent />"}<br />
			14| <Tab /><Tab />{"<button onClick={() => setValue(value+1)}>Re-Render</button>"}<br />
			15| <Tab />{"</div>;"}<br />
			16| {"};"}<br />
		</code>
		<div className="sample">
			<PureComponent />
			<button onClick={() => setValue(value + 1)}>Re-Render</button>
		</div>
		<p>The issue is when a function gets assigned to a prop, each re-rendering will create another instance of that function. From the perspective of the Pure Component, it is receiving a new prop everytime its parent component re-renders, and therefore also needs to re-render.</p>
		<code>
			1 | {"const PureComponent = React.memo(({ someFunction }) => {"}<br />
			2 | <Tab />console.count("Pure Component with Prop Re-Render Count");<br />
			3 | <Tab />{"return <div>PureComponent</div>;"}<br />
			4 | {"});"}<br />
			5 | <br />
			6 | {"const App = () => {"}<br />
			8 | <Tab />{"console.count('UseCallback Section> Re-Render Count');"}<br />
			9 | <br />
			10| <Tab />const [value, setValue] = useState(0);<br />
			11| <Tab />{"const someFunction = () => {};"}<br />
			12| <Tab />{"return <div>"}<br />
			13| <Tab /><Tab />{"<PureComponent someFunction={someFunction}/>"}<br />
			14| <Tab /><Tab />{"<button onClick={() => setValue(value+1)}>Re-Render</button>"}<br />
			15| <Tab />{"</div>;"}<br />
			16| {"};"}<br />
		</code>
		<div className="sample">
			<PureComponentWithPropWrap />
		</div>
		<p>By wrapping the Pure Component with useCallback, its prop will be assigned the same instance of the function after every re-render</p>
		<code>
			1 | {"const PureComponent = React.memo(({ someFunction }) => {"}<br />
			2 | <Tab />console.count("Pure Component with Prop and useCallback Re-Render Count");<br />
			3 | <Tab />{"return <div>PureComponent</div>;"}<br />
			4 | {"});"}<br />
			5 | <br />
			6 | {"const App = () => {"}<br />
			8 | <Tab />{"console.count('UseCallback Section> Re-Render Count');"}<br />
			9 | <br />
			10| <Tab />const [value, setValue] = useState(0);<br />
			11| <Tab />{"const someFunction = useCallback(() => {}, []);"}<br />
			12| <br />
			13| <Tab />{"return <div>"}<br />
			14| <Tab /><Tab />{"<PureComponent someFunction={someFunction}/>"}<br />
			15| <Tab /><Tab />{"<button onClick={() => setValue(value+1)}>Re-Render</button>"}<br />
			16| <Tab />{"</div>;"}<br />
			17| {"};"}<br />
		</code>
		<div className="sample">
			<PureComponentWithPropAndUseCallback someFunction={someFunction} />
			<button onClick={() => setValue(value + 1)}>Re-Render</button>
		</div>
	</div>;

};

export default UseCallback;