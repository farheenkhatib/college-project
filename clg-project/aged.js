var slideIndex = 0;
showSlides();


//pics sliding
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}



//quiz
function checkAnswers() {
  var questions = document.querySelectorAll('.question');
  var answers = [];

  questions.forEach(function(question) {
      var selectElement = question.querySelector('select');
      var selectedOption = selectElement ? selectElement.value : null;
      answers.push(selectedOption);
  });

  analyzeMentalHealth(answers);
}

function analyzeMentalHealth(answers) {
  var score = 0;
  // Your scoring logic here
  var q1Answer = answers[0];
  var q2Answer = answers[1];
  var q3Answer = answers[2];
  var q4Answer = answers[3];
  var q5Answer = answers[4];
  var q6Answer = answers[5];
  var q7Answer = answers[6];
  var q8Answer = answers[7];
  var q9Answer = answers[8];
  var q10Answer = answers[9];
  // Continue for all questions

  if (q1Answer === 'not good' || q1Answer === 'terrible') {
      score++;
  }
  if (q2Answer === 'yes') {
      score++;
  }
  if (q3Answer === 'porr' || q3Answer === 'very poor') {
      score++;
  }
  if (q4Answer === 'Yes') {
      score++;
  }
  if (q5Answer === 'Yes') {
      score++;
  }
  if (q6Answer === 'yes') {
      score++;
  }
  if (q7Answer === 'Low' || q7Answer === 'Very low') {
      score++;
  }
  if (q8Answer === 'No') {
      score++;
  }
  if (q9Answer === 'Yes') {
      score++;
  }
  if (q10Answer === 'Yes') {
      score++;
  }

  var feedback = document.getElementById('popup-message');
  if (score <= 3) {
      feedback.textContent = "Your responses suggest that you may be experiencing some mild symptoms of mental distress. It's important to take care of your mental health and consider reaching out to a trusted adult or mental health professional for support.";
  } else if (score <= 7) {
      feedback.textContent = "Your responses indicate that you might be experiencing moderate symptoms of mental distress. It's crucial to seek help and talk to someone about how you're feeling. Consider reaching out to a mental health professional or a trusted adult for support.";
  } else {
      feedback.textContent = "Based on your responses, it appears that you are experiencing severe symptoms of mental distress. It's important to seek help immediately. Please reach out to a mental health professional, trusted adult, or a helpline for support and assistance.";
  }

  var okButton = document.getElementById('popup');
  okButton.style.display = 'block';
  okButton.addEventListener('click', function() {
      removeQuiz();
  });
}

function removeQuiz() {
  var quizContainer = document.getElementById('quiz-container');
  quizContainer.style.display = 'none'; // Hide the quiz container
  
  var feedbackMessage = document.getElementById('popup');
  feedbackMessage.style.display = 'none'; // Hide the feedback message
  
  var submitButton = document.getElementById('submit');
  submitButton.style.display = 'none'; // Hide the submit button
  
  var okButton = document.getElementById('ok-btn');
  okButton.style.display = 'none'; // Hide the OK button

  var moodTracker = document.getElementById('mood-tracker');
  moodTracker.style.display = 'block';
}







//tracking mood

function showMoodTracker() {
    var moodInput = document.getElementById("moodInput");
    var selectedMood = moodInput.value;
  
    // Get current date and time
    var now = new Date();
    var date = now.toLocaleDateString();
    var time = now.toLocaleTimeString();
  
    // Create mood entry
    var moodEntry = `${date} ${time}: ${selectedMood}`;
  
    // Add mood entry to mood history
    var moodList = document.getElementById("moodList");
    var listItem = document.createElement("li");
    listItem.textContent = moodEntry;
    moodList.appendChild(listItem);
  
    // Analyze mood and suggest solutions
    var solutionsContainer = document.getElementById("solutionsContainer");
    solutionsContainer.innerHTML = ""; // Clear previous solutions
  
    switch (selectedMood) {
      case "Happy":
        solutionsContainer.innerHTML = "<h3>Great to hear you're feeling happy!</h3>";
        break;
      case "Sad":
        solutionsContainer.innerHTML = `
          <h3>Here are some solutions to lift your mood:</h3>
          <ul>
            <li><a href="https://www.youtube.com/watch?v=d96akWDnx0w&pp=ygUhbW90aXZhdGlvbmFsIHZpZGVvIGZvciBzYWQgcGVvcGxl">Watch a motivational video</a></li>
            <li><a href="https://rockingmentalhealththeblog.com/">Read an inspiring blog</a></li>
            <li><a href="#">Listen to your favorite music</a></li>
          </ul>
        `;
        break;
      case "Angry":
        solutionsContainer.innerHTML = `
          <h3>Feeling angry? Try these solutions:</h3>
          <ul>
            <li><a href="#">Practice deep breathing exercises</a></li>
            <li><a href="https://www.youtube.com/watch?v=L3SlSdirzZk&pp=ygUjZnVubnkgdmlkZW9zIHRvIG92ZXJjb21lIGRlcHJlc3Npb24%3D">Watch a funny video to lighten your mood</a></li>
            <li><a href="#">Take a walk outside</a></li>
          </ul>
        `;
        break;
      case "Anxious":
        solutionsContainer.innerHTML = `
          <h3>Dealing with anxiety? Here are some solutions:</h3>
          <ul>
            <li><a href="#">Try guided meditation or mindfulness exercises</a></li>
            <li><a href="https://www.thisiscalmer.com/blog/benefits-of-sleep-at-work-mental-wellbeing">Read a calming blog or article</a></li>
            <li><a href="#">Practice progressive muscle relaxation</a></li>
          </ul>
        `;
        break;
      case "Neutral":
        solutionsContainer.innerHTML = "<h3>Feeling neutral? That's okay too!</h3>";
        break;
      default:
        break;
    }
  
    // Clear mood input
    moodInput.value = "";
  }