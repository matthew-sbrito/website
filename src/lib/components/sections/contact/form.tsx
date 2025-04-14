'use client';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { motion } from 'framer-motion';

import { ArrowRight, Loader2Icon } from 'lucide-react';

import { fromBottomAnimation } from '@/constants/animations';
import { DictionaryComponentProps } from '@/dictionaries';

import { toast } from 'sonner';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  message: z.string().min(3),
});

type ContactFormData = z.infer<typeof contactSchema>;

type Props = DictionaryComponentProps;

export function ContactForm({ dictionary }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (res.ok) {
      toast.success(dictionary.contact.success.request);
      reset();
      return;
    }

    toast.error(dictionary.contact.errors.request);
  };

  return (
    <motion.div
      className="mt-4 w-full max-w-xl"
      {...fromBottomAnimation}
      transition={{ delay: 0.5 }}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="mb-1 block font-medium">
            {dictionary.contact.labels.name}
          </label>
          <input
            type="text"
            {...register('name')}
            className="w-full rounded-md border border-foreground/30 bg-foreground/10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-main"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-400">
              {dictionary.contact.errors.name}
            </p>
          )}
        </div>

        <div>
          <label className="mb-1 block font-medium">
            {dictionary.contact.labels.email}
          </label>
          <input
            type="email"
            {...register('email')}
            className="w-full rounded-md border border-foreground/30 bg-foreground/10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-main"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">
              {dictionary.contact.errors.email}
            </p>
          )}
        </div>

        <div>
          <label className="mb-1 block font-medium">
            {dictionary.contact.labels.message}
          </label>
          <textarea
            {...register('message')}
            className="h-32 w-full resize-none rounded-md border border-foreground/30 bg-foreground/10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-main"
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-400">
              {dictionary.contact.errors.message}
            </p>
          )}
        </div>

        <motion.button
          type="submit"
          whileTap={{ scale: 0.95 }}
          disabled={isSubmitting}
          className="shadow-button flex w-max cursor-pointer items-center justify-center gap-2 rounded-lg bg-main px-3 py-2 text-sm text-white transition-all duration-200 ease-in hover:bg-main-light disabled:opacity-50 lg:px-4 lg:py-3 lg:text-base">
          {isSubmitting ? dictionary.contact.sending : dictionary.contact.send}
          {isSubmitting ? (
            <Loader2Icon size={20} className="animate-spin" />
          ) : (
            <ArrowRight />
          )}
        </motion.button>
      </form>
    </motion.div>
  );
}
