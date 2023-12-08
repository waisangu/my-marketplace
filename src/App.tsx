import './App.css'
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';

function App() {

  return (
    <>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </>
  )
}

export default App
