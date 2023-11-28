/**
 * Author: @Manuel G. Sintos
 * Date: Nov 27, 2023, 1:11 PM
 *
 */

// Display the note of the creater
$(SELECT.CONTENT).html(SELECT.CREATOR_ANNOUNCEMENT);

// Get the current year using the Date object
var currentYear = new Date().getFullYear();

$(".header").append(`
	<div onclick="openMenuModal()" title="More options" class="create_exam_btn_con">
		<svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 24 24" width="35" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
	</div>
`);

// Append the side nav footer
$(".footer").append(`
	<div style="margin-left: -41%;" class="creator">
		<center>
		<svg style="cursor:pointer" onclick="gotoMyFB()" xmlns="http://www.w3.org/2000/svg" height="23" viewBox="0 0 448 512" width="23"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg>
		<svg style="cursor:pointer" onclick="gotoMail()" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg></center>
		<center>Created by Manuel</center>
		<center>Year 2023-` + currentYear + `</center>
	</div>
`);

/**
 * Handles the selection of a topic in the quiz application.
 * @param {number} topicID - The ID of the selected topic.
 */
selectedTopic=(topicID)=> {
	// Declare so that we can retrieve it Globally
	selectedTopicID = topicID;

	let topicElements = document.getElementsByClassName("list");
	// Loop through all choices and Reset background color for all topic
	for (var i = 0; i < topicElements.length; i++) {
		topicElements[i].style.backgroundColor = "";
	}

	// Since we click the topics, lets set it true
	isTakingTopics = true;

	// Declare the: is examanee taking exam? to false, since you are currently taking topics only.
	// To avoid the bug if the user is click the exam first before the topic
	isTakingExam = false;

	// Set the examanee number of topic that you need to answer
	examanee_number_of_questions = topic_numbers_of_question;

	// Set the background color of the clicked choice
	topicElements[topicID].style.backgroundColor = bgColorForSelectedAnswer;

	// Remove the class content first
	$(SELECT.CONTENT).remove();
	// Remove the class donate container first
	$(".donate_me_con").remove();
	// Remove the creator elements
	$(".creator").remove();

	// Append a questions container and instruction
	$(SELECT.BODY).append(
	`<div class="content">
		<h1>You are currently Studying Topics related to:</h1>
		<p><b>Topic:</b> ` + topics[selectedTopicID] + `</p>
		<p><b>Total No. of Questions:</b> ` + examanee_number_of_questions + ` Questions.</p>
		<p><b>Passing Grade:</b> ` + passing_grade + `%.</p>
		<button class="start_topic" onclick="selectedTopicDisPlayQuestion(`+ selectedTopicID + `)" class="">Click to Start Quiz</button>
	</div>`);

	// Callback for the restartTopicQuestion data for the topic
	restartTopicQuestion();
}

/**
 * Function to display questions based on the selected topic.
 * @param {number} IdTopicQuestion - The ID of the topic question.
 */
