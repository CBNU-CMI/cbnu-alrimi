import NoticeCard from "./NoticeCard";

const NoticeList = () => {
  const notices = [
    {
      id: 1,
      title: "2020학년도 학사(일정)변경안내",
      department: "소프트웨어학과",
      type: "공지사항",
      date: "2020-09-18",
    },
    {
      id: 2,
      title: "2020학년도 학사(일정)변경안내",
      department: "소프트웨어학과",
      type: "공지사항",
      date: "2020-09-18",
    },
  ];

  return notices.map((notice) => (
    <NoticeCard
      key={notice.id}
      title={notice.title}
      department={notice.department}
      type={notice.type}
      date={notice.date}
    />
  ));
};

export default NoticeList;
