import { useRef } from "react";
import { ConfigDialog } from "../components/Dialog";
import mainLayout from "../layout/main";

const Restaurant = () => {
  const childRef = useRef();
  function openDialog() {
    childRef.current.openDialog();
  }
  return (
    <div>
      <button type="button" onClick={openDialog}>
        오픈
      </button>
      <ConfigDialog ref={childRef}>{/* <Restaurant /> */}</ConfigDialog>
    </div>
  );
};

export default mainLayout(Restaurant);
