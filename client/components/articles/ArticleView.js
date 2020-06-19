/*
Imports
*/
import React, { Component } from "react";
import axios from 'axios';
import config from "../../../server/config/default";
//

/*
Export
*/
export default class ArticleView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            article: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:' + config.server.port + '/articles/api/' + this.props.match.params.id)
        .then(res => {
            this.setState({
                article: res.data
            });
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render() {
        return (
          <div className="article">
                    <div className="content">
                        <h2>{this.state.article.title}</h2>
                        <h3>{this.state.article.description}</h3>
                        <p>{this.state.article.content}</p>
                    </div>
          </div>
        );
    }
}
//