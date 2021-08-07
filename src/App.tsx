//components
import { ErrorBoundary, ErrorFallback } from 'app/components/Error';
import Camera from 'app/pages/Camera';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Camera shape="circle" />
    </ErrorBoundary>
  );
}

export default App;
