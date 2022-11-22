import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './component/Layout/Layout';
import routers from './routers';

function App() {
  return (
   <BrowserRouter>
      <Layout>
        <Switch>
        {routers.map((route)=>{
          return <Route {...route}/>
        })}
        </Switch>
      </Layout>
    </BrowserRouter>
   
  );
}

export default App;
