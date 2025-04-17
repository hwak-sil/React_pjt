import { Link} from 'react-router-dom';

import { ThemeToggle } from './ThemeToggle';

const NavBar = () => {
  

  return (
    <nav className="bg-zinc-800 text-white flex justify-between items-center p-4 ">

      <div className="flex gap-4 items-center">
        <Link to="/" className="hover:text-orange-400">🏠 Home</Link>
        <Link to="/skills" className="hover:text-orange-400"> 스킬</Link>
        <Link to="/projects" className="hover:text-orange-400"> 프로젝트</Link>
        <Link to="/exp" className="hover:text-orange-400"> 경력</Link>
        <Link to="/contact" className="hover:text-orange-400"> 연락처</Link>
        <Link to="/tableSample" className="hover:text-orange-400"> 샘플페이지</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default NavBar;
