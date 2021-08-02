import React from 'react';

import './noMatchFoundPage.scss'
import NotFoundSvg from './../../assets/svg/noMatchFound.gif';

export class NoMatchFoundPage extends React.Component {
    render() {
        return (
            <div className="noMatchFound">
                <img src={NotFoundSvg} className="noMatchFound__background-gif" alt="Page_not_found_gif"/>
            </div>
        )
    }
}

export default NoMatchFoundPage;