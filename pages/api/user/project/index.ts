import { ProjectsPreview } from '@typings/project';
import { NextApiRequest, NextApiResponse } from 'next';

const UserProjects: ProjectsPreview[] = [
  {
    thumbNailSrc: '/glyde-commerce/glyde-commerce-thumbnail.jpg',
    title: 'Glyde Commerce',
    id: '1658051003913932',
    isCompanyProject: true,
  },
  {
    thumbNailSrc: '/classu-b2b/classu-b2b-thumbnail.jpg',
    title: 'ClassU B2B',
    id: '1658051003913931',
    isCompanyProject: true,
  },
  {
    thumbNailSrc: '/classu-awards/classu-awards-thumbnail.jpg',
    title: 'ClassU Awards',
    id: '16580510039139',
    isCompanyProject: true,
  },
  {
    thumbNailSrc: '/watch-treasurer/watch-treasurer-thumbnail.png',
    title: 'Treasurer-Watch',
    id: '16580510039129',
    isCompanyProject: true,
  },
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
];

const projects = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    return res.status(201).json({
      result: 'success',
      message: '성공',
      projects: UserProjects,
    });
  } catch (error) {
    // if (axios.isAxiosError(error)) console.error(error.response?.data);
    return res.status(500).send('에러발생');
  }
};

export default projects;
