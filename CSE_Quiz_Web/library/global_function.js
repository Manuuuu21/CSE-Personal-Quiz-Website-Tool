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
    closeMenuModal();
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

                <div class="alertDialogButtonCon">
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
    // Arrays to hold word equivalents of numbers.
    let units = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    let teens = ['Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    let tens = ['Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    // Split the number into integer and decimal parts.
    let integerPart = Math.floor(num);
    let decimalPart = Math.round((num - integerPart) * 100);

    // Initialize the words string.
    let words = "";

    // Convert the integer part into words.
    if (integerPart === 0) {
        words += units[0];
    } else if (integerPart >= 10 && integerPart < 20) {
        words += teens[integerPart - 11];
    } else {
        if (Math.floor(integerPart / 10) > 0) {
            words += tens[Math.floor(integerPart / 10) - 1];
        }
        if (integerPart % 10 > 0) {
            words += " " + units[integerPart % 10];
        }
    }

    // Convert the decimal part into words.
    if (decimalPart > 0) {
        words += " point";
        if (decimalPart >= 10 && decimalPart < 20) {
            words += " " + teens[decimalPart - 11];
        } else {
            if (Math.floor(decimalPart / 10) > 0) {
                words += " " + tens[Math.floor(decimalPart / 10) - 1];
            }
            if (decimalPart % 10 > 0) {
                words += " " + units[decimalPart % 10];
            }
        }
    }

    // Return the final words string.
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
    window.open('questionnaire_data_format_maker.html', '', 'width=750,height=' + window.innerHeight);
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
    // Set the display style of the modal with the ID 'myModal' to 'block'
    document.getElementById('myModal').style.display = 'block';
}

// Function to close the menu modal
function closeMenuModal(argument) {
    // Set the display style of the modal with the ID 'myModal' to 'none'
    document.getElementById('myModal').style.display = 'none';
}

// Event handler for clicking outside the modal
window.onclick = function(event) {
    // Get the modal element with the ID 'myModal'
    var modal = document.getElementById('myModal');

    // Check if the clicked element is the modal itself
    if (event.target == modal) {
        // If the clicked element is the modal, hide the modal by setting its display style to 'none'
        modal.style.display = 'none';
    }
}

// Attach a click event handler to elements with the class 'site_title'
$(".site_title").on("click", function() {
    // When an element is clicked, the current page is reloaded
    window.location.href = window.location.href;
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
                <div class="question_counter_con_and_timer"><b>Question No. <span class='question_counter' id="question_counter">` + (questionCounter + 1) + `</span> out of ` + examanee_number_of_questions + `</b></div>
                <div class="question" id="question"></div>
                <div class="choices_con" id="choices_con"></div>
                <div class="submit_question"><button onclick="submitAnswer()">Submit your answer</button></div>
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
        choicesHTML += "<div class='choices' onclick='checkAnswer(" + i + ")'>" + (i + 1) + ") " + choices[i] + "</div>";
    }

    // Set the choices in the HTML
    document.getElementById("choices_con").innerHTML = choicesHTML;
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
            '<div class="prev_question" id="prev_question">' +
                '<span class="question_counter" id="question_counter">' + (i + numberStart + 1) + '. ) </span>' + questionData.question +
        '</div>';

        // Loop through the choices for this question
        let prevchoicesTxt = "";
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

        prevQuestions += prevchoicesTxt + '<div class="question_explanation"><div><b>Explanation:</b></div><p style="font-size:17px">' + questionData.explanation + '</p></div>' + 
        '</div></div>';

        n++; // Increment 'n' by 1
    }

    // Append the previous questions and choices HTML to the body of the webpage
    $(SELECT.BODY).append(prevQuestions);

    if (displayFirstPagination == true) {
        $(SELECT.BODY).append(`
            <div class="content">
                <div class="prev_question" id="prev_question">
                    <center>
                        <button disabled class="prev_display_review_result_btn" onclick="prev_display_review_result()">Previous Page</button>
                        <button class="next_display_review_result_btn" onclick="next_display_review_result()">Next Page</button>
                    </center>
                </div>
            </div>
        `);

        displayDonateMeParagraphRequest();
        $(".donate_me").append(`
            <button onclick="createExam()" class="retake_quiz retake_exam">Retake Exam</button>
        `);
    }

    if (displaySecondPagination == true) {
        $(SELECT.BODY).append(`
            <div class="content">
                <div class="prev_question" id="prev_question">
                    <center>
                        <button class="prev_display_review_result_btn" onclick="prev_display_review_result()">Previous Page</button>
                        <button disabled class="next_display_review_result_btn" onclick="next_display_review_result()">Next Page</button>
                    </center>
                </div>
            </div>
        `);
    }

    if (retakeQuiz == true) {
        displayDonateMeParagraphRequest();
        $(".donate_me").append(`
            <button onclick="selectedTopic(`+ selectedTopicID + `)" class="retake_quiz">Retake Quiz</button>
        `);
    }
}