selectedTopicDisPlayQuestion=(IdTopicQuestion)=> {
	switch(IdTopicQuestion) {
		case 0:
			// Check if the topic is not being taken.
			if (!isTakingTopics) {
				// Fetch and display the questions and choices for the selected topic.
				getDataQuestions(selectedTopicID);
				// Display the instructions for the selected topic.
				$(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_TOPIC_00);
				// Display the Donate Request Notice
				displayDonateMeParagraphRequest();
			}
		break;
		case 1:
			// Check if the topic is not being taken.
			if (!isTakingTopics) {
				// Fetch and display the questions and choices for the selected topic.
				getDataQuestions(selectedTopicID);
				// Display the instructions for the selected topic.
				$(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_TOPIC_01);
				// Display the Donate Request Notice
				displayDonateMeParagraphRequest();
			}
		break;
		case 2:
			// Check if the topic is not being taken.
			if (!isTakingTopics) {
				// Fetch and display the questions and choices for the selected topic.
				getDataQuestions(selectedTopicID);
				// Display the instructions for the selected topic.
				$(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_TOPIC_02);
				// Display the Donate Request Notice
				displayDonateMeParagraphRequest();
			}
		break;
		case 3:
			// Check if the topic is not being taken.
			if (!isTakingTopics) {
				// Fetch and display the questions and choices for the selected topic.
				getDataQuestions(selectedTopicID);
				// Display the instructions for the selected topic.
				$(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_TOPIC_03);
				// Display the Donate Request Notice
				displayDonateMeParagraphRequest();
			}
		break;

		case 4:
			// Check if the topic is not being taken.
			if (!isTakingTopics) {
				// Fetch and display the questions and choices for the selected topic.
				getDataQuestions(selectedTopicID);
				// Display the instructions for the selected topic.
				$(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_TOPIC_04);
				// Display the Donate Request Notice
				displayDonateMeParagraphRequest();
			}
		break;
		case 5:
			// Check if the topic is not being taken.
			if (!isTakingTopics) {
				// Fetch and display the questions and choices for the selected topic.
				getDataQuestions(selectedTopicID);
				// Display the instructions for the selected topic.
				$(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_TOPIC_05);
				// Display the Donate Request Notice
				displayDonateMeParagraphRequest();
			}
		break;
		case 6:
			// Check if the topic is not being taken.
			if (!isTakingTopics) {
				// Fetch and display the questions and choices for the selected topic.
				getDataQuestions(selectedTopicID);
				// Display the instructions for the selected topic.
				$(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_TOPIC_06);
				// Display the Donate Request Notice
				displayDonateMeParagraphRequest();
			}
		break;
		case 7:
			// Check if the topic is not being taken.
			if (!isTakingTopics) {
				// Fetch and display the questions and choices for the selected topic.
				getDataQuestions(selectedTopicID);
				// Display the instructions for the selected topic.
				$(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_TOPIC_07);
				// Display the Donate Request Notice
				displayDonateMeParagraphRequest();
			}
		break;
		case 8:
			// Check if the topic is not being taken.
			if (!isTakingTopics) {
				// Fetch and display the questions and choices for the selected topic.
				getDataQuestions(selectedTopicID);
				// Display the instructions for the selected topic.
				$(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_TOPIC_08);
				// Display the Donate Request Notice
				displayDonateMeParagraphRequest();
			}
		break;
		case 9:
			// Check if the topic is not being taken.
			if (!isTakingTopics) {
				// Fetch and display the questions and choices for the selected topic.
				getDataQuestions(selectedTopicID);
				// Display the instructions for the selected topic.
				$(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_TOPIC_09);
				// Display the Donate Request Notice
				displayDonateMeParagraphRequest();
			}
		break;
		case 10:
			// Check if the topic is not being taken.
			if (!isTakingTopics) {
				// Fetch and display the questions and choices for the selected topic.
				getDataQuestions(selectedTopicID);
				// Display the instructions for the selected topic.
				$(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_TOPIC_10);
				// Display the Donate Request Notice
				displayDonateMeParagraphRequest();
			}
		break;
		case 11:
			// Check if the topic is not being taken.
			if (!isTakingTopics) {
				// Fetch and display the questions and choices for the selected topic.
				getDataQuestions(selectedTopicID);
				// Display the instructions for the selected topic.
				$(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_TOPIC_11);
				// Display the Donate Request Notice
				displayDonateMeParagraphRequest();
			}
		break;
		case 12:
			// Check if the topic is not being taken.
			if (!isTakingTopics) {
				// Fetch and display the questions and choices for the selected topic.
				getDataQuestions(selectedTopicID);
				// Display the instructions for the selected topic.
				$(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_TOPIC_12);
				// Display the Donate Request Notice
				displayDonateMeParagraphRequest();
			}
		break;
		case 13:
			// Check if the topic is not being taken.
			if (!isTakingTopics) {
				// Fetch and display the questions and choices for the selected topic.
				getDataQuestions(selectedTopicID);
				// Display the instructions for the selected topic.
				$(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_TOPIC_13);
				// Display the Donate Request Notice
				displayDonateMeParagraphRequest();
			}
		break;
		case 14:
			// Check if the topic is not being taken.
			if (!isTakingTopics) {
				// Fetch and display the questions and choices for the selected topic.
				getDataQuestions(selectedTopicID);
				// Display the instructions for the selected topic.
				$(SELECT.INSTRUCTION).html(SELECT.INSTRUCTION_TOPIC_14);
				// Display the Donate Request Notice
				displayDonateMeParagraphRequest();
			}
		break;
	}
}

