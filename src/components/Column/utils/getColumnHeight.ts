export const getColumnHeight = (pop: number) => {
  const interval = 500000;
  switch (true) {
    case pop <= interval:
      return "10px";
    case pop <= interval * 2:
      return "20px";
    case pop <= interval * 12:
      return "40px";
    case pop <= interval * 60:
      return "80px";
    case pop <= interval * 4000:
      return "120px";
    case pop <= interval * 10000:
      return "150px";
    default:
      return "200px";
  }
};
