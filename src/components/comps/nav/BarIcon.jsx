import styled from 'styled-components'

export const BarIcon = styled.div`
  position: absolute;
  transition: all 150ms ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  cursor: pointer;

  transform: scale(
    ${(props) => {
    if (props.status === 'entering') {
      return 0.2
    }
    if (props.status === 'entered') {
      return 1
    }
    if (props.status === 'exiting') {
      return 0.2
    }
    if (props.status === 'exited') {
      return 1
    }
    return 0.2
  }}
  );
  opacity: ${(props) => {
    if (props.status === 'entering') {
      return 0
    }
    if (props.status === 'entered') {
      return 1
    }
    if (props.status === 'exiting') {
      return 0
    }
    if (props.status === 'exited') {
      return 1
    }
    return 0
  }};
`
export const RightBarIcon = styled(BarIcon)`right: 0;`
export const LeftBarIcon = styled(BarIcon)`left: 0;`
