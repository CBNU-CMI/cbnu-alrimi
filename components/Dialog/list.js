/* eslint-disable no-restricted-syntax */
const list = {
  text: "전체",
  children: [
    {
      text: "전공",
      children: [],
    },
    {
      text: "공통",
      children: [],
    },
  ],
};

const str = `[{"id":10101,"category1":"경영대학","category2":"경영정보학과","category3":"학부공지"},{"id":10102,"category1":"경영대학","category2":"경영정보학과","category3":"대학원공지"},{"id":10201,"category1":"경영대학","category2":"경영학부","category3":"대학공지"},{"id":10301,"category1":"경영대학","category2":"국제경영학과","category3":"학부공지"},{"id":20101,"category1":"공과대학","category2":"건축공학과","category3":"공지사항"},{"id":20201,"category1":"공과대학","category2":"건축학과","category3":"공지사항"},{"id":20301,"category1":"공과대학","category2":"공업화학과","category3":"공지사항"},{"id":20401,"category1":"공과대학","category2":"기계공학부","category3":"공지사항"},{"id":20501,"category1":"공과대학","category2":"도시공학과","category3":"공지사항"},{"id":20601,"category1":"공과대학","category2":"신소재공학과","category3":"공지사항"},{"id":20701,"category1":"공과대학","category2":"안전공학과","category3":"공지사항"},{"id":20801,"category1":"공과대학","category2":"토목공학부","category3":"공지사항"},{"id":20901,"category1":"공과대학","category2":"화학공학과","category3":"공지사항"},{"id":21001,"category1":"공과대학","category2":"환경공학과","category3":"공지사항"},{"id":30101,"category1":"농업생명환경대학","category2":"농업경제학과","category3":"공지사항"},{"id":30201,"category1":"농업생명환경대학","category2":"목재종이과학과","category3":"공지사항"},{"id":30301,"category1":"농업생명환경대학","category2":"바이오시스템공학과","category3":"공지사항"},{"id":30401,"category1":"농업생명환경대학","category2":"산림학과","category3":"공지사항"},{"id":30501,"category1":"농업생명환경대학","category2":"식물의학과","category3":"공지사항"},{"id":30601,"category1":"농업생명환경대학","category2":"식물자원학과","category3":"공지사항"},{"id":30701,"category1":"농업생명환경대학","category2":"식품생명학과","category3":"공지사항"},{"id":30801,"category1":"농업생명환경대학","category2":"원예학과","category3":"공지사항"},{"id":30901,"category1":"농업생명환경대학","category2":"지역건설공학과","category3":"공지사항"},{"id":31001,"category1":"농업생명환경대학","category2":"축산학과","category3":"공지사항"},{"id":31101,"category1":"농업생명환경대학","category2":"특용식물학과","category3":"공지사항"},{"id":31201,"category1":"농업생명환경대학","category2":"환경생명화학과","category3":"공지사항"},{"id":40101,"category1":"사범대학","category2":"교육학과","category3":"공지사항"},{"id":40201,"category1":"사범대학","category2":"국어교육과","category3":"공지사항"},{"id":40301,"category1":"사범대학","category2":"물리교육과","category3":"공지사항"},{"id":40401,"category1":"사범대학","category2":"사회교육과","category3":"공지사항"},{"id":40501,"category1":"사범대학","category2":"생물교육과","category3":"공지사항"},{"id":40601,"category1":"사범대학","category2":"수학교육과","category3":"공지사항"},{"id":40701,"category1":"사범대학","category2":"역사교육과","category3":"공지사항"},{"id":40801,"category1":"사범대학","category2":"영어교육과","category3":"공지사항"},{"id":40901,"category1":"사범대학","category2":"윤리교육과","category3":"공지사항"},{"id":41001,"category1":"사범대학","category2":"지구과학교육과","category3":"공지사항"},{"id":41101,"category1":"사범대학","category2":"지리교육과","category3":"공지사항"},{"id":41201,"category1":"사범대학","category2":"체육교육과","category3":"공지사항"},{"id":41301,"category1":"사범대학","category2":"화학교육과","category3":"공지사항"},{"id":50101,"category1":"사회과학대학","category2":"경제학과","category3":"공지사항"},{"id":50201,"category1":"사회과학대학","category2":"사회학과","category3":"공지사항"},{"id":50301,"category1":"사회과학대학","category2":"심리학과","category3":"공지사항"},{"id":50401,"category1":"사회과학대학","category2":"정치외교학과","category3":"공지사항"},{"id":50501,"category1":"사회과학대학","category2":"행정학과","category3":"공지사항"},{"id":60101,"category1":"생활과학대학","category2":"소비자학과","category3":"공지사항"},{"id":60201,"category1":"생활과학대학","category2":"식품영양학과","category3":"공지사항"},{"id":60301,"category1":"생활과학대학","category2":"아동복지학과","category3":"공지사항"},{"id":60401,"category1":"생활과학대학","category2":"의류학과","category3":"공지사항"},{"id":60501,"category1":"생활과학대학","category2":"주거환경학과","category3":"공지사항"},{"id":70101,"category1":"수의과대학","category2":"수의예과","category3":"공지사항"},{"id":70201,"category1":"수의과대학","category2":"수의학과","category3":"공지사항"},{"id":80101,"category1":"약학대학","category2":"","category3":"공지사항"},{"id":90101,"category1":"융합학과군","category2":"디자인학과","category3":"공지사항"},{"id":90201,"category1":"융합학과군","category2":"조형예술학과","category3":"공지사항"},{"id":100101,"category1":"의과대학","category2":"","category3":"공지사항"},{"id":110101,"category1":"인문대학","category2":"고고미술사학과","category3":"공지사항"},{"id":110201,"category1":"인문대학","category2":"국어국문학과","category3":"공지사항"},{"id":110301,"category1":"인문대학","category2":"독일언어문화학과","category3":"공지사항"},{"id":110401,"category1":"인문대학","category2":"러시아언어문화학과","category3":"공지사항"},{"id":110501,"category1":"인문대학","category2":"사학과","category3":"공지사항"},{"id":110601,"category1":"인문대학","category2":"영어영문학과","category3":"공지사항"},{"id":110701,"category1":"인문대학","category2":"중어중문학과","category3":"공지사항"},{"id":110801,"category1":"인문대학","category2":"철학과","category3":"공지사항"},{"id":110901,"category1":"인문대학","category2":"프랑스언어문화학과","category3":"공지사항"},{"id":120101,"category1":"자연과학대학","category2":"물리학과","category3":"공지사항"},{"id":120201,"category1":"자연과학대학","category2":"미생물학과","category3":"공지사항"},{"id":120301,"category1":"자연과학대학","category2":"생물학과","category3":"공지사항"},{"id":120401,"category1":"자연과학대학","category2":"생화학과","category3":"공지사항"},{"id":120501,"category1":"자연과학대학","category2":"수학과","category3":"공지사항"},{"id":120601,"category1":"자연과학대학","category2":"정보통계학과","category3":"공지사항"},{"id":120701,"category1":"자연과학대학","category2":"지구환경과학과","category3":"공지사항"},{"id":120801,"category1":"자연과학대학","category2":"천문우주학과","category3":"공지사항"},{"id":120901,"category1":"자연과학대학","category2":"화학과","category3":"공지사항"},{"id":130101,"category1":"전자정보대학","category2":"소프트웨어학과","category3":"공지사항"},{"id":130201,"category1":"전자정보대학","category2":"전기공학부","category3":"공지&뉴스"},{"id":130301,"category1":"전자정보대학","category2":"전자공학부","category3":"공지사항"},{"id":130401,"category1":"전자정보대학","category2":"정보통신공학부","category3":"공지사항"},{"id":130501,"category1":"전자정보대학","category2":"컴퓨터공학과","category3":"공지사항"},{"id":140101,"category1":"공통","category2":"국제교류본부","category3":"공지사항"},{"id":140201,"category1":"공통","category2":"학생생활관","category3":"공지사항"},{"id":140301,"category1":"공통","category2":"충북대학교","category3":"공지사항"},{"id":140302,"category1":"공통","category2":"충북대학교","category3":"학사장학"},{"id":140303,"category1":"공통","category2":"충북대학교","category3":"행사세미나"},{"id":140401,"category1":"공통","category2":"linc사업단","category3":"공지사항"},{"id":140501,"category1":"공통","category2":"sw중심대학사업단","category3":"공지사항"},{"id":140601,"category1":"공통","category2":"취업지원본부","category3":"공지사항"},{"id":140602,"category1":"공통","category2":"취업지원본부","category3":"채용설명회"}]`;

const data = JSON.parse(str);

function find(parent, target) {
  for (const el of parent.children) {
    if (el.text === target) return el;
  }

  parent.children.push({
    text: target,
    children: [],
  });

  return parent.children[parent.children.length - 1];
}

data.forEach((element) => {
  if (element.category1 === "공통") {
    let cur = list.children[1];
    cur = find(cur, element.category2);
    cur = find(cur, element.category3);
    cur.bell = true;
  } else {
    // 전공
    let cur = list.children[0];
    cur = find(cur, element.category1);
    cur = find(cur, element.category2);
    cur = find(cur, element.category3);
    cur.bell = true;
    cur.allow = false;
  }
});

export default list;
