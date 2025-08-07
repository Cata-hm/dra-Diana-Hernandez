// src/components/Socials.tsx
// This component displays social media links with icons and animations.
import { useTranslation } from 'react-i18next';

const Socials = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient py-8 text-center">
      <h4 className="text-xl font-semibold mb-6 text-black">
        {t('socials.title')}
      </h4>
      <div className="flex flex-col items-center space-y-6 sm:flex-row sm:space-y-0 sm:space-x-10 justify-center">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/diana-hernandez-577618112/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-100 flex items-center transition-colors duration-300 font-medium text-lg"
          aria-label="LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48c0 1.63 1.34 2.98 2.98 2.98h.02c1.65 0 2.98-1.35 2.98-2.98C7.98 4.84 6.64 3.5 4.98 3.5zM2.4 8.98h5.16v12.02H2.4V8.98zM9.48 8.98h4.94v1.6h.07c.69-1.31 2.37-2.7 4.88-2.7 5.22 0 6.18 3.44 6.18 7.9v9.18h-5.16v-8.12c0-1.94-.03-4.44-2.71-4.44-2.71 0-3.13 2.12-3.13 4.3v8.26H9.48V8.98z" />
          </svg>
          {t('socials.linkedin')}
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/odontologia_dianahernandez/?hl=es-la"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-100 flex items-center transition-colors duration-300 font-medium text-lg"
          aria-label="Instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .2 2.5.4.6.2 1 .4 1.4.8.4.4.7.8.8 1.4.2.5.3 1.3.4 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 2-.4 2.5-.2.6-.4 1-.8 1.4-.4.4-.8.7-1.4.8-.5.2-1.3.3-2.5.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.2-2.5-.4-.6-.2-1-.4-1.4-.8-.4-.4-.7-.8-.8-1.4-.2-.5-.3-1.3-.4-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-2 .4-2.5.2-.6.4-1 .8-1.4.4-.4.8-.7 1.4-.8.5-.2 1.3-.3 2.5-.4C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7 .1 5.7.1 4.8.3 4 .5 3.1.8 2.4 1.2 1.7 1.9.9 2.6.5 3.3.2 4.2.1 5 .1 5.9 0 7.2 0 8.7 0 15.3 0 16.8c.1 1.3.1 2.2.2 3 .3.9.7 1.6 1.5 2.3.7.7 1.4 1.2 2.3 1.5.8.2 1.7.3 3 .4 1.5.1 1.9.1 4.5.1s3 0 4.5-.1c1.3-.1 2.2-.1 3-.4.9-.3 1.6-.7 2.3-1.5.7-.7 1.2-1.4 1.5-2.3.2-.8.3-1.7.4-3 .1-1.5.1-1.9.1-4.5s0-3-.1-4.5c-.1-1.3-.1-2.2-.4-3-.3-.9-.7-1.6-1.5-2.3C21.6 1.2 20.9.8 20 .5c-.8-.2-1.7-.3-3-.4C15.3 0 14.9 0 12 0zM12 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6.4-10.8c-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4 1.4-.6 1.4-1.4-.6-1.4-1.4-1.4z"/>
          </svg>
          {t('socials.instagram')}
        </a>
      </div>
    </section>
  );
};

export default Socials;
