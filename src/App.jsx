import RoutesApp from './routes/RoutesApp';
import './App.css'; // Archivo de estilos CSS
import { ThemeProvider } from './themes/ThemeContext';
const App = () => {
  return (
    <>

      <ThemeProvider>
        <RoutesApp />
      </ThemeProvider>
    </>
  );
};

export default App;