// Function to get data questions based on the topic ID
const getDataQuestions = (topicID_DataQuestions) => {
    // Using a switch statement to handle different topic IDs
    switch(topicID_DataQuestions) {
        case 0:
            // Display question and choices for topic 0
            displayQuestionAndChoicesForTopics(data_00[uniqueRandomArrayQuestions_00[questionCounter]]);
        break;
        case 1:
            // Display question and choices for topic 1
            displayQuestionAndChoicesForTopics(data_01[uniqueRandomArrayQuestions_01[questionCounter]]);
        break;
        case 2:
            // Display question and choices for topic 2
            displayQuestionAndChoicesForTopics(data_02[uniqueRandomArrayQuestions_02[questionCounter]]);
        break;
        case 3:
            // Display question and choices for topic 3
            displayQuestionAndChoicesForTopics(data_03[uniqueRandomArrayQuestions_03[questionCounter]]);
        break;

        case 4:
            // Display question and choices for topic 4
            displayQuestionAndChoicesForTopics(data_04[uniqueRandomArrayQuestions_04[questionCounter]]);
        break;
        case 5:
            // Display question and choices for topic 5
            displayQuestionAndChoicesForTopics(data_05[uniqueRandomArrayQuestions_05[questionCounter]]);
        break;
        case 6:
            // Display question and choices for topic 6
            displayQuestionAndChoicesForTopics(data_06[uniqueRandomArrayQuestions_06[questionCounter]]);
        break;
		case 7:
            // Display question and choices for topic 7
            displayQuestionAndChoicesForTopics(data_07[uniqueRandomArrayQuestions_07[questionCounter]]);
        break;
        case 8:
            // Display question and choices for topic 8
            displayQuestionAndChoicesForTopics(data_08[uniqueRandomArrayQuestions_08[questionCounter]]);
        break;
        case 9:
            // Display question and choices for topic 9
            displayQuestionAndChoicesForTopics(data_09[uniqueRandomArrayQuestions_09[questionCounter]]);
        break;
        case 10:
            // Display question and choices for topic 10
            displayQuestionAndChoicesForTopics(data_10[uniqueRandomArrayQuestions_10[questionCounter]]);
        break;
        case 11:
            // Display question and choices for topic 11
            displayQuestionAndChoicesForTopics(data_11[uniqueRandomArrayQuestions_11[questionCounter]]);
        break;
        case 12:
            // Display question and choices for topic 12
            displayQuestionAndChoicesForTopics(data_12[uniqueRandomArrayQuestions_12[questionCounter]]);
        break;
        case 13:
            // Display question and choices for topic 13
            displayQuestionAndChoicesForTopics(data_13[uniqueRandomArrayQuestions_13[questionCounter]]);
        break;
        case 14:
            // Display question and choices for topic 14
            displayQuestionAndChoicesForTopics(data_14[uniqueRandomArrayQuestions_14[questionCounter]]);
        break;
    }
}

