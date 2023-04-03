import React from 'react';

const posts = [
  {
    id: 1,
    title: 'Getting Started with React',
    description: 'Learn the basics of React and how to get started with building your own web applications.',
    date: 'April 1, 2023',
    thumbnail: 'https://example.com/images/react-getting-started.jpg',
  },
  {
    id: 2,
    title: 'React Tips and Tricks',
    description: 'Discover some useful tips and tricks for working with React and improving your workflow.',
    date: 'April 3, 2023',
    thumbnail: 'https://example.com/images/react-tips-and-tricks.jpg',
  },
  {
    id: 3,
    title: 'Building a React App from Scratch',
    description: 'Follow along with this step-by-step tutorial to build a complete React application from scratch.',
    date: 'April 5, 2023',
    thumbnail: 'https://example.com/images/react-building-app.jpg',
  },
];

function BlogPostList() {
  return (
    <div className="blog-post-list">
      {posts.map(post => (
        <div className="blog-post" key={post.id}>
          <img src={post.thumbnail} alt={post.title} />
          <div className="blog-post-details">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <div className="blog-post-meta">
              <span className="blog-post-date">{post.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogPostList;
