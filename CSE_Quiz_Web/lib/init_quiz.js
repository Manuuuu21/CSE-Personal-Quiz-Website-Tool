/**
 * Author: @Manuel G. Sintos
 * Date: Dec 28, 2024, 4:20 PM
 */

// Show the button icon of FB and Mail at the nav footer
$(".nav-footer").append(`${icon.fb} ${icon.mail}`);

/* stop the drag event */
window.addEventListener("dragstart", function(e) {
	e.preventDefault();
});

// Get the current year using the Date object
var currentYear = new Date().getFullYear();

$(SELECT.CONTENT_FOOTER).html(`
    &copy; 2023-${currentYear} Manuel Sintos
`);

function selectedQuiz(topicID) {
	// Declare so that we can retrieve it Globally
	selectedTopicID = topicID;

	let quizButtonElem = document.getElementsByClassName("quiz-button");
	let quizButtonIcon = document.getElementsByClassName("quiz-icon-container");

	// Loop through all choices and Reset background color for all topic
	for (var i = 0; i < quizButtonElem.length; i++) {
		quizButtonElem[i].style.backgroundColor = "";
		quizButtonElem[i].style.border = "";
		quizButtonElem[i].style.transition = "";
		quizButtonIcon[i].innerHTML = `${icon.bookmark_outline}`;
	}

	// Since we click the Quiz, set it to true
	isTakingQuiz = true;

	// Declare the user taking exam to false, since you are currently taking quiz only.
	isTakingExam = false;

	// Set the background color of the clicked choice
	quizButtonElem[topicID].style.backgroundColor = bgColorForSelectedButton;
	quizButtonElem[topicID].style.border = borderColorForSelectedButton;
    quizButtonElem[topicID].style.transition = "0.3s";
	quizButtonIcon[topicID].innerHTML = `${icon.bookmark_filled}`;

	// stop the timer and reset the timerInitiateCounter
	stop_timer();
	timerCounterForGlobal = 0;

    // If AutoSubmit is set to true. stop the autosubmit
    if (isAutoSubmit) {
        stopAutoSubmit();
    }

    // setting the user_numbers_of_questions for Global calculation of result for both Quiz and Exam
    user_numbers_of_questions = numbers_of_quiz_questions;

	// Show the details of Quiz
	$(SELECT.CONTENT_MAIN).html(`
		<h2>YOU ARE CURRENTLY STUDYING QUIZ RELATED TO:</h2>
		<p><b>Topic:</b> ` + topics[topicID] + `</p>
		<p><b>Total No. of Questions:</b> ` + user_numbers_of_questions + ` Questions.</p>
		<p><b>Passing Grade:</b> ` + passing_grade + `.00% and above.</p>
		<button class="button_design ripple-btn" onclick="displayQuestionForQuiz(`+ topicID + `)" class="">Click to Start Quiz</button>
	`);
    $(SELECT.CONTENT_FOOTER).html(`
        &copy; 2023-${currentYear} Manuel Sintos
    `);

	// Every time you click the selectedQuiz. It will renew the set of questions.
    // and reset other variables needed
	restartQuestionsForQuiz();
}

/**
 * Function to display questions based on the selected topic.
 * @param {number} IdTopicQuestion - The ID of the topic question.
 */
function displayQuestionForQuiz(IdTopicQuestion) {
	switch(IdTopicQuestion) {
        case 0:
            // Display question and choices for topic 0
            fetchQuizQuestionAndChoices(data_00[uniqueRandomArrayQuestions_00[questionNumbering]]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_TOPIC_00);
        break;
        case 1:
            // Display question and choices for topic 1
            fetchQuizQuestionAndChoices(data_01[uniqueRandomArrayQuestions_01[questionNumbering]]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_TOPIC_01);
        break;
        case 2:
            // Display question and choices for topic 2
            fetchQuizQuestionAndChoices(data_02[uniqueRandomArrayQuestions_02[questionNumbering]]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_TOPIC_02);
        break;
        case 3:
            // Display question and choices for topic 3
            fetchQuizQuestionAndChoices(data_03[uniqueRandomArrayQuestions_03[questionNumbering]]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_TOPIC_03);
        break;
        case 4:
            // Display question and choices for topic 4
            fetchQuizQuestionAndChoices(data_04[uniqueRandomArrayQuestions_04[questionNumbering]]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_TOPIC_04);
        break;
        case 5:
            // Display question and choices for topic 5
            fetchQuizQuestionAndChoices(data_05[uniqueRandomArrayQuestions_05[questionNumbering]]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_TOPIC_05);
        break;
        case 6:
            // Display question and choices for topic 6
            fetchQuizQuestionAndChoices(data_06[uniqueRandomArrayQuestions_06[questionNumbering]]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_TOPIC_06);
        break;
        case 7:
            // Display question and choices for topic 7
            fetchQuizQuestionAndChoices(data_07[uniqueRandomArrayQuestions_07[questionNumbering]]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_TOPIC_07);
        break;
        case 8:
            // Display question and choices for topic 8
            fetchQuizQuestionAndChoices(data_08[uniqueRandomArrayQuestions_08[questionNumbering]]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_TOPIC_08);
        break;
        case 9:
            // Display question and choices for topic 9
            fetchQuizQuestionAndChoices(data_09[uniqueRandomArrayQuestions_09[questionNumbering]]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_TOPIC_09);
        break;
        case 10:
            // Display question and choices for topic 10
            fetchQuizQuestionAndChoices(data_10[uniqueRandomArrayQuestions_10[questionNumbering]]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_TOPIC_10);
        break;
        case 11:
            // Display question and choices for topic 11
            fetchQuizQuestionAndChoices(data_11[uniqueRandomArrayQuestions_11[questionNumbering]]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_TOPIC_11);
        break;
        case 12:
            // Display question and choices for topic 12
            fetchQuizQuestionAndChoices(data_12[uniqueRandomArrayQuestions_12[questionNumbering]]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_TOPIC_12);
        break;
        case 13:
            // Display question and choices for topic 13
            fetchQuizQuestionAndChoices(data_13[uniqueRandomArrayQuestions_13[questionNumbering]]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_TOPIC_13);
        break;
        case 14:
            // Display question and choices for topic 14
            fetchQuizQuestionAndChoices(data_14[uniqueRandomArrayQuestions_14[questionNumbering]]);
            $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_TOPIC_14);
        break;
    }

    // Initiate timer for questions
	initiate_timer();
}

