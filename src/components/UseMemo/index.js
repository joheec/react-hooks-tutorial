import { useState, useEffect, useMemo } from 'react';
import Tab from '../Tab';

const UseMemo = () => {
	console.count('UseMemo Section> Re-Render Count');

	const [filter, setFilter] = useState("all");
	const [forecast, setForecast] = useState([]);
	const [value, setValue] = useState(0);

	useEffect(() => {
		setForecast([{day: "Wednesday", weather: "Sunny"}]);
	}, []);

	const filteredForecast = forecast.filter((day) => {
		console.count("UseMemo Section> Filtering Count");
		return (filter === "all") || (filter === "good" && day.weather === "Sunny") || (filter === "bad" && day.weather === "Stormy");
	});

	const [memoFilter, setMemoFilter] = useState("all");
	const memoFilteredForecast = useMemo(() => forecast.filter((day) => {
		console.count("UseMemo Section> UseMemo Filtering Count");
		return (memoFilter === "all") || (memoFilter === "good" && day.weather === "Sunny") || (memoFilter === "bad" && day.weather === "Stormy");
	}), [memoFilter, forecast]);

	return <div>
		<h2>UseMemo</h2>
		<p>Every time the component is re-rendered, filteredForecast is re-calculated even when the result is the same</p>
		<code>
			1 &nbsp;| const [filter, setFilter] = useState("all");<br />
			2 &nbsp;| const [forecast, setForecast] = useState([]);<br />
			3 &nbsp;|<br />
			4 &nbsp;| {"useEffect(() => {"}<br />
			5 &nbsp;| <Tab />fetch("https://some-weather-site.org")<br />
			6 &nbsp;| <Tab /><Tab />{".then(res => res.json())"}<br />
			7 &nbsp;| <Tab /><Tab />{".then(body => setForecast(body));"}<br />
			8 &nbsp;| {"}, []);"}<br />
			9 &nbsp;| <br />
			10 | {"const filteredForecast = forecast.filter((day) => {"}<br />
			11 | <Tab />{'console.count("UseMemo Section> Filtering Count");'}<br />
			12 | <Tab />// Complex weather logic;<br />
			13 | <Tab />return result;<br />
			14 | {"});"}<br />
			15 |<br />
			16 | {"return <div>"}<br />
			17 | <Tab />{"Filter: <select value={filter} onChange={({ target }) => setFilter(target.value)}>"}<br />
			18 | <Tab /><Tab />{"<option value='all'>All</option>"}<br />
			19 | <Tab /><Tab />{"<option value='good'>Good Weather</option>"}<br />
			20 | <Tab /><Tab />{"<option value='bad'>Bad Weather</option>"}<br />
			21 | <Tab />{"</select>"}<br />
			22 | <Tab />{"{"}<br />
			23 | <Tab /><Tab />{"filteredForecast.map(({ day, weather }) => ("}<br />
			24 | <Tab /><Tab /><Tab />{"<div key={day}>{day} is {weather}</div>"}<br />
			25 | <Tab /><Tab />)<br/>
			26 | <Tab />{"}"}<br />
			27 | {"</div>;"}
		</code>
		<div className="sample">
			<div>Filter</div>
			<select value={filter} onChange={({ target }) => setFilter(target.value)}>
				<option value="all">All</option>
				<option value="good">Good Weather</option>
				<option value="bad">Bad Weather</option>
			</select>
			{
				filteredForecast.map(({ day, weather }) => <div key={day}>{day} is {weather}</div>)
			}
			<button onClick={() => setValue(1 + value)}>Re-Render</button>
		</div>
		<p>Definition of memoization - "to store the result of a computed expression so that it can be subsequently retrieved without repeating the computation"</p>
		<p>Parameter 1 is the function that executes the computation. Parameter 2 is an array of dependencies. If the dependency values change, the function re-executes.</p>
		<p>useMemo and useEffect are similar. The main difference is that useEffects is for functions with side-effects, and useMemo is for pure functions with no side-effects.</p>
		<code>
			1 &nbsp;| const [filter, setFilter] = useState("all");<br />
			2 &nbsp;| const [forecast, setForecast] = useState([]);<br />
			3 &nbsp;|<br />
			4 &nbsp;| {"useEffect(() => {"}<br />
			5 &nbsp;| <Tab />fetch("https://some-weather-site.org")<br />
			6 &nbsp;| <Tab /><Tab />{".then(res => res.json())"}<br />
			7 &nbsp;| <Tab /><Tab />{".then(body => setForecast(body));"}<br />
			8 &nbsp;| {"}, []);"}<br />
			9 &nbsp;| <br />
			10 | {"const filteredForecast = useMemo(() => forecast.filter((day) => {"}<br />
			11 | <Tab />{'console.count("UseMemo Section> UseMemo Filtering Count");'}<br />
			12 | <Tab />// Complex weather logic;<br />
			13 | <Tab />return result;<br />
			14 | {"}), [filter, forecast]);"}<br />
			15 |<br />
			16 | {"return <div>"}<br />
			17 | <Tab />{"Filter: <select value={filter} onChange={({ target }) => setFilter(target.value)}>"}<br />
			18 | <Tab /><Tab />{"<option value='all'>All</option>"}<br />
			19 | <Tab /><Tab />{"<option value='good'>Good Weather</option>"}<br />
			20 | <Tab /><Tab />{"<option value='bad'>Bad Weather</option>"}<br />
			21 | <Tab />{"</select>"}<br />
			22 | <Tab />{"{"}<br />
			23 | <Tab /><Tab />{"filteredForecast.map(({ day, weather }) => ("}<br />
			24 | <Tab /><Tab /><Tab />{"<div key={day}>{day} is {weather}</div>"}<br />
			25 | <Tab /><Tab />)<br/>
			26 | <Tab />{"}"}<br />
			27 | {"</div>;"}
		</code>
		<div className="sample">
				<div>Filter</div>
				<select value={memoFilter} onChange={({ target }) => setMemoFilter(target.value)}>
				<option value="all">All</option>
				<option value="good">Good Weather</option>
				<option value="bad">Bad Weather</option>
			</select>
			{
				memoFilteredForecast.map(({ day, weather }) => <div key={day}>{day} is {weather}</div>)
			}
			<button onClick={() => setValue(1 + value)}>Re-Render</button>
		</div>
	</div>;
}

export default UseMemo;