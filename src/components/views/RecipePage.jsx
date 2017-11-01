import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { TransitionGroup } from 'react-transition-group'

// containers
// import RecipeIngredientsData from '../containers/RecipeIngredientsData'
// import RecipeInfoData from '../containers/RecipeInfoData'
// import RecipeStepsData from '../containers/RecipeStepsData'
// components
import { PageWrapper } from '../comps/layouts'
// import { FloatingButtonAdd } from '../comps/buttons'
// import Loading from '../comps/Loading'
import { RecipeInfo, RecipeSteps, RecipeIngredients, RecipeNav } from '../comps/recipe'
import { SlideTransition } from '../comps/animations/Slide'

export default ({ location }) => (
  <PageWrapper>
    <RecipeNav />
    <TransitionGroup>
      <SlideTransition key={location.key}>
        {status => (
          <Switch location={location}>
            <Route
              exact
              path='/recipe/:id/ingredients'
              render={({ history }) => <RecipeIngredients status={status} history={history} />}
            />

            <Route
              exact
              path='/recipe/:id/info'
              render={({ history }) => <RecipeInfo status={status} history={history} />}
            />

            <Route
              exact
              path='/recipe/:id/preparation'
              render={({ history }) => <RecipeSteps status={status} history={history} />}
            />
          </Switch>
        )}
      </SlideTransition>
    </TransitionGroup>
  </PageWrapper>
)
