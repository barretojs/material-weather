const formatTimeString = (timeString: string) => {
  const AmPm = timeString.split(" ").pop();

  return `${timeString.split(":").slice(0, 2).join(":")} ${AmPm}`;
};

export { formatTimeString };
