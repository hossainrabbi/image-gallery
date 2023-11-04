import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
const Home = lazy(() => import("./pages/Home"));

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Home />
    </Suspense>
  );
};

export default App;
