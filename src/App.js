import React, {lazy, Suspense} from "react"
import './App.css';
import MyComp from './components/MyComp.jsx'
const MyCompLazy = lazy(() => import('./components/MyComp.jsx'))

function App() {
  return (
    <>
      <h2>Open DevTolls and change to a slow Network Throttling Profile</h2>
      <MyComp text="Regular loaded." />
      <Suspense fallback={<MyComp text="Loading..." />}>
        <MyCompLazy text="Lazy Loaded!!!" />
      </Suspense>
    </>
  );
}

export default App;
