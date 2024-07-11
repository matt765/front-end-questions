// Function made to prevent horizontal scrolling from appearing on answer content in Github issue 

export const breakLongLines = (
  text: string,
  maxLength: number = 120
): string => {
  return text
    .split("\n")
    .map((line) => {
      if (line.length <= maxLength) return line;

      let result = "";
      while (line.length > maxLength) {
        let breakPoint = line.lastIndexOf(" ", maxLength);
        if (breakPoint === -1) breakPoint = maxLength;
        result += line.substring(0, breakPoint) + "\n";
        line = line.substring(breakPoint + 1);
      }
      result += line;
      return result;
    })
    .join("\n");
};
