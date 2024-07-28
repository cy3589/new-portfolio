import { NextApiRequest, NextApiResponse } from 'next';
import { myTSChallenges } from 'myDatas';

const tsChallenge = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const tsChallengeId = (req.query as { tsChallengeId: string })
      ?.tsChallengeId;
    if (!tsChallengeId)
      return res.status(401).json({ result: 'fail', message: '잘못된 접근' });
    const target = myTSChallenges.find(({ id }) => id === tsChallengeId);
    if (!target)
      return res
        .status(401)
        .json({ result: 'fail', message: '데이터가 없습니다' });
    return res.status(201).json({
      result: 'success',
      message: '성공',
      tsChallenge: target,
    });
  } catch (error) {
    // if (axios.isAxiosError(error)) console.error(error.response?.data);
    return res.status(500).send('에러발생');
  }
};

export default tsChallenge;
