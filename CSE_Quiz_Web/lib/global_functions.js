/**
 * Author: @Manuel G. Sintos
 * Date: Dec 28, 2024, 12:52 PM
 */

/**
 * Logs a styled message to the console.
 * - Error messages are labeled [ERROR] and displayed in red.
 * - Status messages are labeled [STATUS] and displayed in green.
 *
 * @param {string} txt - The message to display.
 * @param {string} type - The type of message ('error' for errors; any other value for status messages).
 */
function log(txt, type) {
    let color;
    let messageType;

    // Determine the color and message type based on the value of 'type'
    if (type === 'error') {
        color = 'red';
        messageType = '[ERROR]';
    } else {
        color = 'green';
        messageType = '[STATUS]';
    }
    
    // Use console.log to output the text with styling
    console.log('%c' + messageType + ': %c' + txt, 'color: ' + color, 'color: black');
}

/**
 * Displays a custom alert dialog on the page.
 *
 * @param {string} dialogTitle - The title of the dialog box.
 * @param {string} dialogMes - The message displayed in the dialog box.
 */
function alertDialog(dialogTitle, dialogMes) {
    // Create a new div element for the dialog
    const newDiv = document.createElement("div");
    
    // Assign an ID and class to the new div
    newDiv.id = "alertDialogWindow";
    newDiv.className = "alertDialogWindow";

    // Set the innerHTML using a template literal to structure the dialog
    newDiv.innerHTML = `
        <div id="alertDialogFirstCon" class="alertDialogFirstCon">
            <div id="alertDialogCon" class="alertDialogCon">
                <div class="alerDialogTitleCon">
                    <div class="alerDialogTitle">${dialogTitle}</div>
                </div>
                <div class="alertDialogMessage" id="alertDialogMessage">
                    ${dialogMes}
                </div>
                <div class="alertDialogButtonCon">
                    <button id="alertDialogPositiveButton">OKAY</button>
                </div>
            </div>
        </div>
    `;

    // Append the dialog to the document body
    document.body.appendChild(newDiv);

    // Add event listener to the OKAY button to remove the dialog on click
    document.getElementById("alertDialogPositiveButton").onclick = function () {
        document.getElementById("alertDialogWindow").remove();
    };
}

/**
 * Logs the status of database topics and their total number of questions.
 * Assumes `data_00` to `data_14` are predefined arrays and `topics` is a corresponding list of topic names.
 */
function databaseStatus() {
    for (let i = 0; i <= 14; i++) {
        let dataName = "data_" + ("0" + i).slice(-2);
        let data = eval(dataName);
        console.log(`%c[STATUS]:%c ${dataName} - Total Number of data questions at ${topics[i]}: %c${data.length} Questions`, "color:green;", "", "font-weight:bold;");
    }

    return "Successfully extracted the total numbers of questions!";
}

/**
 * Function to convert a number into words.
 * @param {number} num - The number to convert. Should be between 0 and 99.99.
 * @returns {string} The number in words.
 */
