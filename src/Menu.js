import MenuItem from "./MenuItem";

const links = [
  {
    title: "Get Start!",
    link: "https://reactjs.org/docs/hello-world.html",
  },
  {
    title: "What is that JSX at all?",
    link: "https://reactjs.org/docs/introducing-jsx.html",
  },
  {
    title: "Render or do not render is the question...",
    link: "https://reactjs.org/docs/rendering-elements.html",
  },
  {
    title: "New big feature for React",
    link: null,
  },
];

export const Menu = () => {
  return (
      <nav className='menu'>
          {links.map((item, index) => (
              <MenuItem key={index} title={item.title} link={item.link} />
          ))}
    </nav>
  );
};

export default Menu;


