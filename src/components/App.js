import React, { Component } from 'react'
import '../styles/App.css';
import Header from './Header';
import Videodetails from './Videodetails';
import Videolist from './Videoitem2';
import Homepage from './Homepage';
import {Route, Redirect, Switch } from 'react-router-dom';



export default class App extends Component {

	url;
	
	constructor(){
		super();
		this.state = {
			searchInput : 'Trending Music',
			videos:[],
			selectedVideo :''
		}
	}

	//  BASE_URL = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${rocket}&type=video&key=AIzaSyDb0U0I1pJEhA4BSAw71ODVwDvlmwXrRaI"

	onSearchChange = async(e) => {
		if(e.key === "Enter"){
			if(e.target.value.length === 0){
				alert("Pls enter something!");
				return 0;
			}
			console.log("search change1");
			await this.setState({searchInput:e.target.value})
			this.url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${this.state.searchInput}&type=video&key=AIzaSyDb0U0I1pJEhA4BSAw71ODVwDvlmwXrRaI`
			this.fetchApi();
			e.target.value  = "";
		}
	}

	componentWillMount(){
		this.url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${this.state.searchInput}&type=video&key=AIzaSyDb0U0I1pJEhA4BSAw71ODVwDvlmwXrRaI`
		this.fetchApi();
	}


	fetchApi = async(i) => {
		const response = await fetch(this.url);
		const data = await response.json();
		console.log(data.items);
		// console.log(data.items[i])
		this.setState({videos:data.items})
	}

	handleVideoSelect = async(video) => {
		await this.setState({selectedVideo:video})
		console.log(this.state.selectedVideo);
	}

	render() {
	
		return (
			
			<div>
				<Header searchChange={this.onSearchChange} />
				{
				this.state.selectedVideo
				?
				<Videodetails video={this.state.selectedVideo} videos={this.state.videos} handleVideoSelect={this.handleVideoSelect}/>
				:
				<Homepage videos={this.state.videos} handleVideoSelect={this.handleVideoSelect}  />
				}
				
				{/* <Videodetails video={this.state.selectedVideo}/> */}
				
				


				{/* <div >
					<Searchbar searchChange={this.onSearchChange} searchClick={this.onSearchClick}/>
				</div>
				<div className="ui-video">
					<div>
						<Videodetails video={this.state.selectedVideo}/>
					</div>
					<div>
						<Videolist videos={this.state.videos} handleVideoSelect={this.handleVideoSelect}/>
					</div>
				</div> */}
			</div>
			
		)
	}
}

