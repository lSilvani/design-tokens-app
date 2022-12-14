import './scss/main.scss';
import { Card } from './components/card/Card';
import React from 'react';

function App() {

  return (
    <React.Fragment>
      {/* Add  the class to the main container */} 
      <div className="theme-sds-light">
        <main>
          <section>
            <Card></Card>
          </section> 
        </main>
    </div>
    </React.Fragment>
  );
}

export default App;