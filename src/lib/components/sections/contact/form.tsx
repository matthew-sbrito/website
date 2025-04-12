'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { motion } from 'framer-motion';

import { ArrowRight, Loader2Icon } from 'lucide-react';

import { fromBottomAnimation, fromLeftAnimation } from '@/constants/animations';
import { DictionaryComponentProps } from '@/dictionaries';

import { zodResolver } from '@hookform/resolvers/zod';

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
      // setStatus('Mensagem enviada com sucesso!');
      reset();
    } else {
      // setStatus('Erro ao enviar a mensagem. Tente novamente.');
    }
  };

  return (
    <motion.div
      className="w-full max-w-xl mt-4"
      {...fromBottomAnimation}
      transition={{ delay: 0.5 }}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium ">
            {dictionary.contact.labels.name}
          </label>
          <input
            type="text"
            {...register('name')}
            className="w-full rounded-md bg-foreground/10 border border-foreground/30 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-main"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">
              {dictionary.contact.errors.name}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium ">
            {dictionary.contact.labels.email}
          </label>
          <input
            type="email"
            {...register('email')}
            className="w-full rounded-md bg-foreground/10 border border-foreground/30 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-main"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">
              {dictionary.contact.errors.email}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium ">
            {dictionary.contact.labels.message}
          </label>
          <textarea
            {...register('message')}
            className="w-full h-32 rounded-md bg-foreground/10 border border-foreground/30 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-main resize-none"
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">
              {dictionary.contact.errors.message}
            </p>
          )}
        </div>

        <motion.button
          type="submit"
          whileTap={{ scale: 0.95 }}
          disabled={isSubmitting}
          className="text-white cursor-pointer bg-main py-2 px-3 lg:py-3 lg:px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-main-light transition-all ease-in duration-200 disabled:opacity-50 w-max shadow-button text-sm lg:text-base">
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
