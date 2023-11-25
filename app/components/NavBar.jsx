import NavItem from "./NavItem";

const navItems = [
  {
    label: "Why Cypress?",
    path: "/",
    dataTest: "nav-Why-Cypress",
  },
  {
    label: "Overview",
    path: "/overview",
    dataTest: "nav-Overview",
  },
  {
    label: "Fundamentals",
    path: "/fundamentals",
    dataTest: "nav-Fundamentals",
  },
  {
    label: "Forms",
    path: "/forms",
    dataTest: "nav-Forms",
  },
  {
    label: "Examples",
    path: "/examples",
    dataTest: "nav-Examples",
  },
  {
    label: "Component",
    path: "/component",
    dataTest: "nav-Component",
  },
  {
    label: "Best Practices",
    path: "/best-practices",
    dataTest: "nav-Best-Practices",
  },
];

export default function NavBar() {
  return (
    <ul className="nav-bar">
      {navItems.map((item) => (
        <NavItem key={item.label} label={item.label} path={item.path} dataTest={item.dataTest}/>
      ))}
    </ul>
  );
}
