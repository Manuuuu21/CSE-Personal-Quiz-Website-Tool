/**
 * Author: @Manuel G. Sintos
 * Date: Nov 27, 2023, 1:11 PM
 *
 */

/**
 * Logs a message with optional styling and message type.
 * @param {string} txt - The text message to be logged.
 * @param {string} type - The message type, can be 'error' or other values for status messages.
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

// Function to display an alert dialog with a custom message
function alertDialog(dialogTitle, dialogMes) {
    // Create a new div element
    var newDiv = document.createElement("div");
    // Assign an ID and class to the new div
    newDiv.id = "alertDialogWindow";
    newDiv.className = "alertDialogWindow";

    // Set the innerHTML of the new div to create the structure of the alert dialog
    newDiv.innerHTML = `
        <div id="alertDialogFirstCon" class="alertDialogFirstCon">
            <div id="alertDialogCon" class="alertDialogCon">
                <div class="alerDialogTitleCon"><div class="alerDialogTitle">` + dialogTitle + `</div></div>
                <div class="alertDialogMessage" id="alertDialogMessage">
                    ` + dialogMes + `
                </div>
                <div class="alertDialogButtonCon">
                    <button id="alertDialogPositiveButton">OKAY</button>
                </div>
            </div>
        </div>
    `;

    // Append the new div to the body of the document
    document.getElementsByTagName("body")[0].appendChild(newDiv);

    // Add a click event listener to the button to remove the dialog when clicked
    document.getElementById("alertDialogPositiveButton").onclick = function() {
        document.getElementById("alertDialogWindow").remove();
    }
}

/**
 * Display QR codes for Gcash and Paymaya.
 *
 * This function provides a user-friendly interface for users to donate by
 * displaying QR codes for Gcash and Paymaya payment options.
 */
function donateMe() {
    // Close the Menu Modal
    $("#myModal").remove();
    // Give time to initialize the createExam Function
    $(SELECT.BODY).append(`
        <div class="alertDialogWindow">
            <div class="alertDialogCon_DonateMe">
                <h1>Please consider supporting me with a donation.</h1>
                <div class="alertDialogMessage">
                    <p>Any amount is greatly appreciated. Thank you for your kindness and generosity.</p>
                    <table style="border:none;border-collapse:collapse;width:100%">
                        <th style="border:none;border-collapse:collapse"><img style="border-radius:20px;width:300px;height:430px" src="img/gcash_qr.jpg" /></th>
                        <th style="border:none;border-collapse:collapse"><img style="border-radius:20px;width:300px;height:430px" src="img/maya_qr.jpg" /></th>
                    </table>
                </div>

                <div class="alertDialogButtonConForDonate">
                    <button class="reminder_btn">CLOSE</button>
                </div>
            </div>
        </div>
    `);
    $(".alertDialogWindow").show();

    $(".reminder_btn").on("click", function() {
        $(".alertDialogWindow").remove();
    });
}

function displayDonateMeParagraphRequest() {
    // Remove the class donate container first
    $(".donate_me_con").remove();

    $(SELECT.FOOTER).append(
    `<div class="donate_me_con">
            <div class="donate_me">
                Do you like it? Please consider supporting me with a donation.<br>
                Any amount is greatly appreciated.<br>
                <a onclick="donateMe()" href="javascript:void(0)">Please click or scan here to donate.</a>
            </div>
    </div>`);
}

/**
 * This function logs the overall data lengths for different data arrays (data_00 to data_13).
 * It provides information about the size of each data array, which can be useful for monitoring data storage.
 */
