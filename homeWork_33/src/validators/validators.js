export const minLength = (value) => {
  if (!value) return "Required";

  if (value.length < 5) {
    return "Minimum 5 symbols";
  }

  return undefined;
};