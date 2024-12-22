/**
 * Author: @Manuel G. Sintos
 * Date: Nov 27, 2023, 1:11 PM
 *
 */

/* score of the examanee */
let score = 0;

/* Counter per questions */
let questionCounter = 0;

/* Counter for displaying the question, 
 * eg. once user already click the topics or exam, it will not duplicate the question container */
let counterDisplayQuestionContainer = 0;

/* Global vairable for selectedTopicID */
let selectedTopicID;

/* Global vairable for previous selectedTopicID */
let prev_selectedTopicID;

/* is the examanee taking exam? */
let isTakingExam = false;

/* is Exam Finished? */
let isExamFinished = false;

/* is the examanee taking topic only? */
let isTakingTopics = false;

/* variable for handling the data */
let questionData;

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
let correct_wrong_logo = [];
let correct_logo = `<div class="correct_design_notif">YOU GOT THE CORRECT ANSWER!!</div>`; // <img style='width:210px;margin-top:-55px;' src='img/correct_notif_2.png' />
let wrong_logo = `<div class="wrong_design_notif">YOU GOT A WRONG ANSWER!!</div>`; // <img style='width:210px;margin-top:-55px;transform: rotate(20deg);' src='img/wrong_notif_3.png' />

// Define a variable to store the check the answer ("Correct" or "Wrong")
let correctAnswer;

/* Set of Questions */
let all_array_of_question = [];

/* Passing Grade 80% */
let passing_grade = 80;

/* Variable for handling choices of the questions */
let choices;
let choicesHTML;

/* This is for BG and border color of the selected topic */
let bgColorForSelectedAnswer = "#c2e7ff";
let borderColorForSelectedAnswer = "1px solid #1a73e8";

/* Store the previous questions displayed */
let prev_questions = [];
let prev_choices = [];

/* Array of unique random of Question */
let uniqueRandomArrayQuestions = [];

/* Exam no. of questions that you need to answer */
let examanee_number_of_questions;

let verbalScore = 0;
let analyticalScore = 0;
let numbericalScore = 0;
let genInfoScore = 0;

/* This variable controls the non-answer submission ALERT. 
 * If set to true, non-answer submissions Alert are disabled. 
 * If set to false, non-answer submissions Alert are enabled (You will see an error (reminding you) if no answer is submitted). */
let disable_non_answer_alert = false;

/* Numbers of questions you need to answers or completed for Exam. Note: Do not change anything here. unless you know how to refactor the code in exam.js */
let numbers_exam_at_verbal_ability = 44; 		// fix at 44 questions
let numbers_exam_at_analytical_ability = 43; 	// fix at 43 questions
let numbers_exam_at_numberical_ability = 43; 	// fix at 43 questions
let numbers_exam_at_general_info = 20; 			// fix at 20 questions
let exam_number_of_questions = numbers_exam_at_verbal_ability + numbers_exam_at_analytical_ability + numbers_exam_at_numberical_ability + numbers_exam_at_general_info;

let counter_display_quiz_result = 0;
let counter_display_exam_result = 0;

/* Store the scoreboard to the quiz */
let quiz_scoreboard_topic = [];
let quiz_scoreboard_score = [];
let quiz_scoreboard_topic_last_num = [];
let quiz_scoreboard_percentage = [];
let quiz_scoreboard_rating = [];
let quiz_scoreboard_finished_time = [];

/* Store the scoreboard to the Exam */
let exam_scoreboard_topic = [];
let exam_scoreboard_score = [];
let exam_scoreboard_topic_last_num = [];
let exam_scoreboard_percentage = [];
let exam_scoreboard_rating = [];
let exam_scoreboard_finished_time = [];

