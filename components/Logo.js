import Link from 'next/link';

const Logo = () => (
  <Link href="/">
    <a>
      <picture>
        <img
          src="/static/logo_ml.png"
          alt="Mercado Livre"
          srcSet="/static/logo_ml@2x.png 2x"
        />
      </picture>
    </a>
  </Link>
);

export default Logo;
