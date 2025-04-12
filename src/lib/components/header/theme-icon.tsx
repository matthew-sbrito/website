import { ComponentProps } from 'react';

import {
  LaptopMinimalIcon,
  LucideProps,
  MoonIcon,
  SunIcon,
} from 'lucide-react';

export function ThemeIcon(props: ComponentProps<'svg'> & LucideProps) {
  return (
    <div className="relative h-[18px] w-[18px]">
      <SunIcon
        className="sun-icon absolute fill-foreground group-hover:animate-spin"
        {...props}
      />
      <MoonIcon
        className="moon-icon absolute fill-foreground group-hover:animate-spin"
        {...props}
      />
      <LaptopMinimalIcon
        className="desktop-icon absolute fill-foreground"
        {...props}
      />
    </div>
  );
}
