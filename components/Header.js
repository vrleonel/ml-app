import Link from 'next/link';
import SeachBox from '../components/SearchBox';
import css from '../styles/main.scss';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <SeachBox />
    <Link href="/">
      <a className={css.words} style={linkStyle}>
        Home
      </a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

export default Header;
