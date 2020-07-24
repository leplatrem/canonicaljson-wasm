async function main() {
  const canonicaljson = await import("./lib/canonicaljson_wasm.js");
  
  const txtInput = document.getElementById("in");
  const txtOutput = document.getElementById("out");
  const btnConvert = document.getElementById("convert");

  btnConvert.addEventListener("click", () => {
    try {
      const input = JSON.parse(txtInput.value);
      txtOutput.value = canonicaljson.stringify(input);
    } catch (e) {
      txtOutput.value = e;
    }
  });
}

window.addEventListener("load", main);
