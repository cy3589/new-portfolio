/* eslint-disable import/no-anonymous-default-export */

import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import {
  GetUserInfoFetcher,
  GetUserSolvedACInfoFetcher,
} from '@fetchers/userInfo';
import { GetSolvedACResult, GetUserInfoAxiosResult } from '@typings/info';

const GetUserInfo = () =>
  useQuery<
    GetUserInfoAxiosResult,
    AxiosError,
    GetUserInfoAxiosResult,
    string[]
  >(['user', 'info'], GetUserInfoFetcher, { retry: 2 });
const GetSolvedACUserInfo = ({ userId }: { userId: string }) =>
  useQuery<GetSolvedACResult, AxiosError, GetSolvedACResult, string[]>(
    ['user', 'info', 'solvedAC'],
    () => GetUserSolvedACInfoFetcher({ userId }),
    { retry: 2, enabled: !!userId },
  );

export { GetUserInfo, GetSolvedACUserInfo };
export default {};
