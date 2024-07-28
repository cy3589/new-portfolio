/* eslint-disable import/no-anonymous-default-export */

import { useQuery } from 'react-query';
import {
  GetTSChallengeFetcher,
  GetTSChallengesFetcher,
} from '@fetchers/ts-challenge';
import { AxiosError } from 'axios';
import {
  GetTSChallengeAxiosResult,
  GetTSChallengesAxiosResult,
} from '@typings/ts-challenge';

const useGetTSChallenge = (tsChallengeId: string) =>
  useQuery<
    GetTSChallengeAxiosResult,
    AxiosError,
    GetTSChallengeAxiosResult,
    string[]
  >(
    ['user', 'ts-challenge', tsChallengeId],
    () => GetTSChallengeFetcher(tsChallengeId),
    { retry: 2 },
  );
const useGetTSChallenges = () =>
  useQuery<
    GetTSChallengesAxiosResult,
    AxiosError,
    GetTSChallengesAxiosResult,
    string[]
  >(['user', 'ts-challenges'], GetTSChallengesFetcher, { retry: 2 });

export { useGetTSChallenges, useGetTSChallenge };
