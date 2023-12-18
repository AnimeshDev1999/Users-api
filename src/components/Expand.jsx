import user from "../human.png";

const Expand = (props) => {
  const toShow = props.data.filter((item) => item.id === props.current);
  return (
    <div className="m-5 p-5 md:w-max lg:m-10 md:mx-auto lg:mx-auto rounded-md border-2 border-slate-300 bg-slate-200 ">
      <div className="flex items-center gap-5">
        <img src={user} alt="user" className="h-24" />
        <div>
          <h2 className="text-xl font-semibold">
            {toShow[0].profile.firstName + " " + toShow[0].profile.lastName}
          </h2>
          <p className="">{toShow[0].jobTitle}</p>
        </div>
      </div>
      <div className="mt-5">
        <p className="font-semibold">{toShow[0].profile.username}</p>
        <p className="mt-5">{toShow[0].Bio}</p>
        <p className="mt-5">
          Mail:{" "}
          <span className="underline text-sky-500">
            {toShow[0].profile.email}
          </span>
        </p>
      </div>
      <div className="flex justify-end mt-5">
        <p>
          Joined :{" "}
          <span className="font-semibold">
            {toShow[0].createdAt.slice(0, 10)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Expand;
