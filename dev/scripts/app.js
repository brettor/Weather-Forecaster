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
			descOne: "",
			descTwo: "",
			descThree: "",
			descFour: "",
			descFive: "",
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
			}else if((weatherArray[3].dt_txt).slice(5, 8) == "02"){
				monthOne = "February ";
			}else if((weatherArray[3].dt_txt).slice(5, 8) == "03"){
				monthOne = "March ";
			}else if((weatherArray[3].dt_txt).slice(5, 8) == "04"){
				monthOne = "April ";
			}else if((weatherArray[3].dt_txt).slice(5, 8) == "05"){
				monthOne = "May ";
			}else if((weatherArray[3].dt_txt).slice(5, 8) == "06"){
				monthOne = "June ";
			}else if((weatherArray[3].dt_txt).slice(5, 8) == "07"){
				monthOne = "July ";
			}else if((weatherArray[3].dt_txt).slice(5, 8) == "08"){
				monthOne = "August ";
			}else if((weatherArray[3].dt_txt).slice(5, 8) == "09"){
				monthOne = "September ";
			}else if((weatherArray[3].dt_txt).slice(5, 8) == "10"){
				monthOne = "October ";
			}else if((weatherArray[3].dt_txt).slice(5, 8) == "11"){
				monthOne = "November ";
			}else{
				monthOne = "December ";
			}		
			let monthTwo = "";
			if((weatherArray[11].dt_txt).slice(5, 8) == "01"){
				monthTwo = "January ";
			}else if((weatherArray[11].dt_txt).slice(5, 8) == "02"){
				monthTwo = "February ";
			}else if((weatherArray[11].dt_txt).slice(5, 8) == "03"){
				monthTwo = "March ";
			}else if((weatherArray[11].dt_txt).slice(5, 8) == "04"){
				monthTwo = "April ";
			}else if((weatherArray[11].dt_txt).slice(5, 8) == "05"){
				monthTwo = "May ";
			}else if((weatherArray[11].dt_txt).slice(5, 8) == "06"){
				monthTwo = "June ";
			}else if((weatherArray[11].dt_txt).slice(5, 8) == "07"){
				monthTwo = "July ";
			}else if((weatherArray[11].dt_txt).slice(5, 8) == "08"){
				monthTwo = "August ";
			}else if((weatherArray[11].dt_txt).slice(5, 8) == "09"){
				monthTwo = "September ";
			}else if((weatherArray[11].dt_txt).slice(5, 8) == "10"){
				monthTwo = "October ";
			}else if((weatherArray[11].dt_txt).slice(5, 8) == "11"){
				monthTwo = "November ";
			}else{
				monthTwo = "December ";
			}	
			let monthThree = "";
			if((weatherArray[19].dt_txt).slice(5, 8) == "01"){
				const monthThree = "January ";
			}else if((weatherArray[19].dt_txt).slice(5, 8) == "02"){
				monthThree = "February ";
			}else if((weatherArray[19].dt_txt).slice(5, 8) == "03"){
				monthThree = "March ";
			}else if((weatherArray[19].dt_txt).slice(5, 8) == "04"){
				monthThree = "April ";
			}else if((weatherArray[19].dt_txt).slice(5, 8) == "05"){
				monthThree = "May ";
			}else if((weatherArray[19].dt_txt).slice(5, 8) == "06"){
				monthThree = "June ";
			}else if((weatherArray[19].dt_txt).slice(5, 8) == "07"){
				monthThree = "July ";
			}else if((weatherArray[19].dt_txt).slice(5, 8) == "08"){
				monthThree = "August ";
			}else if((weatherArray[19].dt_txt).slice(5, 8) == "09"){
				monthThree = "September ";
			}else if((weatherArray[19].dt_txt).slice(5, 8) == "10"){
				monthThree = "October ";
			}else if((weatherArray[19].dt_txt).slice(5, 8) == "11"){
				monthThree = "November ";
			}else{
				monthThree = "December ";
			}
			let monthFour = "";
			if((weatherArray[27].dt_txt).slice(5, 8) == "01"){
				monthFour = "January ";
			}else if((weatherArray[27].dt_txt).slice(5, 8) == "02"){
				monthFour = "February ";
			}else if((weatherArray[27].dt_txt).slice(5, 8) == "03"){
				monthFour = "March ";
			}else if((weatherArray[27].dt_txt).slice(5, 8) == "04"){
				monthFour = "April ";
			}else if((weatherArray[27].dt_txt).slice(5, 8) == "05"){
				monthFour = "May ";
			}else if((weatherArray[27].dt_txt).slice(5, 8) == "06"){
				monthFour = "June ";
			}else if((weatherArray[27].dt_txt).slice(5, 8) == "07"){
				monthFour = "July ";
			}else if((weatherArray[27].dt_txt).slice(5, 8) == "08"){
				monthFour = "August ";
			}else if((weatherArray[27].dt_txt).slice(5, 8) == "09"){
				monthFour = "September ";
			}else if((weatherArray[27].dt_txt).slice(5, 8) == "10"){
				monthFour = "October ";
			}else if((weatherArray[27].dt_txt).slice(5, 8) == "11"){
				monthFour = "November ";
			}else{
				monthFour = "December ";
			}	
			let monthFive = "";
			if((weatherArray[35].dt_txt).slice(5, 8) == "01"){
				monthFive = "January";
			}else if((weatherArray[35].dt_txt).slice(5, 8) == "02"){
				monthFive = "February ";
			}else if((weatherArray[35].dt_txt).slice(5, 8) == "03"){
				monthFive = "March ";
			}else if((weatherArray[35].dt_txt).slice(5, 8) == "04"){
				monthFive = "April ";
			}else if((weatherArray[35].dt_txt).slice(5, 8) == "05"){
				monthFive = "May ";
			}else if((weatherArray[35].dt_txt).slice(5, 8) == "06"){
				monthFive = "June ";
			}else if((weatherArray[35].dt_txt).slice(5, 8) == "07"){
				monthFive = "July ";
			}else if((weatherArray[35].dt_txt).slice(5, 8) == "08"){
				monthFive = "August ";
			}else if((weatherArray[35].dt_txt).slice(5, 8) == "09"){
				monthFive = "September ";
			}else if((weatherArray[35].dt_txt).slice(5, 8) == "10"){
				monthFive = "October ";
			}else if((weatherArray[35].dt_txt).slice(5, 8) == "11"){
				monthFive = "November ";
			}else{
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
				location: true
			});
			if((weatherArray[3].weather[0].icon) == "01d" || (weatherArray[3].weather[0].icon) == "01n"){
				this.setState({
					iconOne: "wi-day-sunny",
					descOne: "Clear"
				});
			}else if((weatherArray[3].weather[0].icon) == "02d" || (weatherArray[3].weather[0].icon) == "02n"){
				this.setState({
					iconOne: "wi-day-sunny-overcast",
					descOne: "Scattered Clouds"
				});
			}else if((weatherArray[3].weather[0].icon) == "03d" || (weatherArray[3].weather[0].icon) == "03n"){
				this.setState({
					iconOne: "wi-day-cloudy",
					descOne: "Partly Cloudy"
				});
			}else if((weatherArray[3].weather[0].icon) == "03d" || (weatherArray[3].weather[0].icon) == "03n"){
				this.setState({
					iconOne: "wi-cloudy",
					descOne: "Overcast"
				});
			}else if((weatherArray[3].weather[0].icon) == "09d" || (weatherArray[3].weather[0].icon) == "09n"){
				this.setState({
					iconOne: "wi-rain",
					descOne: "Showers"
				});
			}else if((weatherArray[3].weather[0].icon) == "10d" || (weatherArray[3].weather[0].icon) == "10n"){
				this.setState({
					iconOne: "wi-showers",
					descOne: "Rain"
				});
			}else if((weatherArray[3].weather[0].icon) == "11d" || (weatherArray[3].weather[0].icon) == "11n"){
				this.setState({
					iconOne: "wi-storm-showers",
					descOne: "Thunderstorms"
				});
			}else if((weatherArray[3].weather[0].icon) == "13d" || (weatherArray[3].weather[0].icon) == "13n"){
				this.setState({
					iconOne: "wi-snow",
					descOne: "Snow"
				});
			}else{
				this.setState({
					iconOne: "wi-fog",
					descOne: "Fog"
				});
			}
			if((weatherArray[11].weather[0].icon) == "01d" || (weatherArray[11].weather[0].icon) == "01n"){
				this.setState({
					iconTwo: "wi-day-sunny",
					descTwo: "Clear"
				});
			}else if((weatherArray[11].weather[0].icon) == "02d" || (weatherArray[11].weather[0].icon) == "02n"){
				this.setState({
					iconTwo: "wi-day-sunny-overcast",
					descTwo: "Scattered Clouds"
				});
			}else if((weatherArray[11].weather[0].icon) == "03d" || (weatherArray[11].weather[0].icon) == "03n"){
				this.setState({
					iconTwo: "wi-day-cloudy",
					descTwo: "Partly Cloudy"
				});
			}else if((weatherArray[11].weather[0].icon) == "03d" || (weatherArray[11].weather[0].icon) == "03n"){
				this.setState({
					iconTwo: "wi-cloudy",
					descTwo: "Overcast"
				});
			}else if((weatherArray[11].weather[0].icon) == "09d" || (weatherArray[11].weather[0].icon) == "09n"){
				this.setState({
					iconTwo: "wi-rain",
					descTwo: "Showers"
				});
			}else if((weatherArray[11].weather[0].icon) == "10d" || (weatherArray[11].weather[0].icon) == "10n"){
				this.setState({
					iconTwo: "wi-showers",
					descTwo: "Rain"
				});
			}else if((weatherArray[11].weather[0].icon) == "11d" || (weatherArray[11].weather[0].icon) == "11n"){
				this.setState({
					iconTwo: "wi-storm-showers",
					descTwo: "Thunderstorms"
				});
			}else if((weatherArray[11].weather[0].icon) == "13d" || (weatherArray[11].weather[0].icon) == "13n"){
				this.setState({
					iconTwo: "wi-snow",
					descTwo: "Snow"
				});
			}else{
				this.setState({
					iconTwo: "wi-fog",
					descTwo: "Fog"
				});
			}
			if((weatherArray[19].weather[0].icon) == "01d" || (weatherArray[19].weather[0].icon) == "01n"){
				this.setState({
					iconThree: "wi-day-sunny",
					descThree: "Clear"
				});
			}else if((weatherArray[19].weather[0].icon) == "02d" || (weatherArray[19].weather[0].icon) == "02n"){
				this.setState({
					iconThree: "wi-day-sunny-overcast",
					descThree: "Scattered Clouds"
				});
			}else if((weatherArray[19].weather[0].icon) == "03d" || (weatherArray[19].weather[0].icon) == "03n"){
				this.setState({
					iconThree: "wi-day-cloudy",
					descThree: "Partly Cloudy"
				});
			}else if((weatherArray[19].weather[0].icon) == "03d" || (weatherArray[19].weather[0].icon) == "03n"){
				this.setState({
					iconThree: "wi-cloudy",
					descThree: "Overcast"
				});
			}else if((weatherArray[19].weather[0].icon) == "09d" || (weatherArray[19].weather[0].icon) == "09n"){
				this.setState({
					iconThree: "wi-rain",
					descThree: "Showers"
				});
			}else if((weatherArray[19].weather[0].icon) == "10d" || (weatherArray[19].weather[0].icon) == "10n"){
				this.setState({
					iconThree: "wi-showers",
					descThree: "Rain"
				});
			}else if((weatherArray[19].weather[0].icon) == "11d" || (weatherArray[19].weather[0].icon) == "11n"){
				this.setState({
					iconThree: "wi-storm-showers",
					descThree: "Thunderstorms"
				});
			}else if((weatherArray[19].weather[0].icon) == "13d" || (weatherArray[19].weather[0].icon) == "13n"){
				this.setState({
					iconThree: "wi-snow",
					descThree: "Snow"
				});
			}else{
				this.setState({
					iconThree: "wi-fog",
					descThree: "Fog"
				});
			}
			if((weatherArray[27].weather[0].icon) == "01d" || (weatherArray[27].weather[0].icon) == "01n"){
				this.setState({
					iconFour: "wi-day-sunny",
					descFour: "Clear"
				});
			}else if((weatherArray[27].weather[0].icon) == "02d" || (weatherArray[27].weather[0].icon) == "02n"){
				this.setState({
					iconFour: "wi-day-sunny-overcast",
					descFour: "Scattered Clouds"
				});
			}else if((weatherArray[27].weather[0].icon) == "03d" || (weatherArray[27].weather[0].icon) == "03n"){
				this.setState({
					iconFour: "wi-day-cloudy",
					descFour: "Partly Cloudy"
				});
			}else if((weatherArray[27].weather[0].icon) == "03d" || (weatherArray[27].weather[0].icon) == "03n"){
				this.setState({
					iconFour: "wi-cloudy",
					descFour: "Overcast"
				});
			}else if((weatherArray[27].weather[0].icon) == "09d" || (weatherArray[27].weather[0].icon) == "09n"){
				this.setState({
					iconFour: "wi-rain",
					descFour: "Showers"
				});
			}else if((weatherArray[27].weather[0].icon) == "10d" || (weatherArray[27].weather[0].icon) == "10n"){
				this.setState({
					iconFour: "wi-showers",
					descFour: "Rain"
				});
			}else if((weatherArray[27].weather[0].icon) == "11d" || (weatherArray[27].weather[0].icon) == "11n"){
				this.setState({
					iconFour: "wi-storm-showers",
					descFour: "Thunderstorms"
				});
			}else if((weatherArray[27].weather[0].icon) == "13d" || (weatherArray[27].weather[0].icon) == "13n"){
				this.setState({
					iconFour: "wi-snow",
					descFour: "Snow"
				});
			}else{
				this.setState({
					iconFour: "wi-fog",
					descFour: "Fog"
				});
			}
			if((weatherArray[35].weather[0].icon) == "01d" || (weatherArray[35].weather[0].icon) == "01n"){
				this.setState({
					iconFive: "wi-day-sunny",
					descFive: "Clear"
				});
			}else if((weatherArray[35].weather[0].icon) == "02d" || (weatherArray[35].weather[0].icon) == "02n"){
				this.setState({
					iconFive: "wi-day-sunny-overcast",
					descFive: "Scattered Clouds"
				});
			}else if((weatherArray[35].weather[0].icon) == "03d" || (weatherArray[35].weather[0].icon) == "03n"){
				this.setState({
					iconFive: "wi-day-cloudy",
					descFive: "Partly Cloudy"
				});
			}else if((weatherArray[35].weather[0].icon) == "03d" || (weatherArray[35].weather[0].icon) == "03n"){
				this.setState({
					iconFive: "wi-cloudy",
					descFive: "Overcast"
				});
			}else if((weatherArray[35].weather[0].icon) == "09d" || (weatherArray[35].weather[0].icon) == "09n"){
				this.setState({
					iconFive: "wi-rain",
					descFive: "Showers"
				});
			}else if((weatherArray[35].weather[0].icon) == "10d" || (weatherArray[35].weather[0].icon) == "10n"){
				this.setState({
					iconFive: "wi-showers",
					descFive: "Rain"
				});
			}else if((weatherArray[35].weather[0].icon) == "11d" || (weatherArray[35].weather[0].icon) == "11n"){
				this.setState({
					iconFive: "wi-storm-showers",
					descFive: "Thunderstorms"
				});
			}else if((weatherArray[35].weather[0].icon) == "13d" || (weatherArray[35].weather[0].icon) == "13n"){
				this.setState({
					iconFive: "wi-snow",
					descFive: "Snow"
				});
			}else{
				this.setState({
					iconFive: "wi-fog",
					descFive: "Fog"
				});
			}
		});
	};
	changeCity(e){
		this.setState({
		  city: e.target.value
		});
	};
	render(){
		return(
			<div className="body">
				<Header />
				<main>
					<div className="wrapper">
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
							<div className="fiveDay">
								<div className="day">
									<h3>{this.state.dateOne}</h3>
									<div className="icon">
										<i className={"wi " + this.state.iconOne}></i>
									</div>
									<h2>{this.state.tempOne}&deg;C</h2>
									<h4>{this.state.descOne}</h4>
								</div> 
								<div className="day">
									<h3>{this.state.dateTwo}</h3>
									<div className="icon">
										<i className={"wi " + this.state.iconTwo}></i>
									</div>
									<h2>{this.state.tempTwo}&deg;C</h2>
									<h4>{this.state.descTwo}</h4>
								</div>
								<div className="day">
									<h3>{this.state.dateThree}</h3>
									<div className="icon">
										<i className={"wi " + this.state.iconThree}></i>
									</div>
									<h2>{this.state.tempThree}&deg;C</h2>
									<h4>{this.state.descThree}</h4>
								</div>
								<div className="day">
									<h3>{this.state.dateFour}</h3>
									<div className="icon">
										<i className={"wi " + this.state.iconFour}></i>
									</div>
									<h2>{this.state.tempFour}&deg;C</h2>
									<h4>{this.state.descFour}</h4>
								</div>
								<div className="day">
									<h3>{this.state.dateFive}</h3>
									<div className="icon">
										<i className={"wi " + this.state.iconFive}></i>
									</div>
									<h2>{this.state.tempFive}&deg;C</h2>
									<h4>{this.state.descFive}</h4>
								</div>
							</div>
							<h5>Average pressure is {this.state.avgPress} kPa</h5>
						</div>
						:
						null
						}
					</div>
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