// Function to check the answer based on the selected index
function checkAnswer(selectedIndex) {
    // Declare the selectedAnswerIndex
    selectedAnswerIndex = selectedIndex;

    // Lets put this here since the user is selecting his/her answer
	isAnswerSelected = true;

    // Using a switch statement to handle different topic IDs
    switch(selectedTopicID) {
        case 0:
            // Check the examinee's answer for topic 0
            checkExamaneeAnswer(data_00[uniqueRandomArrayQuestions_00[questionCounter]]);
        break;
        case 1:
            // Check the examinee's answer for topic 1
            checkExamaneeAnswer(data_01[uniqueRandomArrayQuestions_01[questionCounter]]);
        break;
        case 2:
            // Check the examinee's answer for topic 2
            checkExamaneeAnswer(data_02[uniqueRandomArrayQuestions_02[questionCounter]]);
        break;
        case 3:
            // Check the examinee's answer for topic 3
            checkExamaneeAnswer(data_03[uniqueRandomArrayQuestions_03[questionCounter]]);
        break;

        case 4:
            // Check the examinee's answer for topic 4
            checkExamaneeAnswer(data_04[uniqueRandomArrayQuestions_04[questionCounter]]);
        break;
        case 5:
            // Check the examinee's answer for topic 5
            checkExamaneeAnswer(data_05[uniqueRandomArrayQuestions_05[questionCounter]]);
        break;
        case 6:
            // Check the examinee's answer for topic 6
            checkExamaneeAnswer(data_06[uniqueRandomArrayQuestions_06[questionCounter]]);
        break;
		case 7:
            // Check the examinee's answer for topic 7
            checkExamaneeAnswer(data_07[uniqueRandomArrayQuestions_07[questionCounter]]);
        break;
        case 8:
            // Check the examinee's answer for topic 8
            checkExamaneeAnswer(data_08[uniqueRandomArrayQuestions_08[questionCounter]]);
        break;
        case 9:
            // Check the examinee's answer for topic 9
            checkExamaneeAnswer(data_09[uniqueRandomArrayQuestions_09[questionCounter]]);
        break;
    	case 10:
            // Check the examinee's answer for topic 10
            checkExamaneeAnswer(data_10[uniqueRandomArrayQuestions_10[questionCounter]]);
        break;
        case 11:
            // Check the examinee's answer for topic 11
            checkExamaneeAnswer(data_11[uniqueRandomArrayQuestions_11[questionCounter]]);
        break;
        case 12:
            // Check the examinee's answer for topic 12
            checkExamaneeAnswer(data_12[uniqueRandomArrayQuestions_12[questionCounter]]);
        break;
        case 13:
            // Check the examinee's answer for topic 13
            checkExamaneeAnswer(data_13[uniqueRandomArrayQuestions_13[questionCounter]]);
        break;
        case 14:
            // Check the examinee's answer for topic 14
            checkExamaneeAnswer(data_14[uniqueRandomArrayQuestions_14[questionCounter]]);
        break;
    }
}

// Function to submit an answer
function submitAnswer() {
	/* Check if an answer is selected */
	if (!isAnswerSelected) {
	    // Display an error message if no answer is selected
	    alertDialog("Oops!", "Please select your answer!");
		return; // Exit the function to prevent further processing
	}
    // Check if the question counter is greater than the total number of questions minus 2
    if (questionCounter > (examanee_number_of_questions-2)) {
        // If this is the last question of the exam, calculate the score
        if (selectedAnswer == "Correct") {
            score++;
        }

        // Call the end of quiz function
        end_of_quiz();

        // Push the selected answer to the array database
        my_answer.push(selectedAnswerIndex);

        // Reset the selectedAnswer and selectedAnswerIndex after they have been inputted to the my_ans database
        selectedAnswer = undefined;
        selectedAnswerIndex = undefined;
    }
    else {
        // If this is not the last question, update the question counter
        questionCounter++;

        // Calculate the score
        if (selectedAnswer == "Correct") {
            score++;
        }

        // Push the selected answer to the array database
        my_answer.push(selectedAnswerIndex);

        // Reset the selectedAnswer and selectedAnswerIndex after they have been inputted to the my_ans database
        selectedAnswer = undefined;
        selectedAnswerIndex = undefined;

        // Display the next question
        selectedTopicDisPlayQuestion(selectedTopicID);
    }

    // Lets reset the isAnswerSelected
    // Since you already submitted your answer
	isAnswerSelected = false;
}

let txtButton = "";
// Function to handle the end of the quiz
function end_of_quiz(exam) {
    // Remove the content, and donate container elements
    $(SELECT.CONTENT).remove();
    $(".donate_me_con").remove();

    // Message to examinee (Passed or Failed)
	let congrats_message = "";

    if (isTakingExam) {
    	congrats_message = "CONGRATULATIONS ON COMPLETING THE EXAMINATION!";
    	txtButton = "Exam";
    }
    else {
    	congrats_message = "CONGRATULATIONS ON COMPLETING THE QUIZ!";
    	txtButton = "Quiz";
    }

    // Append a questions container and instruction
    $(SELECT.BODY).append(
    `<div class="content">
        <h1>` + congrats_message + `</h1>
        <p>To view your results, please click the "Show Your ` + txtButton + ` Result" button.</p>
        <button class="start_topic" onclick="showResult()" class="">Show Your ` + txtButton + ` Result</button>
    </div>`);
}


