import './App.css';
import Landing from './pages/Landing'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const THEME = createMuiTheme({
  typography: {
    "fontFamily": `'Hanalei Fill', cursive`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  }
});


function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={THEME}>
        <Landing />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
