import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

type IPortal = {
  children: React.ReactNode | React.ReactNode[] | undefined;
  className: string;
};

export const Portal = ({ children, className }: IPortal) => {
  const containerRef = useRef(document.createElement("div"));

  useEffect(() => {
    const container = containerRef.current;
    container.setAttribute("class", "root-portal " + className);
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    };
  }, [className]);

  return ReactDOM.createPortal(children, containerRef.current);
};
