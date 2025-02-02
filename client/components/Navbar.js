/*
Imports
*/
    import React from 'react';
    import {Link} from 'react-router-dom';
//

/*
Export
*/
    export default class Navbar extends React.Component {
        render() {
            return (
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <Link to={'/'} className={'navbar-brand'}>
                            WebStream
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item float-right">
                                <Link className={'nav-link'} to={'/articles'}>
                                    Articles
                                </Link>
                                </li>
                                <li className="nav-item float-right">
                                    <Link className={'nav-link'} to={'/settings'}>
                                        Go Live
                                    </Link>
                                </li>
                                <li className="nav-item float-right">
                                    <Link className={'nav-link'} to={'http://github.com/jrmyG'}>
                                        Github
                                    </Link>
                                </li>
                                <li className="nav-item float-right">
                                    <a className="nav-link" href="/Logout">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            )
        }
    }
//