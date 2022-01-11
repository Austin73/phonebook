
import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ContactsIcon from '@mui/icons-material/Contacts';
import Recents from './components/Recents'
import Favourites from './components/Favourites'
import AllContacts from './components/AllContacts';
import { createStore } from 'redux'
import allReducers from './reducers'
import { Provider } from 'react-redux';

import NewContactModel from './components/NewContactModel';
const store= createStore(allReducers)


function App() {
  const [value, setValue] = React.useState(1);
  
  return (
    <Provider store={store}>
    <Box sx={{ width: 400 ,margin:'auto'}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="All Contacts" icon={<ContactsIcon />} />
        <BottomNavigationAction label="Favourites" icon={<FavoriteIcon />} />
      </BottomNavigation>
      {(value === 0) &&(<Recents/>) }
      {(value === 2) &&(<Favourites/>) }
      {(value === 1) &&(<AllContacts/>) }
    </Box>

      <NewContactModel/>
    </Provider>
  );
}
export default App;