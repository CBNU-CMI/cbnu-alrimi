/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint import/no-cycle: [2, { maxDepth: 1 }] */

import DialogLayout from '../../layout/Dialog';

const VersionNoteDialog = () => {
  const data = [
    {
      version: 'v1.0.0',
      descs: [`+UI 업데이트`, `+식단`, `+우왕이`],
    },
    {
      version: 'v0.1.2',
      descs: [`+로딩 딜레이 업데이트`, `+버전노트`],
    },
    {
      version: 'v0.1.1',
      descs: [`+도움주신분`],
    },
    {
      version: 'v0.1.0',
      descs: [`초기버전`],
    },
  ];

  return (
    <div className="version-note">
      <div className="title">버전노트</div>
      {data.map((item) => {
        const version = [];
        version.push(<div className="version">{item.version}</div>);
        version.push(
          item.descs.map((desc) => <div className="desc">{desc}</div>),
        );
        return version;
      })}
    </div>
  );
};

export default DialogLayout({ Page: VersionNoteDialog });
