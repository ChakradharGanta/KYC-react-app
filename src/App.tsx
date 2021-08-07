//components
import { ErrorBoundary, ErrorFallback } from 'app/components/Error';
import CustomerDetails from 'app/pages/CustomerDetails';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <CustomerDetails />
    </ErrorBoundary>
  );
}

export default App;
