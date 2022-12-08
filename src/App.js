import './css/main.scss';
import { Button } from './components/button/Button';
import React from 'react';

function App() {

  return (
    <React.Fragment>
      {/* Add  the class to the main container */} 
      <div>
        <main>
          <section>
          <article>
            <div><img src="https://cdn.dribbble.com/users/224254/avatars/normal/0dc7fb7cdce4ef573f09ae3e20681610.jpg?1489055809" alt="Laura Silvani"/></div>
            <div>
              <h1>Laura Silvani</h1>
              <a href="http://www.google.it">@lsilvani</a>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <Button>Get in touch</Button>
          </div>
      </article>
          </section> 
        </main>
    </div>
    </React.Fragment>
  );
}

export default App;