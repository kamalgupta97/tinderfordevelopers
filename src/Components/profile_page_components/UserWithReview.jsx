const UserWithReview = (props) => {
    const { name, dp_url, profession, review } = props;
    
  return (
    <div className={props.className}>
      <div className="topSide">
        <div className="dp">
          <img
            src={dp_url}
            alt=""
          />
        </div>
        <div className="info">
          <h3>{ name }</h3>
          <h5>{profession}</h5>
        </div>
      </div>
      <div className="bottomSide">
        <p>
          {review}
        </p>
      </div>
    </div>
  );
};
export {UserWithReview};