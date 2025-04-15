import { useEffect, useState } from 'react';
export const DaisyIntro = () => {
    return (
      <section className="hero bg-base-200 py-10">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://placehold.co/150x150"
            className="max-w-sm rounded-full shadow-2xl"
            alt="profile"
          />
          <div>
            <h1 className="text-5xl font-bold">이름: 이확실</h1>
            <p className="py-4 text-lg">
              안녕하세요! 프론트엔드와 백엔드를 모두 다루는 풀스택 개발자입니다.
              React와 Spring Boot 기반의 게시판 프로젝트를 통해 기능 구현과 UI/UX에 집중하고 있습니다.
              <button className="btn btn-primary">테스트</button>

            </p>
            <div className="flex gap-2 flex-wrap">
              <div className="badge badge-primary">React</div>
              <div className="badge badge-secondary">Spring Boot</div>
              <div className="badge badge-accent">MySQL</div>
              <div className="badge badge-info">Tailwind CSS</div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default DaisyIntro;