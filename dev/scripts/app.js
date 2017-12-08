import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route, Link } from 'react-router-dom';
import $ from 'jquery';

const Header = function(){
	return (
		<header>
			<div className="wrapper">
				<h1>Weather Forecaster</h1>
			</div>
		</header>
	)
}

class App extends React.Component {
	constructor(props){
		super();
		this.state = {
			city: "",
			avgPress: "",
			tempOne: "",
			tempTwo: "",
			tempThree: "",
			tempFour: "",
			tempFive: "",
			dateOne: "",
			dateTwo: "",
			dateThree: "",
			dateFour: "",
			dateFive: "",
			iconOne: "",
			iconTwo: "",
			iconThree: "",
			iconFour: "",
			iconFive: "",
			location: false
		}
		this.changeCity = this.changeCity.bind(this);
		this.getWeather = this.getWeather.bind(this);
	};
	getWeather(e){
		e.preventDefault();
		const key = "e702b77b348838b660167fadf559e91c";
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
			let monthOne = "";
			if((weatherArray[3].dt_txt).slice(5, 8) == "01"){
				monthOne = "January ";
			}
			else if((weatherArray[3].dt_txt).slice(5, 8) == "02"){
				monthOne = "February ";
			}
			else if((weatherArray[3].dt_txt).slice(5, 8) == "03"){
				monthOne = "March ";
			}
			else if((weatherArray[3].dt_txt).slice(5, 8) == "04"){
				monthOne = "April ";
			}
			else if((weatherArray[3].dt_txt).slice(5, 8) == "05"){
				monthOne = "May ";
			}
			else if((weatherArray[3].dt_txt).slice(5, 8) == "06"){
				monthOne = "June ";
			}
			else if((weatherArray[3].dt_txt).slice(5, 8) == "07"){
				monthOne = "July ";
			}
			else if((weatherArray[3].dt_txt).slice(5, 8) == "08"){
				monthOne = "August ";
			}
			else if((weatherArray[3].dt_txt).slice(5, 8) == "09"){
				monthOne = "September ";
			}
			else if((weatherArray[3].dt_txt).slice(5, 8) == "10"){
				monthOne = "October ";
			}
			else if((weatherArray[3].dt_txt).slice(5, 8) == "11"){
				monthOne = "November ";
			}
			else{
				monthOne = "December ";
			}		
			let monthTwo = "";
			if((weatherArray[11].dt_txt).slice(5, 8) == "01"){
				monthTwo = "January ";
			}
			else if((weatherArray[11].dt_txt).slice(5, 8) == "02"){
				monthTwo = "February ";
			}
			else if((weatherArray[11].dt_txt).slice(5, 8) == "03"){
				monthTwo = "March ";
			}
			else if((weatherArray[11].dt_txt).slice(5, 8) == "04"){
				monthTwo = "April ";
			}
			else if((weatherArray[11].dt_txt).slice(5, 8) == "05"){
				monthTwo = "May ";
			}
			else if((weatherArray[11].dt_txt).slice(5, 8) == "06"){
				monthTwo = "June ";
			}
			else if((weatherArray[11].dt_txt).slice(5, 8) == "07"){
				monthTwo = "July ";
			}
			else if((weatherArray[11].dt_txt).slice(5, 8) == "08"){
				monthTwo = "August ";
			}
			else if((weatherArray[11].dt_txt).slice(5, 8) == "09"){
				monthTwo = "September ";
			}
			else if((weatherArray[11].dt_txt).slice(5, 8) == "10"){
				monthTwo = "October ";
			}
			else if((weatherArray[11].dt_txt).slice(5, 8) == "11"){
				monthTwo = "November ";
			}
			else{
				monthTwo = "December ";
			}	
			let monthThree = "";
			if((weatherArray[19].dt_txt).slice(5, 8) == "01"){
				const monthThree = "January ";
			}
			else if((weatherArray[19].dt_txt).slice(5, 8) == "02"){
				monthThree = "February ";
			}
			else if((weatherArray[19].dt_txt).slice(5, 8) == "03"){
				monthThree = "March ";
			}
			else if((weatherArray[19].dt_txt).slice(5, 8) == "04"){
				monthThree = "April ";
			}
			else if((weatherArray[19].dt_txt).slice(5, 8) == "05"){
				monthThree = "May ";
			}
			else if((weatherArray[19].dt_txt).slice(5, 8) == "06"){
				monthThree = "June ";
			}
			else if((weatherArray[19].dt_txt).slice(5, 8) == "07"){
				monthThree = "July ";
			}
			else if((weatherArray[19].dt_txt).slice(5, 8) == "08"){
				monthThree = "August ";
			}
			else if((weatherArray[19].dt_txt).slice(5, 8) == "09"){
				monthThree = "September ";
			}
			else if((weatherArray[19].dt_txt).slice(5, 8) == "10"){
				monthThree = "October ";
			}
			else if((weatherArray[19].dt_txt).slice(5, 8) == "11"){
				monthThree = "November ";
			}
			else{
				monthThree = "December ";
			}
			let monthFour = "";
			if((weatherArray[27].dt_txt).slice(5, 8) == "01"){
				monthFour = "January ";
			}
			else if((weatherArray[27].dt_txt).slice(5, 8) == "02"){
				monthFour = "February ";
			}
			else if((weatherArray[27].dt_txt).slice(5, 8) == "03"){
				monthFour = "March ";
			}
			else if((weatherArray[27].dt_txt).slice(5, 8) == "04"){
				monthFour = "April ";
			}
			else if((weatherArray[27].dt_txt).slice(5, 8) == "05"){
				monthFour = "May ";
			}
			else if((weatherArray[27].dt_txt).slice(5, 8) == "06"){
				monthFour = "June ";
			}
			else if((weatherArray[27].dt_txt).slice(5, 8) == "07"){
				monthFour = "July ";
			}
			else if((weatherArray[27].dt_txt).slice(5, 8) == "08"){
				monthFour = "August ";
			}
			else if((weatherArray[27].dt_txt).slice(5, 8) == "09"){
				monthFour = "September ";
			}
			else if((weatherArray[27].dt_txt).slice(5, 8) == "10"){
				monthFour = "October ";
			}
			else if((weatherArray[27].dt_txt).slice(5, 8) == "11"){
				monthFour = "November ";
			}
			else{
				monthFour = "December ";
			}	
			let monthFive = "";
			if((weatherArray[35].dt_txt).slice(5, 8) == "01"){
				monthFive = "January";
			}
			else if((weatherArray[35].dt_txt).slice(5, 8) == "02"){
				monthFive = "February ";
			}
			else if((weatherArray[35].dt_txt).slice(5, 8) == "03"){
				monthFive = "March ";
			}
			else if((weatherArray[35].dt_txt).slice(5, 8) == "04"){
				monthFive = "April ";
			}
			else if((weatherArray[35].dt_txt).slice(5, 8) == "05"){
				monthFive = "May ";
			}
			else if((weatherArray[35].dt_txt).slice(5, 8) == "06"){
				monthFive = "June ";
			}
			else if((weatherArray[35].dt_txt).slice(5, 8) == "07"){
				monthFive = "July ";
			}
			else if((weatherArray[35].dt_txt).slice(5, 8) == "08"){
				monthFive = "August ";
			}
			else if((weatherArray[35].dt_txt).slice(5, 8) == "09"){
				monthFive = "September ";
			}
			else if((weatherArray[35].dt_txt).slice(5, 8) == "10"){
				monthFive = "October ";
			}
			else if((weatherArray[35].dt_txt).slice(5, 8) == "11"){
				monthFive = "November ";
			}
			else{
				monthFive = "December ";
			}
			this.setState({
				avgPress: (Math.round(totalPress / pressArray.length)) / 10,
				tempOne: Math.round(Math.max(...(tempArray.slice(0, 8)))),
				tempTwo: Math.round(Math.max(...(tempArray.slice(8, 16)))),
				tempThree: Math.round(Math.max(...(tempArray.slice(16, 24)))),
				tempFour: Math.round(Math.max(...(tempArray.slice(24, 32)))),
				tempFive: Math.round(Math.max(...(tempArray.slice(32, 40)))),
				dateOne: (monthOne + (weatherArray[3].dt_txt).slice(8, 10)),
				dateTwo: (monthTwo + (weatherArray[11].dt_txt).slice(8, 10)),
				dateThree: (monthThree + (weatherArray[19].dt_txt).slice(8, 10)),
				dateFour: (monthFour + (weatherArray[27].dt_txt).slice(8, 10)),
				dateFive: (monthFive + (weatherArray[35].dt_txt).slice(8, 10)),
				iconOne: weatherArray[3].weather[0].icon,
				iconTwo: weatherArray[11].weather[0].icon,
				iconThree: weatherArray[19].weather[0].icon,
				iconFour: weatherArray[27].weather[0].icon,
				iconFive: weatherArray[35].weather[0].icon,
				location: true
			});
			console.log(this.state.avgPress);
			console.log(this.state.tempOne, this.state.tempTwo, this.state.tempThree, this.state.tempFour, this.state.tempFive);
			console.log(this.state.dateOne, this.state.dateTwo, this.state.dateThree, this.state.dateFour, this.state.dateFive);
			console.log(this.state.iconOne, this.state.iconTwo, this.state.iconThree, this.state.iconFour, this.state.iconFive);
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
				<Header />
				<main className="wrapper">
					<form onSubmit={this.getWeather}>
						<input 
							placeholder={"City"} 
							type="text"
							value={this.state.city}
							onChange={this.changeCity}
						/>
					</form>
					{this.state.location ?
					<div className="forecast">
						<div className="dayOne">
							<h3>{this.state.dateOne}</h3>
							<i className="wi wi-day-sunny"></i>
							<h2>{this.state.tempOne}&deg;C</h2>
							<h4>Rain</h4>
						</div> 
						<div className="dayTwo">
							<h3>{this.state.dateTwo}</h3>
							<i className="wi wi-day-sunny"></i>
							<h2>{this.state.tempTwo}&deg;C</h2>
							<h4>Rain</h4>
						</div>
						<div className="dayThree">
							<h3>{this.state.dateThree}</h3>
							<i className="wi wi-day-sunny"></i>
							<h2>{this.state.tempThree}&deg;C</h2>
							<h4>Rain</h4>
						</div>
						<div className="dayFour">
							<h3>{this.state.dateFour}</h3>
							<i className="wi wi-day-sunny"></i>
							<h2>{this.state.tempFour}&deg;C</h2>
							<h4>Rain</h4>
						</div>
						<div className="dayFive">
							<h3>{this.state.dateFive}</h3>
							<i className="wi wi-day-sunny"></i>
							<h2>{this.state.tempFive}&deg;C</h2>
							<h4>Rain</h4>
						</div>
						<h5>Average pressure is {this.state.avgPress} kPa</h5>
					</div>
					:
					null
					}
				</main>
				<Footer />
			</div>
		);
	}
}

const Footer = function(){
	return (
		<footer>
			<div className="wrapper">
				<p>&copy; <a href="http://brettnielsen.ca/">Brett Nielsen</a>, 2017</p>
				<p>Using the <a href="https://openweathermap.org/api">OpenWeatherMap API</a></p>
				<p>Based on brief provided by <a href="https://www.architech.ca/">Architech</a></p>
			</div>
		</footer>
	)
}

ReactDOM.render(<App />, document.getElementById('app'));
