/* eslint-disable */
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  transition: all 300ms ease-in-out;
  padding-top: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 100px);
  background-color: #eee;
  color: rgba(0, 0, 0, 0.8);

  visibility: ${props => {
    if (props.historyPath === props.locationPath) {
      return 'visible'
    }
    if (props.status === 'entering') {
      return 'hidden'
    }
    if (props.status === 'entered') {
      return 'visible'
    }
    if (props.status === 'exiting') {
      return 'visible'
    }
    if (props.status === 'exited') {
      return 'hidden'
    }
  }};

  opacity: ${props => {
    if (props.historyPath === props.locationPath) {
      return 1
    }
    if (props.status === 'entering') {
      return 0
    }
    if (props.status === 'entered') {
      return 1
    }
    if (props.status === 'exiting') {
      return 1
    }
    if (props.status === 'exited') {
      return 0
    }
  }};

  transform: translate3d(
    ${props => {
      // if (props.locationPath === props.historyPath) {
      //   return 0;
      // }
      // if ("/" === props.historyPath) {
      //   return 0;
      // }
      if (props.from === props.history) {
        return 0
      }

      if (props.status === 'entering') {
        return '100%'
      }
      if (props.status === 'entered') {
        return 0
      }
      if (props.status === 'exiting') {
        return '100%'
      }
      if (props.status === 'exited') {
        return '100%'
      }
    }},
    0,
    0
  );
`

export default class extends React.Component {
  render() {
    return (
      <Wrapper
        status={this.props.status}
        history={this.props.history.location.pathname}
        from={this.props.history.location.state && this.props.history.location.state.from}
      >
        <h3>Users</h3>
        <h3>{this.props.status}</h3>
        <h3>{('path', this.props.locationPath)}</h3>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever ginia, looked up one of the
        </p>
      </Wrapper>
    )
  }
}
