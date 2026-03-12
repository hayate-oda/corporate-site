import { Outlet } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function Root() {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
      <Navigation />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
