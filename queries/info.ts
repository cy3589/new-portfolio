/* eslint-disable import/no-anonymous-default-export */

import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { GetUserInfoFetcher } from '@fetchers/userInfo';
import { GetUserInfoAxiosResult } from '@typings/info';

const GetUserInfo = (id: string) =>
  useQuery<
    GetUserInfoAxiosResult,
    AxiosError,
    GetUserInfoAxiosResult,
    string[]
  >(['user', 'info', id], GetUserInfoFetcher(id), { retry: 2 });

export { GetUserInfo };
export default {};