function databaseStatus() {
    log("Overall data at data_00: " + data_00.length);
    log("Overall data at data_01: " + data_01.length);
    log("Overall data at data_02: " + data_02.length);
    log("Overall data at data_03: " + data_03.length);
    log("Overall data at data_04: " + data_04.length);
    log("Overall data at data_05: " + data_05.length);
    log("Overall data at data_06: " + data_06.length);
    log("Overall data at data_07: " + data_07.length);
    log("Overall data at data_08: " + data_08.length);
    log("Overall data at data_09: " + data_09.length);
    log("Overall data at data_10: " + data_10.length);
    log("Overall data at data_11: " + data_11.length);
    log("Overall data at data_12: " + data_12.length);
    log("Overall data at data_13: " + data_13.length);
    log("Overall data at data_14: " + data_14.length);
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

// Function to open the default email client with a pre-filled email address
function gotoMail() {
    document.location.href = "mailto:manuelsintos21@gmail.com";
}

// Function to open a Facebook profile in a new tab
function gotoMyFB() {
    window.open("https://facebook.com/manuel.sintos.92", "_blank");
}

// Function to open a Facebook profile in a new tab
function openCreateQuestionnaire() {
    window.open('questionnaire_data_format_maker.html', '', 'width=750,height=680');
    // window.open("questionnaire_data_format_maker.html", "_blank");
    // Close the menu modal
    closeMenuModal();
}

// Function to open the CSE Quiz in a new window
function openCSE_Quiz() {
    // Open 'index.html' in a new window with dimensions matching the current window
    window.open('index.html', '', 'width=' + window.innerWidth + ',height=' + window.innerHeight);
}

// Function to open the menu modal
function openMenuModal() {
    $(SELECT.BODY).append(`
        <div id="myModal" class="menu_modal">
            <div class="modal-content">
                <a href="javascript:void(0)" onclick="openCreateQuestionnaire()">
                    <div class="modal_content_icon"><svg style="margin: 0 5px -6px 0;" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg></div>
                    <div class="modal_content_description">Create Your Own Questions</div>
                </a>
                <a href="javascript:void(0)" onclick="downloadTheWebsite()">
                    <div class="modal_content_icon"><svg style="margin: 0 5px -6px 0;" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg></div>
                    <div class="modal_content_description">Download the Website</div>
                </a>
                <a href="javascript:void(0)" onclick="donateMe()">
                    <div class="modal_content_icon"><svg style="margin: 0 5.5px -6px 0;" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M640-440 474-602q-31-30-52.5-66.5T400-748q0-55 38.5-93.5T532-880q32 0 60 13.5t48 36.5q20-23 48-36.5t60-13.5q55 0 93.5 38.5T880-748q0 43-21 79.5T807-602L640-440Zm0-112 109-107q19-19 35-40.5t16-48.5q0-22-15-37t-37-15q-14 0-26.5 5.5T700-778l-60 72-60-72q-9-11-21.5-16.5T532-800q-22 0-37 15t-15 37q0 27 16 48.5t35 40.5l109 107ZM280-220l278 76 238-74q-5-9-14.5-15.5T760-240H558q-27 0-43-2t-33-8l-93-31 22-78 81 27q17 5 40 8t68 4q0-11-6.5-21T578-354l-234-86h-64v220ZM40-80v-440h304q7 0 14 1.5t13 3.5l235 87q33 12 53.5 42t20.5 66h80q50 0 85 33t35 87v40L560-60l-280-78v58H40Zm80-80h80v-280h-80v280Zm520-546Z"/></svg></div>
                    <div class="modal_content_description">Please Help me via Donation</div>
                </a>
            </div>
        </div>
    `);

    /*
     * I will Put it back again at the top if I change my mind.
     *
    <a href="javascript:void(0)" onclick="createExam()">
        <div class="modal_content_icon"><svg style="margin: 0 5px -6px 0;" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg></div>
        <div class="modal_content_description">Create Examination</div>
    </a> 
    */
}

function downloadTheWebsite() {
    const downloadLink = document.createElement("a");
    downloadLink.setAttribute("download", "");
    downloadLink.href = "CSE_Quiz_Web.zip";

    // Append the link to the document
    document.body.appendChild(downloadLink);

    // Simulate a click on the link
    downloadLink.click();

    // Remove the link from the document
    document.body.removeChild(downloadLink);

    closeMenuModal();
}


// Function to close the menu modal
function closeMenuModal(argument) {
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

function openSideBar() {
    $(".side_nav").show();
}

function closeSideBar() {
    $(".side_nav").hide();
}

var isMobileVersion = false;
var mql = window.matchMedia("(orientation: portrait)");
// Add a listen event
mql.addListener(handleOrientationChange);
// Initial check
handleOrientationChange(mql);
function handleOrientationChange(mql) {
  // Portrait
  if (mql.matches) {
     $(".side_nav").hide();
     isMobileVersion = true;
  } 
  // Desktop or Landscape
  else {
    $(".side_nav").show();
    isMobileVersion = false;
  }
}

// Attach a click event handler to elements with the class 'site_title'
$(".site_title").on("click", function() {
    // When an element is clicked, the current page is reloaded
    window.location.href = location.href;
});

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
 * Displays a question and its choices to the user.
 *
 * @param {Object} questionData - An object containing information about the question.
 * @param {string} questionData.questionText - The text of the question.
 * @param {string[]} questionData.choices - An array of strings representing the answer choices.
 * @param {number} questionData.correctChoiceIndex - The index of the correct answer choice.
 */
function displayQuestionAndChoicesForTopics(questionData) {
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
                <div class="submit_question"><button class="ripple-btn" onclick="submitAnswer()">Submit your answer</button></div>
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
        choicesHTML += "<div class='choices ripple-btn' onclick='checkAnswer(" + i + ")'>" + (i + 1) + ") " + choices[i] + "</div>";
    }

    // Set the choices in the HTML
    document.getElementById("choices_con").innerHTML = choicesHTML;
}

// Global variable for managing the setInterval function
let timerInterval;

// Variable for tracking the timer displayed on the website
let timerCounter = 0;

// Global variable for tracking the overall time in seconds, used for calculating hours, minutes, and seconds
let timerCounterForGlobal = 0;

// Variable for initiating the timer
let timerInitiateCounter = 0;

// The interval at which the timer increments, in seconds, for use with setInterval
let counting_per_seconds = 1;

// Conversion of the interval from seconds to milliseconds, for use with setInterval
let convert_to_milliseconds = counting_per_seconds * 1000; 

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
 * Checks the examinee's answer against the correct answer and provides feedback.
 *
 * @param {Object} answerData - An object containing information about the answer.
 * @param {string} answerData.examineeAnswer - The answer provided by the examinee.
 * @param {string} answerData.correctAnswer - The correct answer.
 * @returns {string} - A feedback message indicating whether the answer is correct or not.
 */
function checkExamaneeAnswer(answerData) {
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

let tooltip_counter = 0;
/**
 * This function is used to display previous questions and choices for an exam.
 *
 * @param {Array} dataQuestionsIndex - The index of the current question in the dataQuestions array.
 * @param {Array} dataQuestions - An array containing the questions for the exam.
 * @param {number} numberStart - The starting number for the pagination.
 * @param {boolean} displayFirstPagination - A flag indicating whether to display the first pagination.
 * @param {boolean} displaySecondPagination - A flag indicating whether to display the second pagination.
 * @param {boolean} retakeQuiz - A flag indicating whether to display the retakeQuiz button? Note: This is only intended for quiz not for exam.
 */
displayPreviousQuestionsAndChoices_data=(dataQuestionsIndex, dataQuestions, numberStart, displayFirstPagination, displaySecondPagination, retakeQuiz)=> {

    let prevQuestions = "";
    let questionIndex;
    let questionData;

    let n = numberStart;

    for (let i = 0; i < dataQuestionsIndex.length; i++) {
        questionIndex = dataQuestionsIndex[i];
        questionData = dataQuestions[questionIndex];
       
        // Build HTML for the entire question and its choices
        prevQuestions +=
        '<div class="content"><div class="prev_question_con" id="prev_question_con' + (i + numberStart) + '">' +
            '<div class="prev_question" id="prev_question"><div class="answered_time">' + answer_time[n] + '</div>' + // BUG HERE
                '<span class="question_counter" id="question_counter">' + (i + numberStart + 1) + '. ) </span>' + questionData.question +
        '</div>';

        // Loop through the choices for this question
        let prevchoicesTxt = "";
        let correctOrWrongChoiceTxt = "";
        let correctOrWrongChoiceClass = "";

        for (let c = 0; c < 5; c++) {
            const choice = prev_choices[n][c];
            prevchoicesTxt += '<div class="prev_choices';

            // Check if the current choice matches the correct answer
            if (choice == questionData.correct_ans) {
                prevchoicesTxt += ' correct';

                // Add class "correct" to correct answer
                if (c === my_answer[n]) {
                    prevchoicesTxt += '';
                }
            } 
            else {
                // Add class "wrong" to incorrect answers
                if (c === my_answer[n]) {
                    prevchoicesTxt += ' wrong';
                }
            }

            prevchoicesTxt += '"> ' + (c + 1) + ') ' + choice + '</div>';
        }

        prevQuestions += prevchoicesTxt + '<div class="question_explanation"><div><b>Correct Explanation:</b></div><p style="font-size:15px">' + questionData.explanation + '</p></div>' + 
        '</div></div>';

        n++; // Increment 'n' by 1
    }

    tooltip_counter++;
    if (tooltip_counter == 1) {
        setTimeout(function() {
            $(".prev_choices.correct").append("<div class='tooltip_for_prev_display correct'>Correct answer.</div>");
            $(".prev_choices.wrong").append("<div class='tooltip_for_prev_display wrong'>Your answer.</div>");
        }, 16);
    }

    // Append the previous questions and choices HTML to the body of the webpage
    $(SELECT.BODY).append(prevQuestions);

    if (displayFirstPagination) {
        $(SELECT.BODY).append(`
            <div class="content">
                <div class="prev_question" id="prev_question">
                    <center>
                        <button disabled class="prev_display_review_result_btn" onclick="prev_display_review_result()">< Previous Page</button>
                        <button class="next_display_review_result_btn" onclick="next_display_review_result()">Next Page ></button>
                    </center>
                </div>
            </div>
        `);

        displayDonateMeParagraphRequest();
        $(".donate_me").append(`
            <button onclick="createExam()" class="retake_quiz retake_exam">Retake Exam</button>
        `);
        $(".donate_me").append(`
            <button onclick="showResult()" class="back_to_result_btn">Return to Result Page</button>
        `);
    }

    if (displaySecondPagination) {
        $(SELECT.BODY).append(`
            <div class="content">
                <div class="prev_question" id="prev_question">
                    <center>
                        <button class="prev_display_review_result_btn" onclick="prev_display_review_result()">< Previous Page</button>
                        <button disabled class="next_display_review_result_btn" onclick="next_display_review_result()">Next Page ></button>
                    </center>
                </div>
            </div>
        `);
    }

    if (retakeQuiz) {
        displayDonateMeParagraphRequest();
        $(".donate_me").append(`
            <button onclick="selectedTopic(`+ selectedTopicID + `)" class="retake_quiz">Retake Quiz</button>
        `);
        $(".donate_me").append(`
            <button onclick="showResult()" class="back_to_result_btn">Return to Result Page</button>
        `);
    }
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

// This is just for Debugging purpose
let submittedAnswer;
function startAutoSubmit() {
    disable_non_answer_alert = true;

    if (isTakingExam) {
        submittedAnswer = setInterval(function() {submitAnswerForExam()}, 50);
    }
    else {
        submittedAnswer = setInterval(function() {submitAnswer()}, 50);
    }
}

function stopAutoSubmit() {
    clearInterval(submittedAnswer);
}