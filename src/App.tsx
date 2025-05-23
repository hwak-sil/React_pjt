import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PostList from './components/pages/PostList';
import WritePost from './components/pages/WritePost';
import PostDetail from './components/pages/PostDetail';
import Home from './components/Home'
import Regist from './components/pages/UserRegist';
import NavBar from './components/NavBar';
import { Skills } from './components/Skills';
import TableSample from './components/TableSample';
import { Projects } from './components/Projects';
import { Experience } from './components/Experiences';
import { Contact } from './components/Contact';
import Board from './components/pages/Board';
import BoardLayout from './components/layouts/BoardLayout.tsx'
function App() {
    return (
      <BrowserRouter>
      {/* ✅ 상단 NavBar 고정 */}
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>
      
        <div className="min-h-screen bg-zinc-900 text-white flex flex-col">
          
            {/* ✅ 중앙 컨텐츠 영역 */}
            <main className="flex-grow w-full px-4 max-w-4xl mx-auto">
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/exp" element={<Experience />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/tableSample" element={<TableSample />} />
                <Route path="/regist" element={<BoardLayout><Regist /></BoardLayout>} />
                <Route path="/category/:category" element={<BoardLayout><PostList /></BoardLayout>} />
                <Route path="/board" element={<BoardLayout><Board /></BoardLayout>} />
                <Route path="/write" element={<BoardLayout><WritePost /></BoardLayout>} />
                <Route path="/posts/:id" element={<BoardLayout><PostDetail /></BoardLayout>} />
                <Route path="/mod/:id" element={<BoardLayout><PostDetail /></BoardLayout>} />
            </Routes>
            </main>
  
            {/* ✅ 푸터도 고정하고 싶다면 여기에 */}
            <footer className="w-full px-4 max-w-4xl mx-auto text-center text-sm py-4 border-t border-zinc-700 text-zinc-400">
                © 2025 나의 포트폴리오 게시판
            </footer>
        </div>
      </BrowserRouter>
    );
  }
  

export default App;
