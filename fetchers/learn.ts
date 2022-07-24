/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { GetLearnAxiosResult } from '@typings/learn';
import axiosConfig from '@config/axiosConfig';

const GetLearnFetcher = async () => {
  const { data } = await axios.get<GetLearnAxiosResult>(
    `${axiosConfig.url}/api/user/info/learn`,
  );
  return data;
};

export { GetLearnFetcher };
export default {};
