function isPositive(a) {
  try {
    if (a === 0) {
      throw new Error("Zero Error");
    } else if (a < 0) {
      throw new Error("Negative Error");
    } else {
      return "Yes";
    }
  } catch (error) {
    console.log(error);
  }
  return a;
}
console.log(isPositive(0));
