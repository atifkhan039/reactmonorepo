import { Button } from '@repo/ui';
import { formatCurrency } from '@repo/utils';

function App() {
  return (
    <>
      <h1>Complete Frontend Dev and Deployment Lifecycle</h1>
      <Button onClick={() => alert(formatCurrency(234))} />
    </>
  );
}

export default App;
