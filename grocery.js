let userAnswers = [];
const correctAnswers = ['Banana', 'Broccoli', 'Cheese'];

// Highlight selected answer
function selectAnswer(questionIndex, selectedAnswer) {
    // Deselect all buttons in the current question
    const buttons = document.querySelectorAll(`.question[data-index="${questionIndex}"] button`);
    buttons.forEach(button => button.classList.remove('selected'));

    // Mark the selected button as 'selected'
    const selectedButton = Array.from(buttons).find(button => button.textContent === selectedAnswer);
    selectedButton.classList.add('selected');

    // Save the answer
    userAnswers[questionIndex] = selectedAnswer;
}

// Submit the quiz and display the score
function submitQuiz() {
    let score = 0;

    // Compare user answers with the correct answers
    for (let i = 0; i < correctAnswers.length; i++) {
        if (userAnswers[i] === correctAnswers[i]) {
            score++;
        }
    }

    // Display the result
    document.getElementById('quiz-result').textContent = `You scored ${score} out of ${correctAnswers.length}.`;
}

// Show User Information Form after Grocery Order Details
function showUserInfo() {
    document.getElementById('order-form').style.display = 'none';
    document.getElementById('user-info').style.display = 'block';
}

// Form Submission Placeholder
function placeOrder() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    if (name && email && phone) {
        alert(`Thank you, ${name}! Your order has been placed. We'll contact you at ${phone}.`);
    } else {
        alert("Please fill in all your information.");
    }
}

// Fetch Joke from Public API
async function fetchJoke() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const joke = await response.json();
        document.getElementById('joke').textContent = `${joke.setup} - ${joke.punchline}`;
    } catch (error) {
        document.getElementById('joke').textContent = 'Failed to load a joke. Try again!';
    }
}

// Call fetchJoke once on page load
fetchJoke();
