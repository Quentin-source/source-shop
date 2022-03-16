//Components
import Directory from './components/Directory/Directory.component';
//Styles
import './Categories.styles.scss';

//Datas
import { categories } from './datas/categories';

const App = () => {
  return (
    <div className="categories-container">
      <Directory categories={categories} />
    </div>
  );
};

export default App;
