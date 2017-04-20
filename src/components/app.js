import _ from 'lodash';
import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from './search_bar';
import VideoDetail from './video_detail';
import VideoList from './video_list';

const API_KEY = 'AIzaSyBicImyrAtIqvUBS0rZZYZ1Je4aP_Aq9tw';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.searchVideo('Ozzy Man');
    }

    searchVideo(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {

        const searchVideo = _.debounce((term) => {this.searchVideo(term)}, 300);

        return (
            <div>
                <SearchBar onSearchTermChanged={searchVideo} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos}/>
            </div>
        );
    }
}

export default App;
