//components
import { ErrorBoundary, ErrorFallback } from 'app/components/Error';
import Auth from 'app/pages/Auth';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Auth />
    </ErrorBoundary>
  );
}

export default App;
