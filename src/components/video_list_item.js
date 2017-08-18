import React from 'react'
import PropTypes from 'prop-types'

const VideoListItem = ({video, onVideoSelect}) => {
  const {title, thumbnails} = video.snippet
  return (
    <li onClick={() => onVideoSelect(video)}>
      <img src={thumbnails.high.url} />
      <h3>{title}</h3>
    </li>
  )
}

export default VideoListItem

VideoListItem.propTypes = {
  video: PropTypes.object,
  onVideoSelect: PropTypes.func
}
