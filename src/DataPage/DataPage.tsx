import { Link, Outlet } from 'react-router-dom';
const DataPage = () => {
  return (
    <>
      <div>Data</div>
      <div>
        <input type="search" placeholder="search products" />
      </div>
      <nav className="flex space-x-4">
        <Link to="featured" className="block">
          Featured
        </Link>
        <Link to="new" className="block">
          New
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default DataPage;
