export type NavigationPath =
  | 'home'
  | 'career-journey'
  | 'artistic-expression'
  | 'blog';

export type NavigationState = {
  path: NavigationPath;
};
