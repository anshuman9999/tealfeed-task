export const getInitials = (name: string) => {
  if (!name) return "";

  const expression = name.match(/(\b\S)?/g);
  if (!expression || !expression.length) return "";

  return expression.join("").toUpperCase();
};
