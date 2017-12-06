import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route, Link } from 'react-router-dom';
import $ from 'jquery';

const key = "e702b77b348838b660167fadf559e91c";

class App extends React.Component {
	constructor(props){
		super();
		this.state = {
			city: ""
		}
		this.changeCity = this.changeCity.bind(this);
		this.getWeather = this.getWeather.bind(this);
	};
	getWeather(e){
		e.preventDefault();
		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/forecast?mode=json",
			data: {
				q: this.state.city,
				APPID: key,
				units: "metric"
			}
		}).then((res) => {
			console.log(res);
		});
	};
	changeCity(e){
		this.setState({
		  city: e.target.value
		});
	};
	render(){
		return(
			<div>
				<h1>Weather Forecaster</h1>
				<form onSubmit={this.getWeather}>
					<input 
						placeholder={"City"} 
						type="text"
						value={this.state.city}
						onChange={this.changeCity}
					/>
				</form>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
