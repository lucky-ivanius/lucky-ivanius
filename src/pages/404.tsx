export default function NotFound() {
  return (
    <div className="font-inter flex h-screen w-full flex-col items-center justify-center gap-2 bg-red-50">
      <h1 className="text-center text-5xl font-bold">404</h1>
      <p className="text-center">Page not found</p>
      <p className="text-center">Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}
