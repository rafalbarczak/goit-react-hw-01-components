const randomHexColor = () => {
  const color = Math.round(Math.random() * 255).toString(16);
  if (color.length < 2){
    return `0${color}`
  }
  return color;
  };
export const createRandomColor = () => {
  return `#${randomHexColor()}${randomHexColor()}${randomHexColor()}`;
};
