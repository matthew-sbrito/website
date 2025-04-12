import { ReactNode } from 'react';

type Props = {
  id: string;
  title: string;
  subtitle: string;
  children: ReactNode;
};

export function SectionContainer({ title, subtitle, children }: Props) {
  return (
    <section
      id="about"
      className="grid-child min-h-[--view-height] flex flex-col items-center justify-center">
      <div className="w-[90%] flex flex-col gap-5">
        <div className="flex flex-col">
          <h2 className="text-md sm:text-lg lg:text-xl text-main">{title}</h2>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold italic">
            {subtitle}
          </h3>
        </div>
        {children}
      </div>
    </section>
  );
}
