/* eslint-disable import/no-anonymous-default-export */

import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { GetUserInfoFetcher } from '@fetchers/userInfo';
import { GetUserInfoAxiosResult } from '@typings/info';

const GetUserInfo = () =>
  useQuery<
    GetUserInfoAxiosResult,
    AxiosError,
    GetUserInfoAxiosResult,
    string[]
  >(['user', 'info'], GetUserInfoFetcher, { retry: 2 });

export { GetUserInfo };
export default {};
