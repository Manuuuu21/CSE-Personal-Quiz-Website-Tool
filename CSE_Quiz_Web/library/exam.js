/**
 * Author: @Manuel G. Sintos
 * Date: Nov 27, 2023, 1:11 PM
 *
 */

let createExamCounter = 0;
function loadingToCreateExam() {

    stop_timer();
    timerCounterForGlobal = 0;

    createExamCounter++;

    if (createExamCounter == 1) {
        // Get all elements with class name "list"
        let topicElements = document.getElementsByClassName("list");
        let listIcon = document.getElementsByClassName("list_icon");
        
        // Loop through all choices and Reset background color for all topics
        for (var i = 0; i < topicElements.length; i++) {
            topicElements[i].style.backgroundColor = "";
            topicElements[i].style.border = "";
            listIcon[i+1].innerHTML = `
                <svg style="margin: 0 5px -6.5px 0;" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"/></svg>
            `;
        }

        // Remove the Data Privacy content
        $(SELECT.CONTENT).remove();

        // Remove the creator elements
        $(".creator").remove();

        // Remove the donation container
        $(".donate_me_con").remove();

        if (isMobileVersion) {
            closeSideBar();
        }

        let messages = ["Loading! Please wait . . .", "Configuring Examination! Please be patient . . ."];
        let randomMessage = messages[Math.floor(Math.random() * messages.length)];

        $(SELECT.BODY).append(`
            <div class="content">
                <h1>` + randomMessage + `</h1>
            </div>
        `);

        $(".list").attr("disabled", true);

        setTimeout(function() {
            createExamCounter = 0;
            createExam();
            $(".list").attr("disabled", null);
        }, 500);
    }
}

