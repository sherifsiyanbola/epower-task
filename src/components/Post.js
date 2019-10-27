import React, { Component } from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';


class Post extends Component {
    state = {
        post: [],
        isLoading: true,
        errors: null
    };
    data = {
        isLoading: true
    }
    getPost(id) {
        axios
            .get(`https://epower.ng/wp-json/wp/v2/posts/${id}`)
            .then(post => {
                this.data.isLoading = false
                this.data.title = post.data.title.rendered
                this.data.post = post.data.content.rendered
                this.setState(this.data)
            })
            .catch(error => console.log({ error, isLoading: false }));
    }

    componentDidMount() {
        this.getPost(this.props.match.params.id);
    }
    render() {
        return (!this.isLoading ?
            <
            div className = "container" >
            <
            div className = "col-sm-12" >
            <
            h1 > { this.data.title } < /h1>  <
            p > { ReactHtmlParser(this.data.post) } < /p>  < /
            div > < /div>: <
            div > Loading............... < /div>);
        }
    }

    export default Post;