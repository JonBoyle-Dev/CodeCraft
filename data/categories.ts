export type CategoryId = 'coding' | 'devops';

export type Category = {
  id: CategoryId;
  name: string;
  description: string;
  icon: string;
  trackIds: string[];
};

export const categories: Category[] = [
  {
    id: 'coding',
    name: 'Code',
    description: 'Learn programming languages from the ground up',
    icon: '💻',
    trackIds: ['html', 'css', 'js', 'python', 'java', 'delphi'],
  },
  {
    id: 'devops',
    name: 'DevOps & Cloud',
    description: 'Version control, collaboration, and cloud platforms',
    icon: '🚀',
    trackIds: ['git', 'github', 'azure', 'aws'],
  },
];
