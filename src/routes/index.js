import React, { Component } from 'react';
import {
  Switch,
  Route,
} from 'react-router'
import RouteLazy from "route-lazy"

import RoutePath from './path'
import NotFound from '../pages/notFound'

class RouteComment extends Component {
  render() {
    return (
       <div>
         <Switch> 
          <Route
              exact
              path={RoutePath.home}
              render={props => (
                <RouteLazy {...props} component={import("../pages/home")} />
              )}
            />
          <Route
            path={RoutePath.topics}
            render={props => (
              <RouteLazy {...props} component={import("../pages/topics")} />
            )}
          />
          <Route
            path={RoutePath.histtory}
            render={props => (
              <RouteLazy {...props} component={import("../pages/history")} />
            )}
          />
          <Route
            path={RoutePath.birds}
            render={props => (
              <RouteLazy {...props} component={import("../pages/birds")} />
            )}
          />
          <Route
            path={RoutePath.about}
            render={props => (
              <RouteLazy {...props} component={import("../pages/about")} />
            )}
          />
           <Route
            path={RoutePath.iframe}
            render={props => (
              <RouteLazy {...props} component={import("../pages/iframe")} />
            )}
          /> 
            <Route component={NotFound}/> 
         </Switch> 
        </div>
    );
  }
}

export default RouteComment;
