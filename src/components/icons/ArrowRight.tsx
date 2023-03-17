import { SVGProps } from 'react';
import Icon from './Icon';

function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path
        d="M19.75 11.726h-15M13.7 5.701l6.05 6.024-6.05 6.025"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export default ArrowRight;