let topics = [
	// General Information
	"General Information - Topics on the Philippines Constitution and etc.",
	"General Information - Topics on the Code of Conduct and Ethical Standards for Public Officials and Employees (R.A. 6713)",
	"General Information - Topics on the Environmental Management and Protection",
	"General Information - Topics on the Peace and Human Rights Issues and Concepts",

	// Numerical Ability
	"Numerical Ability - Topics on the Basic Operations",
	"Numerical Ability - Topics on the Identifying Next Numbers",
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

/* 
 * This is name that will display to show result letter
 */
let letter_name = "MANUEL G. SINTOS";

/* 
 * This is Position that will display to show result letter
 */
let letter_position = "Website Creator - Personalize CSE Reviewer";

let SELECT = {
	CREATOR_ANNOUNCEMENT: 	`<h1>IMPORTANT NOTE FROM THE CREATOR OF THIS WEBSITE</h1>
							<p>Dear Learners,</p>
							<p>I wanted to share an important note regarding the content on this website. I have developed this mock quiz/exam website tool to support education, specifically for individuals preparing for the Civil Service Exam. These data of questions were picked carefully from publicly available information on the internet, with the primary goal of making learning more accessible.</p>
							<p>It's important to highlight that I am fully committed to follow the copyright regulations, with a particular emphasis on compliance with the Intellectual Property Code of the Philippines (Republic Act No. 8293).</p>
							<p>I want to make it clear that my intention is not to break rule upon copyright laws. I have provided full credit to the original creators of these questions to ensure proper recognition and acknowledgment.</p>
							<p>If you have any questions or concerns about the usage of these materials or suggestions to improve this website, please don't hesitate to reach out to me. Your feedback is highly valued, and I have taken every measure to ensure that my practices align with ethical and legal standards.</p>
							<p>You can send your data questions to me via email, and I will post them here.</p>
							<p>Thank you for your understanding.</p>
							<p>Sincerely,</p>
							<p>Manuel G. Sintos</p>`,

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
	
	BODY: 					`body`,
	SIDE_NAV: 				`.side_nav`,
	HEADER: 				`.header`,
	CONTENT: 				`.content`,
	FOOTER: 				`.footer`,
	INSTRUCTION: 			`#instruction`,
};

let icon = {
	next: `<svg id="icon_next" style="margin-bottom:-7px;" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>`,
	prev: `<svg id="icon_prev" style="margin-bottom:-7px;" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>`,
	listscore: `<svg id="icon_listscore" style="margin-bottom:-2px;" xmlns="http://www.w3.org/2000/svg" height="35px" width="35px" viewBox="0 -960 960 960"><path d="M320-280q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm120 320h240v-80H440v80Zm0-160h240v-80H440v80Zm0-160h240v-80H440v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>`,
	openmenu: `<svg xmlns="http://www.w3.org/2000/svg" style="margin-bottom:-2px;" height="35" viewBox="0 0 24 24" width="35" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>`,
	printer: `<svg style="margin: 0 5px -6px 0;" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M640-640v-120H320v120h-80v-200h480v200h-80Zm-480 80h640-640Zm560 100q17 0 28.5-11.5T760-500q0-17-11.5-28.5T720-540q-17 0-28.5 11.5T680-500q0 17 11.5 28.5T720-460Zm-80 260v-160H320v160h320Zm80 80H240v-160H80v-240q0-51 35-85.5t85-34.5h560q51 0 85.5 34.5T880-520v240H720v160Zm80-240v-160q0-17-11.5-28.5T760-560H200q-17 0-28.5 11.5T160-520v160h80v-80h480v80h80Z"/></svg>`,
	fb: `<svg style="cursor:pointer" onclick="gotoMyFB()" xmlns="http://www.w3.org/2000/svg" height="23" viewBox="0 0 448 512" width="23"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg>`,
	mail: `<svg style="cursor:pointer" onclick="gotoMail()" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg></center>`,
	bookmark_outline: `<svg style="margin: 0 5px -6.5px 0;" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"/></svg>`,
	bookmark_filled: `<svg style="margin: 0 5px -6.5px 0;" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Z"/></svg>`,
};