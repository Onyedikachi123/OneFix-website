import React from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import BlogGrid from "../../components/BlogGrid";
import Footer from "../../components/Footer";

const Blog = () => {
  return (
    <main>
      <Navbar />
      <section className="relative w-full h-screen Abouthero">
        <Image
          src="/img22.png"
          alt="Blog Hero Image"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4 z-10">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 ">
            Blog
          </h1>
        </div>
      </section>

      <section className="bg-textlightGray py-12">
        <div className="bg-white py-12 px-16">
          <div className="container mx-auto text-center mb-12">
            <h4 className="text-5xl font-bold">
              Stay informed with our blog posts
            </h4>
          </div>
          <div className="mb-12">
            <BlogGrid />
          </div>
          <div>
            <BlogGrid />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Blog;
