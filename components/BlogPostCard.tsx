import React from 'react';
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from '../app/types/type';  // Ensure the path is correct

interface BlogPostCardProps extends BlogPost {}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  id,
  title,
  summary,
  imageUrl,
  date,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg">
      <div className="relative h-48 w-full">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" className="rounded-t-lg" />
      </div>
      <div className="p-6 bg-textlightGray">
        <h3 className="text-xl font-semibold mb-5">{title}</h3>
        <p className="text-gray-600 mb-7">{summary}</p>
        <p className="text-gray-500 mb-4">{date}</p>
        <Link href={`/blog/${id}`} className="text-[#FEC32C] hover:text-bprimary text-sm flex items-center mt-5">
          Read more <ChevronRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard;