import * as React from 'react'
import styled from 'styled-components'

import CreateIngredient from '../containers/CreateIngredient'
import NewRecipeData from '../containers/NewRecipeData'
import { PageWrapper } from '../comps/layouts'
import { FloatingButton } from '../comps/buttons'
import { Input, Label } from '../comps/inputs/Form'
import SelectNature from '../comps/ingredient/SelectNature'
import { handlePlural } from '../../lib/helpers'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px 20px;
  width: 100%;
  max-width: 800px;
`

const QuantityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 320px;
`

const FormWrapper = styled.div`padding: 20px;`

export class CreateFirstIngredient extends React.Component {
  state = {
    creating: false,
  }

  componentWillReceiveProps(nextProp) {
    if (typeof nextProp.recipe.id === 'number' && nextProp.recipe.id < 0) {
      console.log('nextProp.recipe.id is number', nextProp)
      this.setState({ creating: true })
    } else {
      console.log('nextProp.recipe.id is not number', nextProp)
      this.setState({ creating: false })
    }
  }

  render() {
    return (
      <PageWrapper>
        <CreateIngredient recipeId={this.props.recipe.id}>
          {data => (
            <Wrapper>
              <ContentWrapper>
                <FormWrapper>
                  <Label htmlFor='name'>Ingredient Name</Label>
                  <Input
                    id='name'
                    type='text'
                    value={data.ingredient.name}
                    onChange={evt => data.handleChange(evt)}
                    placeholder='add recipe name...'
                  />
                </FormWrapper>

                <FormWrapper>
                  <Label htmlFor='quantity'>Quantity</Label>
                  <QuantityWrapper>
                    <Input
                      id='quantity'
                      type='number'
                      value={data.ingredient.quantity}
                      onChange={evt => data.handleChange(evt)}
                      placeholder={0}
                    />

                    <SelectNature
                      type='text'
                      id='nature'
                      value={data.ingredient.nature}
                      onChange={evt => data.handleChange(evt)}
                      onKeyDown={evt => data.handleKeyDown(evt)}
                      isPlural={handlePlural(data.ingredient.quantity)}
                    />
                  </QuantityWrapper>
                </FormWrapper>
                {this.state.creating ? (
                  <FloatingButton
                    name='hourglass_empty'
                    onClick={() => console.log('creating recipe')}
                    hide={data.ingredient.name}
                    status={this.props.status}
                  />
                ) : (
                  <FloatingButton
                    inProgress
                    name='check'
                    onClick={() => Boolean(data.ingredient.name) && data.createIngredient()}
                    hide={!data.ingredient.name}
                    status={this.props.status}
                  />
                )}
              </ContentWrapper>
            </Wrapper>
          )}
        </CreateIngredient>
      </PageWrapper>
    )
  }
}

export default ({ status }) => (
  <NewRecipeData>{recipe => <CreateFirstIngredient recipe={recipe} status={status} />}</NewRecipeData>
)

// <p>{data.ingredient.name && data.ingredient.name}</p>
