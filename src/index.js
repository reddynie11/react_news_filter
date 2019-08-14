import React from 'react';
import ReactDOM from 'react-dom';
import JSON from './db.json'
import Header from './components/header';
import NewsList from "./components/NewsList"
class App extends React.Component{
    state= { news : JSON }

    render(){
        return(
            <div>
                <Header />
                <NewsList data={this.state.news} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));