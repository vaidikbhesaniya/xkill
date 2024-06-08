export interface subFieldType {
  id: number;
  title: string;
  redirectLink?: string;
}
export interface exploreCardType {
  id: number;
  title: string;
  subFields?: subFieldType[];
}

export const exploreFields: exploreCardType[] = [
  {
    id: 1,
    title: 'Programming',
    subFields: [
      {
        id: 1,
        title: 'Python',
        redirectLink: '/explore/programming/python',
      },
      {
        id: 2,
        title: 'Java',
      },
      {
        id: 3,
        title: 'C++',
      },
      {
        id: 4,
        title: 'Read more...',
      },
    ],
  },
  {
    id: 2,
    title: 'Web Development',
    subFields: [
      {
        id: 1,
        title: 'Core Concepts',
      },
      {
        id: 2,
        title: 'ReactJS',
      },
      {
        id: 3,
        title: 'NodeJS',
      },
      {
        id: 4,
        title: 'Read more...',
      },
    ],
  },
  {
    id: 3,
    title: 'App Development',
  },
  {
    id: 4,
    title: 'Web3',
  },
  {
    id: 5,
    title: 'Database Management System',
  },
  {
    id: 6,
    title: 'Artificial Intelligence',
  },
  {
    id: 7,
    title: 'Machine Learning',
  },
  {
    id: 8,
    title: 'Data Science',
  },
  {
    id: 9,
    title: 'Operating System',
  },
  {
    id: 10,
    title: 'Computer Networks',
  },
];
