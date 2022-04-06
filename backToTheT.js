// I took code from W3Schools to help me create the code below.

// This sets a variable for the final score at the end of the quiz.
finalScore = 0;

// This is a function for the first quiz question that'll run when the submit button is clicked.
function flipBox1()
{
    // This creates an array containing the radio input names.
    buttons = document.getElementsByName("pointsInGame");
    // This loop hides the message for each input (saying correct/incorrect) and shows the default message, which appears in the event that no button has been clicked.
    for (i=0; i<buttons.length; i++)
    {
        document.getElementById(buttons[i].id + "Message").style.display = "none";
        document.getElementById("defaultMessage1").style.display = "block";
    }
    // This following loop shows the message for the input selected (checked) so that the user can see whether their answer was correct or not. It hides the default message so that only one message shows.
    for (i=0;i<buttons.length;i++)
    {
        if (buttons[i].checked)
        {
            document.getElementById("defaultMessage1").style.display = "none";
            document.getElementById(buttons[i].id + "Message").style.display = "block";
        }
    }
    // This variable and loop adds one to the final score if the question was answered correctly.
    elevenSelected = document.getElementById("eleven");
    if (elevenSelected.checked)
    {
        finalScore = finalScore + 1;
    }
    // This final line of code flips the box to show the hidden side after all this has taken place.
    document.getElementById("flipBoxInner1").style.transform = "rotateX(180deg)";
}

// This variable represents the score achieved on the second question.
checkboxScore = 0;
// This variable is created to makes sure the function only runs once.
checkboxCompleted = false;

// This function operates when the submit button for the second quiz question is clicked.
function flipBox2()
{
    // This if statement makes sure the function only runs once (as the boolean is set to true at the end).
    if (checkboxCompleted == false)
    {
        // The following lines add one to the user's score on this question for each correct answer chosen on the question. If the box for a correct answer is checked, this adds one.
        strokeChecked = document.getElementById("stroke");
        if (strokeChecked.checked)
        {
            checkboxScore = checkboxScore + 1;
        }
        letChecked = document.getElementById("let");
        if (letChecked.checked)
        {
            checkboxScore = checkboxScore + 1;
        }
        noLetChecked = document.getElementById("noLet");
        if (noLetChecked.checked)
        {
            checkboxScore = checkboxScore + 1;
        }
        // The loop underneath shows a message showing the user's score on this question. The if statement makes sure this message only shows if the user has selected at least one checkbox.
        interferenceChecked = document.getElementById("interference");
        holdingChecked = document.getElementById("holding");
        if (strokeChecked.checked || letChecked.checked || noLetChecked.checked || interferenceChecked.checked || holdingChecked.checked)
        {
            document.getElementById("checkboxMessage").innerHTML = "You achieved a score of " + checkboxScore + "/3. Congratulations!";   
        }
        // This line adds the score from this question to the total score.
        finalScore = finalScore + checkboxScore;
    }
    // The boolean is set to true so that the code within the if statament cannot run a second time.
    checkboxCompleted = true;
    // This final line of code flips the box to show the hidden side after all this has taken place.
    document.getElementById("flipBoxInner2").style.transform = "rotateX(180deg)";
}

// This function operates when the submit button for the third quiz question is clicked.
function flipBox3()
{
    // Three variables are defined: one to represent the input received, one to represent the length of the input received, and one to represent the correct answer to the question.
    input = document.getElementById("tin").value;
    inputLength = input.length;
    correctAnswer = "tin";
    // If the user gets the correct answer, this message shows and their total quiz score goes up by one.
    if (input == correctAnswer)
    {
        document.getElementById("textMessage").innerHTML = "You are correct! It is called the tin!";
        finalScore = finalScore + 1;
    }
    else
    {
        // If the user was wrong, these statements show a message and the content of this message varies depending on how long the input received was (shorter/longer than the right answer or just right). 
        if (inputLength > correctAnswer.length)
        {
            document.getElementById("textMessage").innerHTML = "The answer is simpler and shorter than what you put. Try again!";
        }
        else if (inputLength == correctAnswer.length)
        {
            document.getElementById("textMessage").innerHTML = "You were close! Try again!";
        }
        else if (inputLength > 0)
        {
            document.getElementById("textMessage").innerHTML = "The answer is a bit more complicated. Try again!";
        }
    }
    // This final line of code flips the box to show the hidden side after all this has taken place.
    document.getElementById("flipBoxInner3").style.transform = "rotateX(180deg)";
}

// This function runs when the user clicks the button to submit their quiz answers.
function submitQuiz()
{
    // Three variables are set to help determine whether the flip boxes have been flipped yet.
    flipped1 = document.getElementById("flipBoxInner1").style.transform;
    flipped2 = document.getElementById("flipBoxInner2").style.transform;
    flipped3 = document.getElementById("flipBoxInner3").style.transform;
    // The following if statement shows the user's final score (as a percentage) and a 'try again' button if all three boxes have been flipped. 
    if (flipped1 == "rotateX(180deg)" && flipped2 == "rotateX(180deg)" && flipped3 == "rotateX(180deg)")
    {
        percentageScore = finalScore/5*100;
        document.getElementById("quizResultText").innerHTML = "You achieved a score of " + finalScore +"/5. That is a total of " + percentageScore + "%.";
        document.getElementById("quizResult").style.display = "block";
        document.getElementById("tryAgainButton").style.display = "block";
    }
    // If the three boxes have not been flipped, a message shows telling the user to complete the quiz first and hides the option to try again as they have not tried for the first time yet.
    else
    {
        document.getElementById("quizResultText").innerHTML = "Please complete the quiz before submitting!";
        document.getElementById("quizResult").style.display = "block"; 
        document.getElementById("tryAgainButton").style.display = "none";
    }
}

// This function re-flips the flip boxes, hides the confirmation message, and resets the user's score.
function tryAgain()
{
    document.getElementById("flipBoxInner1").style.transform = "";
    document.getElementById("flipBoxInner2").style.transform = "";
    document.getElementById("flipBoxInner3").style.transform = "";
    document.getElementById("quizResult").style.display = "none";
    checkboxScore = 0;
    checkboxCompleted = false;
    finalScore = 0;
}

// This code creates a numeric variable to represent the current slide shown.
slideIndex = 1;
// This code shows the slide pertaining to the variable upon loading.
showSlides(slideIndex);

// This function increases the slide variable by n, a constant.
function plusSlides(n)
{
    showSlides(slideIndex += n);
}

// This function sets the slide variable to n, a constant.
function currentSlide(n)
{
    showSlides(slideIndex = n);
}

function showSlides(n)
{
    var i;
    // This creates an array for the slides.
    var slides = document.getElementsByClassName("carouselSlide");
    // This creates an array for the dot indicators.
    var dots = document.getElementsByClassName("dot");
    // This if statement tells the slideshow to cycle back to the first slide when continuing from the last.
    if (n > slides.length)
    {
        slideIndex = 1
    }
    // This if statement tells the slideshow to cycle back to the last slide if going backward from the first.
    if (n < 1)
    {
        slideIndex = slides.length;
    }
    // This if statement hides all of the slides by default.
    for (i=0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    // This alters the classnames of the elements in the dots array (by removing 'active') so that certain styling that would have been applied is no longer applied (the resulting classnames are different).
    for (i=0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // This shows the slide in the slides array corresponding to the variable for the current slide.
    slides[slideIndex-1].style.display = "block";
    // This undoes the classname alteration for the dot in the dots array corresponding to the variable for the current slide. The certain styling that was removed from appliance is re-added.
    dots[slideIndex-1].className += " active";
}