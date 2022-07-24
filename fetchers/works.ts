/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { GetWorksAxiosResult } from '@typings/works';
import axiosConfig from '@config/axiosConfig';

const GetWorksFetcher = async () => {
  const { data } = await axios.get<GetWorksAxiosResult>(
    `${axiosConfig.url}/api/user/info/works`,
  );
  return data;
};

export { GetWorksFetcher };
export default {};
