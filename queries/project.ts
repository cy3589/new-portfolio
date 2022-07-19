/* eslint-disable import/no-anonymous-default-export */

import { useQuery } from 'react-query';
import { GetProjectFetcher } from '@fetchers/project';
import { GetProjectAxiosResult } from '@typings/project';
import { AxiosError } from 'axios';

const GetProject = (id: string) =>
  useQuery<GetProjectAxiosResult, AxiosError, GetProjectAxiosResult, string[]>(
    ['user', 'project', id],
    GetProjectFetcher(id),
    { retry: 2 },
  );
const GetProjects = (userId: string) =>
  useQuery(['user', 'projects'], GetProjectsFetcher(userId));

export { GetProject };
export default {};
