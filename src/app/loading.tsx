export default function Loading() {
  return (
    <div className="fixed left-0 top-0 z-[200] h-1 w-full overflow-hidden bg-primary/20" aria-hidden>
      <div className="loading-bar-inner h-full w-1/3 bg-primary" />
    </div>
  );
}
