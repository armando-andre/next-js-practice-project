import { useRouter } from 'next/router';

import Nav from '../../components/nav';

export default function Post() {
  const router = useRouter();

  return (
    <div>
      <Nav />
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </div>
  );
}