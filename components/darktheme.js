import NewTime from "./new-time/time";
import Time from "./time/time";

function Switcher() {

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return (<><NewTime/></>);
  }
  else {
    return (<><Time/></>);
  }
   
}

export default Switcher
