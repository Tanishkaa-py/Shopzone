function DarkToggle() {
    const toggle = () => {
      const theme =
        document.documentElement.getAttribute("data-theme") === "light"
          ? "dark"
          : "light";
  
      document.documentElement.setAttribute("data-theme", theme);
    };
  
    return <button onClick={toggle}>🌙</button>;
  }
  
  export default DarkToggle;