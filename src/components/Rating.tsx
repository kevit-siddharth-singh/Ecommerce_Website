import star from "/star.png";

const Rating: React.FC<{ rating: number }> = (props) => {
  return (
    <div className="flex">
      {Array(props.rating)
        .fill(0)
        .map((_, index) => (
          <img key={index} className="w-[1.1rem]" src={star} alt="star" />
        ))}
    </div>
  );
};

export default Rating;
