import React from 'react'
// containers
import UserSelectedRecipesData from '../containers/UserSelectedRecipesData'
// components
import { PageWrapper, ContentWrapper, EmptyList, ListWrapper } from '../comps/layouts'
import Loading from '../comps/Loading'
import { ShoppingItem } from '../comps/shoppingList'
// helpers
import toShoppingList from '../../lib/toShoppingList'

export default () => (
  <PageWrapper>
    <UserSelectedRecipesData loadingComp={<Loading message='loading recipes...' />}>
      {(selectedRecipes) => {
        const shoppingList = toShoppingList(selectedRecipes)
        if (selectedRecipes.length < 1) {
          return (
            <ContentWrapper>
              <EmptyList to='/recipes' message='select some recipes' />
            </ContentWrapper>
          )
        }
        return (
          <ContentWrapper>
            <ListWrapper>
              {shoppingList.map(ingredient => <ShoppingItem key={ingredient.id} ingredient={ingredient} />)}
            </ListWrapper>
          </ContentWrapper>
        )
      }}
    </UserSelectedRecipesData>
  </PageWrapper>
)
