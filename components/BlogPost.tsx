import React from "react";
import Link from "next/link";
import BlogGrid from "./BlogGrid";

const BlogPost = () => {
  return (
    <section className="bg-background py-12 px-16">
      <div className="container mx-auto text-center mb-12">
        <h4 className="text-5xl font-bold animate__animated animate__lightSpeedInLeft">Featured blog posts</h4>
      </div>
      <div className="animate__animated animate__zoomIn">
      <BlogGrid />
      </div>
      
      <div className="flex justify-center mt-4">
        <Link
          href="/blog"
          className="bg-bprimary text-white py-2 px-12 rounded-2xl font-normal text-sm hover:bg-[#FEC32C]"
        >
          View our Blog
        </Link>
      </div>
    </section>
  );
};

export default BlogPost;
