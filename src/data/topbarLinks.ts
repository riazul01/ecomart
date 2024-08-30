export interface TopbarLink {
  id: number;
  subheader: string;
  pathname: string;
  path: string;
}

export const topbarLinks: TopbarLink[] = [
  {
    id: 1,
    subheader: 'Login',
    pathname: 'login',
    path: '#!',
  },
  {
    id: 2,
    subheader: 'Register',
    pathname: 'register',
    path: '#!',
  },
  {
    id: 3,
    subheader: 'My Account',
    pathname: 'account',
    path: '#!',
  },
  {
    id: 4,
    subheader: 'Support',
    pathname: 'support',
    path: '#!',
  },
  {
    id: 5,
    subheader: 'Faq',
    pathname: 'faq',
    path: '#!',
  },
];
