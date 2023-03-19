import React from "react";

import { useIntersectionObserver } from "usehooks-ts";

function Button() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return <button>Setting</button>;
}
export default Button;
