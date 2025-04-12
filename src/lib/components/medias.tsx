import Image from 'next/image';

export function SocialMedias() {
  return (
    <div className="flex max-w-max items-center gap-2 rounded-lg bg-main px-2 py-1 lg:gap-4 lg:px-3 lg:py-2">
      <a href="https://linkedin.com/in/matthew-sbrito" target="_blank">
        <div className="relative h-5 w-5">
          <Image
            className="pb-1 invert"
            src="/images/contact/linkedin.svg"
            alt="LinkedIn"
            fill
          />
        </div>
      </a>
      <a href="http://wa.me/5577998442230" target="_blank">
        <div className="relative h-4 w-4 lg:h-5 lg:w-5">
          <Image
            className="invert"
            src="/images/contact/whatsapp.svg"
            alt="Whatsapp"
            fill
          />
        </div>
      </a>
      <a href="mailto:matheusdevback@gmail.com" target="_blank">
        <div className="relative h-5 w-5 lg:h-6 lg:w-6">
          <Image
            className="invert"
            src="/images/contact/email.svg"
            alt="Email"
            fill
          />
        </div>
      </a>
      <a href="http://github.com/matthew-sbrito" target="_blank">
        <div className="relative h-4 w-4 lg:h-5 lg:w-5">
          <Image
            className="invert"
            src="/images/contact/github.svg"
            alt="Github"
            fill
          />
        </div>
      </a>
    </div>
  );
}
