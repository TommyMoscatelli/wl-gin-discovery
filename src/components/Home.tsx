import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation('home');

  return (
    <div className="flex flex-col h-screen relative">
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <div className="h-2 w-8 rounded-full bg-blue-800" />
        <div className="h-2 w-3 rounded-full bg-gray-400" />
        <div className="h-2 w-3 rounded-full bg-gray-400" />
        <div className="h-2 w-3 rounded-full bg-gray-400" />
      </div>
      <img
        style={{ maxHeight: '70%' }}
        className="w-full flex-grow shrink-0"
        src={`${import.meta.env.BASE_URL}img/intro.png`}
        alt="Intro Bombay"
      />
      <div className="px-4 py-6 flex-1 flex flex-col justify-between gap-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-blue-50">
          <h1 className="text-4xl font-bold tracking-tight text-center">
            {t('title')}
          </h1>
          <p className="text-base font-medium tracking-tight text-center">
            {t('subtitle')}
          </p>
        </div>
        <Link
          className="flex items-center justify-center h-14 bg-blue-50 text-[#020046] rounded-md font-bold text-base tracking-tight"
          to="/discovery"
        >
          {t('cta')}
        </Link>
      </div>
    </div>
  );
}

export default Home;
