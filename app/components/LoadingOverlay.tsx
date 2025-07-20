import { RefObject } from "react";
import LoadingSpinner from "./LoadingSpinner";

interface LoadingOverlayProps {
  loadingRef: RefObject<HTMLDivElement>;
}

export default function LoadingOverlay({ loadingRef }: LoadingOverlayProps) {
  return (
    <div
      ref={loadingRef}
      className="fixed inset-0 z-50 flex h-screen w-screen flex-col items-center justify-center gap-10 bg-background-primary-light dark:bg-background-primary-dark"
    >
      <h1 className={`overflow-hidden text-[200px] font-bold uppercase tracking-[-0.05em]`}>
        <span className="loading-letter inline-block opacity-0">L</span>
        <span className="loading-letter inline-block opacity-0">O</span>
        <span className="loading-letter inline-block opacity-0">A</span>
        <span className="loading-letter inline-block opacity-0">D</span>
        <span className="loading-letter inline-block opacity-0">I</span>
        <span className="loading-letter inline-block opacity-0">N</span>
        <span className="loading-letter inline-block opacity-0">G</span>
      </h1>

      <div className="spinner opacity-0">
        <LoadingSpinner size="large" />
      </div>
    </div>
  );
}
