/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { GetProjectAxiosResult } from '@typings/project';

const GetProjectFetcher = (id: string) => async () => {
  const url =
    typeof window === 'undefined'
      ? 'http://127.0.0.1:3000'
      : 'http://124.50.73.52:3000';

  const { data } = await axios.get<GetProjectAxiosResult>(
    `${url}/api/project/${id}`,
  );
  return data;
};

export { GetProjectFetcher };
export default {};