
document.getElementById("answer").addEventListener("input", function () {
  if (this.value.includes("Infinity")) {
    this.value = "";
  }
});
function func1() {
  document.getElementById("answer").value = eval(
    document.getElementById("answer").value
  );
}
function func2() {
  document.getElementById("answer").value = " ";
}