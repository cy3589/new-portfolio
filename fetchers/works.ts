/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { GetWorksAxiosResult } from '@typings/works';

const url =
  typeof window === 'undefined'
    ? 'http://127.0.0.1:3000'
    : 'http://124.50.73.52:3000';

const GetWorksFetcher = async () => {
  const { data } = await axios.get<GetWorksAxiosResult>(
    `${url}/api/user/info/works`,
  );
  return data;
};

export { GetWorksFetcher };
export default {};
