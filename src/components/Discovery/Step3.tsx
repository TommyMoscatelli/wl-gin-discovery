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

  if (!product) {
    throw new Error(
      `product with category ${category} and characteristic ${characteristic} not found`
    );
  }

  return (
    <div className="flex flex-col min-h-screen px-4 py-6">
      <div className="flex items-center gap-2 mx-auto mb-6">
        <Link to="/" className="h-2 w-4 rounded-full bg-gray-400" />
        <Link to="/discovery" className="h-2 w-4 rounded-full bg-gray-400" />
        <Link
          to={`/discovery/${category}`}
          className="h-2 w-4 rounded-full bg-gray-400"
        />
        <Link
          to={`/discovery/${category}/${characteristic}`}
          className="h-2 w-10 rounded-full bg-blue-800"
        />
      </div>
      <h1 className="text-3xl font-bold tracking-tighter text-gray-800 mb-8 text-center">
        {t('step3.title')}
      </h1>
      <div className="flex-1 text-center">
        <img
          className="mx-auto max-h-72 object-cover mb-6"
          src={product.image}
          alt={t(`product.${product.slug}.title`)!}
        />
        <h2 className="text-2xl font-bold tracking-tight text-gray-800 mb-2">
          {t(`product.${product.slug}.title`)}
        </h2>
        <p className="text-base font-medium tracking-tight text-gray-600">
          {t(`product.${product.slug}.description`)}
        </p>
      </div>
      <div className="space-y-2">
        <Link
          className="flex items-center justify-center h-14 bg-blue-800 text-white rounded-md font-bold text-base tracking-tight"
          to="/"
          target="_blank"
        >
          {t('step3.purchase')}
        </Link>
        <Link
          className="flex items-center justify-center h-14 border border-blue-800 text-blue-800 bg-blue-50 rounded-md font-bold text-base tracking-tight"
          to="/"
          target="_blank"
        >
          {t('step3.browse')}
        </Link>
      </div>
    </div>
  );
}
