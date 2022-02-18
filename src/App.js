import "./App.css";
import {useRoutes} from 'react-router-dom'
import routes from './Routes'
import NavigationBar from './Components/NavBar'

function App() {
  const content = useRoutes(routes)
  return (
    <div className="App">
      <NavigationBar/>
      {content}
    </div>
  );
}

export default App;
