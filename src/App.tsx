import React from 'react';
import {Button} from "./buttons"

function App() {
  return (
    <div style={{display: "flex", flexWrap: "wrap", width: "60%", margin:"auto"}}>
      <h1 style={{fontSize: "1.8rem", flexBasis: "100%"}}>Button Component</h1>
      <Button>Default</Button>
      <Button variant='outline'>Default</Button>
      <Button variant='text'>Default</Button>
      <Button disableShadow color='primary'>Default</Button>
      <Button disabled>Default</Button>
      <Button variant='text' disabled>Default</Button>
      <Button startIcon='local_grocery_store' color='primary'>Default</Button>
      <Button endIcon='local_grocery_store' color='primary'>Default</Button>
      <Button size='sm' color='primary'>Default</Button>
      <Button size='md' color='primary'>Default</Button>
      <Button size='lg' color='primary'>Default</Button>
      <Button color='default'>Default</Button>
      <Button color='primary'>Default</Button>
      <Button color='secondary'>Default</Button>
      <Button color='danger'>Default</Button>
    </div>
  );
}

export default App;