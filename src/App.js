import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Grid } from 'semantic-ui-react';

import Messages from './components/Messages/Messages';
import SidePanel from './components/SidePanel/SidePanel';
import MetaPanel from './components/MetaPanel/MetaPanel';
import ColorPanel from './components/ColorPanel/ColorPanel';

function App() {
  return (
    <Grid columns="equal" className="app">

      <ColorPanel />
      
      <SidePanel />


      <Grid.Column style={{marginLeft: 320}}>
        <Messages />
      </Grid.Column>
        

      <Grid.Column width={4}>
        <MetaPanel />
      </Grid.Column>

    </Grid>
  );
}

export default App;
