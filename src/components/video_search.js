import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class VideoSearch extends Component {
  constructor (props) {
    super(props)
    this.state = {
      term: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      term: e.target.value
    })
    this.props.onSearchTermChange(this.state.term)
  }

  render () {
    return (
      <div>
        <input placeholder='Type video title to search' value={this.state.term} onChange={this.handleChange} />
      </div>
    )
  }
}

VideoSearch.propTypes = {
  onSearchTermChange: PropTypes.func
}
