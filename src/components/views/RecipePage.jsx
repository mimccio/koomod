import React from 'react'
import { Route, Switch, matchPath } from 'react-router-dom'
import { TransitionGroup } from 'react-transition-group'

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

                  const matchRecipeIngredientsFromPath = matchPath(history.location.state.from, {
                    path: '/recipe/:id/ingredients',
                    exact: true,
                    strict: false,
                  })
                  return (
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
                  )
                }}
              />

              <Route
                exact
                path='/recipe/:id/preparation'
                render={({ history }) => (
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
                )}
              />
            </Switch>
          )}
        </SlideTransition>
      </TransitionGroup>
    </PageWrapper>
  )
}
