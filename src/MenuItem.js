export const MenuItem = ({ title, link }) => {
  function handleClick() {
    console.log(title);
  }
  function alertForLink() {
    alert("This page is under construction yet");
  }

  return (
    <div className="menu-item">
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
        >
          {title}
        </a>
      ) : (
        <div className="disabled" onClick={alertForLink}>
          {title}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
