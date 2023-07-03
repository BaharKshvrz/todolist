function Fraction(num: number, totalCount: number): string {
  switch (num) {
    case totalCount:
      return "full";
    case 0:
      return "0";
    default:
      return `${num}/${totalCount}`;
  }
}

export default Fraction;
