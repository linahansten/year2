export default function Router() {
  // const handleSignInRedirect = (e) => {
  //   e.preventDefault();
  //   window.location.href = '/sign-in';
  // }; onClick={handleSignInRedirect}>

  return (
    <div className="bg-gray-900 flex items-center justify-center flex-col">
      <a className="text-gray-300 text-sm mb-4" href="/sign-in">
        Sign In to Create an Event
      </a>
    </div>
  );
}
