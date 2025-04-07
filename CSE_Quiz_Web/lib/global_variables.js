/**
 * Author: @Manuel G. Sintos
 * Date: Dec 28, 2024, 4:20 PM
 */

/* Passing Grade 80% */
let passing_grade = 80;

/* score of the user */
let score = 0;

let verbalScore = 0;
let analyticalScore = 0;
let numbericalScore = 0;
let genInfoScore = 0;

/* is User Selected answer? */
let isAnswerSelected = false;

/* Global variable for selected answer if correct or wrong */
let selectedAnswer;

/* Global variable for selected answer on what index in the choices 0-4*/
let selectedAnswerIndex;

/* store your answer here */
let my_answer = [];

/* Store the time you answered the question */
let answer_time = [];

/* Correct or wrong logo notif for the user */
let correct_wrong_notif = [];
let correct_logo = `<div class="correct_design_notif">YOU GOT THE CORRECT ANSWER!!</div>`;
let wrong_logo = `<div class="wrong_design_notif">YOU GOT A WRONG ANSWER!!</div>`;

/* This variable controls the non-answer submission ALERT. 
 * If set to true, non-answer submissions Alert are disabled. 
 * If set to false, non-answer submissions Alert are enabled (You will see an error (reminding you) if no answer is submitted). */
let disable_non_answer_alert = false;

/* This will show in the console log if your selected choices is correct or wrong.
 * To disable this feature, set the variable to false. */
let show_correct_wrong_answer = false;

/* Global variables of user total numbers of question that answering both Quiz or Exam */
let user_numbers_of_questions = 0;

/* Numbers of questions you need to answers or completed for Exam. 
 * Note: Do not change anything here. unless you know how to refactor the code in init_exam.js */
let numbers_exam_at_verbal_ability = 44; 		// fixed at 44 questions
let numbers_exam_at_analytical_ability = 43; 	// fixed at 43 questions
let numbers_exam_at_numberical_ability = 43; 	// fixed at 43 questions
let numbers_exam_at_general_info = 20; 			// fixed at 20 questions
let numbers_of_exam_questions = numbers_exam_at_verbal_ability + numbers_exam_at_analytical_ability + numbers_exam_at_numberical_ability + numbers_exam_at_general_info;

/* Global vairable for selectedTopicID */
let selectedTopicID;

/* is the user taking quiz? */
let isTakingQuiz = false;

/* is Quiz Finished by the user? */
let isQuizFinished = false;

/* is the user taking exam? */
let isTakingExam = false;

/* is Exam Finished by the user? */
let isExamFinished = false;

/* is Login Screen Enabled to access the website? */
const isLoginEnable = false;

/* Global variables for username and password */
const VALID_USERNAME = "admin";
const VALID_PASSWORD = "admin";

/* Set of Questions. This is just a data for the generated unique set of questions 
 * Once, it generated. It will declared as unique Question to the selected Topic
 */
let all_array_of_question = [];

/* Variable handlers for the Questions Data */
let uniqueRandomArrayQuestions_00 = [];
let uniqueRandomArrayQuestions_01 = [];
let uniqueRandomArrayQuestions_02 = [];
let uniqueRandomArrayQuestions_03 = [];
let uniqueRandomArrayQuestions_04 = [];
let uniqueRandomArrayQuestions_05 = [];
let uniqueRandomArrayQuestions_06 = [];
let uniqueRandomArrayQuestions_07 = [];
let uniqueRandomArrayQuestions_08 = [];
let uniqueRandomArrayQuestions_09 = [];
let uniqueRandomArrayQuestions_10 = [];
let uniqueRandomArrayQuestions_11 = [];
let uniqueRandomArrayQuestions_12 = [];
let uniqueRandomArrayQuestions_13 = [];
let uniqueRandomArrayQuestions_14 = [];

/* Numbering per questions displayed */
let questionNumbering = 0;

/* Variable for handling choices of the questions */
let choices;
let choicesHTML;

/* Store the previous questions displayed */
let prev_questions = [];
let prev_choices = [];

// For Timer each Questions you answered
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

/* This is for BG and border color of the selected topic */
let bgColorForSelectedButton = "#d2e7ff";
let bgColorForSelectedAnswer = "#d2e7ff";
let borderColorForSelectedButton = "1px solid #1a73e8";
let borderColorForSelectedAnswer = "1px solid #1a73e8";
let bookmark_filledColor = "#6060be";

/* isReviewingViaScoreBoard */
let isReviewingResultViaScoreBoard = false;
let selectedTopicIDviaScoreBoard;

/* Store the scoreboard */
let counter_display_quiz_result = 0;
let counter_display_exam_result = 0;

let quiz_scoreboard_topic = []; // in text form
let quiz_scoreboard_topicID = []; // in id form
let quiz_scoreboard_score = [];
let quiz_scoreboard_topic_last_num = [];
let quiz_scoreboard_percentage = [];
let quiz_scoreboard_rating = [];
let quiz_scoreboard_finished_time = [];

