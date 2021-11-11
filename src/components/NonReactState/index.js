const NonReactState = () => {
	return <div>
		<h2>Non-React State</h2>
		<p>Benefits</p>
		<ul>
			<li>Less unnecessary re-rendering</li>
			<li>Synchronous</li>
			<li>Can update object properties i.e. checked[value] = true vs {"{ ...checked, [value]: true }"}</li>
		</ul>
	</div>;
}

export default NonReactState;