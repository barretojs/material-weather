import Position from "@interfaces/Position";

const formatTimeString = (timeString: string) => {
  const AmPm = timeString.split(" ").pop();

  return `${timeString.split(":").slice(0, 2).join(":")} ${AmPm}`;
};

const needsToUpdate = (position: Position | null, id: string | null) => {
  return (
    position?.lat && position?.lon && id !== `${position?.lat},${position?.lon}`
  );
};

export { formatTimeString, needsToUpdate };
