import { NextApiRequest, NextApiResponse } from 'next';
import myProjects from 'myDatas';

const project = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const projectId = (req.query as { projectId: string })?.projectId;
    if (!projectId)
      return res.status(401).json({ result: 'fail', message: '잘못된 접근' });
    if (!myProjects[projectId])
      return res
        .status(401)
        .json({ result: 'fail', message: '데이터가 없습니다' });
    return res.status(201).json({
      result: 'success',
      message: '성공',
      project: myProjects[projectId],
    });
  } catch (error) {
    // if (axios.isAxiosError(error)) console.error(error.response?.data);
    return res.status(500).send('에러발생');
  }
};

export default project;