function numberToWord(num) {
    let units = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
    let teens = ['Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    let tens = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    let integerPart = Math.floor(num);
    let decimalPart = Math.round((num - integerPart) * 100);

    let words = "";

    if (integerPart <= 10) {
        words += units[integerPart];
    } else if (integerPart < 20) {
        words += teens[integerPart - 11];
    } else {
        if (Math.floor(integerPart / 10) > 0) {
            words += tens[Math.floor(integerPart / 10) - 2];
        }
        if (integerPart % 10 > 0) {
            words += " " + units[integerPart % 10];
        }
    }

    if (decimalPart > 0) {
        words += " point";
        if (decimalPart < 10) {
            words += " " + units[decimalPart];
        } else if (decimalPart < 20) {
            words += " " + teens[decimalPart - 11];
        } else {
            if (Math.floor(decimalPart / 10) > 0) {
                words += " " + tens[Math.floor(decimalPart / 10) - 2];
            }
            if (decimalPart % 10 > 0) {
                words += " " + units[decimalPart % 10];
            }
        }
    }

    return words;
}

// Function to open the menu modal
function openMenuModal() {
    $(SELECT.BODY).append(`
        <div id="myModal" class="menu_modal">
            <div class="modal-content">
                <a href="javascript:void(0)" onclick="openCreateQuestionnaire()">
                    <div class="modal_content_icon"><svg style="margin: 0 5px -6px 0;" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg></div>
                    <div class="modal_content_description">Create your own questions</div>
                </a>
                <a href="javascript:void(0)" onclick="downloadTheWebsite()">
                    <div class="modal_content_icon"><svg style="margin: 0 5px -6px 0;" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg></div>
                    <div class="modal_content_description">Download the website</div>
                </a>
                <a href="javascript:void(0)" onclick="donateMe()">
                    <div class="modal_content_icon"><svg style="margin: 0 5.5px -6px 0;" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M640-440 474-602q-31-30-52.5-66.5T400-748q0-55 38.5-93.5T532-880q32 0 60 13.5t48 36.5q20-23 48-36.5t60-13.5q55 0 93.5 38.5T880-748q0 43-21 79.5T807-602L640-440Zm0-112 109-107q19-19 35-40.5t16-48.5q0-22-15-37t-37-15q-14 0-26.5 5.5T700-778l-60 72-60-72q-9-11-21.5-16.5T532-800q-22 0-37 15t-15 37q0 27 16 48.5t35 40.5l109 107ZM280-220l278 76 238-74q-5-9-14.5-15.5T760-240H558q-27 0-43-2t-33-8l-93-31 22-78 81 27q17 5 40 8t68 4q0-11-6.5-21T578-354l-234-86h-64v220ZM40-80v-440h304q7 0 14 1.5t13 3.5l235 87q33 12 53.5 42t20.5 66h80q50 0 85 33t35 87v40L560-60l-280-78v58H40Zm80-80h80v-280h-80v280Zm520-546Z"/></svg></div>
                    <div class="modal_content_description">Please help me via donation</div>
                </a>
            </div>
        </div>
    `);
}

function donateMe() {
   $(SELECT.CONTENT_MAIN).html(`
        <h2>Please consider supporting me with a donation.</h2>
        <p style="color:gray">Any amount is greatly appreciated. Thank you for your kindness and generosity.</p>
        <img style="border-radius:20px;width:300px;height:430px;margin-right:10px" src="img/gcash_qr_2.png" />
        <img style="border-radius:20px;width:300px;height:430px;margin-right:10px" src="img/maya_qr.jpg" />
        <img style="border:1px solid lightgray;border-radius:20px;width:335px;height:430px" src="img/ub_qr.jpg" />
   `);
   closeMenuModal();

    // Stop the timer and reset the global timer counter
    stop_timer();
    timerCounterForGlobal = 0;

    // Retrieve all quiz button elements and icons
    let quizButtonElem = document.getElementsByClassName("quiz-button");
    let quizButtonIcon = document.getElementsByClassName("quiz-icon-container");

    // Loop through all quiz buttons and reset their styles and icons
    for (var i = 0; i < quizButtonElem.length; i++) {
        quizButtonElem[i].style.backgroundColor = "";               // Reset background color
        quizButtonElem[i].style.border = "";                        // Reset border
        quizButtonElem[i].style.transition = "0.3s";                // Add smooth transition
        quizButtonIcon[i].innerHTML = `${icon.bookmark_outline}`;   // Reset icon
    }
    $(SELECT.CONTENT_FOOTER).html(`
        &copy; 2023-${currentYear} Manuel Sintos
    `);
}

// Function to close the menu modal
function closeMenuModal() {
    // Set the display style of the modal with the ID 'myModal' to 'none'
    $("#myModal").remove();
}

// Event handler for clicking outside the modal
window.onclick = function(event) {
    // Get the modal element with the ID 'myModal'
    var modal = document.getElementById('myModal');

    // Check if the clicked element is the modal itself
    if (event.target == modal) {
        // If the clicked element is the modal, hide the modal by setting its display style to 'none'
        $("#myModal").remove();
    }
}

// Function to open a Facebook profile in a new tab
function openCreateQuestionnaire() {
    window.open("lib/questionnaire_data_format_maker.html", "_blank");
    closeMenuModal();
}

function downloadTheWebsite() {
    window.open("https://github.com/Manuuuu21/CSE-Personal-Quiz-Website-Tool/archive/refs/heads/main.zip", "_blank");
    closeMenuModal();
}

// Function to open the default email client with a pre-filled email address
function gotoMail() {
    document.location.href = "mailto:manuelsintos21@gmail.com";
}

// Function to open a Facebook profile in a new tab
function gotoMyFB() {
    window.open("https://facebook.com/manuel.sintos.92", "_blank");
}

/**
 * Prints the contents of a specified HTML element.
 * @param {string} divName - The ID of the HTML element to be printed.
 */
function printResult(divName) {
    // Get the inner HTML content of the specified element
    var printContents = document.getElementById(divName).innerHTML;

    // Store the original body content
    var originalContents = document.body.innerHTML;

    // Replace the body content with the content of the specified element
    document.body.innerHTML = printContents;

    // Trigger the browser's print dialog
    window.print();

    // Restore the original body content
    document.body.innerHTML = originalContents;
}

/**
 * Generate unique number of Questions.
 * The question are not repetitive
 */
function uniqueRandomQuestion(min, max, length) {
    // Create an array with numbers from min to max
    all_array_of_question = [];
    for (let i = min; i <= max; i++) {
        all_array_of_question.push(i);
    }

    // Check if the length is valid
    if (length > (max - min + 1)) {
        throw new Error("Length of unique random array cannot be greater than the range of numbers.");
    }

    // Shuffle the array using the Fisher-Yates algorithm
    for (let i = all_array_of_question.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [all_array_of_question[i], all_array_of_question[j]] = [all_array_of_question[j], all_array_of_question[i]];
    }

    // Take the first 'length' elements from the shuffled array
    return all_array_of_question.slice(0, length);
}

/**
 * Validates the user's selected answer against the correct answer and provides feedback.
 *
 * @param {Object} answerData - The data containing the correct answer information.
 * @param {string} answerData.correct_ans - The correct answer as defined in the data structure.
 * @returns {void} - Updates the UI and logs whether the answer is correct or wrong.
 */
function fetchAnswerToCheck(answerData) {
    // Get all choice elements
    let choiceElements = document.getElementsByClassName("choices");

    // Loop through all choices
    for (var i = 0; i < choiceElements.length; i++) {
        // Reset background color for all choices
        choiceElements[i].style.backgroundColor = "";
        choiceElements[i].style.border = "";
        choiceElements[i].style.color = "";
        choiceElements[i].style.transition = "0.3s";
    }

    // Highlight the selected choice with specific styles
    choiceElements[selectedAnswerIndex].style.backgroundColor = bgColorForSelectedAnswer;
    choiceElements[selectedAnswerIndex].style.border = borderColorForSelectedAnswer;
    choiceElements[selectedAnswerIndex].style.transition = "0.3s";
    choiceElements[selectedAnswerIndex].style.color = "";

    // Retrieve the correct answer index from the provided data structure
    var correctAnswerIndex = answerData.correct_ans;

    // Generate the expected answer format (e.g., "1) Correct Answer Text")
    var correctAnswerIndex_true = (selectedAnswerIndex + 1) + ") " + correctAnswerIndex;

    // Compare the user's selected answer with the correct answer
    if (choiceElements[selectedAnswerIndex].innerHTML == correctAnswerIndex_true) {
        // Mark the answer as correct and Log "Correct" to the console if logging is enabled
        selectedAnswer = "Correct";
        if (show_correct_wrong_answer) {
            log("Correct");
        }
    } else {
        // Mark the answer as wrong and Log "Wrong" to the console if logging is enabled
        selectedAnswer = "Wrong";
        if (show_correct_wrong_answer) {
            log("Wrong", "error");
        }
    }
}

// Variable to store button label based on quiz or exam
let txtButton = "";

/**
 * Handles the completion of a quiz or exam by calculating the score, formatting results,
 * and updating the user interface with feedback and scoreboard details.
 */
function end_of_quiz() {
    // Get the current date and time for the report
    let curr_date = new Date();
    let curr_month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let curr_day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // Format the current time (hh:mm:ss AM/PM)
    let currentTime = new Date().toLocaleTimeString();
    let timeParts = currentTime.split(":");
    let amPmPart = timeParts[2].split(" ")[1];
    let dateTimeGenerated = curr_month[curr_date.getMonth()] + ` ` + curr_date.getDate() + `, ` + curr_date.getFullYear()  + `, ` + curr_day[curr_date.getDay()] + `, ` + timeParts[0] + `:` + timeParts[1] + ` ` + amPmPart;

    // Rating based on the result
    let rating = "";

    // Calculate the percentage score of the user (with a max of 99.99%)
    let resultPercentage = (score/user_numbers_of_questions) * 99.99;

    // Convert the timer counter into hours, minutes, and seconds
    let timerDuration = Math.floor(timerCounterForGlobal);
    let minutes = Math.floor((timerDuration % 3600) / 60); // Calculate minutes within the current hour
    let seconds = Math.floor(timerDuration % 60);
    let hours = Math.floor(timerDuration / 3600);

    let txtHours = "";
    let txtMinutes = "";

    // Format the timer output based on hours, minutes, and seconds
    if (hours !== 0) {
        txtHours = `${hours} hour(s) and`;
    }
    if (minutes !== 0) {
        txtMinutes = `${minutes} minute(s) and`;
    }
    let timeFinished = `${txtHours} ${txtMinutes} ${seconds} second(s)`;

    // Determine if the user passed or failed based on a passing grade of 80%
    if (resultPercentage < passing_grade) {
        rating = `<span style="color:red">FAILED</span>`;
    }
    else {
        rating = `<span style="color:green">PASSED</span>`;
    }

    // stop the timer and stop the autosubmit functionality
    stop_timer();
    // If AutoSubmit is set to true. stop the autosubmit
    if (isAutoSubmit) {
        stopAutoSubmit();
    }

    // Congratulatory message based on the context (quiz or exam)
    let congrats_message = "";
    if (isTakingExam) {
        congrats_message = "CONGRATULATIONS ON COMPLETING THE EXAMINATION!";
        txtButton = "Exam";
    }
    else {
        congrats_message = `CONGRATULATIONS ON COMPLETING THE QUIZ!`;
        txtButton = "Quiz";
    }

    // Update the UI to show the completion message
    $(SELECT.CONTENT_MAIN).html(`
        <h2>${congrats_message}</h2>
        <p>Topic: ${topics[selectedTopicID]}.</p>
        <p>To view your results, please click the "Show Your ${txtButton} Result" button.</p>
        <button class="button_design" onclick="showResult()" class="">Show Your ${txtButton} Result</button>
    `);

    // Handle scoreboard updates for exams
    if (isTakingExam) {
        // Increment exam result counter and update scoreboard data
        counter_display_exam_result += 1;
        exam_scoreboard_topic.push(topics[15]);
        exam_scoreboard_score.push(score);
        exam_scoreboard_topic_last_num.push(user_numbers_of_questions);
        exam_scoreboard_percentage.push(resultPercentage.toFixed(2));
        exam_scoreboard_rating.push(rating);
        exam_scoreboard_finished_time.push(timeFinished);

        // Update exam-specific data for review and result storage
        scoreboard_exam_uniqueQuestionsId_00.push(uniqueRandomArrayQuestions_00);
        scoreboard_exam_uniqueQuestionsId_01.push(uniqueRandomArrayQuestions_01);
        scoreboard_exam_uniqueQuestionsId_02.push(uniqueRandomArrayQuestions_02);
        scoreboard_exam_uniqueQuestionsId_03.push(uniqueRandomArrayQuestions_03);
        scoreboard_exam_uniqueQuestionsId_04.push(uniqueRandomArrayQuestions_04);
        scoreboard_exam_uniqueQuestionsId_05.push(uniqueRandomArrayQuestions_05);
        scoreboard_exam_uniqueQuestionsId_06.push(uniqueRandomArrayQuestions_06);
        scoreboard_exam_uniqueQuestionsId_07.push(uniqueRandomArrayQuestions_07);
        scoreboard_exam_uniqueQuestionsId_08.push(uniqueRandomArrayQuestions_08);
        scoreboard_exam_uniqueQuestionsId_09.push(uniqueRandomArrayQuestions_09);
        scoreboard_exam_uniqueQuestionsId_10.push(uniqueRandomArrayQuestions_10);
        scoreboard_exam_uniqueQuestionsId_11.push(uniqueRandomArrayQuestions_11);
        scoreboard_exam_uniqueQuestionsId_12.push(uniqueRandomArrayQuestions_12);
        scoreboard_exam_uniqueQuestionsId_13.push(uniqueRandomArrayQuestions_13);
        scoreboard_exam_uniqueQuestionsId_14.push(uniqueRandomArrayQuestions_14);
        scoreboard_exam_my_answer.push(my_answer);
        scoreboard_exam_answer_time.push(answer_time);
        scoreboard_exam_choices.push(prev_choices);
        scoreboard_exam_correct_wrong_notif.push(correct_wrong_notif);

        // for ShowResult() storage if open using the openScoreBoard
        scoreboard_showresult_exam_subjectForTaking.push(topics[15]);
        scoreboard_showresult_exam_resultPercentage.push(resultPercentage);
        scoreboard_showresult_exam_score.push(score);
        scoreboard_showresult_exam_genInfoScore.push(genInfoScore);
        scoreboard_showresult_exam_numbericalScore.push(numbericalScore);
        scoreboard_showresult_exam_analyticalScore.push(analyticalScore);
        scoreboard_showresult_exam_verbalScore.push(verbalScore);
        scoreboard_showresult_exam_timeFinished.push(timeFinished);
        scoreboard_showresult_exam_dateTimeGenerated.push(dateTimeGenerated);
    }
    else {
        // Increment quiz result counter and update scoreboard data
        counter_display_quiz_result += 1;
        quiz_scoreboard_topic.push(topics[selectedTopicID]);
        quiz_scoreboard_topicID.push(selectedTopicID);
        quiz_scoreboard_score.push(score);
        quiz_scoreboard_topic_last_num.push(user_numbers_of_questions);
        quiz_scoreboard_percentage.push(resultPercentage.toFixed(2));
        quiz_scoreboard_rating.push(rating);
        quiz_scoreboard_finished_time.push(timeFinished);

        // Store quiz-specific data for result storage and review
        switch (selectedTopicID) {
            case 0:
                scoreboard_uniqueQuestionsId.push(uniqueRandomArrayQuestions_00);
            break;
            case 1:
                scoreboard_uniqueQuestionsId.push(uniqueRandomArrayQuestions_01);
            break;
            case 2:
                scoreboard_uniqueQuestionsId.push(uniqueRandomArrayQuestions_02);
            break;
            case 3:
                scoreboard_uniqueQuestionsId.push(uniqueRandomArrayQuestions_03);
            break;
            case 4:
                scoreboard_uniqueQuestionsId.push(uniqueRandomArrayQuestions_04);
            break;
            case 5:
                scoreboard_uniqueQuestionsId.push(uniqueRandomArrayQuestions_05);
            break;
            case 6:
                scoreboard_uniqueQuestionsId.push(uniqueRandomArrayQuestions_06);
            break;
            case 7:
                scoreboard_uniqueQuestionsId.push(uniqueRandomArrayQuestions_07);
            break;
            case 8:
                scoreboard_uniqueQuestionsId.push(uniqueRandomArrayQuestions_08);
            break;
            case 9:
                scoreboard_uniqueQuestionsId.push(uniqueRandomArrayQuestions_09);
            break;
            case 10:
                scoreboard_uniqueQuestionsId.push(uniqueRandomArrayQuestions_10);
            break;
            case 11:
                scoreboard_uniqueQuestionsId.push(uniqueRandomArrayQuestions_11);
            break;
            case 12:
                scoreboard_uniqueQuestionsId.push(uniqueRandomArrayQuestions_12);
            break;
            case 13:
                scoreboard_uniqueQuestionsId.push(uniqueRandomArrayQuestions_13);
            break;
            case 14:
                scoreboard_uniqueQuestionsId.push(uniqueRandomArrayQuestions_14);
            break;
        }
        scoreboard_prev_my_answer.push(my_answer);
        scoreboard_prev_answer_time.push(answer_time);
        scoreboard_prev_questions.push(prev_questions);
        scoreboard_prev_choices.push(prev_choices);
        scoreboard_correct_wrong_notif.push(correct_wrong_notif);

        // for ShowResult() storage if open using the openScoreBoard
        scoreboard_showresult_quiz_subjectForTaking.push(topics[selectedTopicID]); 
        scoreboard_showresult_quiz_score.push(score);
        scoreboard_showresult_quiz_resultPercentage.push(resultPercentage);
        scoreboard_showresult_quiz_timeFinished.push(timeFinished);
        scoreboard_showresult_dateTimeGenerated.push(dateTimeGenerated);
    }
}

// Function to display the results of the exam or quiz
function showResult(showResultTopicID) {
    // Scroll to the top of the content section
    const contentMain = document.getElementsByClassName('content-main')[0];
    contentMain.scrollTo(0, 0);

    // Reset the tooltip
    tooltip_counter = 0;

    // Get the current date and time for the report
    let curr_date = new Date();
    let curr_month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let curr_day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // Format the current time (hh:mm:ss AM/PM)
    let currentTime = new Date().toLocaleTimeString();
    let timeParts = currentTime.split(":");
    let amPmPart = timeParts[2].split(" ")[1];
    let dateTimeGenerated = curr_month[curr_date.getMonth()] + ` ` + curr_date.getDate() + `, ` + curr_date.getFullYear()  + `, ` + curr_day[curr_date.getDay()] + `, ` + timeParts[0] + `:` + timeParts[1] + ` ` + amPmPart;

    // Calculate the percentage score of the examinee (with a max of 99.99%)
    let resultPercentage = (score/user_numbers_of_questions) * 99.99;

    // Convert the timer counter into hours, minutes, and seconds
    let timerDuration = Math.floor(timerCounterForGlobal);
    let minutes = Math.floor((timerDuration % 3600) / 60);
    let seconds = Math.floor(timerDuration % 60);
    let hours = Math.floor(timerDuration / 3600);

    let txtHours = "";
    let txtMinutes = "";

    // Format the timer output based on hours, minutes, and seconds
    if (hours !== 0) {
        txtHours = `${hours} hour(s) and`;
    }
    if (minutes !== 0) {
        txtMinutes = `${minutes} minute(s) and`;
    }
    let timeFinished = `${txtHours} ${txtMinutes} ${seconds} second(s)`;

    // Initialize subject for the exam or quiz
    let subject_for_taking = "";

    let overAllText = "";

    // Rating and message based on the result
    let rating = "";
    let message = "";

    // Subject-specific rating and area score
    let exam_rating = "";
    let subject_per_area_score = "";

    // Determine if it's a quiz or an exam
    isTxtExamOrQuiz = txtButton;

    // Update variables when viewing results via the scoreboard
    if (isReviewingResultViaScoreBoard) {
        if (isTakingExam) {
            // Assign exam-related variables
            subject_for_taking  = scoreboard_showresult_exam_subjectForTaking[scoreboard_dataIndex];
            resultPercentage    = scoreboard_showresult_exam_resultPercentage[scoreboard_dataIndex];
            score               = scoreboard_showresult_exam_score[scoreboard_dataIndex];
            genInfoScore        = scoreboard_showresult_exam_genInfoScore[scoreboard_dataIndex];
            numbericalScore     = scoreboard_showresult_exam_numbericalScore[scoreboard_dataIndex];
            analyticalScore     = scoreboard_showresult_exam_analyticalScore[scoreboard_dataIndex];
            verbalScore         = scoreboard_showresult_exam_verbalScore[scoreboard_dataIndex];
            timeFinished        = scoreboard_showresult_exam_timeFinished[scoreboard_dataIndex];
            dateTimeGenerated   = scoreboard_showresult_exam_dateTimeGenerated[scoreboard_dataIndex];
        }
        else {
            // Assign quiz-related variables
            subject_for_taking  = scoreboard_showresult_quiz_subjectForTaking[scoreboard_dataIndex];
            resultPercentage    = scoreboard_showresult_quiz_resultPercentage[scoreboard_dataIndex];
            score               = scoreboard_showresult_quiz_score[scoreboard_dataIndex];
            timeFinished        = scoreboard_showresult_quiz_timeFinished[scoreboard_dataIndex];
            dateTimeGenerated   = scoreboard_showresult_dateTimeGenerated[scoreboard_dataIndex];
        } 
    }

    // Calculate individual subject ratings
    let verbalRatePercentage        = (verbalScore/numbers_exam_at_verbal_ability) * 99.99;
    let analyticalRatePercentage    = (analyticalScore/numbers_exam_at_analytical_ability) * 99.99;
    let numbericalRatePercentage    = (numbericalScore/numbers_exam_at_numberical_ability) * 99.99;
    let genInfoRatePercentage       = (genInfoScore/numbers_exam_at_general_info) * 99.99;

    if (isTakingExam) {
        // Generate exam rating table
        exam_rating = `
            <div>
                <b>Rating per Subject Areas</b>
            </div>
            <table class="design_table_rating_exam">
                <th>Verbal</th>
                <th>Analytical</th>
                <th>Numerical</th>
                <th>General Info</th>
                <tr>
                    <td><span class="verbal_rate">${verbalRatePercentage.toFixed(2)}</span>%</td>
                    <td><span class="analytical_info_rate">${analyticalRatePercentage.toFixed(2)}</span>%</td>
                    <td><span class="numerical_info_rate">${numbericalRatePercentage.toFixed(2)}</span>%</td>
                    <td><span class="general_info_rate">${genInfoRatePercentage.toFixed(2)}</span>%</td>
                <tr>
            </table>
        `;

        // Display the subject currently being taken
        subject_for_taking = topics[15];

        // Display the score per subject area
        subject_per_area_score = `
            <p>
                You got the following points per subject area:
                <p>
                    <div>General Information: <b>${genInfoScore} point(s)</b> out of ${numbers_exam_at_general_info} questions.</div>
                    <div>Numerical Ability: <b>${numbericalScore} point(s)</b> out of ${numbers_exam_at_numberical_ability} questions.</div>
                    <div>Analytical Ability: <b>${analyticalScore} point(s)</b> out of ${numbers_exam_at_analytical_ability} questions.</div>
                    <div>Verbal Ability: <b>${verbalScore} point(s)</b> out of ${numbers_exam_at_verbal_ability} questions.</div>
                </p>
            </p>
        `;

        overAllText = `Overall, `;
    }
    else {
        // Assign the subject for the selected Quiz
        subject_for_taking = topics[selectedTopicID];
    }

    // Determine whether the examinee passed or failed (80% is the passing grade)
    if (resultPercentage < passing_grade) {
        rating = `<span style="color:red">FAILED</span>`;
        message = `While you may not have achieved the desired score on this occasion, I hope that this experience has been a valuable learning opportunity for you. Failing the ${isTxtExamOrQuiz} does not define your capabilities, but rather provides an opportunity for improvement and further study. I encourage you to review the materials and consider retaking the ${isTxtExamOrQuiz} in the future to see your progress.`;
    }
    else {
        rating = `<span style="color:green">PASSED</span>`;
        message = "Congratulations on your achievement! I hope that this experience has been valuable to you in your quest for knowledge and learning.";
    }

    // Display the result to the user
    $(SELECT.CONTENT_MAIN).html(`
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
                    <p style="text-align:justify;">
                        Please be informed that you <b>${rating}</b> the ${subject_for_taking} - Personalize CSE Reviewer, with a general rating of <b>${numberToWord(resultPercentage.toFixed(2))} Percent (${resultPercentage.toFixed(2)}%)</b>
                    </p>
                    ${subject_per_area_score}
                    <center>
                        <p>
                            ${overAllText}You got <b>${score} point(s) out of ${user_numbers_of_questions} questions</b>.<br/>
                            You finished the ${isTxtExamOrQuiz} in <b>${timeFinished}</b>.
                        </p>
                        ${exam_rating}
                    </center>
                    <p>
                        <p style="text-align:justify;">${message}</p>
                    </p>
                    <p>
                        Very truly yours,
                    </p>
                    <p>
                        <b>${letter_name}</b><br>
                        ${letter_position}
                    </p>
                    <p>
                        <i>Date and Time Generated: <b>${dateTimeGenerated}</b></i>
                    </p>
                    <center>
                        <i style="font-size:11px">Please note: This is an electronic printout. It is not intended to be used for any legal purposes.</i>
                    </center>
                </div>
            </div>
        </div>
    `);

    // If it's an ongoing exam, provide an option to review answers
    if (isTakingExam) {
        if (isReviewingResultViaScoreBoard) {
            $(SELECT.CONTENT_FOOTER).html(`
                <div class="review_ans_con">
                    <button onclick="reviewed_ans_for_exam(${scoreboard_dataIndex})" class="review_answer ripple-btn">Review your Answer</button>
                </div>
            `);
        }
        else {
            $(SELECT.CONTENT_FOOTER).html(`
                <div class="review_ans_con">
                    <button onclick="reviewed_ans_for_exam()" class="review_answer ripple-btn">Review your Answer</button>
                </div>
            `);
        }
    }
    else {
        // Provide review answer options for quiz if the user is reviewing the answer via scoreboard
        if (isReviewingResultViaScoreBoard) {
            $(SELECT.CONTENT_FOOTER).html(`
                <div class="review_ans_con">
                    <button onclick="displayQuizPrevQuestionsAndChoices(${scoreboard_topicIndex}, ${scoreboard_dataIndex})" class="scoreboard_review_answer ripple-btn">Review your Answer</button>
                </div>
            `);
        }
        else {
            $(SELECT.CONTENT_FOOTER).html(`
                <div class="review_ans_con">
                    <button onclick="displayQuizPrevQuestionsAndChoices(${selectedTopicID})" class="review_answer ripple-btn">Review your Answer</button>
                </div>
            `);
        }
    }
}

// Function to update the timer
update_timer=()=> {
    timerInterval = setInterval(function() {
        // Increment the timer counters
        timerCounter++;
        timerCounterForGlobal++;

        // Calculate the timer duration in seconds
        let timerDuration = Math.floor(timerCounter);

        // Calculate the current seconds and minutes
        let secs = Math.floor(timerDuration) % 60;
        let min = Math.floor(timerDuration / 60);

        // Convert the seconds and minutes to strings for display
        let secs_string = secs.toString();
        let min_string = min.toString();

        // Get the length of the seconds and minutes strings
        let secs_length = secs_string.length;
        let min_length = min_string.length;

        // Get the timer display elements
        let timerMinutes = document.querySelector("#timerMinutes");
        let timerSeconds = document.querySelector("#timerSeconds");

        // Update the seconds display, adding a leading zero for single-digit numbers
        if (secs_length == 1) {
            timerSeconds.innerHTML = "0" + secs_string;
        }
        else {
            timerSeconds.innerHTML = secs_string;
        }

        // Update the minutes display, adding a leading zero for single-digit numbers
        if (min_length == 1) {
            timerMinutes.innerHTML = "0" + min_string;
        }
        else {
            timerMinutes.innerHTML = min_string;
        }
    }, convert_to_milliseconds);
}

// Function to stop the timer
stop_timer=()=> {
    // Stop the interval of the update timer
    clearInterval(timerInterval);

    // Reset the timer for initiating counter
    timerInitiateCounter = 0;
}

initiate_timer=()=> {
    // Increment the timerInitiateCounter by 1.
    timerInitiateCounter++;

    // Check if the timer has been initiated for the first time.
    // If so, call the update_timer function.
    if (timerInitiateCounter == 1) {
        // Call the update_timer function to start the timer.
        // This function is only called the first time the timer is initiated.
        update_timer();
    }

    // Reset the counter for timerCounting
    timerCounter = 0;
}

/**
 * Opens the scoreboard to display the results of quizzes and exams.
 * This function performs the following actions:
 * 1. Marks that the user is reviewing the results via the scoreboard.
 * 2. Stops and resets the global timer.
 * 3. Resets the styles and icons of all quiz buttons to their default state.
 * 4. Sets flags indicating that the user is no longer taking a quiz or exam.
 * 5. Renders the structure of the scoreboard, including placeholders for quiz and exam results.
 * 6. Populates the scoreboard with the user's quiz and exam scores if available.
 * 7. Clears all variables related to the previous questions, choices, and answers.
 */
function openScoreboard() {
    // Set the variable to true to indicate the user is reviewing results via the scoreboard
    isReviewingResultViaScoreBoard = true;

    // Stop the timer and reset the global timer counter
    stop_timer();
    timerCounterForGlobal = 0;

    // Retrieve all quiz button elements and icons
    let quizButtonElem = document.getElementsByClassName("quiz-button");
    let quizButtonIcon = document.getElementsByClassName("quiz-icon-container");

    // Loop through all quiz buttons and reset their styles and icons
    for (var i = 0; i < quizButtonElem.length; i++) {
        quizButtonElem[i].style.backgroundColor = "";               // Reset background color
        quizButtonElem[i].style.border = "";                        // Reset border
        quizButtonElem[i].style.transition = "0.3s";                // Add smooth transition
        quizButtonIcon[i].innerHTML = `${icon.bookmark_outline}`;   // Reset icon
    }

    // Set flags to indicate the user is not taking a quiz or an exam
    isTakingQuiz = false;
    isTakingExam = false;

    // Display the scoreboard structure in the main content area
    $(SELECT.CONTENT_MAIN).html(`
        <h1>Score Board</h1><br/>
        <div id="scoreboard_result_con">
            <div id="scoreboard_quiz_result_con"><span style="color:#777777">Your score result in <b>Quiz</b> will display here.</span></div>
            <br/><hr/><br/>
            <div id="scoreboard_exam_result_con"><span style="color:#777777">Your score result in <b>Exam</b> will display here.</span></div>
        </div>
    `);

    // Display the footer content with passing grade information
    $(SELECT.CONTENT_FOOTER).html(`
        <div style="font-size:13px"><strong>Please note</strong>: <br/>The Passing Grade is ${passing_grade}.00% and above</div>
    `);

    // Populate the quiz results table if applicable
    if (counter_display_quiz_result > 0) {
        $("#scoreboard_quiz_result_con").html(`
            <h2>Your scores in Quiz:</h2>
            <table id="score_list_quiz" class="design_score_list">
                <th>Quiz No.</th>
                <th style="text-align:left">Topic</th>
                <th>Score</th>
                <th>Percentage</th>
                <th>Rating</th>
                <th>Finished time</th>
                <th>Review Answer</th>
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
                <td style="width:100px;"><span class="numerical_info_rate"><button class="review_answer" onclick="displayQuizPrevQuestionsAndChoices(${quiz_scoreboard_topicID[i]}, ${[i]})">Review</button></td>
            </tr>
        `);
    }

    // Populate the exam results table if applicable
    if (counter_display_exam_result > 0) {
        $("#scoreboard_exam_result_con").html(`
            <h2>Your scores in Exam:</h2>
            <table id="score_list_exam" class="design_score_list">
                <th>Exam No.</th>
                <th style="text-align:left">Topic</th>
                <th>Score</th>
                <th>Percentage</th>
                <th>Rating</th>
                <th>Finished time</th>
                <th>Review Answer</th>
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
                <td style="width:100px;"><span class="numerical_info_rate"><button class="review_answer" onclick="reviewed_ans_for_exam(${[i]})">Review</button></td>
            </tr>
        `);
    }

    // Reset the database-related variables
    prev_questions      = [];   // Clear previous questions
    prev_choices        = [];   // Clear previous choices
    my_answer           = [];   // Clear user answers
    answer_time         = [];   // Clear answer timings
    correct_wrong_notif = [];   // Clear correct/wrong notifications
    tooltip_counter     = 0;    // Reset the tooltip
}

/* Ripple effect for button */
function initializeRippleEffect() {
    // Attach the click event listener to a parent element
    document.body.addEventListener('click', function (event) {
        // Find the closest ancestor with the 'ripple-btn' class
        const rippleBtn = event.target.closest('.ripple-btn');
        
        if (rippleBtn) {
            createRipple(event, rippleBtn);
        }
    });
}

function createRipple(event, element) {
    // Create a ripple element
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');

    // Calculate the position of the ripple
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    // Apply position and size to the ripple
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    // Append the ripple to the element
    element.appendChild(ripple);

    // Remove the ripple element after the animation completes
    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
}

// Initialize the ripple effect when the page is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    initializeRippleEffect();
});


