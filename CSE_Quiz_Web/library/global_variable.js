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

// Define a variable to store the check the answer ("Correct" or "Wrong")
let correctAnswer;

/* Set of Questions */
let all_array_of_question = [];

/* Passing Grade 80%
 */
let passing_grade = 80;

let choices;
let choicesHTML;

let bgColorForSelectedAnswer = "#c2e7ff";
let borderColorForSelectedAnswer = "1px solid #1a73e8";

/* Store the previous questions displayed */
let prev_questions = [];
let prev_choices = [];

/* Array of unique random of Question */
let uniqueRandomArrayQuestions = [];

// Exam no. of questions that you need to answer
let examanee_number_of_questions;

let verbalScore = 0;
let analyticalScore = 0;
let numbericalScore = 0;
let genInfoScore = 0;

/* 
 * Numbers of questions you need to answers or completed for Exam. Note: Do not change anything here. unless you know it.
 */
let numbers_exam_at_verbal_ability = 50; 		// fix at 50 questions
let numbers_exam_at_analytical_ability = 50; 	// fix at 50 questions
let numbers_exam_at_numberical_ability = 50; 	// fix at 50 questions
let numbers_exam_at_general_info = 20; 			// fix at 20 questions
let exam_number_of_questions = numbers_exam_at_verbal_ability + numbers_exam_at_analytical_ability + numbers_exam_at_numberical_ability + numbers_exam_at_general_info;

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
							<p>It's important to highlight that I am fully committed to follow the data privacy regulations, with a particular emphasis on compliance with the Data Privacy Act (Republic Act No. 10173), especially in relation to copyright.</p>
							<p>I want to make it clear that my intention is not to break rule upon copyright laws. I have provided full credit to the original creators of these questions to ensure proper recognition and acknowledgment.</p>
							<p>If you have any questions or concerns about the usage of these materials or suggestions to improve this quiz website, please don't hesitate to reach out to me. Your feedback is highly valued, and I have taken every measure to ensure that my practices align with ethical and legal standards.</p>
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