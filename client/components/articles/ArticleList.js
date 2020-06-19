/*
Imports
*/
    import React from "react";
    import axios from 'axios';
    import config from "../../../server/config/default";
    import { Link } from 'react-router-dom';
    import Button from 'react-bootstrap/Button';

    import "./articles.scss"
//

/*
Export
*/
    export default class ArticleList extends React.Component {

        constructor(props) {
            super(props)
            this.state = {
                articles: [],
                id: ''
            };
        }

        componentDidMount() {
            axios.get('http://localhost:' + config.server.port + '/articles/api')
            .then(res => {
                this.setState({
                    articles: res.data,
                    id: ''
                });
            })
            .catch((err) => {
                console.log(err);
            })
        }

        deleteArticle(id) {
            console.log(id);
            axios.delete('http://localhost:' + config.server.port + `/articles/api/delete/${id}`)
            .then(res => {
                axios.get('http://localhost:' + config.server.port + '/articles/api')
            .then(res => {
                this.setState({
                    articles: res.data,
                    id: ''
                });
            })
            .catch((err) => {
                console.log(err);
            })
            })
        }

        render() {
            return (
                <div className="container mt-5">
                    <h4>Articles</h4><span><Link className="create-link" to={"/articles/create"}>Créer un article</Link></span>
                    <hr className="my-4"/>
                    <div className="articles-wrapper">
                        {this.state.articles.map(article => (
                            <div className="news">
                            <Link className="get-link" to={"/articles/" + article._id}>
                                <h2>{article.title}</h2>
                            </Link>
                                <p>{article.description}</p>
            
                            <Link className="edit-link" to={"/articles/update/" + article._id}>
                                Edit
                            </Link>
                            <Button onClick={() => this.deleteArticle(article._id)} size="sm" variant="danger">Delete</Button>
                        </div>
                        ))}
                        
                    </div>
            </div>);
        }
    }
//