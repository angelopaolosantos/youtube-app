import React, { Component } from 'react'
import VideoSearch from './video_search'
import VideoList from './video_list'
import VideoView from './video_view'
import YouTubeSearch from 'youtube-api-search'
import _ from 'lodash'
// import styles from '../css/style.css'

const YOUTUBE_API_KEY = 'AIzaSyB7zHpQcyk9an-SFLREUd-qQWpPg_1HQqo'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('happy')
  }

  videoSearch (term) {
    YouTubeSearch({ key: YOUTUBE_API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render () {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

    return (
      <div className='container' >
        <VideoSearch onSearchTermChange={videoSearch} />
        <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
        <VideoView selectedVideo={this.state.selectedVideo} />
      </div>
    )
  }
}

export default App
