function greet() {
  let arr = ["h", "e", 1313, "l", null, true, "l", 2131, "o"];
  let first = arr.filter((n) => typeof n === "string");
  let firstWord = first.join("");
  let second = "";
  firstWord === "hello" ? (second += "worl") : second + "12";
  return firstWord + " " + second + "d!";
}

console.log(greet());
