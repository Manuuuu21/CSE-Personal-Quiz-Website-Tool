/**
 * Author: @Manuel G. Sintos
 * Date: Nov 27, 2023, 1:11 PM
 *
 */

// Function for creating exam
function createExam() {
    // Get all elements with class name "list"
    let topicElements = document.getElementsByClassName("list");
    // Loop through all choices and Reset background color for all topics
    for (var i = 0; i < topicElements.length; i++) {
        topicElements[i].style.backgroundColor = "";
    }

    // Set the flag indicating if the examanee is taking the exam to true
    isTakingExam = true;

    // Set the number of questions that the examanee needs to answer
    examanee_number_of_questions = exam_number_of_questions;

    // Close the Menu Modal
    closeMenuModal();

    // Remove the Data Privacy content
    $(SELECT.CONTENT).remove();

    // Remove the creator elements
    $(".creator").remove();

    // Remove the donation container
    $(".donate_me_con").remove();

    // Append a questions container and instruction to the body
    $(SELECT.BODY).append(
   	`<div class="content">
        <h1>You are currently Taking Exams related to:</h1>
        <p><b>Topic:</b> ` + topics[15] + `</p>
        <p><b>Total No. of Questions:</b> ` + examanee_number_of_questions + ` Questions.</p>
        <p><b>Passing Grade:</b> ` + passing_grade + `%.</p>
        <p>Numbers of Questions per major topics:</p>
        <div>General Information: ` + numbers_exam_at_general_info + ` Questions</div>
        <div>Numerical Ability: ` + numbers_exam_at_numberical_ability + ` Questions</div>
        <div>Analytical Ability: ` + numbers_exam_at_analytical_ability + ` Questions</div>
        <div>Verbal Ability: ` + numbers_exam_at_verbal_ability + ` Questions</div>
        <br>
        <button class="start_topic" onclick="displayQuestionForExam()" class="">Click to Start Examination</button>
    </div>`);

    // Callback for the restartExamQuestion data for the exam
	restartExamQuestion();
}

// Function to restart the exam question
restartExamQuestion=()=> {
    // Resetting the question counter
    questionCounter = 0;

    // Resetting the flag for taking the topics
    isTakingTopics = false;

	// Resetting the previous questions and choices
    prev_questions = [];
    prev_choices = [];

    // Resetting the overall score
    score = 0;

    // Resetting the score per subject areas
    genInfoScore = 0;
    numbericalScore = 0;
    analyticalScore = 0;
    verbalScore = 0;

    // Resetting the user's answer
    my_answer = [];

    // Resetting the General Information set of Questions
    // The Overall set of Question for Gen Info is 20 Questions.
    // The topics include: Philippine Constitution, Code of Conduct, Environmental Management, and Peace and Human Rights concepts and issues.
    // We need to divide the 20 Questions into 4 sets of topics.
    // Generate unique random questions for each topic
    data_00_QuestionsArray = uniqueRandomQuestion(0, (data_00.length - 1), 5); // Topic 0
    data_01_QuestionsArray = uniqueRandomQuestion(0, (data_01.length - 1), 5); // Topic 1
    data_02_QuestionsArray = uniqueRandomQuestion(0, (data_02.length - 1), 5); // Topic 2
    data_03_QuestionsArray = uniqueRandomQuestion(0, (data_03.length - 1), 5); // Topic 3

    // Resetting the Numerical Ability set of Questions
    // The Overall set of Question for Numerical Ability is 50 Questions.
    // The topics include: Basic Operation, Identify Sequence, Word Problems
    // We need to divide the 50 Questions into 3 sets of topics.
    // Generate unique random questions for each topic
    data_04_QuestionsArray = uniqueRandomQuestion(0, (data_04.length - 1), 18); // Topic 4
    data_05_QuestionsArray = uniqueRandomQuestion(0, (data_05.length - 1), 16); // Topic 5
    data_06_QuestionsArray = uniqueRandomQuestion(0, (data_06.length - 1), 16); // Topic 6

    // Resetting the Analytical Ability set of Questions
    // The Overall set of Question for Numerical Ability is 50 Questions.
    // The topics include: Word Association, Identifying assumption and conclusion, logical reasoning, and Data Interpretation and analysis
    // We need to divide the 50 Questions into 4 sets of topics.
    // Generate unique random questions for each topic
    data_07_QuestionsArray = uniqueRandomQuestion(0, (data_07.length - 1), 14); // Topic 7
    data_08_QuestionsArray = uniqueRandomQuestion(0, (data_08.length - 1), 12); // Topic 8
    data_09_QuestionsArray = uniqueRandomQuestion(0, (data_09.length - 1), 12); // Topic 9
    data_10_QuestionsArray = uniqueRandomQuestion(0, (data_10.length - 1), 12); // Topic 10
    
    // Resetting the Verbal Ability set of Questions
    // The Overall set of Question for Numerical Ability is 50 Questions.
    // The topics include: Grammar and correct usage, Vocabulary, Paragraph Organization, and Reading Comprehension
    // We need to divide the 50 Questions into 4 sets of topics.
    // Generate unique random questions for each topic
    data_11_QuestionsArray = uniqueRandomQuestion(0, (data_11.length - 1), 14); // Topic 11
    data_12_QuestionsArray = uniqueRandomQuestion(0, (data_12.length - 1), 12); // Topic 12
    data_13_QuestionsArray = uniqueRandomQuestion(0, (data_13.length - 1), 12); // Topic 13
    data_14_QuestionsArray = uniqueRandomQuestion(0, (data_14.length - 1), 12); // Topic 14
}

