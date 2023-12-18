import UserCard from "./UserCard";

const UserPane = (props) => {
  return (
    <div className="p-5 lg:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        {props.data.slice(0, props.limit).map((item) => (
          <UserCard func={props.func} key={item.id} user={item} />
        ))}
      </div>
      <div className="flex justify-end mt-5">
        <button
          onClick={props.more}
          className="bg-slate-200 px-3 py-1 rounded-md border-2 border-slate-300"
        >
          View more users
        </button>
      </div>
    </div>
  );
};

export default UserPane;
