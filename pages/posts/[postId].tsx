import { useRouter } from 'next/router';
import React from 'react';

export interface PostDetailPagePageProps {}

export default function PostDetailPagePage(props: PostDetailPagePageProps) {
  const router = useRouter();

  /** Localhost: 3000/posts/12345 -> path parameter: postId : '12345' */
  return (
    <div>
      <h1>Post Detail Page</h1>

      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  );
}
