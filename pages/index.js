import Link from 'next/link';
import '../css/style.css';
const Index = () => (
  <div className="section">
    <Link href="/about">
      <button>About Page</button>
    </Link>
    <p>Hello Next.js</p>
  </div>
);

export default Index;