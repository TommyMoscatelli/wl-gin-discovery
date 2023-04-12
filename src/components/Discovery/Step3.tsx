import { MouseEvent } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { findProduct } from './decisionTree';

export default function Step3() {
  const { t } = useTranslation('discovery');
  const { category, characteristic } = useParams();
  const product = findProduct({
    category: category || '',
    characteristic: characteristic || '',
  });

  function handleDeepLink(event: MouseEvent<HTMLElement>, link: string) {
    // @ts-ignore
    if (window.ReactNativeWebView) {
      // @ts-ignore
      window.ReactNativeWebView.postMessage(link);
      event.preventDefault();
    }
  }

  if (!product) {
    throw new Error(
      `product with category ${category} and characteristic ${characteristic} not found`
    );
  }

  return (
    <div
      className="flex flex-col justify-between h-full bg-cover bg-center"
      style={{ backgroundImage: `url(${product.background})` }}
    >
      <div>
        <div className="px-4 pt-6 flex items-center gap-2">
          <Link to="/" className="h-2 w-3 rounded-full bg-gray-400" />
          <Link to="/discovery" className="h-2 w-3 rounded-full bg-gray-400" />
          <Link
            to={`/discovery/${category}`}
            className="h-2 w-3 rounded-full bg-gray-400"
          />
          <Link
            to={`/discovery/${category}/${characteristic}`}
            className="h-2 w-8 rounded-full bg-blue-800"
          />
        </div>
        <img
          className="w-full max-w-[16rem] mx-auto"
          src={`${import.meta.env.BASE_URL}${product.logo}`}
          alt="Logo Bombay"
        />
      </div>
      <img
        className="w-2/3 max-w-md mx-auto"
        src={`${import.meta.env.BASE_URL}${product.image}`}
        alt={t(`product.${product.slug}.title`)!}
      />
      <div>
        <img
          className="w-full shrink-0"
          src={`${import.meta.env.BASE_URL}img/wave.png`}
          alt="Wave"
        />
        <div className="px-4 pb-6 bg-[#020046] text-blue-50">
          <h1 className="text-3xl font-bold tracking-tight mb-2 text-center">
            {t(`product.${product.slug}.title`)}
          </h1>
          <p className="text-base font-medium tracking-tight text-center mt-4 mb-8">
            {t(`product.${product.slug}.description`)}
          </p>
          <div className="space-y-2">
            <Link
              className="flex items-center justify-center h-14 bg-blue-50 text-[#020046] rounded-md font-bold text-base tracking-tight"
              to="/"
              target="_blank"
              onClick={(e) =>
                handleDeepLink(e, `wlapp://winelivery/products/${product.id}`)
              }
            >
              {t('step3.purchase')}
            </Link>
            <Link
              className="flex items-center justify-center h-14 border border-blue-50 text-blue-50 bg-transparent rounded-md font-bold text-base tracking-tight"
              to="/"
              target="_blank"
              onClick={(e) =>
                handleDeepLink(
                  e,
                  'wlapp://winelivery/sections/6435835ffd8eba0066a80b35'
                )
              }
            >
              {t('step3.browse')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
