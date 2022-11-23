import './scss/main.scss';
import { Button } from './components/button/Button';
import { Link } from './components/link/Link';
import React from 'react';

function App() {

  return (

    <React.Fragment>

      <div class="theme-A">

        <header>My awesome webapp</header>
        <main>
          
          <section>
            
            <article>
              <img src="https://cdn.dribbble.com/users/224254/avatars/normal/0dc7fb7cdce4ef573f09ae3e20681610.jpg?1489055809" alt="Laura Silvani"/>
              
              <h1>Digital identity for travel</h1>
              <ul>
                <li><strong>Name and surname</strong> Laura Silvani</li>
                <li><strong>Address</strong> Avenue de Florissant 22, Lausanne</li>
                <li><strong>Date of birth</strong>1st October 2016</li>
                <li><strong>Loves to</strong>Play guitar, climb, paint</li>
              </ul>
              <Button>Get in touch</Button><br />
              <Link className="myLink">Share</Link>
            </article>

          </section> 
        </main>
   
    </div>
    </React.Fragment>
  );
}

export default App;
