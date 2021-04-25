// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {


    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
    }

    setBit = () => {
        this.setState({
            settings: {
              ...this.state.settings,
              bitrate: 12
            }
          });
    }

    setRes = () => {
        this.setState({
            settings: {
              ...this.state.settings,
              video: {
                  ...this.state.video,
                  resolution: '720p'
              }
              
            }
          });
    }
    
    // {
    //     this.setState({
    //       settings: {
    //         ...this.state.settings,
    //         video: {
    //           ...this.state.settings.video,
    //           resolution: '720p'
    //         }
    //       }
    //     });


    render() {
        return (
            <div>
                <button onClick={this.setBit} className='bitrate'>Change Bit</button>
                <button onClick={this.setRes} className='resolution'>Change Res</button>
                
            </div>
        )
    }
}
