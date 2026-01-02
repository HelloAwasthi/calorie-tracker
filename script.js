function calculateCalories() {
  // Get values from inputs
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let age = document.getElementById("age").value;
  let gender = document.getElementById("gender").value;

  // Validation check
  if (weight === "" || height === "" || age === "") {
    alert("Please fill in all the details!");
    return;
  }

  let bmr;

  // Mifflin-St Jeor Equation logic
  if (gender === "male") {
    // Equation for Men: BMR = 10*weight + 6.25*height - 5*age + 5
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    // Equation for Women: BMR = 10*weight + 6.25*height - 5*age - 161
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  // Rounding the result for a cleaner look
  let finalResult = Math.round(bmr);

  // Update the UI
  document.getElementById("result").innerHTML =
    "🔥 Your Daily Calorie Goal: <span style='color:#2ecc71; font-size:1.4em;'>" +
    finalResult +
    " kcal</span>";
}
