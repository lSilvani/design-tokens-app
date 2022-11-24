import { Button } from '../button/Button';
import { Link } from '../link/Link';
import "./card.scss";

export function Card(props) {
  return (
    <div>
      <article className="sds-card">
        <div className="img"><img src="https://cdn.dribbble.com/users/224254/avatars/normal/0dc7fb7cdce4ef573f09ae3e20681610.jpg?1489055809" alt="Laura Silvani"/></div>
        <div className="content">
          <h1>Laura Silvani</h1>
          <Link className="myLink">@lsilvani</Link>
          <p className='primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Button>Get in touch</Button>
        </div>
      </article>
    </div>
  );
}