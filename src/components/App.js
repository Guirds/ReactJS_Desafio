import React, { Component } from 'react';

import Header from './Header';
import Post from './Post';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'Guilherme',
        avatar: 'https://avatars1.githubusercontent.com/u/37129994?s=460&v=4',
        time: '3m',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      },
      {
        id: 2,
        name: 'João',
        avatar: 'https://avatars1.githubusercontent.com/u/37129994?s=460&v=4',
        time: '5m',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      },
      {
        id: 3,
        name: 'Paulo',
        avatar: 'https://avatars1.githubusercontent.com/u/37129994?s=460&v=4',
        time: '13m',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        <Header />
        <div className="post-container">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </div>
    );
  }
}

export default App;
