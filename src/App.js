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
        <div className="custom__navbar__spacer"></div>
      </header>

      <main>
        <AppRouter/>
      </main>

      <div className="custom__spacer"></div>
      <footer className="footer">
      <CustomFooter/>
      </footer>
      
    </div>
  );
}

export default App;
