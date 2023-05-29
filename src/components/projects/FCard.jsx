const FCard = ({ imgSrc1, content, text }) => {
  return (
    <div className="fancy-card px-4 my-4">
      <div className="d-flex align-items-left">
        <img src={imgSrc1} alt="logo" />
      </div>
      <div className="" style={{ textAlign: "justify" }}>
        <p className="text-content">{content}</p>
        <span className="text-span">{text}</span>
      </div>
    </div>
  );
};

export default FCard;
