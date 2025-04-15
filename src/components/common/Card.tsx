interface CardProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
  }
  
  const Card = ({ title, children, className = "" }: CardProps) => {
    return (
      <div className={`max-w-sm rounded-xl shadow-md bg-white p-6 ${className}`}>
        {title && <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>}
        <div className="text-gray-700 text-sm">{children}</div>
      </div>
    );
  };
  
  export default Card;
  