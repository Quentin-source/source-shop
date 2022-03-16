//Setup
import { Outlet } from 'react-router-dom';

//Component
import Directory from '../../components/Directory/Directory.component';
//Data
import { categories } from '../../datas/categories';

const Home = () => {
  return (
    <>
      <Outlet />
      <div className="categories-container">
        <Directory categories={categories} />
      </div>
    </>
  );
};

export default Home;
