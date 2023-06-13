/* eslint-disable jsx-a11y/label-has-associated-control */
// Write your code here.
import {Component} from 'react'
import './index.css'

class LetterCalculater extends Component {
  state = {phraseCount: ''}

  onChange = event => {
    this.setState({phraseCount: event.target.value})
  }

  render() {
    const {phraseCount} = this.state

    return (
      <div className="bg-container">
        <div className="letter-container">
          <div className="text-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div>
              <label htmlFor="phraseText" className="title">
                Enter the phrase
              </label>
              <input
                id="phraseText"
                className="input-box"
                onChange={this.onChange}
                placeholder="Enter the phrase"
                value={phraseCount}
              />
            </div>
            <div>
              <p className="button" type="button">
                No.of letters: {phraseCount.length}
              </p>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="logo"
          />
        </div>
      </div>
    )
  }
}

export default LetterCalculater
