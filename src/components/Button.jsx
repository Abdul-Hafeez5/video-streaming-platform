const Button = ({ value }) => {
  return (
    <div>
      <div>
        <button className="px-3 py-1 mx-2 rounded-lg bg-gray-200">
          {value}
        </button>
      </div>
    </div>
  );
};

export default Button;
