import { useNavigate, useParams } from "react-router-dom";
import "./Category.scss";
const Category = ({ categories }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories?.data?.map((item) => {
          return (
            <div
              key={item.id}
              className="category"
              onClick={() => {
                navigate(`/category/${item.id}`);
              }}
            >
              <img
                src={
                  process.env.REACT_APP_DEV_URL +
                  item.attributes.img.data.attributes.url
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
