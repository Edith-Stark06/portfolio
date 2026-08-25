import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="min-h-screen bg-background text-on-background relative overflow-hidden flex flex-col justify-center items-center"
    >
      <div className="scanlines" aria-hidden="true" />
      <div className="film-grain" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-[1440px] px-5 md:px-[80px] flex flex-col items-center text-center gap-8">
        <h1
          className="font-display text-[100px] leading-[100px] md:text-[200px] md:leading-[180px] tracking-[-0.05em] font-extrabold text-on-background text-glow"
          aria-label="Error 404"
        >
          404
        </h1>
        <div className="flex flex-col gap-2 mb-8">
          <p className="font-mono text-body-lg font-medium text-error">
            SYS_ERR: RESOURCE_NOT_FOUND
          </p>
          <p className="font-mono text-[14px] leading-[20px] text-on-surface-variant max-w-md mx-auto">
            The requested architecture node does not exist in the current routing table.
          </p>
        </div>

        <Link
          prefetch={false}
          href="/"
          className="glow-btn px-8 py-4 rounded-full font-mono text-mono-label font-bold text-white uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          Return to Base
        </Link>
      </div>
    </main>
  );
}
