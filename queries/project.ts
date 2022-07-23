/* eslint-disable import/no-anonymous-default-export */

import { useQuery } from 'react-query';
import { GetProjectFetcher, GetProjectsFetcher } from '@fetchers/project';
import { GetProjectAxiosResult } from '@typings/project';
import { AxiosError } from 'axios';

const GetProject = (id: string) =>
  useQuery<GetProjectAxiosResult, AxiosError, GetProjectAxiosResult, string[]>(
    ['user', 'project', id],
    GetProjectFetcher(id),
    { retry: 2 },
  );
const GetProjects = () => useQuery(['user', 'projects'], GetProjectsFetcher);

export { GetProject, GetProjects };
export default {};
