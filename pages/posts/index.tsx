import { GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';

export interface PostListPageProps {
  posts: any[];
}

export default function PostListPage(props: PostListPageProps) {
  return <div>Post List Page</div>;
}
/** PostListPageProps: là 1 generic */
export const getStaticProps: GetStaticProps<PostListPageProps> = async (context: GetStaticPropsContext) => {
  // server-side
  // build-time
  /** Hàm này chỉ chạy trên phía server, nên có thể thao tác bất kì thứ gì liên quan đến
   * NodeJS
   */

  console.log('static props');

  return {
    props: {
      posts: [],
    },
  };
};
