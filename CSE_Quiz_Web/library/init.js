/**
 * Author: @Manuel G. Sintos
 * Date: Nov 27, 2023, 1:11 PM
 *
 */
/* stop the drag event */
window.addEventListener("dragstart", function(e) {
	e.preventDefault();
});

// Display the note of the creater
$(SELECT.CONTENT).html("<i style='text-align: justify;'>" + SELECT.CREATOR_ANNOUNCEMENT + "</i>");

// Get the current year using the Date object
var currentYear = new Date().getFullYear();

// Append this at header if you wanted to upload this project in live server
// <div class="online_user">Online user: <span id="online_users">0</span> person(s)</div>
// <div class="online_user"><span id="online_users">122,975</span> person(s) online now</div>
$(".header").append(`
	<div onclick="openScoreboard()" title="Score Board" class="listscore_con">
		${icon.listscore}
	</div>
	<div onclick="openMenuModal()" title="More options" class="create_exam_btn_con">
		${icon.openmenu}
	</div>
`);

$(".header").append(`
	<div onclick="openSideBar()" title="Open Sidebar" class="open_sidebar_btn_con">
		<svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="35"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
	</div>
`);

$(".side_nav").append(`
	<div onclick="closeSideBar()" class="close_sidenav">
		<svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="35"><path fill="white" d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg>
    </div>
`);

// Append the side nav footer
$(".footer").append(`
	<div class="creator">
		<center>
		${icon.fb}
		${icon.mail}
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
	let listIcon = document.getElementsByClassName("list_icon");

	// Loop through all choices and Reset background color for all topic
	for (var i = 0; i < topicElements.length; i++) {
		topicElements[i].style.backgroundColor = "";
		topicElements[i].style.border = "";
		listIcon[i+1].innerHTML = `${icon.bookmark_outline}`;
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
	topicElements[topicID].style.border = borderColorForSelectedAnswer;
	listIcon[topicID+1].innerHTML = `${icon.bookmark_filled}`;

	if (isMobileVersion) {
		closeSideBar();
	}

	// stop the timer and reset the timerInitiateCounter
	stop_timer();
	timerCounterForGlobal = 0;

	// Reset the tooltip counter
	tooltip_counter = 0;

	// Remove the class content first
	$(SELECT.CONTENT).remove();
	// Remove the class donate container first
	$(".donate_me_con").remove();
	// Remove the creator elements
	$(".creator").remove();

	// Append a questions container and instruction
	$(SELECT.BODY).append(
	`<div class="content">
		<h1>YOU ARE CURRENTLY STUDYING TOPICS RELATED TO:</h1>
		<p><b>Topic:</b> ` + topics[selectedTopicID] + `</p>
		<p><b>Total No. of Questions:</b> ` + examanee_number_of_questions + ` Questions.</p>
		<p><b>Passing Grade:</b> ` + passing_grade + `.00% and above.</p>
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

	// Initiate timer for questions
	initiate_timer();
}

// Function to get data questions based on the topic ID
getDataQuestions = (topicID_DataQuestions) => {
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
	switch(disable_non_answer_alert) {
	// You can submit your answer anytime, even if you have not chosen an answer.
	case true:
		// Move to the next Question
	    moveToNextQuestionForTopic();
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
	    	moveToNextQuestionForTopic();
	    }
	break;
	}
	
    // Reset the isAnswerSelected since the answer has been submitted
	isAnswerSelected = false;

}

