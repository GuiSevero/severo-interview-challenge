"use client"
import { useEffect, useState } from "react";

export type Post = {
    id: number;
    title: string;
    body: string;
  };
  
export default function usePosts() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then(setPosts);
    });

    return posts;
}
