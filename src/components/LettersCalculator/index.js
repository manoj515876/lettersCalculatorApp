import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    lettersCount: 0,
  }

  onChangeText = event => {
    this.setState({lettersCount: event.target.value.length})
  }

  render() {
    const {lettersCount} = this.state

    return (
      <div className="container">
        <div className="letters-card">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="label-text" htmlFor="text">
            Enter the Phrase
          </label>
          <input
            className="text-input"
            type="text"
            onChange={this.onChangeText}
            id="text"
            placeholder="Enter the Phrase"
          />
          <div className="count-card">
            <p className="count">No.of letters: {lettersCount}</p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="img"
        />
      </div>
    )
  }
}

export default LettersCalculator
