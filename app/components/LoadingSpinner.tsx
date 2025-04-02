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
          {/* Background glow effect */}
          <div
            className={`absolute inset-0 rounded-full bg-[rgb(234,179,8)] bg-opacity-20 blur-md ${sizeClasses[size]}`}
          />

          {/* DaisyUI loading spinner */}
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

// Add this to your globals.css
/*
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slideIn {
  animation: slideIn 0.5s ease-out;
}
*/
