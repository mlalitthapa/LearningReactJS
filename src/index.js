import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyBicImyrAtIqvUBS0rZZYZ1Je4aP_Aq9tw';

// Create some html component
class App extends Component {

    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({ key: API_KEY, term: 'Ozzy Man'}, (videos) => {
            console.log(videos);
            // this will be resolved as this.setState({ videos: videos }); (ES6 syntax)
            this.setState({ videos });
        })
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

// Render the HTML component
ReactDOM.render(<App />, document.querySelector('.container'));
