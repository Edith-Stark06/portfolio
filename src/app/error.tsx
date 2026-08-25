"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <main id="main-content" className="min-h-screen bg-background text-on-background flex flex-col items-center justify-center px-5">
      <div className="max-w-xl text-center flex flex-col items-center gap-8">
        <div className="w-16 h-16 rounded-full border-2 border-error/30 flex items-center justify-center" aria-hidden="true">
          <span className="material-symbols-outlined text-error text-3xl">
            warning
          </span>
        </div>
        <h1 className="font-display text-headline-lg text-on-background">
          System Error
        </h1>
        <p className="font-mono text-mono-label text-error uppercase tracking-widest">
          SYS_ERR: RUNTIME_EXCEPTION
        </p>
        <p className="font-body text-body-md text-on-surface-variant">
          An unexpected error occurred. The system has logged the event for analysis.
        </p>
        <button
          onClick={reset}
          className="glow-btn px-8 py-3 rounded-full font-mono text-mono-label font-bold text-white uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          Retry Sequence
        </button>
      </div>
    </main>
  );
}
