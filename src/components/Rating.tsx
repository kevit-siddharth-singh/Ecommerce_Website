import star from "/star.png";

const Rating: React.FC<{ rating: number }> = (props) => {
  return (
    <div className="flex ">
      {Array(props.rating)
        .fill(0)
        .map((_, index) => (
          <img
            key={index}
            className="max-md:w-4 max-md:mt-1 md:w-5  lg:w-[1.2rem] "
            src={star}
            alt="star"
          />
        ))}
    </div>
  );
};

export default Rating;
