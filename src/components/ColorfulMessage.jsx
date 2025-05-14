export const ColorfulMessage = (props) => {
  console.log("--ColorfulMessage--");
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: '18px',
  };
  return <p style={contentStyle}>{children}</p>;
};
