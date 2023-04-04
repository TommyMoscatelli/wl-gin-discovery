import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation('home');

  return (
    <div className="flex flex-col justify-between h-full bg-[url('/img/background/light_blue.png')] bg-cover bg-center overflow-y-auto">
      <div>
        <div className="px-4 pt-6 flex items-center gap-2">
          <div className="h-2 w-8 rounded-full bg-blue-800" />
          <div className="h-2 w-3 rounded-full bg-gray-400" />
          <div className="h-2 w-3 rounded-full bg-gray-400" />
          <div className="h-2 w-3 rounded-full bg-gray-400" />
        </div>
        <img
          className="w-full max-w-[16rem] mx-auto"
          src={`${import.meta.env.BASE_URL}img/logo.png`}
          alt="Logo Bombay"
        />
      </div>
      <img
        className="w-2/3 max-w-md mx-auto"
        src={`${import.meta.env.BASE_URL}img/claim.png`}
        alt="Claim Your Bombay of the Day"
      />
      <div>
        <img
          className="w-full shrink-0"
          src={`${import.meta.env.BASE_URL}img/wave.png`}
          alt="Wave"
        />
        <div className="px-4 pb-6 bg-[#020046] text-blue-50">
          <h1 className="text-3xl font-bold tracking-tight text-center">
            {t('title')}
          </h1>
          <p className="text-base font-medium tracking-tight text-center mt-4 mb-8">
            {t('subtitle')}
          </p>
          <Link
            className="flex items-center justify-center h-14 bg-blue-50 text-[#020046] rounded-md font-bold text-base tracking-tight"
            to="/discovery"
          >
            {t('cta')}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