displayQuestionForExam = () => {
    if (!isTakingTopics) {
        // Determine the current topic and question index based on the questionCounter
        // We're going to use these two variables later, so let's prepare them now.
        let currentTopic;
        let questionIndex;

        // Now, we're going to check how many questions the user has answered so far 
        // (that's what questionCounter is keeping track of), and based on that, 
        // we'll decide which set of questions to use and which specific question to ask next.

        // If the user has answered less than 5 questions, 
        // we'll use the first set of questions (data_00) and ask the next question from this set.
        if (questionCounter < 5) {
            currentTopic = data_00;
            questionIndex = data_00_QuestionsArray[questionCounter];

            // Fetch and display the questions and choices for the selected topic.
            displayQuestionAndChoicesForExam(currentTopic[questionIndex]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_00);
        } 
        // If the user has answered 5 or more questions but less than 10, 
        // we'll switch to the second set of questions (data_01) and start from the first question in this set.
        else if (questionCounter < 10) {
            currentTopic = data_01;
            questionIndex = data_01_QuestionsArray[questionCounter - 5]; // Start index=0 but the counting for questionCounter start from 5
            // Fetch and display the questions and choices for the selected topic.
            displayQuestionAndChoicesForExam(currentTopic[questionIndex]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_00);
        } 
        // If the user has answered 10 or more questions but less than 15, 
        // we'll switch to the third set of questions (data_02) and start from the first question in this set.
        else if (questionCounter < 15) {
            currentTopic = data_02;
            questionIndex = data_02_QuestionsArray[questionCounter - 10]; // Start index=0 but the counting for questionCounter start from 10
            // Fetch and display the questions and choices for the selected topic.
            displayQuestionAndChoicesForExam(currentTopic[questionIndex]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_00);
        } 
        // If the user has answered 15 or more questions but less than 20, 
        // we'll switch to the fourth set of questions (data_03) and start from the first question in this set.
        else if (questionCounter < 20) {
            currentTopic = data_03;
            questionIndex = data_03_QuestionsArray[questionCounter - 15]; // Start index=0 but the counting for questionCounter start from 15
            // Fetch and display the questions and choices for the selected topic.
            displayQuestionAndChoicesForExam(currentTopic[questionIndex]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_00);
        }

        else if (questionCounter < 38) {
            currentTopic = data_04;
            questionIndex = data_04_QuestionsArray[questionCounter - 20]; // Start index=0 but the counting for questionCounter start from 20
            // Fetch and display the questions and choices for the selected topic.
            displayQuestionAndChoicesForExam(currentTopic[questionIndex]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_01);
        }
        else if (questionCounter < 54) {
            currentTopic = data_05;
            questionIndex = data_05_QuestionsArray[questionCounter - 38];
            // Fetch and display the questions and choices for the selected topic.
            displayQuestionAndChoicesForExam(currentTopic[questionIndex]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_01);
        }
        else if (questionCounter < 70) {
            currentTopic = data_06;
            questionIndex = data_06_QuestionsArray[questionCounter - 54];
            // Fetch and display the questions and choices for the selected topic.
            displayQuestionAndChoicesForExam(currentTopic[questionIndex]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_01);
        }

        // For Analytical
        else if (questionCounter < 84) {
            currentTopic = data_07;
            questionIndex = data_07_QuestionsArray[questionCounter - 70];
            // Fetch and display the questions and choices for the selected topic.
            displayQuestionAndChoicesForExam(currentTopic[questionIndex]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_02);
        }
        else if (questionCounter < 96) {
            currentTopic = data_08;
            questionIndex = data_08_QuestionsArray[questionCounter - 84];
            // Fetch and display the questions and choices for the selected topic.
            displayQuestionAndChoicesForExam(currentTopic[questionIndex]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_02);
        }
        else if (questionCounter < 108) {
            currentTopic = data_09;
            questionIndex = data_09_QuestionsArray[questionCounter - 96];
            // Fetch and display the questions and choices for the selected topic.
            displayQuestionAndChoicesForExam(currentTopic[questionIndex]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_02);
        }
        else if (questionCounter < 120) {
            currentTopic = data_10;
            questionIndex = data_10_QuestionsArray[questionCounter - 108];
            // Fetch and display the questions and choices for the selected topic.
            displayQuestionAndChoicesForExam(currentTopic[questionIndex]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_02);
        }
        
        
        // For Verbal
        else if (questionCounter < 134) {
            currentTopic = data_11;
            questionIndex = data_11_QuestionsArray[questionCounter - 120];
            // Fetch and display the questions and choices for the selected topic.
            displayQuestionAndChoicesForExam(currentTopic[questionIndex]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_03);
        }
        else if (questionCounter < 146) {
            currentTopic = data_12;
            questionIndex = data_12_QuestionsArray[questionCounter - 134];
            // Fetch and display the questions and choices for the selected topic.
            displayQuestionAndChoicesForExam(currentTopic[questionIndex]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_03);
        }
        else if (questionCounter < 158) {
            currentTopic = data_13;
            questionIndex = data_13_QuestionsArray[questionCounter - 146];
            // Fetch and display the questions and choices for the selected topic.
            displayQuestionAndChoicesForExam(currentTopic[questionIndex]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_03);
        }
        else if (questionCounter < 170) {
            currentTopic = data_14;
            questionIndex = data_14_QuestionsArray[questionCounter - 158];
            // Fetch and display the questions and choices for the selected topic.
            displayQuestionAndChoicesForExam(currentTopic[questionIndex]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_03);
        }

        // Display the Donate Request Notice
        displayDonateMeParagraphRequest();
    }
}

