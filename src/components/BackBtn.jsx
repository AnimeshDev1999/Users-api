const BackBtn = (props) => {
  return (
    <div className="p-5">
      <button
        onClick={props.func}
        className="bg-slate-200 px-3 py-1 rounded-md border-2 border-slate-300"
      >
        Go back
      </button>
    </div>
  );
};

export default BackBtn;
