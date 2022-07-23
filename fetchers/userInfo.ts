/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { GetUserInfoAxiosResult } from '@typings/info';

const url =
  typeof window === 'undefined'
    ? 'http://127.0.0.1:3000'
    : 'http://124.50.73.52:3000';

const GetUserInfoFetcher = async () => {
  const { data } = await axios.get<GetUserInfoAxiosResult>(
    `${url}/api/user/info`,
  );
  return data;
};

export { GetUserInfoFetcher };
export default {};