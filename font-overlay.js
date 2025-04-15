const sampleTextInput = document.getElementById("sample-text");
const sfSizeInput = document.getElementById("sf-size");
const interSizeInput = document.getElementById("inter-size");
const fontWeightInput = document.getElementById("font-weight");
const opszInput = document.getElementById("opsz");
const letterSpacingInput = document.getElementById("letter-spacing");

const sfText = document.getElementById("sf-text");
const interText = document.getElementById("inter-text");

const sfSizeValue = document.getElementById("sf-size-value");
const interSizeValue = document.getElementById("inter-size-value");
const fontWeightValue = document.getElementById("font-weight-value");
const opszValue = document.getElementById("opsz-value");
const letterSpacingValue = document.getElementById("letter-spacing-value");
const currentValues = document.getElementById("current-values");

// Default values for reset functionality
const defaultValues = {
  "sf-size": 20,
  "inter-size": 20,
  "font-weight": 400,
  opsz: 14,
  "letter-spacing": 0,
};

function updateValues() {
  const sampleText = sampleTextInput.value;
  const sfSize = sfSizeInput.value;
  const interSize = interSizeInput.value;
  const fontWeight = fontWeightInput.value;
  const opsz = opszInput.value;
  const letterSpacing = letterSpacingInput.value;

  // Update display values
  sfSizeValue.textContent = sfSize;
  interSizeValue.textContent = interSize;
  fontWeightValue.textContent = fontWeight;
  opszValue.textContent = opsz;
  letterSpacingValue.textContent = letterSpacing;

  // Update text content
  sfText.textContent = sampleText;
  interText.textContent = sampleText;

  // Apply styles to San Francisco text
  sfText.style.fontSize = `${sfSize}px`;
  sfText.style.fontWeight = fontWeight;

  // Apply styles to Inter text
  interText.style.fontSize = `${interSize}px`;
  interText.style.fontWeight = fontWeight;
  interText.style.fontVariationSettings = `"opsz" ${opsz}`;
  interText.style.letterSpacing = `${letterSpacing}px`;

  // Update the displayed values
  currentValues.textContent = `San Francisco: ${sfSize}px, weight: ${fontWeight}
Inter: ${interSize}px, weight: ${fontWeight}
font-variation-settings: "opsz" ${opsz}
letter-spacing: ${letterSpacing}px;`;
}

// Add event listeners for inputs
sampleTextInput.addEventListener("input", updateValues);
sfSizeInput.addEventListener("input", updateValues);
interSizeInput.addEventListener("input", updateValues);
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
