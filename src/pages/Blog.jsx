import React from "react";
import BlogCard from "../components/BlogCard";

// Example blog data (replace with Markdown/MDX integration later)
const posts = [
  {
    title: "Ransomware in 2024",
    excerpt: "A look at the latest ransomware tactics and how to defend against them.",
    author: "Agent Nullbyte",
    date: "May 2024",
    quote: "To break a firewall, you don't need code. You need curiosity.",
  },
  {
    title: "Juice Jacking at Airports: Fact or Fearmongering?",
    excerpt: "Is public USB charging really a threat? We break down the facts.",
    author: "Agent Cipher",
    date: "April 2024",
    quote: "Trust is the weakest link in any system.",
  },
  {
    title: "Hack the Human: Basics of Social Engineering",
    excerpt: "Social engineering is about hacking people, not machines. Learn the basics.",
    author: "Agent Rootkit",
    date: "March 2024",
    quote: "The best exploit is a convincing story.",
  },
];

export default function Blog() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl text-green-400 font-mono mb-8">Blog</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.title} {...post} />
        ))}
      </div>
      <div className="mt-12 text-xs text-gray-500 font-mono">
        <span>Markdown/MDX support and code highlighting coming soon.</span>
      </div>
    </main>
  );
}