function showResult(showResultTopicID) {
	let curr_date = new Date();
	let curr_month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	let curr_day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	// Calculate the percentage of examinee score with an upper limit of 99.99%
	// This is for Topics Rate percentage calculation
	let resultPercentage = (score/examanee_number_of_questions) * 99.99;

	// Rating per subject areas
	let verbalRatePercentage = ((verbalScore/numbers_exam_at_verbal_ability) * 99.99).toFixed(2);
	let analyticalRatePercentage = ((analyticalScore/numbers_exam_at_analytical_ability) * 99.99).toFixed(2);
	let numbericalRatePercentage = ((numbericalScore/numbers_exam_at_numberical_ability) * 99.99).toFixed(2);
	let genInfoRatePercentage = ((genInfoScore/numbers_exam_at_general_info) * 99.99).toFixed(2);

	// Let topics or taking Exam?
	let subject_for_taking = "";

	// Rating variable (Pass or Failed)
	let rating = "";

	// Message to examinee (Passed or Failed)
	let message = "";

	// Rating for examinations (General Info, Analytical, Numerical and Verbal)
	let exam_rating = "";

	let subject_per_area_score = ""

	// Just a Quiz or Exam rresult string
	isTxtExamOrQuiz = txtButton;

	// Means 80% is the passing result percentage
	if (resultPercentage < passing_grade) {
		rating = "FAILED";
		message = `While you may not have achieved the desired score on this occasion, I hope that this experience has been a valuable learning opportunity for you. Failing the ` + isTxtExamOrQuiz + ` does not define your capabilities, but rather provides an opportunity for improvement and further study. I encourage you to review the materials and consider retaking the ` + isTxtExamOrQuiz + ` in the future to see your progress.`;
	}
	else {
		rating = "PASSED";
		message = "Congratulations on your achievement! I hope that this experience has been valuable to you in your quest for knowledge and learning.";
	}

	if (isTakingExam) {
		exam_rating = 
		`<div><b>Rating per Subject Areas</b></div>
			<table>
				<th>Verbal</th>
				<th>Analytical</th>
				<th>Numerical</th>
				<th>General Info</th>
				<tr>
					<td><span class="verbal_rate">` + verbalRatePercentage + `</span>%</td>
					<td><span class="analytical_info_rate">` + analyticalRatePercentage + `</span>%</td>
					<td><span class="numerical_info_rate">` + numbericalRatePercentage + `</span>%</td>
					<td><span class="general_info_rate">` + genInfoRatePercentage + `</span>%</td>
				<tr>
			</table>`;

		// Display the taking exam title
		subject_for_taking = topics[15];

		// Subject per Area score
		subject_per_area_score = 
		`<p>
			You got the following points per subject area:
			<p>
				<div>General Information: ` + genInfoScore + ` point(s)</div>
		        <div>Numerical Ability: ` + numbericalScore + ` point(s)</div>
		        <div>Analytical Ability: ` + analyticalScore + ` point(s)</div>
		        <div>Verbal Ability: ` + verbalScore + ` point(s)</div>
			</p>
		</p>`;
	}
	else {
		subject_for_taking = topics[selectedTopicID];
	}

	// Remove the class content first
	$(SELECT.CONTENT).remove();

	$("body").append(`
		<div class="content">
			<div class="print_button_con"><button type="button" onclick="printResult('printableArea')">
				<svg style="margin: 0 5px -6px 0;" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M640-640v-120H320v120h-80v-200h480v200h-80Zm-480 80h640-640Zm560 100q17 0 28.5-11.5T760-500q0-17-11.5-28.5T720-540q-17 0-28.5 11.5T680-500q0 17 11.5 28.5T720-460Zm-80 260v-160H320v160h320Zm80 80H240v-160H80v-240q0-51 35-85.5t85-34.5h560q51 0 85.5 34.5T880-520v240H720v160Zm80-240v-160q0-17-11.5-28.5T760-560H200q-17 0-28.5 11.5T160-520v160h80v-80h480v80h80Z"/></svg>
				Print Result</button>
			</div>
			<div class="show_result_con" >
				<div id="printableArea">

					<center>
						<b>REPORT OF RATING</b>
					</center>

					<p>Dear Ma'am/Sir,</p>
					<p>Good day!</p>
					<p>
					Please be informed that you <b>` + rating + `</b> the ` + subject_for_taking + ` - Personal Quiz Reviewer, with a general rating of <b>` + numberToWord(resultPercentage.toFixed(2)) + ` Percent (` + resultPercentage.toFixed(2) + `%)</b>
					</p>
					` + subject_per_area_score + `
					<center>
						<p>You got <b>` + score + `</b> point(s) out of <b>` + examanee_number_of_questions + `</b> questions.</p>
						` + exam_rating + `
					</center>

					<p>
						<p>` + message + `</p>
					</p>

					<p>
					Very truly yours,
					</p>
					<p>
					<b>` + letter_name + `</b><br>
					` + letter_position + `
					</p>

					<p>
						<i>Date Generated: <b>` + curr_month[curr_date.getMonth()] + ` ` + curr_date.getDate() + `, ` + curr_date.getFullYear()  + `, ` + curr_day[curr_date.getDay()] + `</b></i>
					</p>
					<center>
						<i style="font-size:11px">Please note: This is an electronic printout. It is not intended to be used for any legal purposes.</i>
					</center>
				</div>
			</div>
		</div>
	`);

	// Display the Donate Request Notice
	displayDonateMeParagraphRequest();
	if (isTakingExam) {
		$(".donate_me").append(`
			<button onclick="reviewed_ans_for_exam()" class="review_answer">Review your Answer</button>
		`);
	}
	else {
		$(".donate_me").append(`
			<button onclick="reviewed_ans()" class="review_answer">Review your Answer</button>
		`);
	}
}


