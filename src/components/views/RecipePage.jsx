import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'

// containers
import RecipeIngredientsData from '../containers/RecipeIngredientsData'
import RecipeInfoData from '../containers/RecipeInfoData'
import RecipeStepsData from '../containers/RecipeStepsData'
// components
import { PageWrapper, ContentWrapper } from '../comps/layouts'
import { FloatingButtonAdd } from '../comps/buttons'
import Loading from '../comps/Loading'
import { RecipeInfo, RecipeSteps, RecipeIngredients, RecipeNav } from '../comps/recipe'

export default ({ match }) => (
  <PageWrapper>
    <ContentWrapper>
      <RecipeNav match={match} />
      <Switch>
        <Route exact path='/recipe/:id/ingredients/new' component={() => <div>add new ingredient</div>} />
        <Route
          exact
          path='/recipe/:id/ingredients'
          component={() => (
            <div>
              <RecipeIngredientsData match={match} loadingComp={<Loading message='loading recipes...' />}>
                {ingredients => <RecipeIngredients match={match} ingredients={ingredients} />}
              </RecipeIngredientsData>
              <Link to={`/recipe/${match.params.id}/ingredients/new`}>
                <FloatingButtonAdd />
              </Link>
            </div>
          )}
        />
        <Route exact path='/recipe/:id/steps/new' component={() => <div>add new step</div>} />

        <Route
          exact
          path='/recipe/:id/steps'
          component={() => (
            <div>
              <RecipeStepsData match={match} spinner={<p>loading...</p>}>
                {steps => <RecipeSteps steps={steps} />}
              </RecipeStepsData>
              <Link to={`/recipe/${match.params.id}/stepts/new`}>
                <FloatingButtonAdd />
              </Link>
            </div>
          )}
        />

        <Route
          exact
          path='/recipe/:id/info'
          component={() => (
            <RecipeInfoData match={match} spinner={<p>loading...</p>}>
              {(recipe, updateRecipeMutation) => (
                <RecipeInfo recipe={recipe} updateRecipeMutation={updateRecipeMutation} />
              )}
            </RecipeInfoData>
          )}
        />
      </Switch>
    </ContentWrapper>
  </PageWrapper>
)
