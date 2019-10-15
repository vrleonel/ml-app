import Logo from './Logo';

const SearchBox = () => (
  <div className="search-box">
    <div className="wrapper">
      <Logo />
      <form>
        <input type="text" value="Nunca deixe de buscar" />
        <button type="submit" title="Buscar" alt="Buscar" />
      </form>
    </div>
  </div>
);

export default SearchBox;
