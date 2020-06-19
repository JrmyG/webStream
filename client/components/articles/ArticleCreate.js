/*
Imports
*/
import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import config from "../../../server/config/default";
//

/*
Export
*/
export default class ArticleCreate extends React.Component {

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
        content: ''
    }
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
    axios.post('http://localhost:' + config.server.port + '/articles/api/create/', article)
    .then(res => console.log(res.data));
    this.props.history.push('/articles');

    // this.setState({ title: '', description: '', content: '' })
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
            Create Article
        </Button>
    </Form>
    </div>);
}
}
//