/**
 * Displays a question and its choices to the user.
 *
 * @param {Object} questionData - An object containing information about the question.
 * @param {string} questionData.question - The text of the question.
 * @param {string[]} questionData.choices - An array of strings representing the answer choices.
 * @param {number} questionData.correct_ans - The index of the correct answer choice.
 */
function displayQuestionAndChoicesForExam(questionData) {
    // Remove the content for displaying the on what topic you are taking
    $(SELECT.CONTENT).remove();
    $(SELECT.BODY).append(
        `<div class="content">
            <div class="instruction_con"><b>Instruction</b>: <span id="instruction"></span></div>
                <div class="question_con">
                <div class="question_counter_con_and_timer"><b>Question No. <span class='question_counter' id="question_counter">` + (questionCounter + 1) + `</span> out of ` + examanee_number_of_questions + `</b></div>
                <div class="question" id="question"></div>
                <div class="choices_con" id="choices_con"></div>
                <div class="submit_question"><button onclick="submitAnswerForExam()">Submit your answer</button></div>
            </div>
        </div>`
    );

    document.getElementById("question").innerHTML = "<span class='question_counter' id='current_question_counter'>" + (questionCounter + 1) + "</span>. ) " + questionData.question;
    prev_questions.push(questionData.question);

    // Display the choices of the current question
    // Create a copy of the choices array
    choices = questionData.choices.slice();

    // store for history of question choices purposes
    prev_choices.push(choices);

    // Shuffle the choices using the Fisher-Yates Shuffle Algorithm
    for (let i = choices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Swap elements at positions i and j
        [choices[i], choices[j]] = [choices[j], choices[i]];
    }

    // Generate HTML for the shuffled choices and add click event listeners
    choicesHTML = "";
    for (let i = 0; i < choices.length; i++) {
        choicesHTML += "<div class='choices' onclick='checkAnswerExam(" + i + ")'>" + (i + 1) + ") " + choices[i] + "</div>";
    }

    // Set the choices in the HTML
    document.getElementById("choices_con").innerHTML = choicesHTML;
}

/**
 * Function to check the answer for an exam.
 * This function sets the selectedAnswerIndex, checks the number of answered questions,
 * and decides which set of questions to use and which specific question to ask next.
 * @param {number} selectedIndexExam - The index of the selected answer.
 */
