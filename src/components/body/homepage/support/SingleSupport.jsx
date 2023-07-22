const SingleSupport = ({ supportdetails }) => {
  return (
    <div className="text-center border border-color-grey-light p-10">
      <div className="text-5xl">{supportdetails.logo}</div>
      <h6 className="py-2 font-normal">{supportdetails.bigtext}</h6>
      <p className="text-color-grey">{supportdetails.smalltext}</p>
    </div>
  );
};

export default SingleSupport;
