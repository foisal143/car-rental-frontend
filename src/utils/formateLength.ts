export const formatLength = (length: number) =>
  length < 10 ? `0${length}` : length;
