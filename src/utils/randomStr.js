export const randomCharGenerator = () => {
  const st = "qwertyuioplkjhgfdsazxcvbnm";
  const num = Math.floor(Math.random() * st.length);

  return num;
};
