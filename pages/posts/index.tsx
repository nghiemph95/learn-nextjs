import { GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';

export interface PostListPageProps {
  posts: any[];
}

export default function PostListPage(props: PostListPageProps) {
  return <div>Post List Page</div>;
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (context: GetStaticPropsContext) => {
  return {
    props: {
      posts: [],
    },
  };
};
