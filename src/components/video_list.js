import React from 'react'
import PropTypes from 'prop-types'
import VideoListItem from './video_list_item'

const VideoList = ({videos, onVideoSelect}) => {
  if (videos.length === 0) {
    return (
      <div>Search Videos</div>
    )
  }

  const Videos = videos.map((video) => {
    return (
      <VideoListItem key={video.etag} video={video} onVideoSelect={onVideoSelect} />
    )
  })

  return (
    <ul className='list-group'>{Videos}</ul>
  )
}

export default VideoList

VideoList.propTypes = {
  videos: PropTypes.array,
  onVideoSelect: PropTypes.func
}
