document.getElementById('ageForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const dob = document.getElementById('dob').value;
  if (!dob) {
    document.getElementById('result').textContent = "Please enter a valid date.";
    return;
  }

  const birthDate = new Date(dob);
  const today = new Date();

  if (birthDate > today) {
    document.getElementById('result').textContent = "Date of birth cannot be in the future.";
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById('result').textContent =
    `You are ${years} years, ${months} months, and ${days} days old.`;
});
