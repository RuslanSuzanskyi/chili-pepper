import { LazyLoadImage } from "react-lazy-load-image-component";

const LazyImage = ({image, title}) => {
  return (
      <LazyLoadImage
        className="card__img"
        width="100%"
        height="100%"
        effect="blur"
        alt={title}
        src={require(`../../images/${image}`)}
      />
  );
}
 
export default LazyImage;