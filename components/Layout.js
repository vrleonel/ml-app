import Header from './Header';
import css from './Layout.scss';

const Layout = props => (
  <div className={css.layout}>
    <Header />
    {props.children}
  </div>
);

export default Layout;
