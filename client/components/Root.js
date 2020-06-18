/**
Imports & Requirements
*/
    import React from "react";
    import {Router, Route} from 'react-router-dom';
    import Navbar from './Navbar';
    import LiveStreams from './LiveStreams';
    import Settings from './Settings';

    // Articles
    import ArticleList from './articles/ArticleList';
    import ArticleCreate from './articles/ArticleCreate';
    import ArticleView from './articles/ArticleView';
    import ArticleUpdate from './articles/ArticleUpdate';

    import VideoPlayer from './VideoPlayer';
    const customHistory = require("history").createBrowserHistory();
//

/*
Export
*/
    export default class Root extends React.Component {

        constructor(props){
            super(props);
        }

        render(){
            return (
                <Router history={customHistory} >
                    <div>
                        <Navbar/>
                        <Route exact path="/" render={ props => (
                            <LiveStreams  { ...props } />
                        ) }/>

                        <Route exact path="/stream/:username" render={ props => (
                            <VideoPlayer { ...props }/>
                        ) }/>

                        <Route exact path="/settings" render={ props => (
                            <Settings { ...props } />
                        ) }/>

                        <Route exact path="/articles" render={ props => (
                            <ArticleList { ...props }/>
                         ) }/>
                        
                        <Route exact path="/articles/:id" render={ props => (
                            <ArticleView { ...props }/>
                         ) }/>

                        <Route exact path="/articles/create" render={ props => (
                            <ArticleCreate { ...props }/>
                         ) }/>
                        <Route exact path="/articles/update/:id" render={ props => (
                            <ArticleUpdate { ...props }/>
                         ) }/>
                    </div>
                </Router>
            )
        }
    }
//