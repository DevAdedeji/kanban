const useTheme = () => {
  const getTheme = () => {
    const theme = document.documentElement.className;
    return theme;
  };
  const setTheme = (theme: string) => {
    document.documentElement.className = theme;
  };
  const toggleTheme = () => {
    const theme = getTheme();
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return { getTheme, setTheme, toggleTheme };
};

export default useTheme;
