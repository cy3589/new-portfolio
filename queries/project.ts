/* eslint-disable import/no-anonymous-default-export */

import { useQuery } from 'react-query';
import { GetProjectFetcher } from '@fetchers/project';
import { GetProjectAxiosResult } from '@typings/project';
import { AxiosError } from 'axios';

const GetProject = (id: string) =>
  useQuery<GetProjectAxiosResult, AxiosError, GetProjectAxiosResult, string[]>(
    ['project', id],
    GetProjectFetcher(id),
    { retry: 2 },
  );

export { GetProject };
export default {};
