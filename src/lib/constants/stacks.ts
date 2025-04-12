import { StackModel } from '@/models/stack.model';

export const stackList: StackModel[] = [
  // Front-end
  {
    name: 'HTML',
    years: 6,
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    grouping: 'front-end',
  },
  {
    name: 'CSS',
    years: 6,
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    grouping: 'front-end',
  },
  {
    name: 'Sass',
    years: 4,
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
    grouping: 'front-end',
  },
  {
    name: 'JavaScript',
    years: 6,
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    grouping: 'front-end',
  },
  {
    name: 'TypeScript',
    years: 6,
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    grouping: 'front-end',
  },
  {
    name: 'React',
    years: 4,
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    grouping: 'front-end',
  },
  {
    name: 'Next.js',
    years: 3,
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    grouping: 'front-end',
  },
  {
    name: 'Angular',
    years: 6,
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
    grouping: 'front-end',
  },
  {
    name: 'TailwindCSS',
    years: 3,
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    grouping: 'front-end',
  },

  // Back-end
  {
    name: 'CSharp',
    years: 6,
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    grouping: 'back-end',
  },
  {
    name: '.NET',
    years: 6,
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
    grouping: 'back-end',
  },
  {
    name: 'ASP.NET',
    years: 6,
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain.svg',
    grouping: 'back-end',
  },
  {
    name: 'Java',
    years: 3,
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    grouping: 'back-end',
  },
  {
    name: 'Spring',
    years: 3,
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
    grouping: 'back-end',
  },

  // Databases
  {
    name: 'SQL Server',
    years: 6,
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
    grouping: 'database',
  },
  {
    name: 'PostgreSQL',
    years: 6,
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    grouping: 'database',
  },
  {
    name: 'MySQL',
    years: 6,
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    grouping: 'database',
  },
  {
    name: 'MongoDB',
    years: 4,
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    grouping: 'database',
  },
  {
    name: 'Redis',
    years: 4,
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    grouping: 'database',
  },

  // Cloud
  {
    name: 'Azure',
    years: 3,
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    grouping: 'cloud',
  },
  {
    name: 'AWS',
    years: 3,
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    grouping: 'cloud',
  },
  {
    name: 'Docker',
    years: 3,
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    grouping: 'cloud',
  },
  {
    name: 'Kubernetes',
    years: 2,
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg',
    grouping: 'cloud',
  },
  {
    name: 'Apache Kafka',
    years: 3,
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg',
    grouping: 'cloud',
  },
  {
    name: 'RabbitMQ',
    years: 3,
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg',
    grouping: 'cloud',
  },

  // Outros
  {
    name: 'Git',
    years: 6,
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    grouping: 'others',
  },
  {
    name: 'Azure DevOps',
    years: 3,
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg',
    grouping: 'others',
  },
  {
    name: 'Third-party APIs',
    years: 5,
    imageUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openapi/openapi-original.svg',
    grouping: 'others',
  },
  {
    name: 'AI',
    months: 10,
    imageUrl: '/images/stacks/ai.svg',
    grouping: 'others',
  },
];
