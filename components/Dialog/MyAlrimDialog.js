/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint import/no-cycle: [2, { maxDepth: 1 }] */

import { useEffect, useState } from 'react';
import DialogLayout from '../../layout/Dialog';
import {
  getAllowOnSiteList,
  setAllowSite,
  unsetAllowSite,
  getPuase,
  setPause,
  unsetPause,
} from '../../api';
import { BsBell, BsBellFill } from 'react-icons/bs';

function Alrim({ site }) {
  const [allow, setAllow] = useState(true);
  var str = ``;
  var idx = 0;
  for (const i in site) {
    const val = site[i];
    if (i == 'id') continue;
    if (idx != 0) str += ` >`;
    str += ` ${val}`;
    idx++;
  }
  const toggle = () => {
    if (allow) {
      unsetAllowSite(site.id);
      setAllow(false);
    } else {
      setAllowSite(site.id);
      setAllow(true);
    }
  };

  return (
    <div className="alrim">
      {str}
      <div
        className="bell"
        onClick={() => {
          toggle();
        }}
      >
        {allow ? <BsBellFill /> : <BsBell />}
      </div>
    </div>
  );
}

const MyAlrimDialog = () => {
  const [data, setData] = useState([]);
  const [isPause, setIsPause] = useState(false);

  useEffect(() => {
    getAllowOnSiteList().then((res) => {
      setData(res.data);
    });
    getPuase().then((res) => {
      if (res.data.length) setIsPause(true);
    });
  }, []);

  function togglePause() {
    if (isPause) unsetPause();
    else setPause();
    setIsPause(!isPause);
  }

  return (
    <div className="my-alrim">
      {isPause ? <div className="board"></div> : ''}
      <div className="pause">
        <div className="text">알림 기능 중지</div>
        <label className="switch">
          <input
            type="checkbox"
            checked={isPause}
            onClick={() => {
              togglePause();
            }}
          />
          <span className="slider round"></span>
        </label>
      </div>
      {data.map((item) => {
        return <Alrim site={item} />;
      })}
    </div>
  );
};

export default DialogLayout({ Page: MyAlrimDialog });
