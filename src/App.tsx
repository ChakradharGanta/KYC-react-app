//components
import { ErrorBoundary, ErrorFallback } from 'app/components/Error';
import { Header } from 'app/components';
import Routes from './Routes';
import AuthContextProvider from './app/hooks/useAuthentication';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <AuthContextProvider>
        <>
          <Header />
          <Routes />
        </>
      </AuthContextProvider>
    </ErrorBoundary>
  );
}

export default App;
