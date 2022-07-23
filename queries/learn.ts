/* eslint-disable import/no-anonymous-default-export */

import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { GetLearnFetcher } from '@fetchers/learn';
import { GetLearnAxiosResult } from '@typings/learn';

const GetLean = () =>
  useQuery<GetLearnAxiosResult, AxiosError, GetLearnAxiosResult, string[]>(
    ['user', 'learn'],
    GetLearnFetcher,
  );

export { GetLean };

export default {};
