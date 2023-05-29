

const SinglePageCard = ({ imgSrc, text, title, description }) => {
  return (
    <div className="mt-8 card ">
      <div style={{ width: "100%", height: "100%" }}>
        
        <div className="card-img h-60">
          <img
            src={imgSrc}
            alt={title}
         
            style={{
              width: "100%",
              height: "500px",
         
              marginBottom: "20px",
            }}
          />
        </div>
        <div
          style={{
            width: "100%",
            height: "40%",
       
            marginTop: "20px",
          }}
        >
          <span
            className="my-5  title-span"
           
          >
            {title}
          </span>
          <p
         className="description"
          >
            {description}
          </p>
          <span
          className="title-text"
          >
            {text}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SinglePageCard;