checkAnswerExam=(selectedIndexExam)=> {
    // Set the selectedAnswerIndex
    selectedAnswerIndex = selectedIndexExam;

    // Set isAnswerSelected to true since the user is selecting an answer
    isAnswerSelected = true;

    let currentTopic;
    let questionIndex;

    // Check the number of answered questions and decide which set of questions to use
    if (questionCounter < 5) {
        currentTopic = data_00;
        questionIndex = data_00_QuestionsArray[questionCounter];
    }
    else if (questionCounter < 10) {
        currentTopic = data_01;
        questionIndex = data_01_QuestionsArray[questionCounter - 5];
    }
    else if (questionCounter < 15) {
        currentTopic = data_02;
        questionIndex = data_02_QuestionsArray[questionCounter - 10];
    }
    else if (questionCounter < 20) {
        currentTopic = data_03;
        questionIndex = data_03_QuestionsArray[questionCounter - 15];
    }

    // For Numerical Subject Checking of Answer of the selectedIndex if it is correct or wrong
    else if (questionCounter < 38) {
        currentTopic = data_04;
        questionIndex = data_04_QuestionsArray[questionCounter - 20];
    }
    else if (questionCounter < 54) {
        currentTopic = data_05;
        questionIndex = data_05_QuestionsArray[questionCounter - 38];
    }
    else if (questionCounter < 70) {
        currentTopic = data_06;
        questionIndex = data_06_QuestionsArray[questionCounter - 54];
    }

    // For Analytical Subject Checking of Answer of the selectedIndex if it is correct or wrong
    else if (questionCounter < 84) {
    currentTopic = data_07;
    questionIndex = data_07_QuestionsArray[questionCounter - 70];
    }
    else if (questionCounter < 96) {
        currentTopic = data_08;
        questionIndex = data_08_QuestionsArray[questionCounter - 84];
    }
    else if (questionCounter < 108) {
        currentTopic = data_09;
        questionIndex = data_09_QuestionsArray[questionCounter - 96];
    }
    else if (questionCounter < 120) {
        currentTopic = data_10;
        questionIndex = data_10_QuestionsArray[questionCounter - 108];
    }

    // For Verbal Subject Subject Checking of Answer of the selectedIndex if it is correct or wrong
    else if (questionCounter < 134) {
        currentTopic = data_11;
        questionIndex = data_11_QuestionsArray[questionCounter - 120];
    }
    else if (questionCounter < 146) {
        currentTopic = data_12;
        questionIndex = data_12_QuestionsArray[questionCounter - 134];
    }
    else if (questionCounter < 158) {
        currentTopic = data_13;
        questionIndex = data_13_QuestionsArray[questionCounter - 146];
    }
    else if (questionCounter < 170) {
        currentTopic = data_14;
        questionIndex = data_14_QuestionsArray[questionCounter - 158];
    }

    // Check the examinee's answer for the exam
    checkExamaneeAnswerForExam(currentTopic[questionIndex]);
}

/**
 * Checks the examinee's answer against the correct answer and provides feedback.
 *
 * @param {Object} answerData - An object containing information about the answer.
 * @param {string} answerData.examineeAnswer - The answer provided by the examinee.
 * @param {string} answerData.correctAnswer - The correct answer.
 * @returns {string} - A feedback message indicating whether the answer is correct or not.
 */
function checkExamaneeAnswerForExam(answerData) {
    // Get all choice elements
    let choiceElements = document.getElementsByClassName("choices");
    // Loop through all choices
    for (var i = 0; i < choiceElements.length; i++) {
        // Reset background color for all choices
        choiceElements[i].style.backgroundColor = "";
        choiceElements[i].style.color = "";
    }

    // Set the background color of the clicked choice to green
    choiceElements[selectedAnswerIndex].style.backgroundColor = bgColorForSelectedAnswer;
    choiceElements[selectedAnswerIndex].style.color = "";

    // Get the correct answer index from your data structure (e.g., an array or object) of data
    var correctAnswerIndex = answerData.correct_ans;
    var correctAnswerIndex_true = (selectedAnswerIndex + 1) + ") " + correctAnswerIndex;

    // check if the selected answer of user is correct or wrong
    if (choiceElements[selectedAnswerIndex].innerHTML == correctAnswerIndex_true) {
        selectedAnswer = "Correct";
    } else {
        selectedAnswer = "Wrong";
    }
}

/**
 * Function to submit an answer for an exam.
 * This function checks if an answer is selected, calculates the score based on the selected answer,
 * and updates the question counter. If it's the last question, it ends the quiz.
 */