function moveToNextQuestionForTopic() {
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
    if (questionCounter > (examanee_number_of_questions-2)) {
        // If this is the last question of the exam, calculate the score
        if (selectedAnswer == "Correct") {
            score++;
            correct_wrong_logo.push(correct_logo);
        }
        else {
        	// If not correct
        	correct_wrong_logo.push(wrong_logo);
        }

        // Call the end of quiz function
        end_of_quiz();
        stopAutoSubmit();

        // Push the selected answer to the array database
        my_answer.push(selectedAnswerIndex);
        answer_time.push(`You answered this question in <b>${txtHours} ${txtMinutes} ${seconds} second(s)</b>.`);

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
            correct_wrong_logo.push(correct_logo);
        }
        else {
        	// If not correct
        	correct_wrong_logo.push(wrong_logo);
        }
        

        // Push the selected answer to the array database
        my_answer.push(selectedAnswerIndex);
        answer_time.push(`You answered this question in <b>${txtHours} ${txtMinutes} ${seconds} second(s)</b>.`);

        // Reset the selectedAnswer and selectedAnswerIndex after they have been inputted to the my_ans database
        selectedAnswer = undefined;
        selectedAnswerIndex = undefined;

        // Display the next question
        selectedTopicDisPlayQuestion(selectedTopicID);

    }

    // Reset the counter for timerCounter
    timerCounter = 0;
}

let txtButton = "";
// Function to handle the end of the quiz
function end_of_quiz(exam) {
	// Rating variable (Pass or Failed)
	let rating = "";

	let resultPercentage = (score/examanee_number_of_questions) * 99.99;
	let timerDuration = Math.floor(timerCounterForGlobal);
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

	if (resultPercentage < passing_grade) {
		rating = `<span style="color:red">FAILED</span>`;
	}
	else {
		rating = `<span style="color:green">PASSED</span>`;
	}

	// stop the timer
	stop_timer();

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

    // Store the result for scoreboard
	if (isTakingExam) {
		counter_display_exam_result += 1;
		exam_scoreboard_topic.push(topics[15]);
		exam_scoreboard_score.push(score);
		exam_scoreboard_topic_last_num.push(examanee_number_of_questions);
		exam_scoreboard_percentage.push(resultPercentage.toFixed(2));
		exam_scoreboard_rating.push(rating);
		exam_scoreboard_finished_time.push(`${txtHours} ${txtMinutes} ${seconds} second(s)`);
	}
	else {
		counter_display_quiz_result += 1;
		quiz_scoreboard_topic.push(topics[selectedTopicID]);
		quiz_scoreboard_score.push(score);
		quiz_scoreboard_topic_last_num.push(examanee_number_of_questions);
		quiz_scoreboard_percentage.push(resultPercentage.toFixed(2));
		quiz_scoreboard_rating.push(rating);
		quiz_scoreboard_finished_time.push(`${txtHours} ${txtMinutes} ${seconds} second(s)`);
	}
}


