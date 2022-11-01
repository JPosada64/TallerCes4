import ProductImage from "./ProductImage";
import AddButton from "./AddButton";

const Product = ({urlImgen, name, cost}) => {
    return(
        <div className='product'>
            <div>
            <ProductImage
            urlImg = {{urlImgen}}/>
           </div>

           <div className="productDescriprion">

           <h3>{name}</h3>
           <a>${cost} </a>
           <AddButton/>
           </div>
        </div>
    );
};
export default Product