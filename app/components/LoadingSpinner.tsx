const LoadingSpinner = ({ size = "default" }: { size?: "small" | "default" | "large" }) => {
  const sizeClasses = {
    small: "loading-sm",
    default: "loading-md",
    large: "loading-lg",
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className="animate-slideIn"
        style={{
          animation: "slideIn 0.5s ease-out",
        }}
      >
        <div className="relative">
          <div
            className={`absolute inset-0 rounded-full bg-[rgb(234,179,8)] bg-opacity-20 blur-md ${sizeClasses[size]}`}
          />

          <span
            className={`loading-xl loading loading-bars ${sizeClasses[size]} text-[rgb(234,179,8)]`}
            role="status"
            aria-label="Loading"
          >
            <span className="sr-only">Loading</span>
            <span className="loading loading-dots loading-lg"></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
