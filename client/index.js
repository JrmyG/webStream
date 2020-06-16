/*
Imports & Requirements
*/
    require('./index.scss');

    import React from "react";
    import ReactDOM from 'react-dom';
    import {BrowserRouter} from 'react-router-dom';
    import 'bootstrap';
    import Root from './components/Root.js';
//

/*
Definition
*/
    if(document.getElementById('root')){
        ReactDOM.render(
            <BrowserRouter>
                <Root/>
            </BrowserRouter>,
            document.getElementById('root')
        );
    }
//