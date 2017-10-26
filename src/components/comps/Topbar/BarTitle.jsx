import styled from 'styled-components'

export default styled.h2`
  text-align: center;
  font-size: ${props => (props.small ? '16px' : '20px')};
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
