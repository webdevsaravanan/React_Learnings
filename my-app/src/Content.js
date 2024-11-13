import { Children } from "react";
var count = 1;
function Content({ children }) {
    Children.map(children, () => {
        console.log("child", count++);
      });
    return <>{children}</>;
  }
  export default Content;