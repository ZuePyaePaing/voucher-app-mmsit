
const Container = ({ children, className }) => {
  return (
    <div className={`max-w-5xl max-h-screen mx-auto px-5 py-4 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
