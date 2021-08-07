//components
import { ErrorBoundary, ErrorFallback } from 'app/components/Error';
import GovernmentID from 'app/pages/GovernmentID';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <GovernmentID />
    </ErrorBoundary>
  );
}

export default App;
