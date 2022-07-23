/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import {
  GetProjectAxiosResult,
  GetProjectsAxiosResult,
} from '@typings/project';

const url =
  typeof window === 'undefined'
    ? 'http://127.0.0.1:3000'
    : 'http://124.50.73.52:3000';
const GetProjectFetcher = (id: string) => async () => {
  const { data } = await axios.get<GetProjectAxiosResult>(
    `${url}/api/user/project/${id}`,
  );
  return data;
};
const GetProjectsFetcher = async () => {
  const { data } = await axios.get<GetProjectsAxiosResult>(
    `${url}/api/user/project`,
  );
  return data;
};

// const GetProjectsFetcher = (id: string) => async () => {
//   const { data } = await axios.get<GetProjectAxiosResult>(
//     `${url}/api/user/projects?userId=${id}`,
//   );
//   return data;
// };

export { GetProjectFetcher, GetProjectsFetcher };
export default {};
