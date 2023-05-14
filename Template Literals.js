//Template Literals Template Strings

// First Example

let x = "We Love";
let y = "JavaScript";
let z = "And";
let m = "Programming";

console.log(x = " \"\" " + y +
"\n" + z + " " + m);

console.log(`${x} "" '' \\ ${y}
${z} ${m}`);

// Second Example

let title = "Elzero";
let desc = "Elzero Web School";

let markup = `
  <div class="card">
    <div class="child">
      <h2>${title}</h2>
      <p>${desc}</p>
    </div>
  </div>
`;

document.write(markup);