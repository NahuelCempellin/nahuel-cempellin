const HomeCards = ({ title, descrip, url }) => {
  return (
    <a className="grid-gallery__item" href="#" id="banish-box">
      <img className="grid-gallery__image" src={url} />
    </a>
  );
};

export default HomeCards;
