/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from "react";
import { BsBell, BsBellFill } from "react-icons/bs";
import list from "./list";
import DialogLayout from "../../layout/Dialog";

const ConfigDialog = () => {
  const [trace, setTrace] = useState([list]);
  const [options, setOptions] = useState(trace[trace.length - 1].children);

  // setTrace(trace.concat(list));

  function allow(option) {
    option.bell = true;
    setOptions(options);
  }

  function disallow(option) {
    option.bell = false;
    setOptions(options);
  }

  function select(option) {
    setOptions(option.children);
    setTrace(trace.concat(option));
  }

  function moveTrace(index) {
    const updateTrace = trace.filter((option, i) => i <= index);
    setTrace(updateTrace);
    setOptions(updateTrace[updateTrace.length - 1].children);
  }

  return (
    <div className="notice-config">
      <div className="trace-list">
        {trace.map((option, i) => (
          <div key={option.text} className="trace" onClick={() => moveTrace(i)}>
            {option.text}
          </div>
        ))}
      </div>
      <div className="select-box">
        {options.map((option) => (
          <div key={option.text} className="option">
            {option.bell ? (
              <div className="bell">
                {option.allow ? (
                  <BsBellFill onClick={disallow} />
                ) : (
                  <BsBell onClick={allow} />
                )}
              </div>
            ) : (
              ""
            )}
            <div onClick={() => select(option)}>{option.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DialogLayout(ConfigDialog);
