import { useRouter } from 'next/router';
import React from 'react';

export interface ParamPageProps {}

export default function ParamPagePage(props: ParamPageProps) {
  const router = useRouter();

  /** Localhost: 3000/posts/12345/comment/test -> path parameter: params : ['12345','comment', 'test'] */
  return (
    <div>
      <h1>Param Page</h1>

      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  );
}
