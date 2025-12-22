function calculateCalories() {
  
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let age = document.getElementById("age").value;

  
  if (weight === "" || height === "" || age === "") {
    alert("Please fill in all fields!");
    return; 
  }

  //  The Math (Simplified Mifflin-St Jeor Equation)
  
  let bmr = 10 * weight + 6.25 * height - 5 * age + 5;

  
  document.getElementById("result").innerHTML =
    "You need approx " + bmr + " calories/day.";
}