function submitAnswerForExam() {
    // Check if an answer is selected
    if (!isAnswerSelected) {
        // Display an error message if no answer is selected
        alertDialog("Oops!", "Please select your answer!");
        return; // Exit the function to prevent further processing
    }
    // Check if the question counter is greater than the total number of questions minus 2
    if (questionCounter > (examanee_number_of_questions-2)) {
        // If this is the last question of the exam, calculate the score
        calculateScore();

        // Call the end of quiz function
        end_of_quiz();
    } else {
        // If this is not the last question, update the question counter
        questionCounter++;

        // Calculate the score
        calculateScore();

        // Display the next question
        displayQuestionForExam();
    }

    // Push the selected answer to the array database
    my_answer.push(selectedAnswerIndex);

    // Reset the selectedAnswer and selectedAnswerIndex after they have been inputted to the my_ans database
    selectedAnswer = undefined;
    selectedAnswerIndex = undefined;

    // Reset the isAnswerSelected since the answer has been submitted
    isAnswerSelected = false;
}

/**
 * Function to calculate the score based on the selected answer.
 * This function increments the score and the specific score category based on the question counter.
 */
function calculateScore() {
    if (selectedAnswer == "Correct") {
        score++;

        // For Gen Info Score, need to retrieve the score up 1 to 20 questions
        if (questionCounter < 20)   {
            genInfoScore++;
        }
        // For Numerical Score, need to retrieve the score up 21 to 70 questions
        else if (questionCounter < 70) {
            numbericalScore++;
        }
        // For Analytical Score, need to retrieve the score up 71 to 120 questions
        else if (questionCounter < 120) {
            analyticalScore++;
        }
        // For Verbal Score, need to retrieve the score up 121 to 170 questions
        else if (questionCounter < 170) {
            verbalScore++;
        }
    }
}

/**
 * Function: reviewed_ans_for_exam
 * Description: This function is intended to review previous answers for an exam .
 */
prev_display_review_result=()=> {
    reviewed_ans_for_exam();
}

/**
 * Function: reviewed_ans_for_exam
 * Description: This function is intended to review answers for an exam.
 * @First Boolen, display the First Pagination button
 * @Second Boolen, display the Second Pagination button
 */
reviewed_ans_for_exam=()=> {
    window.scrollTo(0, 0);
    // Remove the class content first
    $(SELECT.CONTENT).remove();

    displayPreviousQuestionsAndChoices_data(data_00_QuestionsArray, data_00, 0, false, false, false);
    displayPreviousQuestionsAndChoices_data(data_01_QuestionsArray, data_01, 5, false, false, false);
    displayPreviousQuestionsAndChoices_data(data_02_QuestionsArray, data_02, 10, false, false, false);
    displayPreviousQuestionsAndChoices_data(data_03_QuestionsArray, data_03, 15, false, false, false);

    displayPreviousQuestionsAndChoices_data(data_04_QuestionsArray, data_04, 20, false, false, false);
    displayPreviousQuestionsAndChoices_data(data_05_QuestionsArray, data_05, 38, false, false, false);
    displayPreviousQuestionsAndChoices_data(data_06_QuestionsArray, data_06, 54, false, false, false);

    displayPreviousQuestionsAndChoices_data(data_07_QuestionsArray, data_07, 70, true, false, false);
}

/**
 * Function: reviewed_ans_for_exam
 * Description: This function is intended to review answers for an exam.
 * @First Boolen, display the First Pagination button
 * @Second Boolen, display the Second Pagination button
 */
next_display_review_result=()=> {
    // Remove the class content first
    $(SELECT.CONTENT).remove();
    window.scrollTo(0, 0);

    displayPreviousQuestionsAndChoices_data(data_08_QuestionsArray, data_08, 84, false, false, false);
    displayPreviousQuestionsAndChoices_data(data_09_QuestionsArray, data_09, 96, false, false, false);
    displayPreviousQuestionsAndChoices_data(data_10_QuestionsArray, data_10, 108, false, false, false);

    displayPreviousQuestionsAndChoices_data(data_11_QuestionsArray, data_11, 120, false, false, false);
    displayPreviousQuestionsAndChoices_data(data_12_QuestionsArray, data_12, 134, false, false, false);
    displayPreviousQuestionsAndChoices_data(data_13_QuestionsArray, data_13, 146, false, false, false);
    displayPreviousQuestionsAndChoices_data(data_14_QuestionsArray, data_14, 158, false, true, false);
}
