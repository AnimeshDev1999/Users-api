const NavBar = (props) => {
  const toShow = props.data.filter((item) => item.id === props.current);
  return (
    <div className="p-5 border-b border-b-slate-400">
      <p className="text-2xl font-semibold">
        {props.current
          ? toShow[0].profile.firstName + " " + toShow[0].profile.lastName
          : "Current Users"}
      </p>
    </div>
  );
};

export default NavBar;
