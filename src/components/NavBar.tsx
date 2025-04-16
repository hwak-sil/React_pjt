import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from "../api/axiosInstance";
import Button from "./common/Button";
import { ThemeToggle } from './ThemeToggle';

const NavBar = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState("");
  const nickname = localStorage.getItem("nickname");
  const isLoggedIn = !!nickname;
  const navigate = useNavigate();

  const goToWrite = () => {
    const userid = localStorage.getItem("userid");
    if (!userid) {
      alert("로그인 후 글쓰기가 가능합니다.");
      navigate("/regist");
    } else {
      navigate("/write");
    }
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post(`/auth/login`, {
        userId: id,
        password: password,
      });
      const nickname = res.data.nickname;
      localStorage.setItem("nickname", nickname);
      localStorage.setItem("userid", id);
      window.location.reload();
    } catch (err: any) {
      const msg = err.response?.data?.message || "서버 오류가 발생했습니다.";
      setErrorMsg(msg);
    }
  };

  return (
    <nav className="bg-zinc-800 text-white flex justify-between items-center p-4 ">

      <div className="flex gap-4 items-center">
        <Link to="/" className="hover:text-orange-400">🏠 Home</Link>
        <Link to="/skills" className="hover:text-orange-400"> 스킬</Link>
        <Link to="/projects" className="hover:text-orange-400"> 프로젝트</Link>
        <Link to="/exp" className="hover:text-orange-400"> 경력</Link>
        <Link to="/contact" className="hover:text-orange-400"> 연락처</Link>
        <ThemeToggle />
        
        <Button onClick={goToWrite}>✏️ 글쓰기</Button>
        {!isLoggedIn && <Link to="/regist" className="hover:text-orange-400">🧾 회원가입</Link>}
      </div>

      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          <>
            <span>
              안녕하세요, <strong>{nickname}</strong>님
            </span>
            <Button onClick={() => {
              localStorage.removeItem("nickname");
              localStorage.removeItem("userid");
              window.location.reload();
            }}>
              로그아웃
            </Button>
          </>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)}
              className="px-2 py-1 rounded bg-zinc-700 text-white" required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
              className="px-2 py-1 rounded bg-zinc-700 text-white" required />
            <Button type="submit">로그인</Button>
            {errorMsg && <p className="text-red-400">{errorMsg}</p>}
          </form>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