function reviewed_ans() {
	// Initialize a variable to store the HTML content of previous questions
    let prevQuestions = "";

    // Remove the class content first
	$(SELECT.CONTENT).remove();

	switch(selectedTopicID) {
		case 0:
			displayPreviousQuestionsAndChoices(uniqueRandomArrayQuestions_00, data_00);
		break;

		case 1:
			displayPreviousQuestionsAndChoices(uniqueRandomArrayQuestions_01, data_01);
		break;

		case 2:
			displayPreviousQuestionsAndChoices(uniqueRandomArrayQuestions_02, data_02);
		break;

		case 3:
			displayPreviousQuestionsAndChoices(uniqueRandomArrayQuestions_03, data_03);
		break;

		case 4:
			displayPreviousQuestionsAndChoices(uniqueRandomArrayQuestions_04, data_04);
		break;
		case 5:
			displayPreviousQuestionsAndChoices(uniqueRandomArrayQuestions_05, data_05);
		break;
		case 6:
			displayPreviousQuestionsAndChoices(uniqueRandomArrayQuestions_06, data_06);
		break;
		case 7:
			displayPreviousQuestionsAndChoices(uniqueRandomArrayQuestions_07, data_07);
		break;
		case 8:
			displayPreviousQuestionsAndChoices(uniqueRandomArrayQuestions_08, data_08);
		break;
		case 9:
			displayPreviousQuestionsAndChoices(uniqueRandomArrayQuestions_09, data_09);
		break;
		case 10:
			displayPreviousQuestionsAndChoices(uniqueRandomArrayQuestions_10, data_10);
		break;
		case 11:
			displayPreviousQuestionsAndChoices(uniqueRandomArrayQuestions_11, data_11);
		break;
		case 12:
			displayPreviousQuestionsAndChoices(uniqueRandomArrayQuestions_12, data_12);
		break;
		case 13:
			displayPreviousQuestionsAndChoices(uniqueRandomArrayQuestions_13, data_13);
		break;
		case 14:
			displayPreviousQuestionsAndChoices(uniqueRandomArrayQuestions_14, data_14);
		break;
	}
}

