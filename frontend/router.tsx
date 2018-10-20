import * as React from 'react'
import { hot } from 'react-hot-loader'

import { Page } from 'components/Page'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export const RouterComponent = hot(module)(() => (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={Page} />
        </Switch>
    </BrowserRouter>
))
