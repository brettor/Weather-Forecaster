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
			const weatherArray = res.list;
			console.log(weatherArray);
			const pressArray = weatherArray.map(function(i){
				return i.main.pressure;
			});
			let totalPress = 0;
			for(let i = 0; i < pressArray.length; i++){
				totalPress += pressArray[i];
			}
			const tempArray = weatherArray.map(function(i){
				return i.main.temp_max;
			});
			const avgPress = (Math.round(totalPress / pressArray.length)) / 10;
			console.log(avgPress);
			const tempOne = Math.round(Math.max(...(tempArray.slice(0, 8))));
			const tempTwo = Math.round(Math.max(...(tempArray.slice(8, 16))));
			const tempThree = Math.round(Math.max(...(tempArray.slice(16, 24))));
			const tempFour = Math.round(Math.max(...(tempArray.slice(24, 32))));
			const tempFive = Math.round(Math.max(...(tempArray.slice(32, 40))));
			console.log(tempOne, tempTwo, tempThree, tempFour, tempFive);
			const dateOne = (weatherArray[3].dt_txt).slice(0, 10);
			const dateTwo = (weatherArray[11].dt_txt).slice(0, 10);;
			const dateThree = (weatherArray[19].dt_txt).slice(0, 10);;
			const dateFour = (weatherArray[27].dt_txt).slice(0, 10);;
			const dateFive = (weatherArray[35].dt_txt).slice(0, 10);;
			console.log(dateOne, dateTwo, dateThree, dateFour, dateFive);
			const iconOne = weatherArray[3].weather[0].icon;
			const iconTwo = weatherArray[11].weather[0].icon;
			const iconThree = weatherArray[19].weather[0].icon;
			const iconFour = weatherArray[27].weather[0].icon;
			const iconFive = weatherArray[35].weather[0].icon;
			console.log(iconOne, iconTwo, iconThree, iconFour, iconFive);
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
