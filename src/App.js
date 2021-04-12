import './App.css';

//components
import AppRouter from './components/AppRouter/AppRouter';
import CustomFooter from './components/CustomFooter/CustomFooter';
import CustomNavbar from './components/CustomNavbar/CustomNavbar';


function App() {
  return (
    <div className="App">

      <header className="mb-5">
        <CustomNavbar/>
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
