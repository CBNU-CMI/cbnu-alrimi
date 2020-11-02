import axios from 'axios';

// console.log(window.location);

const token = `fyhhpHxmc4I:APA91bEXCyw_TUvx3M-yKxyaKc72Xv0a7c2MVFbrDtTZfkqpZKIajyTi1Us0TAFHliQtq02Fy3Y_xTyBnmC8k1ea3qCLBQVh1aNFYs-ei2ZxMwvS4oFtnzPugaA2N9DQx2R63INnU9Pv`;

const getConfig = () => {
  return {
    baseURL: 'http://' + location.hostname + ':3000',
    headers: {
      token,
    },
  };
};

const getNoticeSiteList = ({ type, offset }) => {
  return axios.get(`/notice/site/list/${type}?offset=${offset}`, getConfig());
};

const getNotice = (params) => {
  return axios.get(`/notice`, {
    ...getConfig(),
    params,
  });
};

const getNoticeSite = ({ siteId, offset }) => {
  return axios.get(`/notice/site/${siteId}?offset=${offset}`, getConfig());
};

const getRestaurant = ({ date, place }) => {
  return axios.get(`/restaurant?date=${date}&place=${place}`, getConfig());
};

const getSchedule = ({ year, month }) => {
  return axios.get(`/schedule?year=${year}&month=${month}`, getConfig());
};

export { getNoticeSiteList, getNotice, getNoticeSite, getRestaurant,getSchedule };
