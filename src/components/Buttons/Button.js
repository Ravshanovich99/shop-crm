import "materialize-css";

export const Button = ({ icon, title, type, noBorder }) => {
  if (noBorder) {
    return (
      <button className="waves-effect waves-teal btn-flat">
        {icon ? icon : null} {title}
      </button>
    );
  }

  if (type) {
    return (
      <button className="btn waves-effect waves-light" type={type}>
        {icon ? icon : null} {title}
      </button>
    );
  }

  return (
    <button className="waves-effect waves-light btn">
      {icon ? icon : null}
      {title}
    </button>
  );
};
