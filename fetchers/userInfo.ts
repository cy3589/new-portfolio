/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { GetSolvedAxiosResult, GetUserInfoAxiosResult } from '@typings/info';
import axiosConfig from '@config/axiosConfig';

const GetUserInfoFetcher = async () => {
  const { data } = await axios.get<GetUserInfoAxiosResult>(
    `${axiosConfig.url}/api/user/info`,
  );
  return data;
};

const TIER: { [k in number]: string } = {
  1: 'Bronze V',
  2: 'Bronze IV',
  3: 'Bronze III',
  4: 'Bronze II',
  5: 'Bronze I',
  6: 'Silver V',
  7: 'Silver IV',
  8: 'Silver III',
  9: 'Silver II',
  10: 'Silver I',
  11: 'Gold V',
  12: 'Gold IV',
  13: 'Gold III',
  14: 'Gold II',
  15: 'Gold I',
  16: 'Platinum V',
  17: 'Platinum IV',
  18: 'Platinum III',
  19: 'Platinum II',
  20: 'Platinum I',
  21: 'Diamond V',
  22: 'Diamond IV',
  23: 'Diamond III',
  24: 'Diamond II',
  25: 'Diamond I',
  26: 'Ruby V',
  27: 'Ruby IV',
  28: 'Ruby III',
  29: 'Ruby II',
  30: 'Ruby I',
  31: 'Master',
};

const GetUserSolvedACInfoFetcher = async ({ userId }: { userId: string }) => {
  const { data } = await axios.get<GetSolvedAxiosResult>(
    '/api/solved/user/show',
    { params: { handle: userId } },
  );
  const tier = TIER[data.tier];

  return {
    userId,
    tier,
    rank: data.rank,
    solvedCount: data.solvedCount,
    profileImageUrl: data.profileImageUrl,
    tierIndex: data.tier,
  };
};

export { GetUserInfoFetcher, GetUserSolvedACInfoFetcher };
export default {};
