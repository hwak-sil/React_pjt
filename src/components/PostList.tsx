import { useEffect, useState  } from 'react';
import api from "../api/axiosInstance";
import { Post } from '../types/Post';
import { useNavigate, useParams } from 'react-router-dom';

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState(false); // 에러 여부 상태 추가
  const { category } = useParams();
  const navigate = useNavigate();

  const categoryMap: { [key: string]: string } = {
    humor: "유머",
    info: "정보",
  };
  
  const catename = categoryMap[category ?? ''] || "기타";

  useEffect(() => {
    api.get<Post[]>(`/posts?category=${category}`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.error('API 호출 실패:', err);
        setError(true); // 에러 발생 시 상태 업데이트
      });
  }, []);

  return (
    <div>
      <h2>📋 {catename} 게시판 목록</h2>

      {error && (
        <p style={{ color: 'red' }}>⚠ 백엔드 서버가 꺼져 있어 목록을 불러올 수 없습니다.</p>
      )}

      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong><a href={`/posts/${post.id}`}>{post.title}</a></strong>조회수{post.views}<br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
