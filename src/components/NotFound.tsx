import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 flex flex-col items-center">
      <div className="text-2xl">Oops! You seem to be lost.</div>
      <div className="text-xl">Here are some helpful links:</div>
      <Link className="hover:underline" to="/">
        Home
      </Link>

      <Link className="hover:underline" to="/about">
        About
      </Link>
    </div>
  );
}
