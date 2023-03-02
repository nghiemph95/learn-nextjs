import { useRouter } from 'next/router';
import React from 'react';

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const router = useRouter();

  console.log('About query: ', router.query);

  return <div>About Page</div>;
}

/** Nếu sử dụng hàm getServerSideProps thì trang sẽ ko thể Automatic Static Optimization (ASO) được nữa
 * tức là trang không thể SSG (Static Site Generation) được nữa mà chuyển qua SSR (Server Site Rendering)
 */
export async function getServerSideProps() {
  return {
    props: {},
  };
}
