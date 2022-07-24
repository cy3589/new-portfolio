/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { GetUserInfoAxiosResult } from '@typings/info';
import axiosConfig from '@config/axiosConfig';

const GetUserInfoFetcher = async () => {
  const { data } = await axios.get<GetUserInfoAxiosResult>(
    `${axiosConfig.url}/api/user/info`,
  );
  return data;
};

export { GetUserInfoFetcher };
export default {};
