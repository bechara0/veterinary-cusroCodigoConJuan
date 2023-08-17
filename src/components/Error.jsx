const Error = ({ children }) => {
  return (
    <div className="bg-red-800 text-white text-center rounded-lg font-bold p-3 uppercase  mb-6">
      <p>{children}</p>
    </div>
  );
};

export default Error;
