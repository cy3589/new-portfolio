import { NextApiRequest, NextApiResponse } from 'next';
import type { ProjectsPreview } from '@typings/project';

const UserProjects: { [_ in string]: ProjectsPreview[] } = {
  '1': [
    {
      thumbNailSrc: '/nodebird/nodebird-thumbnail.png',
      title: 'NodeBird',
      id: '16580510039130',
    },
    {
      thumbNailSrc: '/sleact/sleact-thumbnail.png',
      title: 'Sleact',
      id: '16580510039131',
    },
    {
      thumbNailSrc: '/o-house/o-house-thumbnail.jpg',
      title: 'O-House-Clone',
      id: '16580510039132',
    },
    {
      thumbNailSrc: '/dokteuk/dokteuk-thumbnail.png',
      title: 'Dokteuk',
      id: '16580510039133',
    },
    {
      thumbNailSrc: '/show-me-the-feedback/show-me-the-feedback-thumbnail.png',
      title: 'ShowMeTheFeedback',
      id: '16580510039134',
    },
  ],
};

const project = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const userId = (req.query as { userId: string })?.userId;
      if (!userId)
        return res.status(401).json({ result: 'fail', message: '잘못된 접근' });
      if (!UserProjects[userId])
        return res
          .status(401)
          .json({ result: 'fail', message: '데이터가 없습니다' });
      return res.status(201).json({
        result: 'success',
        message: '성공',
        project: UserProjects[userId],
      });
    } catch (error) {
      // if (axios.isAxiosError(error)) console.error(error.response?.data);
      return res.status(500).send('에러발생');
    }
  } else return res.status(401).send('잘못된 접근');
};

export default project;
