import React from 'react';
import _ from 'lodash';
import { browserHistory } from 'react-router';

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      room: '',
    };
  }

  generateRoomCode() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let name = '';
    for (let i = 0; i < 4; i += 1) {
      name += _.sample(alphabet);
    }
    return name;
  }

  handleRoomChange(event) {
    this.setState({
      room: event.target.value.toUpperCase(),
    });
  }

  doof() {
    console.dir('doofin');
    browserHistory.push(`/${this.generateRoomCode().toUpperCase()}`);
  }

  render() {
    return (
      <div className="Home App__content__view">
        <div className="Home__jumbotron">
          <div className="Home__jumbotron__copy">
            {'Plan your next sprint'}
          </div>
        </div>
        <div className="Home__sections">
          <div className="Home__sections__item Home__sections__item--create">
            <a
              className="Home__section__btn btn"
              onClick={() => {this.doof();}}
            >
              {'Create'}
            </a>
          </div>
          <div className="Home__sections__separator">
            {'or'}
          </div>
          <div className="Home__sections__item Home__sections__item--join">
            <div className="Home__section__input-group">
              <div className="Home__section__input">
                <form method="get" action={`/${this.state.room.toUpperCase()}`}>
                  <label>{'Room'}</label>
                  <input
                    type="text"
                    value={this.state.room}
                    onChange={(e) => { this.handleRoomChange(e); } }
                  />
                  <button type="submit">
                    {'Join'}
                  </button>
                </form>
              </div>
              {false &&
                <div className="Home__section__btn">
                  {'Join'}
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
