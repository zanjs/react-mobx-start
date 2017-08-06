import React, { Component } from 'react';
import Helmet from 'react-helmet'

import styles from './index.scss'
// comments
import Count from '../../components/count'

class Home extends Component {
    render(){
        return(
            <div>
                <Helmet>
                <title>Home</title>
                <meta name="description" content="React Home Page" />
                </Helmet>
                <div className={styles.title + ' '+ styles.title2} >Home</div>
                <Count />
            </div>
        )
    }
}

export default Home