import React from "react";

export default function BlogCard({ title, excerpt, author, date, quote }) {
  return (
    <div className="rounded-xl neon-border bg-black/80 p-6 shadow-lg hover:scale-101 transition-transform duration-300">
      {quote && (
        <blockquote className="text-hacker-purple italic mb-2 font-mono text-sm glitch drop-shadow-glow">“{quote}”</blockquote>
      )}
      <h2 className="text-2xl text-hacker-green font-mono mb-2 glitch drop-shadow-glow">{title}</h2>
      <p className="text-hacker-blue mb-4 font-mono">{excerpt}</p>
      <div className="flex justify-between items-center text-xs text-hacker-red">
        <span>By {author}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}
