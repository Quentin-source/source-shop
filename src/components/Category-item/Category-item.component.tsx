//Interfaces
import { ICategoryItemProps } from './Category-item.interface';
//Styles
import './Category-item.styles.scss';

const CategoryItem = ({ title, imageUrl, id }: ICategoryItemProps) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
