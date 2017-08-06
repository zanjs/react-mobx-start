import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

import RoutePath from '../../routes/path'

class Header extends Component {
    render() {
        return (
            <header>
            <ul>
                <li><NavLink strict exact to={RoutePath.home} activeClassName="active">Home</NavLink></li>
                <li><NavLink strict to={RoutePath.birds} activeClassName="active">birds</NavLink></li>
                <li><NavLink strict to={RoutePath.count} activeClassName="active">count</NavLink></li>
                <li><NavLink strict to={RoutePath.histtory} activeClassName="active">history</NavLink></li>
                <li><NavLink strict to={RoutePath.topics} activeClassName="active">topics</NavLink></li>
                <li><NavLink strict to="/tacos" activeClassName="active">Tacos</NavLink></li>
                <li><NavLink strict to={RoutePath.lazyRoute} activeClassName="active">lazyRoute</NavLink></li>
                <li><NavLink strict to="/404" activeClassName="active">404</NavLink></li>
            </ul>
            </header>
        );
    }
}

export default Header;