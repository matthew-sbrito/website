import Image from 'next/image';

export function SocialMedias() {
  return (
    <div className="flex items-center gap-2 lg:gap-4 px-2 lg:px-3 py-1 lg:py-2 bg-main max-w-max rounded-lg">
      <a href="https://linkedin.com/in/matthew-sbrito" target="_blank">
        <div className="relative w-5 h-5">
          <Image
            className="invert pb-1"
            src="/images/contact/linkedin.svg"
            alt="LinkedIn"
            fill
          />
        </div>
      </a>
      <a href="http://wa.me/5577998442230" target="_blank">
        <div className="relative w-4 h-4 lg:w-5 lg:h-5">
          <Image
            className="invert"
            src="/images/contact/whatsapp.svg"
            alt="Whatsapp"
            fill
          />
        </div>
      </a>
      <a href="mailto:matheusdevback@gmail.com" target="_blank">
        <div className="relative w-5 h-5 lg:w-6 lg:h-6">
          <Image
            className="invert"
            src="/images/contact/email.svg"
            alt="Email"
            fill
          />
        </div>
      </a>
      <a href="http://github.com/matthew-sbrito" target="_blank">
        <div className="relative w-4 h-4 lg:w-5 lg:h-5">
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
