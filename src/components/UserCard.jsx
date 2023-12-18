import user from "../human.png";

const UserCard = (props) => {
  return (
    <div className="flex relative items-center gap-5 px-4 py-2 rounded-md bg-slate-100 border-2 border-slate-300">
      <img src={user} alt="user" className="h-16" />
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold">
          {props.user.profile.firstName}
        </h2>
        <p>{props.user.jobTitle}</p>
      </div>
      <div
        onClick={props.func}
        id={props.user.id}
        className="absolute top-0 left-0 h-full w-full"
      ></div>
    </div>
  );
};

export default UserCard;
