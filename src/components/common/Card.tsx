interface CardProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
  }
  
  const Card = ({ title, children, className = "" }: CardProps) => {
    return (
      <div className={`max-w-sm rounded-xl shadow-md bg-base-100 p-6 ${className}`}>
        {title && <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">{title}</h3>}
        <div className="text-gray-700 dark:text-gray-300 text-sm">{children}</div>
      </div>
    );
  };
  
  export default Card;
  