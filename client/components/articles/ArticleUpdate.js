/*
Imports
*/
    import React from "react";
    import Form from 'react-bootstrap/Form'
    import Button from 'react-bootstrap/Button';
    import axios from 'axios';
    import config from "../../../server/config/default";
    import { Redirect } from 'react-router-dom';
//

/*
Export
*/
export default class ArticleUpdate extends React.Component {

    constructor(props) {
        super(props)

        // Setting up functions
        this.onChangeArticleTitle = this.onChangeArticleTitle.bind(this);
        this.onChangeArticleDescription = this.onChangeArticleDescription.bind(this);
        this.onChangeArticleContent = this.onChangeArticleContent.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Setting up state
        this.state = {
            title: '',
            description: '',
            content: '',
        }
    }

    componentDidMount() {
        axios.get('http://localhost:' + config.server.port + '/articles/api/' + this.props.match.params.id)
            .then(res => {
                this.setState ({
                    title: res.data.title,
                    description: res.data.description,
                    content: res.data.content,
                });
            }).catch((err) => {
                console.log(err);
            });
    }

    onChangeArticleTitle(e) {
        this.setState({ title: e.target.value })
    }

    onChangeArticleDescription(e) {
        this.setState({ description: e.target.value })
    }

    onChangeArticleContent(e) {
        this.setState({ content: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const article = {
            title: this.state.title,
            description: this.state.description,
            content: this.state.content
        };

        console.log(article);
        axios.put('http://localhost:' + config.server.port + '/articles/api/update/' + this.props.match.params.id, article)
            .then((res) => {
                console.log(res.data);
            }).catch((err) => {
                console.log(err);
            });
        this.props.history.push('/articles');
    }

    render() {
        return (<div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="Title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={this.state.title} onChange={this.onChangeArticleTitle} />
            </Form.Group>

            <Form.Group controlId="Description">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" value={this.state.description} onChange={this.onChangeArticleDescription} />
            </Form.Group>

            <Form.Group controlId="Content">
            <Form.Label>Content</Form.Label>
            <Form.Control type="text" cols="40" rows="5" value={this.state.content} onChange={this.onChangeArticleContent} />
            </Form.Group>

            <Button variant="danger" size="lg" block="block" type="submit">
                Update Article
            </Button>
        </Form>
        </div>);
    }
}
//