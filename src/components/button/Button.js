import {useButton} from 'react-aria';
import {useRef} from 'react';
import "./button.scss";

export function Button(props) {
  let ref = useRef();
  let { buttonProps } = useButton(props, ref);
  let { children } = props;

  return (
    <button class='myButton' {...buttonProps} ref={ref}>
      {children}
    </button>
  );
}