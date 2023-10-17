const useTheme = () => {
  const getTheme = () => {
    if (process.client) {
      const theme = document.documentElement.className;
      return theme;
    }
  };
  const setTheme = (theme: string) => {
    if (process.client) {
      document.documentElement.className = theme;
    }
  };
  return { getTheme, setTheme };
};

export default useTheme;
