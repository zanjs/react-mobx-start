import React, { Component } from 'react';

import IframeComment from '../../components/iframe'

class Iframe extends Component {
    handClick(){
        console.log('e')
    }

    render() {
        const  iframe = '<iframe id="main-frame" src="https://segmentfault.com" scrolling="yes" width="100%" height="750"></iframe>'

        return (
            <div>
                <div className="">
                    <button type="button" onClick={ this.handClick }>Click Me!</button>

                </div>
                 <IframeComment iframe={iframe} /> 
            </div>
        );
    }
}

export default Iframe;