
import { CssVarsProvider } from '@mui/joy/styles';
import './App.css';
import RouterPage from './components/RouterPage';
import Sheet from '@mui/joy/Sheet';

function App() {
  return (
   <CssVarsProvider>
      <RouterPage />
      </CssVarsProvider> )
}

export default App;