// Function for creating exam
function createExam() {
    
    // Set the flag indicating if the examanee is taking the exam to true
    isTakingExam = true;

    // Set the number of questions that the examanee needs to answer
    examanee_number_of_questions = exam_number_of_questions;

    // stop the timer and reset the timerCounterForGlobal
    stop_timer();
    timerCounterForGlobal = 0;

    // Remove the Data Privacy content
    $(SELECT.CONTENT).remove();

    // Remove the creator elements
    $(".creator").remove();

    // Remove the donation container
    $(".donate_me_con").remove();

    // Append a questions container and instruction to the body
    $(SELECT.BODY).append(
        `<div class="content">
        <h1>YOU ARE CURRENTLY TAKING EXAM RELATED TO:</h1>
        <p><b>Topic:</b> ` + topics[15] + `</p>
        <p><b>Total No. of Questions:</b> ` + examanee_number_of_questions + ` Questions.</p>
        <p><b>Passing Grade:</b> ` + passing_grade + `.00% and above.</p>
        <p>Numbers of Questions per major topics:</p>
        <div>General Information: ` + numbers_exam_at_general_info + ` Questions (${((numbers_exam_at_general_info/150) * 100).toFixed(2)}%)</div>
        <div>Numerical Ability: ` + numbers_exam_at_numberical_ability + ` Questions (${((numbers_exam_at_numberical_ability/150) * 100).toFixed(2)}%)</div>
        <div>Analytical Ability: ` + numbers_exam_at_analytical_ability + ` Questions (${((numbers_exam_at_analytical_ability/150) * 100).toFixed(2)}%)</div>
        <div>Verbal Ability: ` + numbers_exam_at_verbal_ability + ` Questions (${((numbers_exam_at_verbal_ability/150) * 100).toFixed(2)}%)</div>
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

    // reset the answered time
    answer_time = [];

    // reset the correct or wrong logo
    correct_wrong_logo = [];

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
    // The Overall set of Question for Numerical Ability is 43 Questions.
    // The topics include: Basic Operation, Identify Sequence, Word Problems
    // We need to divide the 43 Questions into 3 sets of topics.
    // Generate unique random questions for each topic
    data_04_QuestionsArray = uniqueRandomQuestion(0, (data_04.length - 1), 15); // Topic 4
    data_05_QuestionsArray = uniqueRandomQuestion(0, (data_05.length - 1), 14); // Topic 5
    data_06_QuestionsArray = uniqueRandomQuestion(0, (data_06.length - 1), 14); // Topic 6

    // Resetting the Analytical Ability set of Questions
    // The Overall set of Question for Numerical Ability is 43 Questions.
    // The topics include: Word Association, Identifying assumption and conclusion, logical reasoning, and Data Interpretation and analysis
    // We need to divide the 43 Questions into 4 sets of topics.
    // Generate unique random questions for each topic
    data_07_QuestionsArray = uniqueRandomQuestion(0, (data_07.length - 1), 11); // Topic 7
    data_08_QuestionsArray = uniqueRandomQuestion(0, (data_08.length - 1), 11); // Topic 8
    data_09_QuestionsArray = uniqueRandomQuestion(0, (data_09.length - 1), 11); // Topic 9
    data_10_QuestionsArray = uniqueRandomQuestion(0, (data_10.length - 1), 10); // Topic 10
    
    // Resetting the Verbal Ability set of Questions
    // The Overall set of Question for Numerical Ability is 44 Questions.
    // The topics include: Grammar and correct usage, Vocabulary, Paragraph Organization, and Reading Comprehension
    // We need to divide the 44 Questions into 4 sets of topics.
    // Generate unique random questions for each topic
    data_11_QuestionsArray = uniqueRandomQuestion(0, (data_11.length - 1), 11); // Topic 11
    data_12_QuestionsArray = uniqueRandomQuestion(0, (data_12.length - 1), 11); // Topic 12
    data_13_QuestionsArray = uniqueRandomQuestion(0, (data_13.length - 1), 11); // Topic 13
    data_14_QuestionsArray = uniqueRandomQuestion(0, (data_14.length - 1), 11); // Topic 14
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

        else if (questionCounter < 35) {
            currentTopic = data_04;
            questionIndex = data_04_QuestionsArray[questionCounter - 20]; // Start index=0 but the counting for questionCounter start from 20
            // Fetch and display the questions and choices for the selected topic.
            displayQuestionAndChoicesForExam(currentTopic[questionIndex]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_01);
        }
        else if (questionCounter < 49) {
            currentTopic = data_05;
            questionIndex = data_05_QuestionsArray[questionCounter - 35];
            // Fetch and display the questions and choices for the selected topic.
            displayQuestionAndChoicesForExam(currentTopic[questionIndex]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_01);
        }
        else if (questionCounter < 63) {
            currentTopic = data_06;
            questionIndex = data_06_QuestionsArray[questionCounter - 49];
            // Fetch and display the questions and choices for the selected topic.
            displayQuestionAndChoicesForExam(currentTopic[questionIndex]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_01);
        }

        // For Analytical
        else if (questionCounter < 74) {
            currentTopic = data_07;
            questionIndex = data_07_QuestionsArray[questionCounter - 63];
            // Fetch and display the questions and choices for the selected topic.
            displayQuestionAndChoicesForExam(currentTopic[questionIndex]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_02);
        }
        else if (questionCounter < 85) {
            currentTopic = data_08;
            questionIndex = data_08_QuestionsArray[questionCounter - 74];
            // Fetch and display the questions and choices for the selected topic.
            displayQuestionAndChoicesForExam(currentTopic[questionIndex]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_02);
        }
        else if (questionCounter < 96) {
            currentTopic = data_09;
            questionIndex = data_09_QuestionsArray[questionCounter - 85];
            // Fetch and display the questions and choices for the selected topic.
            displayQuestionAndChoicesForExam(currentTopic[questionIndex]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_02);
        }
        else if (questionCounter < 106) {
            currentTopic = data_10;
            questionIndex = data_10_QuestionsArray[questionCounter - 96];
            // Fetch and display the questions and choices for the selected topic.
            displayQuestionAndChoicesForExam(currentTopic[questionIndex]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_02);
        }
        
        
        // For Verbal
        else if (questionCounter < 117) {
            currentTopic = data_11;
            questionIndex = data_11_QuestionsArray[questionCounter - 106];
            // Fetch and display the questions and choices for the selected topic.
            displayQuestionAndChoicesForExam(currentTopic[questionIndex]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_03);
        }
        else if (questionCounter < 128) {
            currentTopic = data_12;
            questionIndex = data_12_QuestionsArray[questionCounter - 117];
            // Fetch and display the questions and choices for the selected topic.
            displayQuestionAndChoicesForExam(currentTopic[questionIndex]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_03);
        }
        else if (questionCounter < 139) {
            currentTopic = data_13;
            questionIndex = data_13_QuestionsArray[questionCounter - 128];
            // Fetch and display the questions and choices for the selected topic.
            displayQuestionAndChoicesForExam(currentTopic[questionIndex]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_03);
        }
        else if (questionCounter < 150) {
            currentTopic = data_14;
            questionIndex = data_14_QuestionsArray[questionCounter - 139];
            // Fetch and display the questions and choices for the selected topic.
            displayQuestionAndChoicesForExam(currentTopic[questionIndex]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_03);
        }

        // Display the Donate Request Notice
        displayDonateMeParagraphRequest();
    }

    // Initiate timer for questions
    initiate_timer();
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
                <div class="question_counter_con_and_timer">
                    <b>Question No. <span class='question_counter' id="question_counter">` + (questionCounter + 1) + `</span> out of ` + examanee_number_of_questions + `</b>
                    <div title="Questionnaire Timer" class="timer">
                        <svg style="margin: 0 0 -5.5px -3px;" xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22"><path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"/></svg>
                        <span title="Minutes" id="timerMinutes">00</span> : <span title="Seconds" id="timerSeconds">00</span> 
                    </div>
                </div>
                <div class="question" id="question"></div>
                <div class="choices_con" id="choices_con"></div>
                <div class="submit_question"><button class="ripple-btn" onclick="submitAnswerForExam()">Submit your answer</button></div>
                <div class="question_data_poster_name">This data question is submitted by ${questionData.poster_name}</div>
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
        choicesHTML += "<div class='choices ripple-btn' onclick='checkAnswerExam(" + i + ")'>" + (i + 1) + ") " + choices[i] + "</div>";
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
    else if (questionCounter < 35) {
        currentTopic = data_04;
        questionIndex = data_04_QuestionsArray[questionCounter - 20];
    }
    else if (questionCounter < 49) {
        currentTopic = data_05;
        questionIndex = data_05_QuestionsArray[questionCounter - 35];
    }
    else if (questionCounter < 63) {
        currentTopic = data_06;
        questionIndex = data_06_QuestionsArray[questionCounter - 49];
    }

    // For Analytical Subject Checking of Answer of the selectedIndex if it is correct or wrong
    else if (questionCounter < 74) {
    currentTopic = data_07;
    questionIndex = data_07_QuestionsArray[questionCounter - 63];
    }
    else if (questionCounter < 85) {
        currentTopic = data_08;
        questionIndex = data_08_QuestionsArray[questionCounter - 74];
    }
    else if (questionCounter < 96) {
        currentTopic = data_09;
        questionIndex = data_09_QuestionsArray[questionCounter - 85];
    }
    else if (questionCounter < 106) {
        currentTopic = data_10;
        questionIndex = data_10_QuestionsArray[questionCounter - 96];
    }

    // For Verbal Subject Subject Checking of Answer of the selectedIndex if it is correct or wrong
    else if (questionCounter < 117) {
        currentTopic = data_11;
        questionIndex = data_11_QuestionsArray[questionCounter - 106];
    }
    else if (questionCounter < 128) {
        currentTopic = data_12;
        questionIndex = data_12_QuestionsArray[questionCounter - 117];
    }
    else if (questionCounter < 139) {
        currentTopic = data_13;
        questionIndex = data_13_QuestionsArray[questionCounter - 128];
    }
    else if (questionCounter < 150) {
        currentTopic = data_14;
        questionIndex = data_14_QuestionsArray[questionCounter - 139];
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
        choiceElements[i].style.border = "";
    }

    // Set the background color of the clicked choice to green
    choiceElements[selectedAnswerIndex].style.backgroundColor = bgColorForSelectedAnswer;
    choiceElements[selectedAnswerIndex].style.border = borderColorForSelectedAnswer;
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
    switch(disable_non_answer_alert) {
        // You can submit your answer anytime, even if you have not chosen an answer.
        case true:
            // Move to the next Question
            moveToNextQuestionForExam();
        break;

        // You will see an error if no answer is submitted
        case false:
             // Check if an answer is selected
            if (!isAnswerSelected) {
                // Display an error message if no answer is selected
                alertDialog("Oops!", "Please select your answer!");
            }
            else {
                // Move to the next Question
                moveToNextQuestionForExam();
            }
        break;
    }
   
    // Reset the isAnswerSelected since the answer has been submitted
    isAnswerSelected = false;
}

/**
 * Navigates to the next question or handles the end of the exam.
 */
function moveToNextQuestionForExam() {
    let timerDuration = Math.floor(timerCounter);
    let minutes = Math.floor((timerDuration % 3600) / 60); // Calculate minutes within the current hour
    let seconds = Math.floor(timerDuration % 60);
    let hours = Math.floor(timerDuration / 3600);

    let txtHours = "";
    let txtMinutes = "";

    if (hours !== 0) {
        txtHours = `${hours} hour(s) and`;
    }
    if (minutes !== 0) {
        txtMinutes = `${minutes} minute(s) and`;
    }

    // Check if the question counter is greater than the total number of questions minus 2
    if (questionCounter > (examanee_number_of_questions-2)) {
        // If this is the last question of the exam, calculate the score
        calculateScore();

        // Call the end of quiz function
        end_of_quiz();
        stopAutoSubmit()

        // Push the selected answer to the array database
        my_answer.push(selectedAnswerIndex);
        answer_time.push(`You answered this question in <b>${txtHours} ${txtMinutes} ${seconds} second(s)</b>.`);

    } else {
        // If this is not the last question, update the question counter
        questionCounter++;

        // Calculate the score
        calculateScore();

        // Push the selected answer to the array database
        my_answer.push(selectedAnswerIndex);
        answer_time.push(`You answered this question in <b>${txtHours} ${txtMinutes} ${seconds} second(s)</b>.`);

        // Display the next question
        displayQuestionForExam();
    }

    // Reset the selectedAnswer and selectedAnswerIndex after they have been inputted to the my_ans database
    selectedAnswer = undefined;
    selectedAnswerIndex = undefined;

    // Reset the counter for timerCounter
    timerCounter = 0;
}

/**
 * Function to calculate the score based on the selected answer.
 * This function increments the score and the specific score category based on the question counter.
 */
function calculateScore() {
    if (selectedAnswer == "Correct") {
        score++;
        correct_wrong_logo.push(correct_logo);

        // For Gen Info Score, need to retrieve the score up 1 to 20 questions
        if (questionCounter < 20)   {
            genInfoScore++;
        }
        // For Numerical Score, need to retrieve the score up 21 to 63 questions
        else if (questionCounter < 63) {
            numbericalScore++;
        }
        // For Analytical Score, need to retrieve the score up 64 to 106 questions
        else if (questionCounter < 106) {
            analyticalScore++;
        }
        // For Verbal Score, need to retrieve the score up 107 to 150 questions
        else if (questionCounter < 150) {
            verbalScore++;
        }
    }
    else {
        // If not correct
        correct_wrong_logo.push(wrong_logo);
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

    // Reset the tooltip counter
    tooltip_counter = 0;

    displayPreviousQuestionsAndChoices_data(data_00_QuestionsArray, data_00, 0, false, false, false);
    displayPreviousQuestionsAndChoices_data(data_01_QuestionsArray, data_01, 5, false, false, false);
    displayPreviousQuestionsAndChoices_data(data_02_QuestionsArray, data_02, 10, false, false, false);
    displayPreviousQuestionsAndChoices_data(data_03_QuestionsArray, data_03, 15, false, false, false);
    displayPreviousQuestionsAndChoices_data(data_04_QuestionsArray, data_04, 20, false, false, false);
    displayPreviousQuestionsAndChoices_data(data_05_QuestionsArray, data_05, 35, false, false, false);
    displayPreviousQuestionsAndChoices_data(data_06_QuestionsArray, data_06, 49, false, false, false);
    displayPreviousQuestionsAndChoices_data(data_07_QuestionsArray, data_07, 63, true, false, false);
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

    // Reset the tooltip counter
    tooltip_counter = 0;

    displayPreviousQuestionsAndChoices_data(data_08_QuestionsArray, data_08, 74, false, false, false);
    displayPreviousQuestionsAndChoices_data(data_09_QuestionsArray, data_09, 85, false, false, false);
    displayPreviousQuestionsAndChoices_data(data_10_QuestionsArray, data_10, 96, false, false, false);
    displayPreviousQuestionsAndChoices_data(data_11_QuestionsArray, data_11, 106, false, false, false);
    displayPreviousQuestionsAndChoices_data(data_12_QuestionsArray, data_12, 117, false, false, false);
    displayPreviousQuestionsAndChoices_data(data_13_QuestionsArray, data_13, 128, false, false, false);
    displayPreviousQuestionsAndChoices_data(data_14_QuestionsArray, data_14, 139, false, true, false);
}