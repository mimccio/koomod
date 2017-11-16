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

  handleSave = (data) => {
    if (data.ingredient.name) {
      data.createIngredient()
      this.props.history.replace(`/recipe/${this.props.recipe.id}/ingredients`)
    }
  }

  handleInputKeyDown = (evt) => {
    if (evt.keyCode === 27) {
      evt.target.blur()
    }
    if (evt.keyCode === 13) {
      if (evt.target.id === 'name') {
        evt.target.parentNode.nextElementSibling.firstChild.nextElementSibling.firstChild.focus()
        console.log(evt.target.parentNode.nextElementSibling.firstChild.nextElementSibling.firstChild.id)
      }
      if (evt.target.id === 'quantity') {
        // evt.target.parentNode.nextElementSibling.firstChild.nextElementSibling.firstChild.focus()
        console.log(evt.target.nextElementSibling.firstChild.id)
      }
    }
  }

  handleSaveKeyDown = (evt, data) => {
    if (evt.keyCode === 27) {
      evt.target.blur()
    }
    if (evt.keyCode === 13 || evt.keyCode === 32) {
      this.handleSave(data)
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
                    autoFocus
                    id='name'
                    type='text'
                    value={data.ingredient.name}
                    onChange={evt => data.handleChange(evt)}
                    onKeyDown={evt => this.handleInputKeyDown(evt)}
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
                      onKeyDown={evt => this.handleInputKeyDown(evt)}
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
                    inProgress
                    name='hourglass_empty'
                    onClick={() => console.log('creating recipe')}
                    hide={!data.ingredient.name}
                    status={this.props.status}
                  />
                ) : (
                  <FloatingButton
                    name='check'
                    onClick={() => this.handleSave(data)}
                    hide={!data.ingredient.name}
                    status={this.props.status}
                    onKeyDown={evt => this.handleSaveKeyDown(evt, data)}
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

export default ({ status, history }) => (
  <NewRecipeData>{recipe => <CreateFirstIngredient recipe={recipe} status={status} history={history} />}</NewRecipeData>
)

// <p>{data.ingredient.name && data.ingredient.name}</p>
