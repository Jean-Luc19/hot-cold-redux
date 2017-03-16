import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

export class UserGuess extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
        input: ''
    }
  };
  handleClick(e) {
    e.preventDefault();
    this.props.dispatch(actions.guess(this.state.input))
    this.setState({input: ''});
  }
  handleChange(e) {
     this.setState({input: e.target.value});
  }
  render() {
    return (
            <div className="guess-input">
                <form action="" onSubmit={this.handleClick}>
                    <input className="input" type="number"
                        max="100"
                        placeholder="Current Thermodynamic Indicator"
                        onChange={this.handleChange}
                        value={this.state.input}
                        required
                    />
                  <input className="input submit" type="submit"/>
                </form>
            </div>
    );
  }
}
const mapStateToProps = (state, props) => ({
    input: state.input

})
export default connect(mapStateToProps)(UserGuess);
