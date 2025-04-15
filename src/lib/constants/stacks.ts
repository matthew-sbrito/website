import { StackModel } from '@/models/stack.model';

export const stackList: StackModel[] = [
  // Front-end
  {
    name: 'HTML',
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    grouping: 'front-end',
    startedAt: new Date('2018-05-01'),
  },
  {
    name: 'CSS',
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    grouping: 'front-end',
    startedAt: new Date('2018-05-01'),
  },
  {
    name: 'Sass',
    startedAt: new Date('2018-05-01'),
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
    grouping: 'front-end',
  },
  {
    name: 'JavaScript',
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    grouping: 'front-end',
    startedAt: new Date('2018-05-01'),
  },
  {
    name: 'TypeScript',
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    grouping: 'front-end',
    startedAt: new Date('2018-05-01'),
  },
  {
    name: 'React',
    startedAt: new Date('2020-09-01'),
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    grouping: 'front-end',
  },
  {
    name: 'Next.js',
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    grouping: 'front-end',
    startedAt: new Date('2022-10-01'),
  },
  {
    name: 'Angular',
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
    grouping: 'front-end',
    startedAt: new Date('2018-05-01'),
  },
  {
    name: 'TailwindCSS',
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    grouping: 'front-end',
    startedAt: new Date('2022-10-01'),
  },

  // Back-end
  {
    name: 'CSharp',
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    grouping: 'back-end',
    startedAt: new Date('2018-05-01'),
  },
  {
    name: '.NET',
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
    grouping: 'back-end',
    startedAt: new Date('2018-05-01'),
  },
  {
    name: 'ASP.NET',
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain.svg',
    grouping: 'back-end',
    startedAt: new Date('2018-05-01'),
  },
  {
    name: 'Java',
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    grouping: 'back-end',
    startedAt: new Date('2021-12-01'),
  },
  {
    name: 'Spring',
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
    grouping: 'back-end',
    startedAt: new Date('2021-12-01'),
  },

  // Databases
  {
    name: 'SQL Server',
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
    grouping: 'database',
    startedAt: new Date('2018-05-01'),
  },
  {
    name: 'PostgreSQL',
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    grouping: 'database',
    startedAt: new Date('2020-09-01'),
  },
  {
    name: 'MySQL',
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    grouping: 'database',
    startedAt: new Date('2018-05-01'),
  },
  {
    name: 'MongoDB',
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    grouping: 'database',
    startedAt: new Date('2022-10-01'),
  },
  {
    name: 'Redis',
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    grouping: 'database',
    startedAt: new Date('2022-10-01'),
  },

  // Cloud
  {
    name: 'Azure',
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    grouping: 'cloud',
    startedAt: new Date('2022-10-01'),
  },
  {
    name: 'AWS',
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    grouping: 'cloud',
    startedAt: new Date('2022-10-01'),
  },
  {
    name: 'Docker',
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    grouping: 'cloud',
    startedAt: new Date('2022-10-01'),
  },
  {
    name: 'Kubernetes',
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg',
    grouping: 'cloud',
    startedAt: new Date('2023-08-01'),
  },
  {
    name: 'Apache Kafka',
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg',
    grouping: 'cloud',
    startedAt: new Date('2022-10-01'),
  },
  {
    name: 'RabbitMQ',
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg',
    grouping: 'cloud',
    startedAt: new Date('2022-10-01'),
  },

  // Outros
  {
    name: 'Git',
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    grouping: 'others',
    startedAt: new Date('2018-05-01'),
  },
  {
    name: 'Azure DevOps',
    startedAt: new Date('2022-10-01'),
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg',
    grouping: 'others',
  },
  {
    name: 'Third-party APIs',
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openapi/openapi-original.svg',
    grouping: 'others',
    startedAt: new Date('2020-09-01'),
  },
  {
    name: 'AI',
    imageUrl: '/images/stacks/ai.svg',
    grouping: 'others',
    startedAt: new Date('2024-07-01'),
  },
];
