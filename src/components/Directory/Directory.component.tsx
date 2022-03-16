//Component
import CategoryItem from '../Category-item/Category-item.component';
 //Interface
 import { IDirectoryProps } from './Directory.interface';
//Styles
import './Directory.styles.scss';


const Directory = ({categories} : IDirectoryProps) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} {...category} />
      ))}
    </div>
  );
};

export default Directory;
