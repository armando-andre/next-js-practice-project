import React from 'react';
import { useRouter } from 'next/router';

import Nav from '../components/nav';
// import Products from './product/[id]';

const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default function Index() {
  const router = useRouter();

  return (
    <div>
      <Nav />
      <h1>Welcome to JokeCart 🃏</h1>
      {/* <Products /> */}
    </div>
  );
}