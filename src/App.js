
//components
import AppRouter from './components/AppRouter/AppRouter';
import CustomFooter from './components/CustomFooter/CustomFooter';

import './App.css';

function App() {
  return (
    <div className="App">

      <header className="">
      </header>

      <main>
        <AppRouter/>
      </main>

      <footer className="footer">
      <CustomFooter/>
      </footer>
      
    </div>
  );
}

export default App;
