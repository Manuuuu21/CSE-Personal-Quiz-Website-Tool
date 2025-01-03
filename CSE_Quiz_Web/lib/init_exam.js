
function createExam() {
	let quizButtonElem = document.getElementsByClassName("quiz-button");
	let quizButtonIcon = document.getElementsByClassName("quiz-icon-container");

	// Loop through all choices and Reset background color for all topic
	for (var i = 0; i < quizButtonElem.length; i++) {
		quizButtonElem[i].style.backgroundColor = "";
		quizButtonElem[i].style.border = "";
		quizButtonElem[i].style.transition = "";
		quizButtonIcon[i].innerHTML = `${icon.bookmark_outline}`;
	}

	// Declare the user taking exam to true.
	isTakingExam = true;

	// Since we taking exam, set it to false
	isTakingQuiz = false;

	// stop the timer and reset the timerInitiateCounter
	stop_timer();
	timerCounterForGlobal = 0;

    // If AutoSubmit is set to true. stop the autosubmit
    if (isAutoSubmit) {
        stopAutoSubmit();
    }

    // Set the title for the selectedtopicId is 15 which is for the Exam.
    selectedTopicID = 15;

    // setting the user_numbers_of_questions for Global calculation of result for both Quiz and Exam
    user_numbers_of_questions = numbers_of_exam_questions;

	// Show the details of Exam
	$(SELECT.CONTENT_MAIN).html(`
		<h2>YOU ARE CURRENTLY TAKING EXAM RELATED TO:</h2>
        <p><b>Topic:</b> ` + topics[selectedTopicID] + `. <br/><i style="font-size:12px">(All questions from the quizzes will be displayed here!)</i></p>
        <p><b>Total No. of Questions:</b> ` + numbers_of_exam_questions + ` Questions. <br/><i style="font-size:12px">(The first 20 questions of the Civil Service Examination pertain to personal information; therefore, I have not included them here.)</i></p>
        <p><b>Passing Grade:</b> ` + passing_grade + `.00% and above.</p>
        <b>NUMBERS OF QUESTIONS PER MAJOR TOPICS:</b>
        <div><b>General Information:</b> ` + numbers_exam_at_general_info + ` Questions (${((numbers_exam_at_general_info/150) * 100).toFixed(2)}%)</div>
        <div><b>Numerical Ability:</b> ` + numbers_exam_at_numberical_ability + ` Questions (${((numbers_exam_at_numberical_ability/150) * 100).toFixed(2)}%)</div>
        <div><b>Analytical Ability:</b> ` + numbers_exam_at_analytical_ability + ` Questions (${((numbers_exam_at_analytical_ability/150) * 100).toFixed(2)}%)</div>
        <div><b>Verbal Ability:</b> ` + numbers_exam_at_verbal_ability + ` Questions (${((numbers_exam_at_verbal_ability/150) * 100).toFixed(2)}%)</div>
        <br>
        <button class="button_design ripple-btn" onclick="displayQuestionForExam()">Click to Start Exam</button>
	`);
	$(SELECT.CONTENT_FOOTER).html(`
		&copy; 2023-${currentYear} Manuel Sintos
	`);

	restartQuestionsForExam();
}