// Global variables to manage the auto-submit functionality
let submittedAnswer;        // Interval ID for managing auto-submit
let isAutoSubmit = false;   // Flag to indicate if auto-submit is active

/**
 * Starts the auto-submit functionality for either an exam or a quiz.
 * Automatically submits random answers at regular intervals.
 *
 * @returns {string} - A confirmation message indicating that auto-submit has started.
 */
function startAutoSubmit() {
    // Disable alerts for non-answered questions during auto-submit
    disable_non_answer_alert = true;
    isAutoSubmit = true;

     if (isTakingExam) {
        // Auto-submit logic for exams and Execute every 50ms
        submittedAnswer = setInterval(function() {
            // Simulate checking a random answer
            checkExamAnswer(Math.floor(Math.random() * 5));

            // Submit the answer for the exam
            submitAnswerForExam();
        }, 50);
    }
    else {
        // Auto-submit logic for quizzes and Execute every 50ms
        submittedAnswer = setInterval(function() {
            // Simulate checking a random answer
            checkQuizAnswer(Math.floor(Math.random() * 5));

            // Submit the answer for the quiz
            submitAnswerForQuiz()
        }, 50);
    }

    // Log the initiation of auto-submit
    log("Initiating AutoSubmit!");
    return "AutoSubmit has been sucessfully initiated!";
}

