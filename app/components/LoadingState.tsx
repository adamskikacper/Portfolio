import React from "react";
import LoadingSpinner from "./LoadingSpinner";

interface LoadingStateProps {
  isLoading: boolean;
  children: React.ReactNode;
}

const LoadingState = ({ isLoading, children }: LoadingStateProps) => {
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50">
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-background-primary-light/80 backdrop-blur-sm dark:bg-background-primary-dark/80" />

        {/* Loading spinner container */}
        <div className="relative flex h-screen flex-col items-center justify-center">
          <LoadingSpinner size="large" />
          <p className="mt-4 animate-pulse text-lg font-medium text-[rgb(234,179,8)]">
            Loading amazing content{" "}
            <span className="loading loading-dots loading-xs relative top-2"></span>
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default LoadingState;

