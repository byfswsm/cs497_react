import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useJsonQuery } from './utilities/fetch';
import './App.css';
import Banner from './components/Banner';
import TermPage from './components/TermPage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';

const queryClient = new QueryClient();

const Main = () => {
  const [data, isLoading, error] = useJsonQuery("https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php");

  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading user data...</h1>;
  if (!data) return <h1>No user data found</h1>;

  return (
    <div>
      <Banner title={data.title} />
      <TermPage courses={data.courses} />

    </div>
  );
}

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Main />
      </div>
    </QueryClientProvider>
  )
};

export default App;


