import React, { useState } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import ColorDetails from './ColorDetails';
import ColorList from './ColorList';
import ColorForm from './ColorForm';
import { v4 as uuid } from "uuid";

const Routes = () => {
    const initialState = [
      {
        id: uuid(),
        name  : 'Purple',
        color : 'purple'
      },
      { 
        id: uuid(),
        name  : 'Blue',
        color : 'rgb(31, 169, 255)'
      },
      { 
        id: uuid(),
        name  : 'Almost green',
        color : 'rgb(73, 198, 169)'
      }
    ];
  
    const [ colors, setColors ] = useState(initialState);
    const addColor = ({ name, color }) => {
      setColors((colors) => [ ...colors, { name: name, color: color } ]);
    };
    const removeColor = ({ id }) => {
      setColors((colors) => colors.filter((color)=> color.id != id));
    };
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/colors">
            <ColorList colors={colors} removeColor={removeColor} />
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
