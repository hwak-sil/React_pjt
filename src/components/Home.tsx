import { useEffect, useState } from 'react';
import { Post } from '../types/Post';
import { useNavigate } from 'react-router-dom';
import api from "../api/axiosInstance";


const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    api.get<Post[]>('/posts')
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.error('API 호출 실패:', err);
        setError(true);
      });
  }, []);

  const categories = [
    { code: 'humor', label: '😂 유머 게시판' },
    { code: 'info', label: '💡 정보 게시판' },
  ];

  return (
    <main className="max-w-4xl mx-auto p-4">
      {categories.map(cat => {
        const filtered = posts.filter(post => post.category === cat.code);
        return (
          <section key={cat.code} className="my-6">
            <h2 className="text-2xl font-bold mb-2">{cat.label}</h2>
            <a href={`/category/${cat.code}`} className="text-blue-400 hover:underline mb-4 block">게시판 바로가기</a>
            {filtered.length === 0 ? (
              <p className="text-zinc-300">등록된 게시글이 없습니다.</p>
            ) : (
              <ul className="space-y-1">
                {filtered.map(post => (
                  <li key={post.id}>
                    <a href={`/posts/${post.id}`} className="text-blue-300 hover:text-blue-500">{post.title}</a>
                  </li>
                ))}
              </ul>
            )}
          </section>
        );
      })}
      </main>
  );
  
};

export default Home;
