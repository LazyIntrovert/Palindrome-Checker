document.getElementById('check-btn').addEventListener('click', function () {
    var inputValue = document.getElementById('text-input').value;
  
    if (inputValue === "") {
      alert('Please input a value.');
    } else {
      var reversedValue = inputValue.split('').reverse().join('');
  
      if (inputValue.toLowerCase() === reversedValue.toLowerCase()) {
        document.getElementById('result').textContent = inputValue + ' is a palindrome.';
      } else {
        document.getElementById('result').textContent = inputValue + ' is not a palindrome.';
      }
    }
  });
  
  
      document.addEventListener('DOMContentLoaded', function () {
   
    function isPalindrome(str) {
    
      const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      
      const reversedStr = cleanedStr.split('').reverse().join('');
     
      return cleanedStr === reversedStr;
    }
  
   
    function checkPalindrome() {
      
      const inputValue = document.getElementById('text-input').value;
      
      const resultElement = document.getElementById('result');
  
     
      if (isPalindrome(inputValue)) {
        resultElement.textContent = `${inputValue} is a palindrome`;
      } else {
        resultElement.textContent = `${inputValue} is not a palindrome`;
      }
    }
  
    
    document.getElementById('check-btn').addEventListener('click', checkPalindrome);
  });