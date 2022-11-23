import {useLink} from 'react-aria';
import {useRef} from 'react';
import "./link.scss";

export function Link(props) {
    let ref = useRef();
    let { linkProps } = useLink(props, ref);
  
    return (
      <a
        {...linkProps}
        ref={ref}
        href={props.href}
        target={props.target}
        className={props.className}
      >
        {props.children}
      </a>
    );
}