import React from 'react';


class Demo extends React.Component {
  state = {
    audioSource: null
  }
  componentDidMount = async () => {
    const res = await fetch('http://localhost:3001/podcasts')
    const result = await res.json();
    console.log("result: ", result);
    const {url} = result.podcast.episodes[0]
    this.setState({
      audioSource: url
    })
  }
  render() {
    const {audioSource} = this.state
    console.log('audioSource: ', audioSource)
    return (
      <div>
        <h1>Hello</h1>
        {
          audioSource && 
          (
          <audio id="8000" src={audioSource} />
      )
        }
      </div>
      )
  }
}

export default Demo;
