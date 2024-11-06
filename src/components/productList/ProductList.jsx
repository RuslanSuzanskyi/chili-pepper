import ProductCard from '../productCard/ProductCard';

const ProductList = ({ products }) => {
  return (
    <>
      {products.length === 0 ? (
        <p>{`Щось не працює :(`}</p>
      ) : (
        products.map((product, key) => (
          <ProductCard
            data={product}
            key={key}
          />
        ))
      )}
    </>
  );
};

export default ProductList;
