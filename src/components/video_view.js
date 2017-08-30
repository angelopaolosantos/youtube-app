import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const VideoView = ({selectedVideo}) => {
  if (!selectedVideo) {
    return (
      <div>No Video Selected</div>
    )
  }

  const videoSource = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`
  const {title, publishedAt, description} = selectedVideo.snippet
  const videoPublished = moment(publishedAt).fromNow()
  return (
    <div className='embed-responsive embed-responsive-16by9'>
      <iframe className='embed-responsive-item' src={videoSource} />
      <h1>{title}</h1>
      <div>{videoPublished}</div>
      <p>{description}</p>
    </div>
  )
}

export default VideoView

VideoView.propTypes = {
  selectedVideo: PropTypes.object
}
