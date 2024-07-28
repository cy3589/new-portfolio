/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import {
  GetProjectAxiosResult,
  GetProjectsAxiosResult,
} from '@typings/project';
import axiosConfig from '@config/axiosConfig';

const GetProjectFetcher = (id: string) => async () => {
  const { data } = await axios.get<GetProjectAxiosResult>(
    `${axiosConfig.url}/api/user/project/${id}`,
  );
  return data;
};
const GetProjectsFetcher = async () => {
  const { data } = await axios.get<GetProjectsAxiosResult>(
    `${axiosConfig.url}/api/user/project`,
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