let exam_scoreboard_topic = [];
let exam_scoreboard_score = [];
let exam_scoreboard_topic_last_num = [];
let exam_scoreboard_percentage = [];
let exam_scoreboard_rating = [];
let exam_scoreboard_finished_time = [];

/* Scoreboard reviewing questions and answers 
 * After retreiving the value of this. We should declare it again to prev_questions and prev_choices for displayQuizPrevQuestionsAndChoices */
let scoreboard_uniqueQuestionsId = [];
let scoreboard_prev_my_answer = [];
let scoreboard_prev_answer_time = [];
let scoreboard_prev_questions = [];
let scoreboard_prev_choices = [];
let scoreboard_correct_wrong_notif = [];
let scoreboard_dataIndex;
let scoreboard_topicIndex;

let scoreboard_showresult_quiz_subjectForTaking = [];
let scoreboard_showresult_quiz_resultPercentage = [];
let scoreboard_showresult_quiz_score = [];
let scoreboard_showresult_quiz_timeFinished = [];
let scoreboard_showresult_dateTimeGenerated = [];

/* Scoreboard database for Exam for Reviewing answers, questions, choices, etc. */
let scoreboard_exam_my_answer = [];
let scoreboard_exam_answer_time = [];
let scoreboard_exam_choices = [];
let scoreboard_exam_correct_wrong_notif = [];

let scoreboard_exam_uniqueQuestionsId_00 = [];
let scoreboard_exam_uniqueQuestionsId_01 = [];
let scoreboard_exam_uniqueQuestionsId_02 = [];
let scoreboard_exam_uniqueQuestionsId_03 = [];
let scoreboard_exam_uniqueQuestionsId_04 = [];
let scoreboard_exam_uniqueQuestionsId_05 = [];
let scoreboard_exam_uniqueQuestionsId_06 = [];
let scoreboard_exam_uniqueQuestionsId_07 = [];
let scoreboard_exam_uniqueQuestionsId_08 = [];
let scoreboard_exam_uniqueQuestionsId_09 = [];
let scoreboard_exam_uniqueQuestionsId_10 = [];
let scoreboard_exam_uniqueQuestionsId_11 = [];
let scoreboard_exam_uniqueQuestionsId_12 = [];
let scoreboard_exam_uniqueQuestionsId_13 = [];
let scoreboard_exam_uniqueQuestionsId_14 = [];

let scoreboard_showresult_exam_subjectForTaking = [];
let scoreboard_showresult_exam_resultPercentage = [];
let scoreboard_showresult_exam_score = [];
let scoreboard_showresult_exam_genInfoScore = [];
let scoreboard_showresult_exam_numbericalScore = [];
let scoreboard_showresult_exam_analyticalScore = [];
let scoreboard_showresult_exam_verbalScore = [];
let scoreboard_showresult_exam_timeFinished = [];
let scoreboard_showresult_exam_dateTimeGenerated = [];

/* For tooltip in the reviewing correct or your answer */
let tooltip_counter = 0;

/** 
 * Array of topics categorized into General Information, Numerical Ability, Analytical Ability, and Verbal Ability.
 * Each category contains specific subtopics related to its field.
 */
let topics = [
	// General Information
	"General Information - Topics on the Philippines Constitution and etc.",
	"General Information - Topics on the Code of Conduct and Ethical Standards for Public Officials and Employees (R.A. 6713)",
	"General Information - Topics on the Environmental Management and Protection",
	"General Information - Topics on the Peace and Human Rights Issues and Concepts",

	// Numerical Ability
	"Numerical Ability - Topics on the Basic Operations",
	"Numerical Ability - Topics on the Identifying Next Sequence",
	"Numerical Ability - Topics on the Word Problems",

	// Analytical Ability
	"Analytical Ability - Topics on the Word Association",
	"Analytical Ability - Topics on the Identifying Assumptions and conclusions",
	"Analytical Ability - Topics on the Logical Reasoning",
	"Analytical Ability - Topics on the Data interpretation and Analysis",

	// Verbal Ability
	"Verbal Ability - Topics on the Grammar and correct usage",
	"Verbal Ability - Topics on the Vocabulary",
	"Verbal Ability - Topics on the Paragraph organization",
	"Verbal Ability - Topics on the Reading comprehension",
	"General Information, Numerical Ability, Analytical Ability, and Verbal Ability"
];

/* This is name that will display to show result letter */
let letter_name = "MANUEL G. SINTOS";

/* This is Position that will display to show result letter */
let letter_position = "Website Creator - Personalize CSE Reviewer";

