import { StaticImageData } from 'next/image';

export interface subFieldType {
  id: number;
  title: string;
  redirectLink?: string;
}
export interface exploreCardType {
  id: number;
  title: string;
  bgImage?: StaticImageData;
  subFields?: subFieldType[];
}

export const exploreFields: exploreCardType[] = [
  {
    id: 1,
    title: 'Web Development',
    bgImage: require('@/assets/webBG.png'),
    subFields: [
      {
        id: 1,
        title: 'Core Concepts',
        redirectLink: '/web/core',
      },
      {
        id: 2,
        title: 'ReactJS',
        redirectLink: '/web/react',
      },
      {
        id: 3,
        title: 'NodeJS',
        redirectLink: '/web/nodejs',
      },
      {
        id: 4,
        title: 'Popular Frameworks',
        redirectLink: '/web/frameworks',
      },
      {
        id: 4,
        title: 'Advanced Concepts',
        redirectLink: '/web/advanced',
      },
    ],
  },
  {
    id: 2,
    title: 'Operating Systems',
    bgImage: require('@/assets/osBG.png'),
    subFields: [
      {
        id: 1,
        title: 'Core Concepts',
        redirectLink: '/os/core',
      },
      {
        id: 2,
        title: 'Linux',
        redirectLink: '/os/linux',
      },
      {
        id: 3,
        title: 'Windows',
        redirectLink: '/os/windows',
      },
      {
        id: 4,
        title: 'MacOS',
        redirectLink: '/os/macos',
      },
      {
        id: 5,
        title: 'Advanced Concepts',
        redirectLink: '/os/advanced',
      },
    ],
  },
  {
    id: 3,
    title: 'Database Management Systems',
    bgImage: require('@/assets/dbmsBG.png'),
    subFields: [
      {
        id: 1,
        title: 'Core Concepts',
        redirectLink: '/dbms/core',
      },
      {
        id: 2,
        title: 'SQL',
        redirectLink: '/dbms/sql',
      },
      {
        id: 3,
        title: 'NoSQL',
        redirectLink: '/dbms/nosql',
      },
      {
        id: 4,
        title: 'Database Design',
        redirectLink: '/dbms/design',
      },
      {
        id: 5,
        title: 'Advanced Concepts',
        redirectLink: '/dbms/advanced',
      },
    ],
  },
  {
    id: 4,
    title: 'Programming',
    bgImage: require('@/assets/programmingBG.png'),
    subFields: [
      {
        id: 1,
        title: 'Introduction to Programming',
        redirectLink: '/programming/intro',
      },
      {
        id: 2,
        title: 'Core Concepts',
        redirectLink: '/programming/core',
      },
      {
        id: 3,
        title: 'Data Structures and Algorithms',
        redirectLink: '/programming/data-structures',
      },
      {
        id: 4,
        title: 'Object-Oriented Programming',
        redirectLink: '/programming/oop',
      },
      {
        id: 5,
        title: 'Functional Programming',
        redirectLink: '/programming/functional',
      },
    ],
  },
  {
    id: 5,
    title: 'Mobile App Development',
    bgImage: require('@/assets/appBG.png'),
    subFields: [
      {
        id: 1,
        title: 'Introduction to App Development',
        redirectLink: '/app/intro',
      },
      {
        id: 2,
        title: 'App Design Principles',
        redirectLink: '/app/design',
      },
      {
        id: 3,
        title: 'User Interface Development',
        redirectLink: '/app/ui',
      },
      {
        id: 4,
        title: 'Cross-Platform Development',
        redirectLink: '/app/cross-platform',
      },
      {
        id: 5,
        title: 'Native App Development',
        redirectLink: '/app/native',
      },
    ],
  },
];
