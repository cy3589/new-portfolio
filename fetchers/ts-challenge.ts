/* eslint-disable import/prefer-default-export */

import axiosConfig from '@config/axiosConfig';
import {
  GetTSChallengeAxiosResult,
  GetTSChallengesAxiosResult,
} from '@typings/ts-challenge';
import axios from 'axios';

const GetTSChallengesFetcher = async () => {
  const { data } = await axios.get<GetTSChallengesAxiosResult>(
    `${axiosConfig.url}/api/user/ts-challenge`,
  );
  return data;
};
const GetTSChallengeFetcher = async (tsChallengeId: string) => {
  const { data } = await axios.get<GetTSChallengeAxiosResult>(
    `${axiosConfig.url}/api/user/ts-challenge/${tsChallengeId}`,
  );
  return data;
};

export { GetTSChallengeFetcher, GetTSChallengesFetcher };
