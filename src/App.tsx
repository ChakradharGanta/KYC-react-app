//components
import { ErrorBoundary, ErrorFallback } from 'app/components/Error';
import Camera from 'app/pages/Camera';
import { Header } from 'app/components';
import Routes from './Routes';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Header />
      <Routes />
    </ErrorBoundary>
  );
}

export default App;