function fetchQuizQuestionAndChoices(questionData) {
	$(SELECT.CONTENT_MAIN).html(`
        <div class="instruction_con"><b>Instruction</b>: <span id="instruction"></span></div>
            <div class="question_con">
            <div class="question_counter_con_and_timer">
                <b>Question No. <span class='question_counter' id="question_counter">` + (questionNumbering + 1) + `</span> out of ` + user_numbers_of_questions + `</b>
                <div title="Questionnaire Timer" class="timer">
                    <svg style="margin: 0 0 -5.5px -3px;" xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22"><path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"/></svg>
                    <span title="Minutes" id="timerMinutes">00</span> : <span title="Seconds" id="timerSeconds">00</span> 
                </div>
            </div>
            <div class="question" id="question"></div>
            <div class="choices_con" id="choices_con"></div>
            <div class="submit_question"><button class="button_design ripple-btn" onclick="submitAnswerForQuiz()">Submit your answer</button></div>
            <div class="question_data_poster_name">This data question is submitted by ${questionData.poster_name}</div>
        </div>
    `);

	document.getElementById("question").innerHTML = "<span class='question_counter' id='current_question_counter'>" + (questionNumbering + 1) + "</span>. ) " + questionData.question;
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
        choicesHTML += "<div class='choices ripple-btn' onclick='checkQuizAnswer(" + i + ")'>" + (i + 1) + ") " + choices[i] + "</div>";
    }

    // Set the choices in the HTML
    document.getElementById("choices_con").innerHTML = choicesHTML;
}	

// Function to check the answer based on the selected index
function checkQuizAnswer(selectedIndex) {
    // Declare the selectedAnswerIndex
    selectedAnswerIndex = selectedIndex;

    // Lets put this here since the user is selecting his/her answer
	isAnswerSelected = true;

    // Using a switch statement to handle different topic IDs
    switch(selectedTopicID) {
    	case 0:
            // Check the examinee's answer for topic 0
            fetchAnswerToCheck(data_00[uniqueRandomArrayQuestions_00[questionNumbering]]);
        break;
        case 1:
            // Display question and choices for topic 1
            fetchAnswerToCheck(data_01[uniqueRandomArrayQuestions_01[questionNumbering]]);
        break;
        case 2:
            // Display question and choices for topic 2
            fetchAnswerToCheck(data_02[uniqueRandomArrayQuestions_02[questionNumbering]]);
        break;
        case 3:
            // Display question and choices for topic 3
            fetchAnswerToCheck(data_03[uniqueRandomArrayQuestions_03[questionNumbering]]);
        break;
        case 4:
            // Display question and choices for topic 4
            fetchAnswerToCheck(data_04[uniqueRandomArrayQuestions_04[questionNumbering]]);
        break;
        case 5:
            // Display question and choices for topic 5
            fetchAnswerToCheck(data_05[uniqueRandomArrayQuestions_05[questionNumbering]]);
        break;
        case 6:
            // Display question and choices for topic 6
            fetchAnswerToCheck(data_06[uniqueRandomArrayQuestions_06[questionNumbering]]);
        break;
        case 7:
            // Display question and choices for topic 7
            fetchAnswerToCheck(data_07[uniqueRandomArrayQuestions_07[questionNumbering]]);
        break;
        case 8:
            // Display question and choices for topic 8
            fetchAnswerToCheck(data_08[uniqueRandomArrayQuestions_08[questionNumbering]]);
        break;
        case 9:
            // Display question and choices for topic 9
            fetchAnswerToCheck(data_09[uniqueRandomArrayQuestions_09[questionNumbering]]);
        break;
        case 10:
            // Display question and choices for topic 10
            fetchAnswerToCheck(data_10[uniqueRandomArrayQuestions_10[questionNumbering]]);
        break;
        case 11:
            // Display question and choices for topic 11
            fetchAnswerToCheck(data_11[uniqueRandomArrayQuestions_11[questionNumbering]]);
        break;
        case 12:
            // Display question and choices for topic 12
            fetchAnswerToCheck(data_12[uniqueRandomArrayQuestions_12[questionNumbering]]);
        break;
        case 13:
            // Display question and choices for topic 13
            fetchAnswerToCheck(data_13[uniqueRandomArrayQuestions_13[questionNumbering]]);
        break;
        case 14:
            // Display question and choices for topic 14
            fetchAnswerToCheck(data_14[uniqueRandomArrayQuestions_14[questionNumbering]]);
        break;
    }
}

// Function to submit an answer
function submitAnswerForQuiz() {
	switch(disable_non_answer_alert) {
		// You can submit your answer anytime, even if you have not chosen an answer.
		case true:
			// Move to the next Question
		    moveToNextQuestionForQuiz();
		break;

		// You will see an error if no answer is submitted
		case false:
			/* Check if an answer is selected */
			if (!isAnswerSelected) {
			    // Display an error message if no answer is selected
			    alertDialog("Oops!", "Please select your answer!");
			}
		    else {
		    	// Move to the next Question
		    	moveToNextQuestionForQuiz();
		    }
		break;
	}
	
    // Reset the isAnswerSelected since the answer has been submitted
	isAnswerSelected = false;
}

function moveToNextQuestionForQuiz() {
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

	// Check if the question counter is on the last items to answer
    if (questionNumbering > (numbers_of_quiz_questions-2)) {
        // If this is the last question of the exam, calculate the score
        if (selectedAnswer == "Correct") {
            score++;
            correct_wrong_notif.push(correct_logo);
        }
        else {
        	// If not correct
        	correct_wrong_notif.push(wrong_logo);
        }

        // Call the end of quiz function
        end_of_quiz();

        // Push the selected answer to the array database
        my_answer.push(selectedAnswerIndex);
        answer_time.push(`You answered this question in <b>${txtHours} ${txtMinutes} ${seconds} second(s)</b>.`);

        // Reset the selectedAnswer and selectedAnswerIndex after they have been inputted to the my_ans database
        selectedAnswer = undefined;
        selectedAnswerIndex = undefined;
    }
    else {
        // If this is not the last question, update the question counter
        questionNumbering++;

        // Calculate the score
        if (selectedAnswer == "Correct") {
            score++;
            correct_wrong_notif.push(correct_logo);
        }
        else {
        	// If not correct
        	correct_wrong_notif.push(wrong_logo);
        }
        
        // Push the selected answer to the array database
        my_answer.push(selectedAnswerIndex);
        answer_time.push(`You answered this question in <b>${txtHours} ${txtMinutes} ${seconds} second(s)</b>.`);

        // Reset the selectedAnswer and selectedAnswerIndex after they have been inputted to the my_ans database
        selectedAnswer = undefined;
        selectedAnswerIndex = undefined;

        // Display the next question
        displayQuestionForQuiz(selectedTopicID);
    }

    // Reset the counter for timerCounter
    timerCounter = 0;
}


