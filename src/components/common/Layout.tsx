// components/common/Layout.tsx

interface LayoutProps {
    children: React.ReactNode;
  }
  
  const Layout = ({ children }: LayoutProps) => {
    return (
      <div className="min-h-screen bg-zinc-900 text-white">
        <header className="border-b border-zinc-700">
          <div className="max-w-4xl mx-auto p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">🔥 나만의 게시판</h1>
            {/* NavBar나 버튼도 여기 */}
          </div>
        </header>
  
        <main className="max-w-4xl mx-auto p-4">
          {children}
        </main>
  
        <footer className="max-w-4xl mx-auto border-t border-zinc-700 p-4 text-sm text-center text-zinc-500">
          &copy; 2025 나의 포트폴리오 게시판
        </footer>
      </div>
    );
  };
  
  
  export default Layout;
  