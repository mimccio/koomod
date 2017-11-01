import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { TransitionGroup } from 'react-transition-group'

// containers
import RecipeIngredientsData from '../containers/RecipeIngredientsData'
import RecipeInfoData from '../containers/RecipeInfoData'
import RecipeStepsData from '../containers/RecipeStepsData'
// components
import { PageWrapper, ContentWrapper } from '../comps/layouts'
import { FloatingButtonAdd } from '../comps/buttons'
import Loading from '../comps/Loading'
import { RecipeInfo, RecipeSteps, RecipeIngredients, RecipeNav } from '../comps/recipe'
import { SlideTransition, SlideComp } from '../comps/animations/Slide'

export default ({ match, location }) => (
  <PageWrapper>
    <ContentWrapper>
      <RecipeNav />
      <TransitionGroup>
        <SlideTransition key={location.key}>
          {status => (
            <Switch location={location}>
              <Route exact path='/recipe/:id/ingredients/new' component={() => <div>add new ingredient</div>} />
              <Route
                exact
                path='/recipe/:id/ingredients'
                render={() => (
                  <SlideComp
                    from={location.state && location.state.from}
                    status={status}
                    historyPath={location.pathname}
                  >
                    <div>
                      <RecipeIngredientsData match={match} loadingComp={<Loading message='loading recipes...' />}>
                        {ingredients => (
                          <div>
                            {status}
                            <RecipeIngredients match={match} ingredients={ingredients} />
                          </div>
                        )}
                      </RecipeIngredientsData>
                      <Link to={`/recipe/${match.params.id}/ingredients/new`}>
                        <FloatingButtonAdd />
                      </Link>
                    </div>
                  </SlideComp>
                )}
              />

              <Route
                exact
                path='/recipe/:id/info'
                component={({ history }) => (
                  <RecipeInfoData match={match} loadingComp={<Loading message='loading recipe info...' />}>
                    {(recipe, updateRecipeMutation) => (
                      <RecipeInfo
                        status={status}
                        history={history}
                        recipe={recipe}
                        updateRecipeMutation={updateRecipeMutation}
                      />
                    )}
                  </RecipeInfoData>
                )}
              />
              <Route exact path='/recipe/:id/steps/new' component={() => <div>add new step</div>} />

              <Route
                exact
                path='/recipe/:id/preparation'
                component={({ history }) => (
                  <div>
                    <RecipeStepsData match={match} loadingComp={<Loading message='loading preparation steps...' />}>
                      {steps => <RecipeSteps status={status} history={history} steps={steps} />}
                    </RecipeStepsData>
                    <Link to={`/recipe/${match.params.id}/stepts/new`}>
                      <FloatingButtonAdd />
                    </Link>
                  </div>
                )}
              />
            </Switch>
          )}
        </SlideTransition>
      </TransitionGroup>
    </ContentWrapper>
  </PageWrapper>
)
