import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation('home');

  return (
    <div className="flex flex-col min-h-screen px-4 py-6">
      <div className="flex items-center gap-2 mx-auto mb-6">
        <div className="h-2 w-10 rounded-full bg-blue-800" />
        <div className="h-2 w-4 rounded-full bg-gray-400" />
        <div className="h-2 w-4 rounded-full bg-gray-400" />
        <div className="h-2 w-4 rounded-full bg-gray-400" />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center space-y-36">
        <img
          className="mx-auto w-64"
          src={`${import.meta.env.BASE_URL}img/logo_gin_discovery.png`}
          alt="Logo Gin Discovery"
        />
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-center text-gray-800">
            {t('title')}
          </h1>
          <p className="text-base text-gray-500 font-medium tracking-tight text-center">
            {t('subtitle')}
          </p>
        </div>
      </div>
      <Link
        className="flex items-center justify-center h-14 bg-blue-800 text-white rounded-md font-bold text-base tracking-tight"
        to="/discovery"
      >
        {t('cta')}
      </Link>
    </div>
  );
}

export default Home;
