import React from 'react'
import styled from 'styled-components'

const ItemWrapper = styled.div`
  width: 100%;
  padding: 10px;
  border-bottom: grey;
`

export default ({ ingredient }) => (
  <ItemWrapper>
    <p>{ingredient.name}</p>

    <p>
      {ingredient.quantity} {ingredient.nature}
    </p>
  </ItemWrapper>
)
