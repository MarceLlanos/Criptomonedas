import React, {Component} from 'react';
import Header from './components/Header';
import Router from './components/Router';

class App extends Component {

	render(){
		return (
			<div className="contenedor">
				<Header/>
				<Router/>
			</div>
		)
	}
}

export default App;
