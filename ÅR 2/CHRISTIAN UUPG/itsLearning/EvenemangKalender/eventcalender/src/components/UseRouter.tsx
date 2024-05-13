export default function Router() {
  const handleSignInRedirect = (e) => {
    e.preventDefault();
    window.location.href = '/api/auth/signin';
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center flex-col">
      <a className="text-gray-300 text-sm mb-4" href="/api/auth/signin" onClick={handleSignInRedirect}>
        Sign In to Create an Event
      </a>
    </div>
  );
}
