import './scss/main.scss';
import { Card } from './components/card/Card';
import React from 'react';

function App() {

  return (
    <React.Fragment>
      <div class="theme-sds-mode-light">
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