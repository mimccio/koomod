/* eslint-disable */
import React from 'react'
import styled from 'styled-components'
import { matchPath } from 'react-router-dom'

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
    // if (props.historyPath === props.locationPath) {
    //   return "visible";
    // }
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
      if (props.from === props.history) {
        return 0
      }
      if (props.right) {
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
      } else {
        if (props.status === 'entering') {
          return '-100%'
        }
        if (props.status === 'entered') {
          return 0
        }
        if (props.status === 'exiting') {
          return '-100%'
        }
        if (props.status === 'exited') {
          return '-100%'
        }
      }
      // if ("/" === props.historyPath) {
      //   return 0;
      // }
    }},
    0,
    0
  );
`

export default class extends React.Component {
  // state = {
  //   goTo: ""
  // };

  // componentWillReceiveProps(nextProps) {
  //   console.log(" nextProps", nextProps);
  //   console.log(" props", this.props);
  //   if (nextProps.location !== this.props.location) {
  //     console.log(" navigated!");
  //   }
  //   this.setState({ gotTo: nextProps.history });
  // }
  render() {
    const matchRecipeIngredientsLocationPath = matchPath(location.pathname, {
      path: '/recipe/:id/ingredients',
      exact: true,
      strict: false
    })
    const matchRecipeIngredientsFromPath = matchPath(this.props.history.location.state.from, {
      path: '/recipe/:id/ingredients',
      exact: true,
      strict: false
    })

    return (
      <Wrapper
        status={this.props.status}
        history={this.props.history.location.pathname}
        from={this.props.history.location.state && this.props.history.location.state.from}
        right={matchRecipeIngredientsLocationPath || matchRecipeIngredientsFromPath}
      >
        <h3>Recipes !!</h3>
        <h3>{this.props.status}</h3>
        <h3>{('path', this.props.history.location.pathname)}</h3>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader
          will be distracted by the readable content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English. Many desktop publishing packages and web page editors now use
          Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
          their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply
          random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
          Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
        </p>
      </Wrapper>
    )
  }
}
