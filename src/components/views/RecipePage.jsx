import React from 'react'
import { Route, Switch, matchPath } from 'react-router-dom'
import { TransitionGroup } from 'react-transition-group'

import styled from 'styled-components'

// containers
import RecipeIngredientsData from '../containers/RecipeIngredientsData'
import RecipeInfoData from '../containers/RecipeInfoData'
import RecipeStepsData from '../containers/RecipeStepsData'
// components
import { PageWrapper } from '../comps/layouts'
// import { FloatingButtonAdd } from '../comps/buttons'
import Loading from '../comps/Loading'
import { RecipeInfo, RecipeSteps, RecipeIngredients, RecipeNav } from '../comps/recipe'
import { SlideTransition, SlideComp } from '../comps/animations/Slide'

const FixedWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 2px;
  border: none;
  width: 100%;
  height: calc(100% - 102px);
`

const ContentWrapper = styled.div`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`

export default ({ location, match }) => {
  const recipeId = match.params.id

  return (
    <PageWrapper>
      <RecipeNav />
      <TransitionGroup>
        <SlideTransition key={`recipePage-${location.key}`}>
          {status => (
            <Switch location={location}>
              <Route
                exact
                path='/recipe/:id/ingredients'
                render={({ history }) => (
                  <FixedWrapper>
                    <ContentWrapper>
                      <SlideComp
                        status={status}
                        historyPath={history.location.pathname}
                        from={history.location.state && history.location.state.from}
                      >
                        <RecipeIngredientsData
                          recipeId={recipeId}
                          loadingComp={<Loading message='loading ingredients...' />}
                        >
                          {ingredients => <RecipeIngredients ingredients={ingredients} recipeId={recipeId} />}
                        </RecipeIngredientsData>
                      </SlideComp>
                    </ContentWrapper>
                  </FixedWrapper>
                )}
              />

              <Route
                exact
                path='/recipe/:id/info'
                render={({ history }) => {
                  const matchRecipeIngredientsLocationPath = matchPath(history.location.pathname, {
                    path: '/recipe/:id/ingredients',
                    exact: true,
                    strict: false,
                  })

                  const matchRecipeIngredientsFromPath = matchPath(
                    history.location.state && history.location.state.from,
                    {
                      path: '/recipe/:id/ingredients',
                      exact: true,
                      strict: false,
                    }
                  )
                  return (
                    <FixedWrapper>
                      <ContentWrapper>
                        <SlideComp
                          status={status}
                          historyPath={history.location.pathname}
                          from={history.location.state && history.location.state.from}
                          reverse={matchRecipeIngredientsLocationPath || matchRecipeIngredientsFromPath}
                        >
                          <RecipeInfoData recipeId={recipeId} loadingComp={<Loading message='loading info...' />}>
                            {(Recipe, UpdateRecipeMutation) => (
                              <RecipeInfo recipe={Recipe} UpdateRecipeMutation={UpdateRecipeMutation} />
                            )}
                          </RecipeInfoData>
                        </SlideComp>
                      </ContentWrapper>
                    </FixedWrapper>
                  )
                }}
              />

              <Route
                exact
                path='/recipe/:id/preparation'
                render={({ history }) => (
                  <FixedWrapper>
                    <ContentWrapper>
                      <SlideComp
                        status={status}
                        historyPath={history.location.pathname}
                        from={history.location.state && history.location.state.from}
                        reverse
                      >
                        <RecipeStepsData recipeId={recipeId} loadingComp={<Loading message='loading steps...' />}>
                          {steps => <RecipeSteps steps={steps} recipeId={recipeId} />}
                        </RecipeStepsData>
                      </SlideComp>
                    </ContentWrapper>
                  </FixedWrapper>
                )}
              />
            </Switch>
          )}
        </SlideTransition>
      </TransitionGroup>
    </PageWrapper>
  )
}
