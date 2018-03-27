import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAVy0JBrg2iG4xQnzrPXbV3cfBkHUVQ1lc';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {videos: []};

        YTSearch({key: API_KEY, term: 'Бузова'}, (videos) => {
            this.setState({vidos: videos});
        });
    }

    render() {
        return (
            <div>
                <SearchBar/>
            </div>
        )
    }
}

ReactDom.render(<App />, document.querySelector('.container'));