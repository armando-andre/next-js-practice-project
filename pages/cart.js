import Link from 'next/link'

import Nav from '../components/nav';

const fakeData = [
  {
    id: "Boat"
  },
  {
    id: "House"
  },
  {
    id: "Car"
  }
]

const PostLink = props => (
  <Link href="/product/[id]" as={`/product/${props.id}`}>
    <a>
      <h1>{props.id}</h1>
    </a>
  </Link>
);

export default function Cart() {
  return (
    <div>
      <Nav />
      {fakeData.map(i => <PostLink id={i.id} key={i.id}/>)}
    </div>
  );
}