"use client"
import usePosts, { type Post } from "./usePosts";

export function PostList() {
  const posts = usePosts();
  const sortedPosts = posts.sort((postA, postB) => -postA.title.localeCompare(postB.title));
  return (
    <div className="p-10 bg-white rounded-lg text-slate-900">
      {sortedPosts.map((post) => (
        <PostView key={post.id} {...post} />
      ))}
    </div>
  );
}

export function PostView({ title, body }: Post) {
  return (
    <div className="p-4 m-8 rounded-lg bg-slate-300">
      <h1 className="text-lg font-bold text-left from-neutral-900">
        {title}
      </h1>
      <div className="p-4 text-sm">{body}</div>
    </div>
  );
}
