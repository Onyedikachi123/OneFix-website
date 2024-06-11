import Image from 'next/image';
import type { BlogPost } from '../../types/type';
import { posts } from '../../data/data';

interface PostPageProps {
  post: BlogPost;
}

// Component to display the blog post
export default function PostPage({ post }: PostPageProps) {
  if (!post) {
    return <p>Post not found!</p>;
  }

  return (
    <div className="container mx-auto p-4">
      {/* <Image src={post.imageUrl} alt={post.title} layout="responsive" width={700} height={400} className="rounded-t-lg" />
      <h1 className="text-3xl font-bold my-4">{post.title}</h1>
      <p>{post.summary}</p> */}
      <h1>Single Post</h1>
    </div>
  );
}

// Loader function to fetch data based on the post ID
export async function loader({ params }: { params: { id: string } }) {
  const post = posts.find(p => p.id === params.id) || null;
  if (!post) {
    throw new Response('Not Found', { status: 404 });
  }
  return { post };  // Ensure the structure matches what is expected in the component
}