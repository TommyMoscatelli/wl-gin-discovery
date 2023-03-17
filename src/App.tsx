import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'linear',
  duration: 0.5,
};

function App() {
  const [searchParams] = useSearchParams();
  const { i18n } = useTranslation();
  const { pathname } = useLocation();

  useEffect(() => {
    const lang = ['it', 'en'].includes(searchParams.get('lang') || '')
      ? searchParams.get('lang')!
      : 'it';
    i18n.changeLanguage(lang);
  }, []);

  console.log(searchParams.get('lang'));

  return (
    <div className="min-h-screen bg-[url('/background.jpg')] bg-contain max-w-2xl mx-auto">
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Outlet />
      </motion.div>
    </div>
  );
}

export default App;
