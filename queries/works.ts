/* eslint-disable import/no-anonymous-default-export */

import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { GetWorksFetcher } from '@fetchers/works';
import { GetWorksAxiosResult } from '@typings/works';

const GetWorks = () =>
  useQuery<GetWorksAxiosResult, AxiosError, GetWorksAxiosResult, string[]>(
    ['user', 'works'],
    GetWorksFetcher,
  );

export { GetWorks };

export default {};