/**
 * Function to display quiz questions and their choices for a specific topic
 * @param {number} topicIndex - The index of the selected topic
 * @param {number} scoreboard_idNum - The index of the number of topics in the scoreboard
 */
function displayQuizPrevQuestionsAndChoices(topicIndex, scoreboard_idNum) {
    // Reset the tooltip counter
    tooltip_counter = 0;
    scoreboard_dataIndex = scoreboard_idNum;
    scoreboard_topicIndex = topicIndex;

	// Reset first the content-main
	$(SELECT.CONTENT_MAIN).html(``);
	$(SELECT.CONTENT_FOOTER).html(``);

    let dataUniqueRandomArrayQuestionsIndexes;
    let dataQuestions;

    // If reviewing the result via scoreboard, then we need to convert the scoreboard data correspond to the topicId and index
    // into prev_questions, prev_choices, answer, time and etc.
    if (isReviewingResultViaScoreBoard) {
        switch (topicIndex) {
            case 0:
                uniqueRandomArrayQuestions_00 = scoreboard_uniqueQuestionsId[scoreboard_idNum];
            break;
            case 1:
                uniqueRandomArrayQuestions_01 = scoreboard_uniqueQuestionsId[scoreboard_idNum];
            break;
            case 2:
                uniqueRandomArrayQuestions_02 = scoreboard_uniqueQuestionsId[scoreboard_idNum];
            break;
            case 3:
                uniqueRandomArrayQuestions_03 = scoreboard_uniqueQuestionsId[scoreboard_idNum];
            break;
            case 4:
                uniqueRandomArrayQuestions_04 = scoreboard_uniqueQuestionsId[scoreboard_idNum];
            break;
            case 5:
                uniqueRandomArrayQuestions_05 = scoreboard_uniqueQuestionsId[scoreboard_idNum];
            break;
            case 6:
                uniqueRandomArrayQuestions_06 = scoreboard_uniqueQuestionsId[scoreboard_idNum];
            break;
            case 7:
                uniqueRandomArrayQuestions_07 = scoreboard_uniqueQuestionsId[scoreboard_idNum];
            break;
            case 8:
                uniqueRandomArrayQuestions_08 = scoreboard_uniqueQuestionsId[scoreboard_idNum];
            break;
            case 9:
                uniqueRandomArrayQuestions_09 = scoreboard_uniqueQuestionsId[scoreboard_idNum];
            break;
            case 10:
                uniqueRandomArrayQuestions_10 = scoreboard_uniqueQuestionsId[scoreboard_idNum];
            break;
            case 11:
                uniqueRandomArrayQuestions_11 = scoreboard_uniqueQuestionsId[scoreboard_idNum];
            break;
            case 12:
                uniqueRandomArrayQuestions_12 = scoreboard_uniqueQuestionsId[scoreboard_idNum];
            break;
            case 13:
                uniqueRandomArrayQuestions_13 = scoreboard_uniqueQuestionsId[scoreboard_idNum];
            break;
            case 14:
                uniqueRandomArrayQuestions_14 = scoreboard_uniqueQuestionsId[scoreboard_idNum];
            break;
        }

        prev_questions = scoreboard_prev_questions[scoreboard_idNum];
        prev_choices = scoreboard_prev_choices[scoreboard_idNum];
        my_answer = scoreboard_prev_my_answer[scoreboard_idNum];
        answer_time = scoreboard_prev_answer_time[scoreboard_idNum];
        correct_wrong_notif = scoreboard_correct_wrong_notif[scoreboard_idNum];
    }

	switch(topicIndex) {
		case 0:
			for (let i = 0; i < numbers_of_quiz_questions; i++) {
                dataUniqueRandomArrayQuestionsIndexes = uniqueRandomArrayQuestions_00[i];
                dataQuestions = data_00[dataUniqueRandomArrayQuestionsIndexes];

				$(SELECT.CONTENT_MAIN).append(`
					<div class="prev_question_con">
						<div class="prev_question">
							<div class="answered_time">${answer_time[i]}</div>
							<div id="wrong_correct_answered_notif" class="c_a_n">${correct_wrong_notif[i]}</div>
							<span class="question_numbering" id="question_numbering">${i+1}. ) ${dataQuestions.question}</span>
						<div>
					</div>
				`);
			
				// Generate and append choices for the current question
	            let choicesHtml = ""; // Accumulate HTML for choices
	            for (let c = 0; c < 5; c++) {
	            	// Access the choice for the current question
	                const choice = prev_choices[i][c]; 

	                // Determine the class for this choice
	                let choiceClass = "";
                    if (c === my_answer[i]) {
	                    choiceClass = "wrong"; // Mark wrong answers (if selected)
	                }

                    if (choice === dataQuestions.correct_ans) {
                        choiceClass = "correct"; // Mark correct answers
                    }

	                // Add the choice with the determined class
	                choicesHtml += `
	                    <div class="prev_choices ${choiceClass}">
	                        ${c + 1}) ${choice}
	                    </div>
	                `;
	            }

	            // Append the accumulated choices to the corresponding question container
	            $(".prev_question_con").last().append(choicesHtml);

	            // Correct Explanation and Poster name
	            $(".prev_question_con").last().append(`
	            	<div class="question_explanation">
	            		<div><b>Correct Explanation:</b></div>
	            		<p style="font-size:15px">
	            			${dataQuestions.explanation}
	            		</p>
	            	</div>
            		<div class="poster_name_for_prev_question">
            			This data question is submitted by ${dataQuestions.poster_name}
            		</div>
	            `);
			}
		break;

        case 1:
            for (let i = 0; i < numbers_of_quiz_questions; i++) {
                dataUniqueRandomArrayQuestionsIndexes = uniqueRandomArrayQuestions_01[i];
                dataQuestions = data_01[dataUniqueRandomArrayQuestionsIndexes];

                $(SELECT.CONTENT_MAIN).append(`
                    <div class="prev_question_con">
                        <div class="prev_question">
                            <div class="answered_time">${answer_time[i]}</div>
                            <div id="wrong_correct_answered_notif" class="c_a_n">${correct_wrong_notif[i]}</div>
                            <span class="question_numbering" id="question_numbering">${i+1}. ) ${dataQuestions.question}</span>
                        <div>
                    </div>
                `);
            
                // Generate and append choices for the current question
                let choicesHtml = ""; // Accumulate HTML for choices
                for (let c = 0; c < 5; c++) {
                    // Access the choice for the current question
                    const choice = prev_choices[i][c]; 

                    // Determine the class for this choice
                    let choiceClass = "";
                    if (c === my_answer[i]) {
                        choiceClass = "wrong"; // Mark wrong answers (if selected)
                    }

                    if (choice === dataQuestions.correct_ans) {
                        choiceClass = "correct"; // Mark correct answers
                    }

                    // Add the choice with the determined class
                    choicesHtml += `
                        <div class="prev_choices ${choiceClass}">
                            ${c + 1}) ${choice}
                        </div>
                    `;
                }

                // Append the accumulated choices to the corresponding question container
                $(".prev_question_con").last().append(choicesHtml);

                // Correct Explanation and Poster name
                $(".prev_question_con").last().append(`
                    <div class="question_explanation">
                        <div><b>Correct Explanation:</b></div>
                        <p style="font-size:15px">
                            ${dataQuestions.explanation}
                        </p>
                    </div>
                    <div class="poster_name_for_prev_question">
                        This data question is submitted by ${dataQuestions.poster_name}
                    </div>
                `);
            }
        break;

        case 2:
            for (let i = 0; i < numbers_of_quiz_questions; i++) {
                dataUniqueRandomArrayQuestionsIndexes = uniqueRandomArrayQuestions_02[i];
                dataQuestions = data_02[dataUniqueRandomArrayQuestionsIndexes];

                $(SELECT.CONTENT_MAIN).append(`
                    <div class="prev_question_con">
                        <div class="prev_question">
                            <div class="answered_time">${answer_time[i]}</div>
                            <div id="wrong_correct_answered_notif" class="c_a_n">${correct_wrong_notif[i]}</div>
                            <span class="question_numbering" id="question_numbering">${i+1}. ) ${dataQuestions.question}</span>
                        <div>
                    </div>
                `);
            
                // Generate and append choices for the current question
                let choicesHtml = ""; // Accumulate HTML for choices
                for (let c = 0; c < 5; c++) {
                    // Access the choice for the current question
                    const choice = prev_choices[i][c]; 

                    // Determine the class for this choice
                    let choiceClass = "";
                    if (c === my_answer[i]) {
                        choiceClass = "wrong"; // Mark wrong answers (if selected)
                    }

                    if (choice === dataQuestions.correct_ans) {
                        choiceClass = "correct"; // Mark correct answers
                    }

                    // Add the choice with the determined class
                    choicesHtml += `
                        <div class="prev_choices ${choiceClass}">
                            ${c + 1}) ${choice}
                        </div>
                    `;
                }

                // Append the accumulated choices to the corresponding question container
                $(".prev_question_con").last().append(choicesHtml);

                // Correct Explanation and Poster name
                $(".prev_question_con").last().append(`
                    <div class="question_explanation">
                        <div><b>Correct Explanation:</b></div>
                        <p style="font-size:15px">
                            ${dataQuestions.explanation}
                        </p>
                    </div>
                    <div class="poster_name_for_prev_question">
                        This data question is submitted by ${dataQuestions.poster_name}
                    </div>
                `);
            }
        break;

		case 3:
            for (let i = 0; i < numbers_of_quiz_questions; i++) {
                dataUniqueRandomArrayQuestionsIndexes = uniqueRandomArrayQuestions_03[i];
                dataQuestions = data_03[dataUniqueRandomArrayQuestionsIndexes];

                $(SELECT.CONTENT_MAIN).append(`
                    <div class="prev_question_con">
                        <div class="prev_question">
                            <div class="answered_time">${answer_time[i]}</div>
                            <div id="wrong_correct_answered_notif" class="c_a_n">${correct_wrong_notif[i]}</div>
                            <span class="question_numbering" id="question_numbering">${i+1}. ) ${dataQuestions.question}</span>
                        <div>
                    </div>
                `);
            
                // Generate and append choices for the current question
                let choicesHtml = ""; // Accumulate HTML for choices
                for (let c = 0; c < 5; c++) {
                    // Access the choice for the current question
                    const choice = prev_choices[i][c]; 

                    // Determine the class for this choice
                    let choiceClass = "";
                    if (c === my_answer[i]) {
                        choiceClass = "wrong"; // Mark wrong answers (if selected)
                    }

                    if (choice === dataQuestions.correct_ans) {
                        choiceClass = "correct"; // Mark correct answers
                    }

                    // Add the choice with the determined class
                    choicesHtml += `
                        <div class="prev_choices ${choiceClass}">
                            ${c + 1}) ${choice}
                        </div>
                    `;
                }

                // Append the accumulated choices to the corresponding question container
                $(".prev_question_con").last().append(choicesHtml);

                // Correct Explanation and Poster name
                $(".prev_question_con").last().append(`
                    <div class="question_explanation">
                        <div><b>Correct Explanation:</b></div>
                        <p style="font-size:15px">
                            ${dataQuestions.explanation}
                        </p>
                    </div>
                    <div class="poster_name_for_prev_question">
                        This data question is submitted by ${dataQuestions.poster_name}
                    </div>
                `);
            }
        break;

		case 4:
            for (let i = 0; i < numbers_of_quiz_questions; i++) {
                dataUniqueRandomArrayQuestionsIndexes = uniqueRandomArrayQuestions_04[i];
                dataQuestions = data_04[dataUniqueRandomArrayQuestionsIndexes];

                $(SELECT.CONTENT_MAIN).append(`
                    <div class="prev_question_con">
                        <div class="prev_question">
                            <div class="answered_time">${answer_time[i]}</div>
                            <div id="wrong_correct_answered_notif" class="c_a_n">${correct_wrong_notif[i]}</div>
                            <span class="question_numbering" id="question_numbering">${i+1}. ) ${dataQuestions.question}</span>
                        <div>
                    </div>
                `);
            
                // Generate and append choices for the current question
                let choicesHtml = ""; // Accumulate HTML for choices
                for (let c = 0; c < 5; c++) {
                    // Access the choice for the current question
                    const choice = prev_choices[i][c]; 

                    // Determine the class for this choice
                    let choiceClass = "";
                    if (c === my_answer[i]) {
                        choiceClass = "wrong"; // Mark wrong answers (if selected)
                    }

                    if (choice === dataQuestions.correct_ans) {
                        choiceClass = "correct"; // Mark correct answers
                    }

                    // Add the choice with the determined class
                    choicesHtml += `
                        <div class="prev_choices ${choiceClass}">
                            ${c + 1}) ${choice}
                        </div>
                    `;
                }

                // Append the accumulated choices to the corresponding question container
                $(".prev_question_con").last().append(choicesHtml);

                // Correct Explanation and Poster name
                $(".prev_question_con").last().append(`
                    <div class="question_explanation">
                        <div><b>Correct Explanation:</b></div>
                        <p style="font-size:15px">
                            ${dataQuestions.explanation}
                        </p>
                    </div>
                    <div class="poster_name_for_prev_question">
                        This data question is submitted by ${dataQuestions.poster_name}
                    </div>
                `);
            }
		break;
		case 5:
            for (let i = 0; i < numbers_of_quiz_questions; i++) {
                dataUniqueRandomArrayQuestionsIndexes = uniqueRandomArrayQuestions_05[i];
                dataQuestions = data_05[dataUniqueRandomArrayQuestionsIndexes];

                $(SELECT.CONTENT_MAIN).append(`
                    <div class="prev_question_con">
                        <div class="prev_question">
                            <div class="answered_time">${answer_time[i]}</div>
                            <div id="wrong_correct_answered_notif" class="c_a_n">${correct_wrong_notif[i]}</div>
                            <span class="question_numbering" id="question_numbering">${i+1}. ) ${dataQuestions.question}</span>
                        <div>
                    </div>
                `);
            
                // Generate and append choices for the current question
                let choicesHtml = ""; // Accumulate HTML for choices
                for (let c = 0; c < 5; c++) {
                    // Access the choice for the current question
                    const choice = prev_choices[i][c]; 

                    // Determine the class for this choice
                    let choiceClass = "";
                    if (c === my_answer[i]) {
                        choiceClass = "wrong"; // Mark wrong answers (if selected)
                    }

                    if (choice === dataQuestions.correct_ans) {
                        choiceClass = "correct"; // Mark correct answers
                    }

                    // Add the choice with the determined class
                    choicesHtml += `
                        <div class="prev_choices ${choiceClass}">
                            ${c + 1}) ${choice}
                        </div>
                    `;
                }

                // Append the accumulated choices to the corresponding question container
                $(".prev_question_con").last().append(choicesHtml);

                // Correct Explanation and Poster name
                $(".prev_question_con").last().append(`
                    <div class="question_explanation">
                        <div><b>Correct Explanation:</b></div>
                        <p style="font-size:15px">
                            ${dataQuestions.explanation}
                        </p>
                    </div>
                    <div class="poster_name_for_prev_question">
                        This data question is submitted by ${dataQuestions.poster_name}
                    </div>
                `);
            }
		break;
		case 6:
            for (let i = 0; i < numbers_of_quiz_questions; i++) {
                dataUniqueRandomArrayQuestionsIndexes = uniqueRandomArrayQuestions_06[i];
                dataQuestions = data_06[dataUniqueRandomArrayQuestionsIndexes];

                $(SELECT.CONTENT_MAIN).append(`
                    <div class="prev_question_con">
                        <div class="prev_question">
                            <div class="answered_time">${answer_time[i]}</div>
                            <div id="wrong_correct_answered_notif" class="c_a_n">${correct_wrong_notif[i]}</div>
                            <span class="question_numbering" id="question_numbering">${i+1}. ) ${dataQuestions.question}</span>
                        <div>
                    </div>
                `);
            
                // Generate and append choices for the current question
                let choicesHtml = ""; // Accumulate HTML for choices
                for (let c = 0; c < 5; c++) {
                    // Access the choice for the current question
                    const choice = prev_choices[i][c]; 

                    // Determine the class for this choice
                    let choiceClass = "";
                    if (c === my_answer[i]) {
                        choiceClass = "wrong"; // Mark wrong answers (if selected)
                    }

                    if (choice === dataQuestions.correct_ans) {
                        choiceClass = "correct"; // Mark correct answers
                    }

                    // Add the choice with the determined class
                    choicesHtml += `
                        <div class="prev_choices ${choiceClass}">
                            ${c + 1}) ${choice}
                        </div>
                    `;
                }

                // Append the accumulated choices to the corresponding question container
                $(".prev_question_con").last().append(choicesHtml);

                // Correct Explanation and Poster name
                $(".prev_question_con").last().append(`
                    <div class="question_explanation">
                        <div><b>Correct Explanation:</b></div>
                        <p style="font-size:15px">
                            ${dataQuestions.explanation}
                        </p>
                    </div>
                    <div class="poster_name_for_prev_question">
                        This data question is submitted by ${dataQuestions.poster_name}
                    </div>
                `);
            }
		break;
		case 7:
            for (let i = 0; i < numbers_of_quiz_questions; i++) {
                dataUniqueRandomArrayQuestionsIndexes = uniqueRandomArrayQuestions_07[i];
                dataQuestions = data_07[dataUniqueRandomArrayQuestionsIndexes];

                $(SELECT.CONTENT_MAIN).append(`
                    <div class="prev_question_con">
                        <div class="prev_question">
                            <div class="answered_time">${answer_time[i]}</div>
                            <div id="wrong_correct_answered_notif" class="c_a_n">${correct_wrong_notif[i]}</div>
                            <span class="question_numbering" id="question_numbering">${i+1}. ) ${dataQuestions.question}</span>
                        <div>
                    </div>
                `);
            
                // Generate and append choices for the current question
                let choicesHtml = ""; // Accumulate HTML for choices
                for (let c = 0; c < 5; c++) {
                    // Access the choice for the current question
                    const choice = prev_choices[i][c]; 

                    // Determine the class for this choice
                    let choiceClass = "";
                    if (c === my_answer[i]) {
                        choiceClass = "wrong"; // Mark wrong answers (if selected)
                    }

                    if (choice === dataQuestions.correct_ans) {
                        choiceClass = "correct"; // Mark correct answers
                    }

                    // Add the choice with the determined class
                    choicesHtml += `
                        <div class="prev_choices ${choiceClass}">
                            ${c + 1}) ${choice}
                        </div>
                    `;
                }

                // Append the accumulated choices to the corresponding question container
                $(".prev_question_con").last().append(choicesHtml);

                // Correct Explanation and Poster name
                $(".prev_question_con").last().append(`
                    <div class="question_explanation">
                        <div><b>Correct Explanation:</b></div>
                        <p style="font-size:15px">
                            ${dataQuestions.explanation}
                        </p>
                    </div>
                    <div class="poster_name_for_prev_question">
                        This data question is submitted by ${dataQuestions.poster_name}
                    </div>
                `);
            }
		break;
		case 8:
            for (let i = 0; i < numbers_of_quiz_questions; i++) {
                dataUniqueRandomArrayQuestionsIndexes = uniqueRandomArrayQuestions_08[i];
                dataQuestions = data_08[dataUniqueRandomArrayQuestionsIndexes];

                $(SELECT.CONTENT_MAIN).append(`
                    <div class="prev_question_con">
                        <div class="prev_question">
                            <div class="answered_time">${answer_time[i]}</div>
                            <div id="wrong_correct_answered_notif" class="c_a_n">${correct_wrong_notif[i]}</div>
                            <span class="question_numbering" id="question_numbering">${i+1}. ) ${dataQuestions.question}</span>
                        <div>
                    </div>
                `);
            
                // Generate and append choices for the current question
                let choicesHtml = ""; // Accumulate HTML for choices
                for (let c = 0; c < 5; c++) {
                    // Access the choice for the current question
                    const choice = prev_choices[i][c]; 

                    // Determine the class for this choice
                    let choiceClass = "";
                    if (c === my_answer[i]) {
                        choiceClass = "wrong"; // Mark wrong answers (if selected)
                    }

                    if (choice === dataQuestions.correct_ans) {
                        choiceClass = "correct"; // Mark correct answers
                    }

                    // Add the choice with the determined class
                    choicesHtml += `
                        <div class="prev_choices ${choiceClass}">
                            ${c + 1}) ${choice}
                        </div>
                    `;
                }

                // Append the accumulated choices to the corresponding question container
                $(".prev_question_con").last().append(choicesHtml);

                // Correct Explanation and Poster name
                $(".prev_question_con").last().append(`
                    <div class="question_explanation">
                        <div><b>Correct Explanation:</b></div>
                        <p style="font-size:15px">
                            ${dataQuestions.explanation}
                        </p>
                    </div>
                    <div class="poster_name_for_prev_question">
                        This data question is submitted by ${dataQuestions.poster_name}
                    </div>
                `);
            }
		break;
		case 9:
            for (let i = 0; i < numbers_of_quiz_questions; i++) {
                dataUniqueRandomArrayQuestionsIndexes = uniqueRandomArrayQuestions_09[i];
                dataQuestions = data_09[dataUniqueRandomArrayQuestionsIndexes];

                $(SELECT.CONTENT_MAIN).append(`
                    <div class="prev_question_con">
                        <div class="prev_question">
                            <div class="answered_time">${answer_time[i]}</div>
                            <div id="wrong_correct_answered_notif" class="c_a_n">${correct_wrong_notif[i]}</div>
                            <span class="question_numbering" id="question_numbering">${i+1}. ) ${dataQuestions.question}</span>
                        <div>
                    </div>
                `);
            
                // Generate and append choices for the current question
                let choicesHtml = ""; // Accumulate HTML for choices
                for (let c = 0; c < 5; c++) {
                    // Access the choice for the current question
                    const choice = prev_choices[i][c]; 

                    // Determine the class for this choice
                    let choiceClass = "";
                    if (c === my_answer[i]) {
                        choiceClass = "wrong"; // Mark wrong answers (if selected)
                    }

                    if (choice === dataQuestions.correct_ans) {
                        choiceClass = "correct"; // Mark correct answers
                    }

                    // Add the choice with the determined class
                    choicesHtml += `
                        <div class="prev_choices ${choiceClass}">
                            ${c + 1}) ${choice}
                        </div>
                    `;
                }

                // Append the accumulated choices to the corresponding question container
                $(".prev_question_con").last().append(choicesHtml);

                // Correct Explanation and Poster name
                $(".prev_question_con").last().append(`
                    <div class="question_explanation">
                        <div><b>Correct Explanation:</b></div>
                        <p style="font-size:15px">
                            ${dataQuestions.explanation}
                        </p>
                    </div>
                    <div class="poster_name_for_prev_question">
                        This data question is submitted by ${dataQuestions.poster_name}
                    </div>
                `);
            }
		break;
		case 10:
            for (let i = 0; i < numbers_of_quiz_questions; i++) {
                dataUniqueRandomArrayQuestionsIndexes = uniqueRandomArrayQuestions_10[i];
                dataQuestions = data_10[dataUniqueRandomArrayQuestionsIndexes];

                $(SELECT.CONTENT_MAIN).append(`
                    <div class="prev_question_con">
                        <div class="prev_question">
                            <div class="answered_time">${answer_time[i]}</div>
                            <div id="wrong_correct_answered_notif" class="c_a_n">${correct_wrong_notif[i]}</div>
                            <span class="question_numbering" id="question_numbering">${i+1}. ) ${dataQuestions.question}</span>
                        <div>
                    </div>
                `);
            
                // Generate and append choices for the current question
                let choicesHtml = ""; // Accumulate HTML for choices
                for (let c = 0; c < 5; c++) {
                    // Access the choice for the current question
                    const choice = prev_choices[i][c]; 

                    // Determine the class for this choice
                    let choiceClass = "";
                    if (c === my_answer[i]) {
                        choiceClass = "wrong"; // Mark wrong answers (if selected)
                    }

                    if (choice === dataQuestions.correct_ans) {
                        choiceClass = "correct"; // Mark correct answers
                    }

                    // Add the choice with the determined class
                    choicesHtml += `
                        <div class="prev_choices ${choiceClass}">
                            ${c + 1}) ${choice}
                        </div>
                    `;
                }

                // Append the accumulated choices to the corresponding question container
                $(".prev_question_con").last().append(choicesHtml);

                // Correct Explanation and Poster name
                $(".prev_question_con").last().append(`
                    <div class="question_explanation">
                        <div><b>Correct Explanation:</b></div>
                        <p style="font-size:15px">
                            ${dataQuestions.explanation}
                        </p>
                    </div>
                    <div class="poster_name_for_prev_question">
                        This data question is submitted by ${dataQuestions.poster_name}
                    </div>
                `);
            }
		break;
		case 11:
            for (let i = 0; i < numbers_of_quiz_questions; i++) {
                dataUniqueRandomArrayQuestionsIndexes = uniqueRandomArrayQuestions_11[i];
                dataQuestions = data_11[dataUniqueRandomArrayQuestionsIndexes];

                $(SELECT.CONTENT_MAIN).append(`
                    <div class="prev_question_con">
                        <div class="prev_question">
                            <div class="answered_time">${answer_time[i]}</div>
                            <div id="wrong_correct_answered_notif" class="c_a_n">${correct_wrong_notif[i]}</div>
                            <span class="question_numbering" id="question_numbering">${i+1}. ) ${dataQuestions.question}</span>
                        <div>
                    </div>
                `);
            
                // Generate and append choices for the current question
                let choicesHtml = ""; // Accumulate HTML for choices
                for (let c = 0; c < 5; c++) {
                    // Access the choice for the current question
                    const choice = prev_choices[i][c]; 

                    // Determine the class for this choice
                    let choiceClass = "";
                    if (c === my_answer[i]) {
                        choiceClass = "wrong"; // Mark wrong answers (if selected)
                    }

                    if (choice === dataQuestions.correct_ans) {
                        choiceClass = "correct"; // Mark correct answers
                    }

                    // Add the choice with the determined class
                    choicesHtml += `
                        <div class="prev_choices ${choiceClass}">
                            ${c + 1}) ${choice}
                        </div>
                    `;
                }

                // Append the accumulated choices to the corresponding question container
                $(".prev_question_con").last().append(choicesHtml);

                // Correct Explanation and Poster name
                $(".prev_question_con").last().append(`
                    <div class="question_explanation">
                        <div><b>Correct Explanation:</b></div>
                        <p style="font-size:15px">
                            ${dataQuestions.explanation}
                        </p>
                    </div>
                    <div class="poster_name_for_prev_question">
                        This data question is submitted by ${dataQuestions.poster_name}
                    </div>
                `);
            }
		break;
		case 12:
            for (let i = 0; i < numbers_of_quiz_questions; i++) {
                dataUniqueRandomArrayQuestionsIndexes = uniqueRandomArrayQuestions_12[i];
                dataQuestions = data_12[dataUniqueRandomArrayQuestionsIndexes];

                $(SELECT.CONTENT_MAIN).append(`
                    <div class="prev_question_con">
                        <div class="prev_question">
                            <div class="answered_time">${answer_time[i]}</div>
                            <div id="wrong_correct_answered_notif" class="c_a_n">${correct_wrong_notif[i]}</div>
                            <span class="question_numbering" id="question_numbering">${i+1}. ) ${dataQuestions.question}</span>
                        <div>
                    </div>
                `);
            
                // Generate and append choices for the current question
                let choicesHtml = ""; // Accumulate HTML for choices
                for (let c = 0; c < 5; c++) {
                    // Access the choice for the current question
                    const choice = prev_choices[i][c]; 

                    // Determine the class for this choice
                    let choiceClass = "";
                    if (c === my_answer[i]) {
                        choiceClass = "wrong"; // Mark wrong answers (if selected)
                    }

                    if (choice === dataQuestions.correct_ans) {
                        choiceClass = "correct"; // Mark correct answers
                    }

                    // Add the choice with the determined class
                    choicesHtml += `
                        <div class="prev_choices ${choiceClass}">
                            ${c + 1}) ${choice}
                        </div>
                    `;
                }

                // Append the accumulated choices to the corresponding question container
                $(".prev_question_con").last().append(choicesHtml);

                // Correct Explanation and Poster name
                $(".prev_question_con").last().append(`
                    <div class="question_explanation">
                        <div><b>Correct Explanation:</b></div>
                        <p style="font-size:15px">
                            ${dataQuestions.explanation}
                        </p>
                    </div>
                    <div class="poster_name_for_prev_question">
                        This data question is submitted by ${dataQuestions.poster_name}
                    </div>
                `);
            }
		break;
		case 13:
            for (let i = 0; i < numbers_of_quiz_questions; i++) {
                dataUniqueRandomArrayQuestionsIndexes = uniqueRandomArrayQuestions_13[i];
                dataQuestions = data_13[dataUniqueRandomArrayQuestionsIndexes];

                $(SELECT.CONTENT_MAIN).append(`
                    <div class="prev_question_con">
                        <div class="prev_question">
                            <div class="answered_time">${answer_time[i]}</div>
                            <div id="wrong_correct_answered_notif" class="c_a_n">${correct_wrong_notif[i]}</div>
                            <span class="question_numbering" id="question_numbering">${i+1}. ) ${dataQuestions.question}</span>
                        <div>
                    </div>
                `);
            
                // Generate and append choices for the current question
                let choicesHtml = ""; // Accumulate HTML for choices
                for (let c = 0; c < 5; c++) {
                    // Access the choice for the current question
                    const choice = prev_choices[i][c]; 

                    // Determine the class for this choice
                    let choiceClass = "";
                    if (c === my_answer[i]) {
                        choiceClass = "wrong"; // Mark wrong answers (if selected)
                    }

                    if (choice === dataQuestions.correct_ans) {
                        choiceClass = "correct"; // Mark correct answers
                    }

                    // Add the choice with the determined class
                    choicesHtml += `
                        <div class="prev_choices ${choiceClass}">
                            ${c + 1}) ${choice}
                        </div>
                    `;
                }

                // Append the accumulated choices to the corresponding question container
                $(".prev_question_con").last().append(choicesHtml);

                // Correct Explanation and Poster name
                $(".prev_question_con").last().append(`
                    <div class="question_explanation">
                        <div><b>Correct Explanation:</b></div>
                        <p style="font-size:15px">
                            ${dataQuestions.explanation}
                        </p>
                    </div>
                    <div class="poster_name_for_prev_question">
                        This data question is submitted by ${dataQuestions.poster_name}
                    </div>
                `);
            }
		break;
		case 14:
            for (let i = 0; i < numbers_of_quiz_questions; i++) {
                dataUniqueRandomArrayQuestionsIndexes = uniqueRandomArrayQuestions_14[i];
                dataQuestions = data_14[dataUniqueRandomArrayQuestionsIndexes];

                $(SELECT.CONTENT_MAIN).append(`
                    <div class="prev_question_con">
                        <div class="prev_question">
                            <div class="answered_time">${answer_time[i]}</div>
                            <div id="wrong_correct_answered_notif" class="c_a_n">${correct_wrong_notif[i]}</div>
                            <span class="question_numbering" id="question_numbering">${i+1}. ) ${dataQuestions.question}</span>
                        <div>
                    </div>
                `);
            
                // Generate and append choices for the current question
                let choicesHtml = ""; // Accumulate HTML for choices
                for (let c = 0; c < 5; c++) {
                    // Access the choice for the current question
                    const choice = prev_choices[i][c]; 

                    // Determine the class for this choice
                    let choiceClass = "";
                    if (c === my_answer[i]) {
                        choiceClass = "wrong"; // Mark wrong answers (if selected)
                    }

                    if (choice === dataQuestions.correct_ans) {
                        choiceClass = "correct"; // Mark correct answers
                    }

                    // Add the choice with the determined class
                    choicesHtml += `
                        <div class="prev_choices ${choiceClass}">
                            ${c + 1}) ${choice}
                        </div>
                    `;
                }

                // Append the accumulated choices to the corresponding question container
                $(".prev_question_con").last().append(choicesHtml);

                // Correct Explanation and Poster name
                $(".prev_question_con").last().append(`
                    <div class="question_explanation">
                        <div><b>Correct Explanation:</b></div>
                        <p style="font-size:15px">
                            ${dataQuestions.explanation}
                        </p>
                    </div>
                    <div class="poster_name_for_prev_question">
                        This data question is submitted by ${dataQuestions.poster_name}
                    </div>
                `);
            }
		break;
	}

	tooltip_counter++; 
    if (tooltip_counter == 1) {
        setTimeout(function() {
            $(".prev_choices.correct").append("<div class='tooltip_for_prev_display correct'>Correct answer.</div>");
            $(".prev_choices.wrong").append("<div class='tooltip_for_prev_display wrong'>Your answer.</div>");
        }, 100);
    }

    if (isReviewingResultViaScoreBoard) {
        $(SELECT.CONTENT_FOOTER).html(`
            <div style="font-size:13px"><strong>Please note</strong>: <br/>The Passing Grade is ${passing_grade}.00% and above</div>
        `);
        $(SELECT.CONTENT_FOOTER).append(`
            <div class="scoreboard_review_ans_con">
                <button onclick="showResult()" class="scoreboard_back_to_result_btn">Return to Result Page</button>
                <button onclick="selectedQuiz(${topicIndex})" class="scoreboard_retake_quiz ripple-btn">Retake Quiz</button>
            </div>
            
        `);
    }
    else {
        $(SELECT.CONTENT_FOOTER).append(`
            <div class="review_ans_con">
                <button onclick="selectedQuiz(${selectedTopicID})" class="retake_quiz ripple-btn">Retake Quiz</button>
            </div>
            
        `);
        $(SELECT.CONTENT_FOOTER).append(`
            <div class="review_ans_con">
                <button onclick="showResult()" class="back_to_result_btn">Return to Result Page</button>
            </div>
        `);
    }

    // Scroll to top the content-main
    const contentMain = document.getElementsByClassName('content-main')[0];
    contentMain.scrollTo(0, 0);
}


