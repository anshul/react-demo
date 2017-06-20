import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Sidebar extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      mins: 0,
      secs: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      const secs = this.state.secs + 1;
      const mins = secs >= 60 ? this.state.mins + 1 : this.state.mins;
      this.setState({ mins, secs: secs % 60 });
    }, 1000);
  }

  render() {
    return (
      <div style={{ width: '150px', textAlign: 'center'}} >
        <p> {this.state.mins}:{this.state.secs < 10 ? `0${this.state.secs}` : this.state.secs}</p>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/settings'}>Settings</Link>
          </li>
        </ul>
      </div>
    );
  }
}

const selector = () => ({});

export default connect(selector, {})(Sidebar);