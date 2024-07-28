import { NextApiRequest, NextApiResponse } from 'next';
import { myTSChallenges } from 'myDatas';

const TSChallenges = myTSChallenges.map(({ title, id }) => ({ title, id }));

const tsChallenges = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    return res.status(201).json({
      result: 'success',
      message: '성공',
      tsChallenges: TSChallenges,
    });
  } catch (error) {
    // if (axios.isAxiosError(error)) console.error(error.response?.data);
    return res.status(500).send('에러발생');
  }
};

export default tsChallenges;
