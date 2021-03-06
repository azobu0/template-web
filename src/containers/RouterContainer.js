import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route } from 'react-router-dom'

import { history } from '../redux/store'
import {
  PageAbout,
  PageDebug,
  PageHome,
  PageItem,
  PageItems,
  PageLogin,
  PageLogout,
  PageNotFound,
  PageRegister,
  PageSearch,
  PageUsers,
  PageUserSettings,
  PageUserProfile,
  PageUpload
} from '../pages'

import { ScrollToTop, GoogleAnalytics } from '.'

const RouterContainer = () => {
  return (
    <ConnectedRouter history={history}>
      <>
        <ScrollToTop />
        {GoogleAnalytics.init() && <GoogleAnalytics.RouteTracker />}
        <Switch>
          {process.env.NODE_ENV === 'development' && (
            <Route path='/debug' component={PageDebug} />
          )}
          {process.env.NODE_ENV === 'development' && (
            <Route path='/upload' component={PageUpload} />
          )}

          <Route exact path='/' component={PageHome} />
          <Route path='/about' component={PageAbout} />
          <Route path='/users' component={PageUsers} />
          <Route exact path='/items' component={PageItems} />
          <Route path='/items/:slug' component={PageItem} />
          <Route path='/search' component={PageSearch} />
          <Route path='/register' component={PageRegister} />
          <Route path='/login' component={PageLogin} />
          <Route path='/logout' component={PageLogout} />
          <Route path='/settings' component={PageUserSettings} />
          <Route path='/:slug' component={PageUserProfile} />
          <Route path='*' exact component={PageNotFound} />
        </Switch>
      </>
    </ConnectedRouter>
  )
}

export default RouterContainer