function showResult(showResultTopicID) {
	window.scrollTo(0, 0);
	let curr_date = new Date();
	let curr_month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	let curr_day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	let currentTime = new Date().toLocaleTimeString();
	let timeParts = currentTime.split(":");
	let amPmPart = timeParts[2].split(" ")[1];

	// Calculate the percentage of examinee score with an upper limit of 99.99%
	// This is for Topics Rate percentage calculation
	let resultPercentage = (score/examanee_number_of_questions) * 99.99;

	// Rating per subject areas
	let verbalRatePercentage = ((verbalScore/numbers_exam_at_verbal_ability) * 99.99).toFixed(2);
	let analyticalRatePercentage = ((analyticalScore/numbers_exam_at_analytical_ability) * 99.99).toFixed(2);
	let numbericalRatePercentage = ((numbericalScore/numbers_exam_at_numberical_ability) * 99.99).toFixed(2);
	let genInfoRatePercentage = ((genInfoScore/numbers_exam_at_general_info) * 99.99).toFixed(2);

	let timerDuration = Math.floor(timerCounterForGlobal);
	let minutes = Math.floor((timerDuration % 3600) / 60); // Calculate minutes within the current hour
	let seconds = Math.floor(timerDuration % 60);
	let hours = Math.floor(timerDuration / 3600);

	let txtHours = "";
	let txtMinutes = "";

	// Let topics or taking Exam?
	let subject_for_taking = "";

	let overAllText = "";

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
		message = `While you may not have achieved the desired score on this occasion, I hope that this experience has been a valuable learning opportunity for you. 
				  Failing the ${isTxtExamOrQuiz} does not define your capabilities, but rather provides an opportunity for improvement and further study. 
				  I encourage you to review the materials and consider retaking the ${isTxtExamOrQuiz} in the future to see your progress.`;
	}
	else {
		rating = "PASSED";
		message = "Congratulations on your achievement! I hope that this experience has been valuable to you in your quest for knowledge and learning.";
	}

	if (isTakingExam) {
		exam_rating = 
		`<div><b>Rating per Subject Areas</b></div>
			<table class="design_table_rating_exam">
				<th>Verbal</th>
				<th>Analytical</th>
				<th>Numerical</th>
				<th>General Info</th>
				<tr>
					<td><span class="verbal_rate">${verbalRatePercentage}</span>%</td>
					<td><span class="analytical_info_rate">${analyticalRatePercentage}</span>%</td>
					<td><span class="numerical_info_rate">${numbericalRatePercentage}</span>%</td>
					<td><span class="general_info_rate">${genInfoRatePercentage}</span>%</td>
				<tr>
			</table>`;

		// Display the taking exam title
		subject_for_taking = topics[15];

		// Subject per Area score
		subject_per_area_score = 
		`<p>
			You got the following points per subject area:
			<p>
				<div>General Information: <b>${genInfoScore} point(s)</b> out of ${numbers_exam_at_general_info} questions.</div>
		        <div>Numerical Ability: <b>${numbericalScore} point(s)</b> out of ${numbers_exam_at_numberical_ability} questions.</div>
		        <div>Analytical Ability: <b>${analyticalScore} point(s)</b> out of ${numbers_exam_at_analytical_ability} questions.</div>
		        <div>Verbal Ability: <b>${verbalScore} point(s)</b> out of ${numbers_exam_at_verbal_ability} questions.</div>
			</p>
		</p>`;

		overAllText = `Overall, `;
	}
	else {
		subject_for_taking = topics[selectedTopicID];
	}

	if (hours !== 0) {
		txtHours = `${hours} hour(s) and`;
	}
	if (minutes !== 0) {
		txtMinutes = `${minutes} minute(s) and`;
	}

	// Remove the class content first
	$(SELECT.CONTENT).remove();

	$("body").append(`
		<div class="content">
			<div class="print_button_con"><button type="button" onclick="printResult('printableArea')">
				${icon.printer}
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
					Please be informed that you <b>` + rating + `</b> the ` + subject_for_taking + ` - Personalize CSE Reviewer, with a general rating of <b>` + numberToWord(resultPercentage.toFixed(2)) + ` Percent (` + resultPercentage.toFixed(2) + `%)</b>
					</p>
					` + subject_per_area_score + `
					<center>
						<p>
							${overAllText}You got <b>` + score + ` point(s) out of ` + examanee_number_of_questions + ` questions</b>.<br/>
							You finished the ${isTxtExamOrQuiz} in <b>${txtHours} ${txtMinutes} ${seconds} second(s)</b>.
						</p>
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
						<i>Date and Time Generated: <b>` + curr_month[curr_date.getMonth()] + ` ` + curr_date.getDate() + `, ` + curr_date.getFullYear()  + `, ` + curr_day[curr_date.getDay()] + `, ` + timeParts[0] + `:` + timeParts[1] + ` ` + amPmPart + `</b></i>
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
	// Scroll to top
	window.scrollTo(0, 0);
	// Initialize a variable to store the HTML content of previous questions
    let prevQuestions = "";

    // Reset the tooltip counter
    tooltip_counter = 0;

    // Remove the class content first
	$(SELECT.CONTENT).remove();

	switch(selectedTopicID) {
		case 0:
			displayPreviousQuestionsAndChoices_data(uniqueRandomArrayQuestions_00, data_00, 0, false, false, true);
		break;
		case 1:
			displayPreviousQuestionsAndChoices_data(uniqueRandomArrayQuestions_01, data_01, 0, false, false, true);
		break;
		case 2:
			displayPreviousQuestionsAndChoices_data(uniqueRandomArrayQuestions_02, data_02, 0, false, false, true);
		break;
		case 3:
			displayPreviousQuestionsAndChoices_data(uniqueRandomArrayQuestions_03, data_03, 0, false, false, true);
		break;
		case 4:
			displayPreviousQuestionsAndChoices_data(uniqueRandomArrayQuestions_04, data_04, 0, false, false, true);
		break;
		case 5:
			displayPreviousQuestionsAndChoices_data(uniqueRandomArrayQuestions_05, data_05, 0, false, false, true);
		break;
		case 6:
			displayPreviousQuestionsAndChoices_data(uniqueRandomArrayQuestions_06, data_06, 0, false, false, true);
		break;
		case 7:
			displayPreviousQuestionsAndChoices_data(uniqueRandomArrayQuestions_07, data_07, 0, false, false, true);
		break;
		case 8:
			displayPreviousQuestionsAndChoices_data(uniqueRandomArrayQuestions_08, data_08, 0, false, false, true);
		break;
		case 9:
			displayPreviousQuestionsAndChoices_data(uniqueRandomArrayQuestions_09, data_09, 0, false, false, true);
		break;
		case 10:
			displayPreviousQuestionsAndChoices_data(uniqueRandomArrayQuestions_10, data_10, 0, false, false, true);
		break;
		case 11:
			displayPreviousQuestionsAndChoices_data(uniqueRandomArrayQuestions_11, data_11, 0, false, false, true);
		break;
		case 12:
			displayPreviousQuestionsAndChoices_data(uniqueRandomArrayQuestions_12, data_12, 0, false, false, true);
		break;
		case 13:
			displayPreviousQuestionsAndChoices_data(uniqueRandomArrayQuestions_13, data_13, 0, false, false, true);
		break;
		case 14:
			displayPreviousQuestionsAndChoices_data(uniqueRandomArrayQuestions_14, data_14, 0, false, false, true);
		break;
	}
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

	// reset the answered time
	answer_time = [];

	correct_wrong_logo = [];

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

/* ENABLED THIS IF YOU WANTED TO UPLOAD IN LIVE SERVER
// Track online user
setInterval(function() {
    $.get('online_users.php', function(data) {
        $('#online_users').text(data);
    });
}, 5000); // 5 seconds
*/

function openScoreboard() {
	// stop the timer and reset the timerInitiateCounter
	stop_timer();
	timerCounterForGlobal = 0;

	// Reset the tooltip counter
	tooltip_counter = 0;

	// Remove the class content first
	$(SELECT.CONTENT).remove();
	// Remove the class donate container first
	$(".donate_me_con").remove();
	// Remove the creator elements
	$(".creator").remove();

	let topicElements = document.getElementsByClassName("list");
	let listIcon = document.getElementsByClassName("list_icon");

	// Loop through all choices and Reset background color for all topic
	for (var i = 0; i < topicElements.length; i++) {
		topicElements[i].style.backgroundColor = "";
		topicElements[i].style.border = "";
		listIcon[i+1].innerHTML = `${icon.bookmark_outline}`;
	}

	$(SELECT.BODY).append(
	`<div class="content">
		<h1 style="font-size:35px">Score Board - Passing Grade: ${passing_grade}.00% and above</h1>
		
		<div id="scoreboard_result_con">
			<div id="scoreboard_quiz_result_con">Your score result in <b>Quiz</b> will display here.</div>
			<br/><hr/><br/>
			<div id="scoreboard_exam_result_con">Your score result in <b>Exam</b> will display here.</div>
		</div>
	</div>`);

	if (counter_display_quiz_result > 0) {
		$("#scoreboard_quiz_result_con").html(`
			<h1>Your scores in Quiz:</h1>
			<table id="score_list_quiz" class="design_score_list">
				<th>Quiz No.</th>
				<th style="text-align:left">Topic</th>
				<th>Score</th>
				<th>Percentage</th>
				<th>Rating</th>
				<th>Finished time</th>
			</table>
		`);
	}
	for (var i = 0; i < quiz_scoreboard_topic.length; i++) {
		$("#score_list_quiz").append(`
			<tr>
				<td><span class="verbal_rate">${[i+1]}</span></td>
				<td style="width:650px;text-align:left"><span class="analytical_info_rate">${quiz_scoreboard_topic[i]}</span></td>
				<td style="width:80px;"><span class="numerical_info_rate"><sup>${quiz_scoreboard_score[i]}</sup>&frasl;<sub>${quiz_scoreboard_topic_last_num[i]}</sub></td>
				<td style="width:80px;"><span class="numerical_info_rate">${quiz_scoreboard_percentage[i]}%</td>
				<td style="width:70px;"><span class="numerical_info_rate">${quiz_scoreboard_rating[i]}</td>
				<td style="width:140px;"><span class="numerical_info_rate">${quiz_scoreboard_finished_time[i]}</td>
			</tr>
		`);
	}


	if (counter_display_exam_result > 0) {
		$("#scoreboard_exam_result_con").html(`
			<h1>Your scores in Exam:</h1>
			<table id="score_list_exam" class="design_score_list">
				<th>Exam No.</th>
				<th style="text-align:left">Topic</th>
				<th>Score</th>
				<th>Percentage</th>
				<th>Rating</th>
				<th>Finished time</th>
			</table>
		`);
	}
	for (var i = 0; i < exam_scoreboard_topic.length; i++) {
		$("#score_list_exam").append(`
			<tr>
				<td><span class="verbal_rate">${[i+1]}</span></td>
				<td style="width:650px;text-align:left"><span class="analytical_info_rate">${topics[15]}</span></td>
				<td style="width:80px;"><span class="numerical_info_rate"><sup>${exam_scoreboard_score[i]}</sup>&frasl;<sub>${exam_scoreboard_topic_last_num[i]}</sub></td>
				<td style="width:80px;"><span class="numerical_info_rate">${exam_scoreboard_percentage[i]}%</td>
				<td style="width:70px;"><span class="numerical_info_rate">${exam_scoreboard_rating[i]}</td>
				<td style="width:140px;"><span class="numerical_info_rate">${exam_scoreboard_finished_time[i]}</td>
			</tr>
		`);
	}

	/*
	if (counter_display_quiz_result > 0) {
		$(".footer").html(`
			<div class="donate_me_con">
				<div class="donate_me">
					Do you like it? Please consider supporting me with a donation.<br>
                Any amount is greatly appreciated.<br>
                <a onclick="donateMe()" href="javascript:void(0)">Please click or scan here to donate.</a>

					<button onclick="showResult()" class="back_to_result_btn">Return to Result Page</button>
					<button onclick="reviewed_ans()" class="review_answer">Review your Last Quiz Answer</button>
				</div>
			</div>
			
		`)
	}
	*/

	restartTopicQuestion();
	restartExamQuestion();
}


let answerBotCounter = 0;
let callCounterAnswerBot = 0;
function answerBotQuiz() {
	callCounterAnswerBot++;

	if (answerBotCounter == 15) {
		log("You can use this function only once!!");
	}
	else {
		selectedTopic(answerBotCounter);
		selectedTopicDisPlayQuestion(answerBotCounter);
		startAutoSubmitWithAnswer();

		setTimeout(function() {
			showResult();
			reviewed_ans();
		}, 1000);

		setTimeout(function() {
			answerBotCounter++;
			if (answerBotCounter == 15) {
				alertDialog("Info!!", "The Answer Bot is Finished to Answer the whole Quizzes from first to last.");
			}
			else {
				answerBotQuiz();
			}
		}, 2000);
	}
}