function displayQuestionForExam() {
	// Determine the currentTopic based on the questionDataIndex
	let currentTopic;
	let questionDataIndex;

	// For set of Questions of General Informations
    if (questionNumbering < 5) {
        currentTopic = data_00;
        questionDataIndex = uniqueRandomArrayQuestions_00[questionNumbering];

        // Fetch and display the questions and choices for the selected topic.
        fetchExamQuestionAndChoices(currentTopic[questionDataIndex]);
        $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_00);
    }
    else if (questionNumbering < 10) {
        currentTopic = data_01;
        questionDataIndex = uniqueRandomArrayQuestions_01[questionNumbering - 5];

        // Fetch and display the questions and choices for the selected topic.
        fetchExamQuestionAndChoices(currentTopic[questionDataIndex]);
        $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_00);
    }
    else if (questionNumbering < 15) {
        currentTopic = data_02;
        questionDataIndex = uniqueRandomArrayQuestions_02[questionNumbering - 10];

        // Fetch and display the questions and choices for the selected topic.
        fetchExamQuestionAndChoices(currentTopic[questionDataIndex]);
        $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_00);
    }
    else if (questionNumbering < 20) {
        currentTopic = data_03;
        questionDataIndex = uniqueRandomArrayQuestions_03[questionNumbering - 15];

        // Fetch and display the questions and choices for the selected topic.
        fetchExamQuestionAndChoices(currentTopic[questionDataIndex]);
        $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_00);
    }

    // For set of Questions of Numerical Ability
    else if (questionNumbering < 35) {
        currentTopic = data_04;
        questionDataIndex = uniqueRandomArrayQuestions_04[questionNumbering - 20];

        // Fetch and display the questions and choices for the selected topic.
        fetchExamQuestionAndChoices(currentTopic[questionDataIndex]);
        $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_01);
    }
    else if (questionNumbering < 49) {
        currentTopic = data_05;
        questionDataIndex = uniqueRandomArrayQuestions_05[questionNumbering - 35];

        // Fetch and display the questions and choices for the selected topic.
        fetchExamQuestionAndChoices(currentTopic[questionDataIndex]);
        $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_01);
    }
    else if (questionNumbering < 63) {
        currentTopic = data_06;
        questionDataIndex = uniqueRandomArrayQuestions_06[questionNumbering - 49];

        // Fetch and display the questions and choices for the selected topic.
        fetchExamQuestionAndChoices(currentTopic[questionDataIndex]);
        $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_01);
    }

    // For set of Questions of Analytical Ability
    else if (questionNumbering < 74) {
        currentTopic = data_07;
        questionDataIndex = uniqueRandomArrayQuestions_07[questionNumbering - 63];

        // Fetch and display the questions and choices for the selected topic.
        fetchExamQuestionAndChoices(currentTopic[questionDataIndex]);
        $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_02);
    }
    else if (questionNumbering < 85) {
        currentTopic = data_08;
        questionDataIndex = uniqueRandomArrayQuestions_08[questionNumbering - 74];

        // Fetch and display the questions and choices for the selected topic.
        fetchExamQuestionAndChoices(currentTopic[questionDataIndex]);
        $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_02);
    }
    else if (questionNumbering < 96) {
        currentTopic = data_09;
        questionDataIndex = uniqueRandomArrayQuestions_09[questionNumbering - 85];

        // Fetch and display the questions and choices for the selected topic.
        fetchExamQuestionAndChoices(currentTopic[questionDataIndex]);
        $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_02);
    }
    else if (questionNumbering < 106) {
        currentTopic = data_10;
        questionDataIndex = uniqueRandomArrayQuestions_10[questionNumbering - 96];

        // Fetch and display the questions and choices for the selected topic.
        fetchExamQuestionAndChoices(currentTopic[questionDataIndex]);
        $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_02);
    }

    // For set of Questions of Verbal Ability
    else if (questionNumbering < 117) {
        currentTopic = data_11;
        questionDataIndex = uniqueRandomArrayQuestions_11[questionNumbering - 106];

        // Fetch and display the questions and choices for the selected topic.
        fetchExamQuestionAndChoices(currentTopic[questionDataIndex]);
        $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_03);
    }
    else if (questionNumbering < 128) {
        currentTopic = data_12;
        questionDataIndex = uniqueRandomArrayQuestions_12[questionNumbering - 117];

        // Fetch and display the questions and choices for the selected topic.
        fetchExamQuestionAndChoices(currentTopic[questionDataIndex]);
        $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_03);
    }
    else if (questionNumbering < 139) {
        currentTopic = data_13;
        questionDataIndex = uniqueRandomArrayQuestions_13[questionNumbering - 128];

        // Fetch and display the questions and choices for the selected topic.
        fetchExamQuestionAndChoices(currentTopic[questionDataIndex]);
        $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_03);
    }
    else if (questionNumbering < 150) {
        currentTopic = data_14;
        questionDataIndex = uniqueRandomArrayQuestions_14[questionNumbering - 139];

        // Fetch and display the questions and choices for the selected topic.
        fetchExamQuestionAndChoices(currentTopic[questionDataIndex]);
        $(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_EXAM_03);
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
function fetchExamQuestionAndChoices(questionData) {
	$(SELECT.CONTENT_MAIN).html(`
        <div class="instruction_con"><b>Instruction</b>: <span id="instruction"></span></div>
            <div class="question_con">
            <div class="question_counter_con_and_timer">
                <b>Question No. <span class='question_counter' id="question_counter">` + (questionNumbering + 1) + `</span> out of ` + numbers_of_exam_questions + `</b>
                <div title="Questionnaire Timer" class="timer">
                    <svg style="margin: 0 0 -5.5px -3px;" xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22"><path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"/></svg>
                    <span title="Minutes" id="timerMinutes">00</span> : <span title="Seconds" id="timerSeconds">00</span> 
                </div>
            </div>
            <div class="question" id="question"></div>
            <div class="choices_con" id="choices_con"></div>
            <div class="submit_question"><button class="button_design ripple-btn" onclick="submitAnswerForExam()">Submit your answer</button></div>
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
        choicesHTML += "<div class='choices ripple-btn' onclick='checkExamAnswer(" + i + ")'>" + (i + 1) + ") " + choices[i] + "</div>";
    }

    // Set the choices in the HTML
    document.getElementById("choices_con").innerHTML = choicesHTML;
}


// Function to check the answer based on the selected index
function checkExamAnswer(selectedIndexExam) {
    // Declare the selectedAnswerIndex
    selectedAnswerIndex = selectedIndexExam;

    // Lets put this here since the user is selecting his/her answer
	isAnswerSelected = true;

	// Determine the currentTopic based on the questionDataIndex
	let currentTopic;
	let questionDataIndex;

	// Check the number of answered questions for General Information
    if (questionNumbering < 5) {
        currentTopic = data_00;
        questionDataIndex = uniqueRandomArrayQuestions_00[questionNumbering];
    }
    else if (questionNumbering < 10) {
        currentTopic = data_01;
        questionDataIndex = uniqueRandomArrayQuestions_01[questionNumbering - 5];
    }
    else if (questionNumbering < 15) {
        currentTopic = data_02;
        questionDataIndex = uniqueRandomArrayQuestions_02[questionNumbering - 10];
    }
    else if (questionNumbering < 20) {
        currentTopic = data_03;
        questionDataIndex = uniqueRandomArrayQuestions_03[questionNumbering - 15];
    }

    // Check the number of answered questions for Numerical Ability
    else if (questionNumbering < 35) {
        currentTopic = data_04;
        questionDataIndex = uniqueRandomArrayQuestions_04[questionNumbering - 20];
    }
    else if (questionNumbering < 49) {
        currentTopic = data_05;
        questionDataIndex = uniqueRandomArrayQuestions_05[questionNumbering - 35];
    }
    else if (questionNumbering < 63) {
        currentTopic = data_06;
        questionDataIndex = uniqueRandomArrayQuestions_06[questionNumbering - 49];
    }

    // Check the number of answered questions for Analytical Ability
    else if (questionNumbering < 74) {
        currentTopic = data_07;
        questionDataIndex = uniqueRandomArrayQuestions_07[questionNumbering - 63];
    }
    else if (questionNumbering < 85) {
        currentTopic = data_08;
        questionDataIndex = uniqueRandomArrayQuestions_08[questionNumbering - 74];
    }
    else if (questionNumbering < 96) {
        currentTopic = data_09;
        questionDataIndex = uniqueRandomArrayQuestions_09[questionNumbering - 85];
    }
    else if (questionNumbering < 106) {
        currentTopic = data_10;
        questionDataIndex = uniqueRandomArrayQuestions_10[questionNumbering - 96];
    }

    // Check the number of answered questions for Verbal Ability
    else if (questionNumbering < 117) {
        currentTopic = data_11;
        questionDataIndex = uniqueRandomArrayQuestions_11[questionNumbering - 106];
    }
    else if (questionNumbering < 128) {
        currentTopic = data_12;
        questionDataIndex = uniqueRandomArrayQuestions_12[questionNumbering - 117];
    }
    else if (questionNumbering < 139) {
        currentTopic = data_13;
        questionDataIndex = uniqueRandomArrayQuestions_13[questionNumbering - 128];
    }
    else if (questionNumbering < 150) {
        currentTopic = data_14;
        questionDataIndex = uniqueRandomArrayQuestions_14[questionNumbering - 139];
    }

    // Check the user's answer for the exam
    fetchAnswerToCheck(currentTopic[questionDataIndex])

}


// Function to submit an answer
function submitAnswerForExam() {
	switch(disable_non_answer_alert) {
		// You can submit your answer anytime, even if you have not chosen an answer.
		case true:
			// Move to the next Question
		    moveToNextQuestionForExam();
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
		    	moveToNextQuestionForExam();
		    }
		break;
	}
	
    // Reset the isAnswerSelected since the answer has been submitted
	isAnswerSelected = false;
}

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

	// Check if the question counter is on the last items to answer
    if (questionNumbering > (numbers_of_exam_questions-2)) {
        // If this is the last question of the exam, calculate the score
        // Calculate the score
        calculateScore();

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
        calculateScore();
        
        // Push the selected answer to the array database
        my_answer.push(selectedAnswerIndex);
        answer_time.push(`You answered this question in <b>${txtHours} ${txtMinutes} ${seconds} second(s)</b>.`);

        // Reset the selectedAnswer and selectedAnswerIndex after they have been inputted to the my_ans database
        selectedAnswer = undefined;
        selectedAnswerIndex = undefined;

        // Display the next question
        displayQuestionForExam();
    }

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
        correct_wrong_notif.push(correct_logo);

        // For Gen Info Score, need to retrieve the score up 1 to 20 questions
        if (questionNumbering < 20)   {
            genInfoScore++;
        }
        // For Numerical Score, need to retrieve the score up 21 to 63 questions
        else if (questionNumbering < 63) {
            numbericalScore++;
        }
        // For Analytical Score, need to retrieve the score up 64 to 106 questions
        else if (questionNumbering < 106) {
            analyticalScore++;
        }
        // For Verbal Score, need to retrieve the score up 107 to 150 questions
        else if (questionNumbering < 150) {
            verbalScore++;
        }
    }
    else {
        // If not correct
        correct_wrong_notif.push(wrong_logo);
    }
}


/**
 * Function to display exam questions and their choices for a specific topic
 * @param {number} scoreboard_ExamIdNum - The index of the number of topics in the scoreboard
 */
function displayExamPrevQuestionsAndChoices(dataUniqueExamQuestionsIndexes, dataBaseQuestions, numberStart, enabledFirstPagination, enabledSecondPagination) {
    let n = numberStart;

    let dataUniqueRandomArrayQuestionsIndexes;
    let dataQuestions;

    for (let i = 0; i < dataUniqueExamQuestionsIndexes.length; i++) {
        dataUniqueRandomArrayQuestionsIndexes = dataUniqueExamQuestionsIndexes[i];
        dataQuestions = dataBaseQuestions[dataUniqueRandomArrayQuestionsIndexes];

        $(SELECT.CONTENT_MAIN).append(`
            <div class="prev_question_con">
                <div class="prev_question">
                    <div class="answered_time">${answer_time[n]}</div>
                    <div id="wrong_correct_answered_notif" class="c_a_n">${correct_wrong_notif[n]}</div>
                    <span class="question_numbering" id="question_numbering">${n+1}. ) ${dataQuestions.question}</span>
                <div>
            </div>
        `);
    
        // Generate and append choices for the current question
        let choicesHtml = ""; // Accumulate HTML for choices
        for (let c = 0; c < 5; c++) {
            // Access the choice for the current question
            const choice = prev_choices[n][c]; 

            // Determine the class for this choice
            let choiceClass = "";
            if (c === my_answer[n]) {
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

        n++; // Increment 'n' by 1
    }

    tooltip_counter++; 
    if (tooltip_counter == 1) {
        setTimeout(function() {
            $(".prev_choices.correct").append("<div class='tooltip_for_prev_display correct'>Correct answer.</div>");
            $(".prev_choices.wrong").append("<div class='tooltip_for_prev_display wrong'>Your answer.</div>");
        }, 100);
    }

    if (enabledFirstPagination) {
        $(SELECT.CONTENT_MAIN).append(`
            <div class="prev_question_con" style="border:none">
                <div class="prev_question" id="prev_question">
                    <center>
                        <button disabled class="prev_display_review_result_btn" onclick="prev_display_review_result()">${icon.prev} Previous Page</button>
                        <button class="next_display_review_result_btn" onclick="next_display_review_result()">Next Page ${icon.next}</button>
                    </center>
                </div>
            </div>
        `);

        $(SELECT.CONTENT_FOOTER).append(`
            <div class="review_ans_con">
                <button onclick="createExam()" class="retake_quiz ripple-btn">Retake Exam</button>
            </div>
            
        `);
        $(SELECT.CONTENT_FOOTER).append(`
            <div class="review_ans_con">
                <button onclick="showResult()" class="back_to_result_btn">Return to Result Page</button>
            </div>
        `);
    }

    if (enabledSecondPagination) {
        $(SELECT.CONTENT_MAIN).append(`
            <div class="prev_question_con" style="border:none">
                <div class="prev_question" id="prev_question">
                    <center>
                        <button class="prev_display_review_result_btn" onclick="prev_display_review_result()">${icon.prev} Previous Page</button>
                        <button disabled class="next_display_review_result_btn" onclick="next_display_review_result()">Next Page ${icon.next}</button>
                    </center>
                </div>
            </div>
        `);
    }


}



function reviewed_ans_for_exam(scoreboard_ExamIdNum) {
    scoreboard_dataIndex = scoreboard_ExamIdNum;
    isTakingExam = true;

    // Reset first the content-main
    $(SELECT.CONTENT_MAIN).html(``);
    $(SELECT.CONTENT_FOOTER).html(``);

    if (isReviewingResultViaScoreBoard) {
        uniqueRandomArrayQuestions_00 = scoreboard_exam_uniqueQuestionsId_00[scoreboard_dataIndex];
        uniqueRandomArrayQuestions_01 = scoreboard_exam_uniqueQuestionsId_01[scoreboard_dataIndex];
        uniqueRandomArrayQuestions_02 = scoreboard_exam_uniqueQuestionsId_02[scoreboard_dataIndex];
        uniqueRandomArrayQuestions_03 = scoreboard_exam_uniqueQuestionsId_03[scoreboard_dataIndex];
        uniqueRandomArrayQuestions_04 = scoreboard_exam_uniqueQuestionsId_04[scoreboard_dataIndex];
        uniqueRandomArrayQuestions_05 = scoreboard_exam_uniqueQuestionsId_05[scoreboard_dataIndex];
        uniqueRandomArrayQuestions_06 = scoreboard_exam_uniqueQuestionsId_06[scoreboard_dataIndex];
        uniqueRandomArrayQuestions_07 = scoreboard_exam_uniqueQuestionsId_07[scoreboard_dataIndex];

        prev_choices = scoreboard_exam_choices[scoreboard_dataIndex];
        my_answer = scoreboard_exam_my_answer[scoreboard_dataIndex];
        answer_time = scoreboard_exam_answer_time[scoreboard_dataIndex];
        correct_wrong_notif = scoreboard_exam_correct_wrong_notif[scoreboard_dataIndex];
    }

    displayExamPrevQuestionsAndChoices(uniqueRandomArrayQuestions_00, data_00, 0, false, false);
    displayExamPrevQuestionsAndChoices(uniqueRandomArrayQuestions_01, data_01, 5, false, false);
    displayExamPrevQuestionsAndChoices(uniqueRandomArrayQuestions_02, data_02, 10, false, false);
    displayExamPrevQuestionsAndChoices(uniqueRandomArrayQuestions_03, data_03, 15, false, false);
    displayExamPrevQuestionsAndChoices(uniqueRandomArrayQuestions_04, data_04, 20, false, false);
    displayExamPrevQuestionsAndChoices(uniqueRandomArrayQuestions_05, data_05, 35, false, false);
    displayExamPrevQuestionsAndChoices(uniqueRandomArrayQuestions_06, data_06, 49, false, false);
    displayExamPrevQuestionsAndChoices(uniqueRandomArrayQuestions_07, data_07, 63, true, false);
}

function reviewed_ans_next_for_exam(scoreboard_ExamNextIdNum) {
    scoreboard_dataIndex = scoreboard_ExamNextIdNum;

    // Reset first the content-main
    $(SELECT.CONTENT_MAIN).html(``);

    if (isReviewingResultViaScoreBoard) {
        uniqueRandomArrayQuestions_08 = scoreboard_exam_uniqueQuestionsId_08[scoreboard_dataIndex];
        uniqueRandomArrayQuestions_09 = scoreboard_exam_uniqueQuestionsId_09[scoreboard_dataIndex];
        uniqueRandomArrayQuestions_10 = scoreboard_exam_uniqueQuestionsId_10[scoreboard_dataIndex];
        uniqueRandomArrayQuestions_11 = scoreboard_exam_uniqueQuestionsId_11[scoreboard_dataIndex];
        uniqueRandomArrayQuestions_12 = scoreboard_exam_uniqueQuestionsId_12[scoreboard_dataIndex];
        uniqueRandomArrayQuestions_13 = scoreboard_exam_uniqueQuestionsId_13[scoreboard_dataIndex];
        uniqueRandomArrayQuestions_14 = scoreboard_exam_uniqueQuestionsId_14[scoreboard_dataIndex];

        prev_choices = scoreboard_exam_choices[scoreboard_dataIndex];
        my_answer = scoreboard_exam_my_answer[scoreboard_dataIndex];
        answer_time = scoreboard_exam_answer_time[scoreboard_dataIndex];
        correct_wrong_notif = scoreboard_exam_correct_wrong_notif[scoreboard_dataIndex];
    }

    displayExamPrevQuestionsAndChoices(uniqueRandomArrayQuestions_08, data_08, 74, false, false);
    displayExamPrevQuestionsAndChoices(uniqueRandomArrayQuestions_09, data_09, 85, false, false);
    displayExamPrevQuestionsAndChoices(uniqueRandomArrayQuestions_10, data_10, 96, false, false);
    displayExamPrevQuestionsAndChoices(uniqueRandomArrayQuestions_11, data_11, 106, false, false);
    displayExamPrevQuestionsAndChoices(uniqueRandomArrayQuestions_12, data_12, 117, false, false);
    displayExamPrevQuestionsAndChoices(uniqueRandomArrayQuestions_13, data_13, 128, false, false);
    displayExamPrevQuestionsAndChoices(uniqueRandomArrayQuestions_14, data_14, 139, false, true);
}

function prev_display_review_result() {
    // Reset the tooltip
    tooltip_counter = 0;

    // Scroll to the top of the content section
    const contentMain = document.getElementsByClassName('content-main')[0];
    contentMain.scrollTo(0, 0);

    reviewed_ans_for_exam(`${scoreboard_dataIndex}`);
}

function next_display_review_result() {
    // Reset the tooltip
    tooltip_counter = 0;

    // Scroll to the top of the content section
    const contentMain = document.getElementsByClassName('content-main')[0];
    contentMain.scrollTo(0, 0);

    reviewed_ans_next_for_exam(`${scoreboard_dataIndex}`);
}

// Restart Questions Data for Exam
function restartQuestionsForExam() {
	// Reset the question numbering
	questionNumbering = 0;

	// Reset, if the use accidentally/intention click the quiz (BUG No. 1)
	isTakingQuiz = false;

	// Reset the prev questions and choices
	prev_questions = [];
	prev_choices = [];

	// Reset the overall score
	score = 0;

	// Resetting the score per subject areas
    genInfoScore = 0;
    numbericalScore = 0;
    analyticalScore = 0;
    verbalScore = 0;

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

    // Resetting the General Information set of Questions
	// The Overall set of Question for Gen Info is 20 Questions.
	// The topics include: Philippine Constitution, Code of Conduct, Environmental Management, and Peace and Human Rights concepts and issues.
	// We need to divide the 20 Questions into 4 sets of topics.
	// With this, we can generate unique random questions for each topic
	uniqueRandomArrayQuestions_00 = uniqueRandomQuestion(0, (data_00.length - 1), 5); // Topic 0
	uniqueRandomArrayQuestions_01 = uniqueRandomQuestion(0, (data_01.length - 1), 5); // Topic 1
	uniqueRandomArrayQuestions_02 = uniqueRandomQuestion(0, (data_02.length - 1), 5); // Topic 2
	uniqueRandomArrayQuestions_03 = uniqueRandomQuestion(0, (data_03.length - 1), 5); // Topic 3

    // Resetting the Numerical Ability set of Questions
    // The Overall set of Question for Numerical Ability is 43 Questions.
    // The topics include: Basic Operation, Identify Sequence, Word Problems
    // We need to divide the 43 Questions into 3 sets of topics.
    // With this, we can generate unique random questions for each topic
    uniqueRandomArrayQuestions_04 = uniqueRandomQuestion(0, (data_04.length - 1), 15); // Topic 4
    uniqueRandomArrayQuestions_05 = uniqueRandomQuestion(0, (data_05.length - 1), 14); // Topic 5
    uniqueRandomArrayQuestions_06 = uniqueRandomQuestion(0, (data_06.length - 1), 14); // Topic 6

    // Resetting the Analytical Ability set of Questions
    // The Overall set of Question for Numerical Ability is 43 Questions.
    // The topics include: Word Association, Identifying assumption and conclusion, logical reasoning, and Data Interpretation and analysis
    // We need to divide the 43 Questions into 4 sets of topics.
    // With this, we can generate unique random questions for each topic
    uniqueRandomArrayQuestions_07 = uniqueRandomQuestion(0, (data_07.length - 1), 11); // Topic 7
    uniqueRandomArrayQuestions_08 = uniqueRandomQuestion(0, (data_08.length - 1), 11); // Topic 8
    uniqueRandomArrayQuestions_09 = uniqueRandomQuestion(0, (data_09.length - 1), 11); // Topic 9
    uniqueRandomArrayQuestions_10 = uniqueRandomQuestion(0, (data_10.length - 1), 10); // Topic 10
    
    // Resetting the Verbal Ability set of Questions
    // The Overall set of Question for Numerical Ability is 44 Questions.
    // The topics include: Grammar and correct usage, Vocabulary, Paragraph Organization, and Reading Comprehension
    // We need to divide the 44 Questions into 4 sets of topics.
    // With this, we can generate unique random questions for each topic
    uniqueRandomArrayQuestions_11 = uniqueRandomQuestion(0, (data_11.length - 1), 11); // Topic 11
    uniqueRandomArrayQuestions_12 = uniqueRandomQuestion(0, (data_12.length - 1), 11); // Topic 12
    uniqueRandomArrayQuestions_13 = uniqueRandomQuestion(0, (data_13.length - 1), 11); // Topic 13
    uniqueRandomArrayQuestions_14 = uniqueRandomQuestion(0, (data_14.length - 1), 11); // Topic 14
}