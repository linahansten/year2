
import { useSession, SessionProvider } from '../../components/Session';

const Home = () => {
  const { session, login, logout } = useSession();

  const handleLogin = () => {
    const user = { name: 'John Doe' };
    login(user);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      {session ? (
        <>
          <p>Welcome, {session.user.name}!</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

const IndexPage = () => {
  return (
    <SessionProvider>
      <Home />
    </SessionProvider>
  );
};

export default IndexPage;
