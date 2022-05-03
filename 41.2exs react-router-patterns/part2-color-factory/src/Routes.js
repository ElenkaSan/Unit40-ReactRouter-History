import React, { useState } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import ColorDetails from './ColorDetails';
import ColorList from './ColorList';
import ColorForm from './ColorForm';

const Routes = () => {
    const initialState = [
      {
        name  : 'Purple',
        color : 'purple'
      },
      {
        name  : 'Blue',
        color : 'rgb(31, 169, 255)'
      },
      {
        name  : 'Almost green',
        color : 'rgb(73, 198, 169)'
      }
    ];
  
    const [ colors, setColors ] = useState(initialState);
    const addColor = ({ name, color }) => {
      setColors((colors) => [ ...colors, { name: name, color: color } ]);
    };
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/colors">
            <ColorList colors={colors} />
          </Route>
          <Route exact path="/colors/new">
            <ColorForm addColor={addColor} />
          </Route>
          <Route exact path="/colors/:color">
            <ColorDetails colors={colors} />
          </Route>
          <Redirect to="/colors" />;
          <Route />
        </Switch>
      </BrowserRouter>
    );
};

export default Routes;
