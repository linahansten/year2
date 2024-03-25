"use server"
import { Home } from './components/Home';

const HomePage = async () => {
  return (
    <div className="bg-slate-500 min-h-screen text-slate-50">
      <Home/>
    </div>
  );
};

export default HomePage;
