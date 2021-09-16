import './App.css';
import { useContext, useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Grid } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';

import { RootStoreContext } from './stores/rootStore';
import Messages from './components/Messages/Messages';
import SidePanel from './components/SidePanel/SidePanel';
import MetaPanel from './components/MetaPanel/MetaPanel';
import ColorPanel from './components/ColorPanel/ColorPanel';
import LoadingComponent from './components/LoadingComponent';

function App() {

  const rootStore = useContext(RootStoreContext);
  const { token, appLoaded, setAppLoaded } = rootStore.commonStore;
  const { getUser } = rootStore.userStore;

  useEffect(() => {

    if ( token ) {
      getUser().finally(() => setAppLoaded());
    } else {
      setAppLoaded();
    }

    console.log(`is apploaded : ${appLoaded} `);

  }, [ token, getUser, appLoaded, setAppLoaded ] );


  if( !appLoaded ) return <LoadingComponent content="Loading app..." />

  return (
    <Grid columns="equal" className="app">

      <ColorPanel />
      
      <SidePanel />


      <Grid.Column style={{ marginLeft: 320 }}>
        <Messages />
      </Grid.Column>
        

      <Grid.Column width={4}>
        <MetaPanel />
      </Grid.Column>

    </Grid>
  );
}

export default observer( App );
