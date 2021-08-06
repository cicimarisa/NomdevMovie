import './App.scss';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Search from './Search/Search'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact={true} path="/" component={Search} />
      <Footer />
    </div>
  );
}

export default App;
