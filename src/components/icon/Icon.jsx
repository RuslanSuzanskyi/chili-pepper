const Icon = ({ name, width, height, fill, maxWidth }) => {
  return (  
    <svg className={`icon icon-${name}`} style={{width, height, fill, maxWidth }}>
      <use
        href={`${process.env.PUBLIC_URL}/images/sprite.svg#${name}`}
      ></use>
    </svg>
  );
}
 
export default Icon;