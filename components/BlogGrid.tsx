import React from 'react';
import { posts } from '../app/data/data';
import BlogPostCard from '../components/BlogPostCard';

const BlogGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <BlogPostCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;










