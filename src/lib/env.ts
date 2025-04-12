import { z } from 'zod';

const backEnvSchema = z.object({
  NODE_MAILER_HOST: z.string().default(''),
  NODE_MAILER_PORT: z.string().transform(Number).default(''),
  NODE_MAILER_EMAIL: z.string().default(''),
  NODE_MAILER_PASSWORD: z.string().default(''),
  SEND_EMAIL_TO: z
    .string()
    .default('')
    .transform(emailTo => emailTo?.split(',').map(x => x.trim())),
});

export const backEnv = backEnvSchema.parse(process.env);
