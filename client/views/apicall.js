import React, { Component } from "react";
import { Col, Row, Container, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";

// https://www.reddit.com/r/space.json

// find out why you have to click the button twice in order to
// properly display the
class Apicall extends Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      subs: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      subs: event.target.value
    })
  }

  onSubmit(event) {
    event.preventDefault();
    console.log("subs value onSubmit: ", this.state.subs);

    axios.get(`https://www.reddit.com/r/${this.state.subs}.json`)
    .then(res => {
      const posts = res.data.data.children.map(obj => obj.data);
      this.setState({posts});
      console.log("Posts object: ", this.state.posts);
    })
  }

  componentDidMount() {

  }

  render() {
    return(
      <Container>
        <h1 className="body-text"> Reddit Searcher </h1>
        <h3 className="body-text"> Search your favorite subreddits for new posts!</h3>
        <h2 className="body-text"> {`/r/${this.state.subs}`} </h2>
        <p className="body-text"> Search your subreddit here.</p>
        <div className="search-body">
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Input type="text" value={this.state.subs} onChange={this.handleChange} name="subReddit" id="subReddit" placeholder="Your favorite subreddit" />
            </FormGroup>
            <button className="search-button"> Search </button>
          </Form>
        </div>


        <Row className="posts-row">
          {this.state.posts.map(post =>
            <Col className="post-col" key={post.id} xs="12">
              <div className="post-div">
              <div className="info-container">
                <p className="div-info"> Author: {post.author} </p>
                <p className="div-info"> Upvotes: {post.ups} </p>
                <p className="div-info"> Downvotes: {post.downs} </p>
              </div>
                <h3> {post.title} </h3>
                <a href={post.url}>
                    <img className="post-img" alt="Theres no image to display for this post, but you can click here to visit the subreddit." src={post.thumbnail} />
                </a>
                <p>{post.selftext}</p>
              </div>
            </Col>
          )}
        </Row>
      </Container>
    )
  }
}

export default Apicall;
