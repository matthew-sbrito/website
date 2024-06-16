import { DictionaryComponentProps } from '@/dictionaries';
import { Typing } from '@/components/ui/typing';

type Props = DictionaryComponentProps<{}>;

export function About({ dictionary }: Props) {
  return (
    <section
      id="about"
      className="grid-child min-h-[--view-height] flex flex-col md:flex-row items-center justify-center gap-2">
      <div className="w-[70%] p-3">
        <h1 className="font-bold text-3xl">{dictionary.home.greetings}</h1>
        <h1 className="font-bold text-3xl">{dictionary.home.me}</h1>
        <h2 className="font-bold text-2xl">
          {dictionary.home.whatIAm}{' '}
          <Typing className="text-main" words={dictionary.home.whatIAmList} />
        </h2>
      </div>
      <div className="w-[30%] p-3">MY PHOTO</div>
    </section>
  );
}