function displayPreviousQuestionsAndChoices(uniqueRandomArrayQuestions, data) {	
    let prevQuestions = "";
    // Loop through an array of unique random question indices
    for (let i = 0; i < uniqueRandomArrayQuestions.length; i++) {
        const questionIndex = uniqueRandomArrayQuestions[i];
        const questionData = data[questionIndex];
        let prevchoicesTxt = "";

        // Loop through the choices for this question
        for (let c = 0; c < prev_choices[i].length; c++) {
            const choice = prev_choices[i][c];
            prevchoicesTxt += '<div class="prev_choices';

            // Check if the current choice matches the correct answer
            if (choice == questionData.correct_ans) {
                prevchoicesTxt += ' correct';

                // Add class "correct" to correct answer
                if (c === my_answer[i]) {
                    prevchoicesTxt += '';
                }
            } 
            else {
                // Add class "wrong" to incorrect answers
                if (c === my_answer[i]) {
                    prevchoicesTxt += ' wrong';
                }
            }

            prevchoicesTxt += '"> ' + (c + 1) + ') ' + choice + '</div>';
        }

        // Build HTML for the entire question and its choices
        prevQuestions +=
        '<div class="content"><div class="prev_question_con" id="prev_question_con' + i + '">' +
	        '<div class="prev_question" id="prev_question">' +
	            '<span class="question_counter" id="question_counter">' + (i + 1) + '. ) </span>' + questionData.question +
	        '</div>' +
	        '<div class="prev_choices_con' + i + '" id="prev_choices_con' + i + '">' +
	            prevchoicesTxt +
	        '</div>' +
	        '<div class="question_explanation"><div><b>Explanation:</b></div><p style="font-size:17px">' + questionData.explanation + '</p></div>' +
        '</div></div>';
    }

    // Append the previous questions and choices HTML to the body of the webpage
    $(SELECT.BODY).append(prevQuestions);

    displayDonateMeParagraphRequest();

    $(".donate_me").append(`
		<button onclick="selectedTopic(`+ selectedTopicID + `)" class="retake_quiz">Retake Quiz</button>
	`);
}

restartTopicQuestion=()=> {
	// reset the questionCounter
	questionCounter = 0;

	// reset the examinee for taking the topics, because once we call again the selectedTopic function
	// it will become true
	isTakingTopics = false;

	// Reset, if the examinee accidentally/intention click the create exam (BUG No. 1)
	isTakingExam = false;

	// reset the prev questions and choices
	prev_questions = [];
	prev_choices = [];

	// reset the score
	score = 0;

	// reset my_answer
	my_answer = [];

	// generate random and unique ID questions, make not repetitive question displayed to examinee
	uniqueRandomArrayQuestions_00 = uniqueRandomQuestion(0, (data_00.length - 1), topic_numbers_of_question);
	uniqueRandomArrayQuestions_01 = uniqueRandomQuestion(0, (data_01.length - 1), topic_numbers_of_question);
	uniqueRandomArrayQuestions_02 = uniqueRandomQuestion(0, (data_02.length - 1), topic_numbers_of_question);
	uniqueRandomArrayQuestions_03 = uniqueRandomQuestion(0, (data_03.length - 1), topic_numbers_of_question);

	uniqueRandomArrayQuestions_04 = uniqueRandomQuestion(0, (data_04.length - 1), topic_numbers_of_question);
	uniqueRandomArrayQuestions_05 = uniqueRandomQuestion(0, (data_05.length - 1), topic_numbers_of_question);
	uniqueRandomArrayQuestions_06 = uniqueRandomQuestion(0, (data_06.length - 1), topic_numbers_of_question);
	
	uniqueRandomArrayQuestions_07 = uniqueRandomQuestion(0, (data_07.length - 1), topic_numbers_of_question);
	uniqueRandomArrayQuestions_08 = uniqueRandomQuestion(0, (data_08.length - 1), topic_numbers_of_question);
	uniqueRandomArrayQuestions_09 = uniqueRandomQuestion(0, (data_09.length - 1), topic_numbers_of_question);
	uniqueRandomArrayQuestions_10 = uniqueRandomQuestion(0, (data_10.length - 1), topic_numbers_of_question);

	uniqueRandomArrayQuestions_11 = uniqueRandomQuestion(0, (data_11.length - 1), topic_numbers_of_question);
	uniqueRandomArrayQuestions_12 = uniqueRandomQuestion(0, (data_12.length - 1), topic_numbers_of_question);
	uniqueRandomArrayQuestions_13 = uniqueRandomQuestion(0, (data_13.length - 1), topic_numbers_of_question);
	uniqueRandomArrayQuestions_14 = uniqueRandomQuestion(0, (data_14.length - 1), topic_numbers_of_question);

}