/* SVG Icons */
let icon = {
	next: `<svg style="margin-bottom:-7px;width:24px;height:24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>`,
	prev: `<svg style="margin-bottom:-7px;width:24px;height:24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>`,
	scoreboard: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M320-280q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm120 320h240v-80H440v80Zm0-160h240v-80H440v80Zm0-160h240v-80H440v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>`,
	menu_three_dot: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>`,
	printer: `<svg style="margin: -2px 5px -9px 0;width:24px;height:24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M640-640v-120H320v120h-80v-200h480v200h-80Zm-480 80h640-640Zm560 100q17 0 28.5-11.5T760-500q0-17-11.5-28.5T720-540q-17 0-28.5 11.5T680-500q0 17 11.5 28.5T720-460Zm-80 260v-160H320v160h320Zm80 80H240v-160H80v-240q0-51 35-85.5t85-34.5h560q51 0 85.5 34.5T880-520v240H720v160Zm80-240v-160q0-17-11.5-28.5T760-560H200q-17 0-28.5 11.5T160-520v160h80v-80h480v80h80Z"/></svg>`,
	fb: `<svg onclick="gotoMyFB()" style="width:32px;height:32px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg>`,
	mail: `<svg onclick="gotoMail()" style="width:32px;height:32px" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg></center>`,
	bookmark_outline: `<svg style="margin: -1px 5px -3px 0;" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"/></svg>`,
	bookmark_filled: `<svg style="margin:-1px 5px -3px 0;fill:${bookmark_filledColor}" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Z"/></svg>`,
};

/* Element Selector */
let SELECT = {
	BODY: `body`,
	CONTENT_HEADER: `.content-header`,
	CONTENT_MAIN: `.content-main`,
	CONTENT_FOOTER: `.content-footer`,
	INSTRUCTION: `#instruction`,

	INSTRUCTION_TOPIC_00: 	`The following items pertain to the Philippine Constitution. Read each question carefully and choose the BEST answer from the given options.`,
	INSTRUCTION_TOPIC_01: 	`The following items pertain to the RA 6713 (Code of Conduct and Ethical Standards for Public Officials and Employees). Read each question carefully and choose the BEST answer from the given options.`,
	INSTRUCTION_TOPIC_02: 	`The following items pertain to the Environmental protection and conservation. Read each question carefully and choose the BEST answer from the given options.`,
	INSTRUCTION_TOPIC_03: 	`The following items pertain to the Peace and human rights concept. Read each question carefully and choose the BEST answer from the given options.`,
	INSTRUCTION_TOPIC_04: 	`Read each question carefully and choose the BEST answer from the given options. The following items pertain to the Numerical Ability Basic Math Operation.`,
	INSTRUCTION_TOPIC_05: 	`Read each question carefully and choose the BEST answer from the given options. The following items pertain to the Numerical Ability Identifying Next Numbers.`,
	INSTRUCTION_TOPIC_06: 	`Read each question carefully and choose the BEST answer from the given options. The following items pertain to the Numerical Ability Math word problems.`,
	INSTRUCTION_TOPIC_07: 	`The following items pertain to the Analytical Ability Word Association. Read ech question carefully and choose the BEST answer from the given options.`,
	INSTRUCTION_TOPIC_08: 	`The following items pertain to the Analytical Ability Identifying assumptions and conclusions. Read each question carefully and choose the BEST answer from the given options.`,
	INSTRUCTION_TOPIC_09: 	`The following items pertain to the Analytical Ability Logical Reasoning. Read each question carefully and choose the BEST answer from the given options.`,
	INSTRUCTION_TOPIC_10: 	`The following items pertain to the Analytical Ability Data Interpretation. Read ech question carefully and choose the BEST answer from the given options.`,
	INSTRUCTION_TOPIC_11: 	`The following items pertain to the Verbal Ability Grammar and Correct usage. Read each question carefully and choose the BEST answer from the given options.`,
	INSTRUCTION_TOPIC_12: 	`The following items pertain to the Verbal Ability Vocabulary. Read each question carefully and choose the BEST answer from the given options.`,
	INSTRUCTION_TOPIC_13: 	`The following items pertain to the Verbal Ability Paragraph organization. Read each question carefully and choose the BEST answer from the given options.`,
	INSTRUCTION_TOPIC_14: 	`The following items pertain to the Verbal Ability Reading Comprehension. Read each question carefully and choose the BEST answer from the given options.`,

	INSTRUCTION_EXAM_00: 	`The following items pertain to the Philippine Constitution, RA 6713 (Code of Conduct and Ethical Standards for Public Officials and Employees), Environmental protection and conservation, and Peace and human rights concept. Read each question carefully and choose the BEST answer from the given options.`,
	INSTRUCTION_EXAM_01: 	`The following items pertain to the Numerical Ability Basic Math Operation, Identifying Sequence, and Word problems. Read each question carefully and choose the BEST answer from the given options.`,
	INSTRUCTION_EXAM_02: 	`The following items pertain to the Analytical Ability Word Association, Identifying assumptions and conclusions, Logical Reasoning, and Data Interpretation. Read ech question carefully and choose the BEST answer from the given options.`,
	INSTRUCTION_EXAM_03: 	`The following items pertain to the Verbal Ability Grammar and Correct usage, Vocabulary, Paragraph organization, and Reading Comprehension. Read each question carefully and choose the BEST answer from the given options.`,
};