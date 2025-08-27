const sampleTextInput = document.getElementById("sample-text");
const sfSizeInput = document.getElementById("sf-size");
const draegerSizeInput = document.getElementById("draeger-size");
const roboSizeInput = document.getElementById("robo-size");
const msSerifSizeInput = document.getElementById("ms-serif-size");
const fontWeightInput = document.getElementById("font-weight");
const opszInput = document.getElementById("opsz");
const letterSpacingInput = document.getElementById("letter-spacing");

const sfText = document.getElementById("sf-text");
const draegerText = document.getElementById("draeger-text");
const roboText = document.getElementById("robo-text");
const msSerifText = document.getElementById("ms-serif-text");

const draegerSizeValue = document.getElementById("draeger-size-value");
const sfSizeValue = document.getElementById("sf-size-value");
const roboSizeValue = document.getElementById("robo-size-value");
const msSerifSizeValue = document.getElementById("ms-serif-size-value");
const fontWeightValue = document.getElementById("font-weight-value");
const opszValue = document.getElementById("opsz-value");
const letterSpacingValue = document.getElementById("letter-spacing-value");
const currentValues = document.getElementById("current-values");

// Default values for reset functionality
const defaultValues = {
  "draeger-size": 20,
  "font-weight": 400,
  opsz: 14,
  "letter-spacing": 0,
};

function updateValues() {
  const sampleText = sampleTextInput.value;

  const draegerSize = draegerSizeInput.value;
  const roboSize = roboSizeInput.value;
  const sfSize = sfSizeInput.value;
  const msSerifSize = msSerifSizeInput.value;
  const fontWeight = fontWeightInput.value;
  const opsz = opszInput.value;
  const letterSpacing = letterSpacingInput.value;

  // Update display values
  sfSizeValue.textContent = sfSize;
  roboSizeValue.textContent = roboSize;
  draegerSizeValue.textContent = draegerSize;
  msSerifSizeValue.textContent = msSerifSize;
  fontWeightValue.textContent = fontWeight;
  opszValue.textContent = opsz;
  letterSpacingValue.textContent = letterSpacing;

  // Update text content
  sfText.textContent = sampleText;
  draegerText.textContent = sampleText;
  roboText.textContent = sampleText;
  msSerifText.textContent = sampleText;

  // Apply styles to Roboto text
  roboText.style.fontSize = `${roboSize}px`;
  roboText.style.fontWeight = fontWeight;

  // Apply styles to San Francisco text
  sfText.style.fontSize = `${sfSize}px`;
  sfText.style.fontWeight = fontWeight;

  // Apply styles to MS Serif text
  msSerifText.style.fontSize = `${msSerifSize}px`;
  msSerifText.style.fontWeight = fontWeight;

  // Apply styles to Draeger text
  draegerText.style.fontSize = `${draegerSize}px`;
  draegerText.style.fontWeight = fontWeight;
  draegerText.style.letterSpacing = `${letterSpacing}px`;

  // Apply optical size to fonts that support it
  // Note: This will only work for fonts that support variable font features
  if (parseFloat(opsz) !== 14) {
    // Apply to San Francisco (system font that may support variations)
    sfText.style.fontVariationSettings = `"opsz" ${opsz}`;
    // Apply to Roboto (may support variations)
    roboText.style.fontVariationSettings = `"opsz" ${opsz}`;
  } else {
    // Reset to default
    sfText.style.fontVariationSettings = "";
    roboText.style.fontVariationSettings = "";
  }

  // Update the displayed values
  currentValues.textContent = `San Francisco: ${sfSize}px, weight: ${fontWeight}
Draeger: ${draegerSize}px, weight: ${fontWeight}
Roboto: ${roboSize}px, weight: ${fontWeight}
MS Serif: ${msSerifSize}px, weight: ${fontWeight}
font-variation-settings: "opsz" ${opsz}
letter-spacing: ${letterSpacing}px;`;
}

// Add event listeners for inputs
sampleTextInput.addEventListener("input", updateValues);
sfSizeInput.addEventListener("input", updateValues);
roboSizeInput.addEventListener("input", updateValues);
msSerifSizeInput.addEventListener("input", updateValues);
draegerSizeInput.addEventListener("input", updateValues);
fontWeightInput.addEventListener("change", updateValues);
opszInput.addEventListener("input", updateValues);
letterSpacingInput.addEventListener("input", updateValues);

// Add event listeners for refresh buttons
document.querySelectorAll(".refresh-button").forEach((button) => {
  button.addEventListener("click", function () {
    const inputId = this.getAttribute("data-reset");
    const defaultValue = this.getAttribute("data-value");

    // Reset the input to its default value
    document.getElementById(inputId).value = defaultValue;

    // Update the display
    updateValues();
  });
});

// Initial update
updateValues();
