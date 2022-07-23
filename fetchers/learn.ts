/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { GetLearnAxiosResult } from '@typings/learn';

const url =
  typeof window === 'undefined'
    ? 'http://127.0.0.1:3000'
    : 'http://124.50.73.52:3000';

const GetLearnFetcher = async () => {
  const { data } = await axios.get<GetLearnAxiosResult>(
    `${url}/api/user/info/learn`,
  );
  return data;
};

export { GetLearnFetcher };
export default {};
