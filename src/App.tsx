//Setup
import { Routes, Route} from 'react-router-dom';

//Components
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