/**
 * Stops the auto-submit functionality and restores default settings.
 */
function stopAutoSubmit() {
    // Re-enable alerts for non-answered questions
    disable_non_answer_alert = false;
    isAutoSubmit = false;

    // Clear the auto-submit interval
    clearInterval(submittedAnswer);

    // Log the termination of auto-submit
    log("AutoSubmit has been stopped!");
}

/**
* Dynamically injects a login form into the DOM if the `isLoginEnable` flag is true.
* The login form includes input fields for username and password, and a submit button.
*/
if (isLoginEnable) {
    $("body").append(`
        <div class="login_window">
            <div class="login_container">
                <form name="myForm" onSubmit="return submitUserNameAndPass(event)">
                    <label for="username">Username:</label>
                    <input autocomplete="off" placeholder="Type username here ..." type="text" id="username" name="username" />
                    <label for="pass">Password:</label>
                    <input placeholder="Type password here ..." type="password" id="pass" name="pass" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    `);

  /**
   * Handles the submission of the login form.
   * Prevents default form submission behavior, retrieves and trims username and password values.
   * Performs basic authentication by comparing input values against predefined `VALID_USERNAME` and `VALID_PASSWORD`.
   *
   * @param {Event} event - The form submission event.
   * @returns {boolean} - Always returns false to prevent the default form submission action.
   */
    function submitUserNameAndPass(event) {
        event.preventDefault(); // Prevent form from submitting and refreshing the page

        // Get the input values
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("pass").value.trim();

        /**
         * Authenticates the user based on provided credentials.
         */
        if (username === VALID_USERNAME && password === VALID_PASSWORD) {
            log("Login successful!");
            $(".login_window").remove();
        } else {
            alertDialog("Error", "Invalid username or password.");
        }

        // Return false to prevent default form submission
        return false;
    }
}