// Restart Questions Data for Quiz
function restartQuestionsForQuiz() {
	// Reset the question numbering
	questionNumbering = 0;

	// Reset, if the examinee accidentally/intention click the create exam (BUG No. 1)
	isTakingExam = false;

	// Reset the prev questions and choices
	prev_questions = [];
	prev_choices = [];

	// Reset the score
	score = 0;

	// Reset my_answer
	my_answer = [];

	// Reset the answered time
	answer_time = [];

	// Reset the correct wrong notifcation
	correct_wrong_notif = [];

    // Reset to avoid bug
    isReviewingResultViaScoreBoard = false;

    // Reset the tooltip
    tooltip_counter = 0;

    // generate random and unique ID questions, make not repetitive question displayed to user
    uniqueRandomArrayQuestions_00 = uniqueRandomQuestion(0, (data_00.length - 1), numbers_of_quiz_questions);
    uniqueRandomArrayQuestions_01 = uniqueRandomQuestion(0, (data_01.length - 1), numbers_of_quiz_questions);
    uniqueRandomArrayQuestions_02 = uniqueRandomQuestion(0, (data_02.length - 1), numbers_of_quiz_questions);
    uniqueRandomArrayQuestions_03 = uniqueRandomQuestion(0, (data_03.length - 1), numbers_of_quiz_questions);
    uniqueRandomArrayQuestions_04 = uniqueRandomQuestion(0, (data_04.length - 1), numbers_of_quiz_questions);
    uniqueRandomArrayQuestions_05 = uniqueRandomQuestion(0, (data_05.length - 1), numbers_of_quiz_questions);
    uniqueRandomArrayQuestions_06 = uniqueRandomQuestion(0, (data_06.length - 1), numbers_of_quiz_questions);
    uniqueRandomArrayQuestions_07 = uniqueRandomQuestion(0, (data_07.length - 1), numbers_of_quiz_questions);
    uniqueRandomArrayQuestions_08 = uniqueRandomQuestion(0, (data_08.length - 1), numbers_of_quiz_questions);
    uniqueRandomArrayQuestions_09 = uniqueRandomQuestion(0, (data_09.length - 1), numbers_of_quiz_questions);
    uniqueRandomArrayQuestions_10 = uniqueRandomQuestion(0, (data_10.length - 1), numbers_of_quiz_questions);
    uniqueRandomArrayQuestions_11 = uniqueRandomQuestion(0, (data_11.length - 1), numbers_of_quiz_questions);
    uniqueRandomArrayQuestions_12 = uniqueRandomQuestion(0, (data_12.length - 1), numbers_of_quiz_questions);
    uniqueRandomArrayQuestions_13 = uniqueRandomQuestion(0, (data_13.length - 1), numbers_of_quiz_questions);
    uniqueRandomArrayQuestions_14 = uniqueRandomQuestion(0, (data_14.length - 1), numbers_of_quiz_questions);

    return "Questions for Quizzes is restarted.";
}
