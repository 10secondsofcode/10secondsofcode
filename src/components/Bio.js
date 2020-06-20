import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

// import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(1.5),
        }}
      >
        {/* <img
          src={profilePic}
          alt={`Elangovan`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            borderRadius: '50%',
            width: rhythm(2),
            height: rhythm(2),
          }}
        /> */}
        <p>
          Personal blog by{' '}
          <a href="https://twitter.com/im_leaf" target="_blank">
            Elangovan
          </a>
          .<br></br>I learn by breaking stuff (mostly code).
        </p>
      </div>
    )
  }
}

export default Bio
