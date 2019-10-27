import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Home.css";
class Home extends Component {
    state = {
        posts: [],
        isLoading: true,
        errors: null
    };
    getPosts() {
        axios
            .get("https://epower.ng/wp-json/wp/v2/posts/?page=1")
            .then(response =>
                response.data.map(post => ({
                    featuredImage: `${post.featured_image}`,
                    postTitle: `${post.title.rendered}`,
                    postExcerpt: `${post.excerpt.rendered}`,
                    slug: `${post.slug}`,
                    postId: `${post.id}`
                }))
            )
            .then(posts => {
                this.setState({
                    posts,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
        this.getPosts();
    }
    render() {
        const { isLoading, posts } = this.state;
        return !isLoading ? (
            posts.map(user => {
                const { featuredImage, postTitle, postExcerpt, slug, postId } = user;

                return ( <
                    div className = "card mb-4 shadow-lg p-3 mb-5 bg-white rounded" >
                    <
                    img src = { featuredImage }
                    className = "card-img-top img-fluid"
                    alt = { postTitle }
                    />{" "} <
                    div className = "card-body" >
                    <
                    strong className = "card-title" > { " " } <
                    Link to = { `/page/${postId}` } > { " " } <
                    p > { postTitle } < /p>{" "} < /
                    Link > { " " } <
                    /strong>{" "} <
                    small className = "card-text" > { postExcerpt } < /small>{" "} < /
                    div > { " " } <
                    /div>
                );
            })
        ) : ( <
            div > Loading...... < /div>
        );
    }
}

export default Home;