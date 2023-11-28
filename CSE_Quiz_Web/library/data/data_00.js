/**
 * Author: @Manuel G. Sintos
 * Date: Nov 27, 2023, 1:11 PM
 *
 */

const data_00 = [
	{
	    "id": 0,
	    "question": "When was the current Philippine Constitution ratified?",
	    "choices": [
	      "Year 1965",
	      "Year 1987",
	      "Year 1973",
	      "Year 1992",
	      "Year 2001"
	    ],
		"correct_ans": "Year 1987",
	    "explanation": "The current Philippine Constitution was ratified on year 1987"
	},
	{
	    "id": 1,
	    "question": "Who is considered the primary author of the 1987 Philippine Constitution?",
	    "choices": [
	      "Ferdinand Marcos",
	      "Cecilia Muñoz-Palma",
	      "Joseph Estrada",
	      "Benigno Aquino III",
	      "Fidel V. Ramos"
	    ],
	    "correct_ans": "Cecilia Muñoz-Palma",
	    "explanation": "The primary authorship of the 1987 Philippine Constitution is often attributed to the Constitutional Commission chaired by Cecilia Muñoz-Palma, while President Corazon \"Cory\" Aquino played a significant role in its adoption as the head of state during the transition period."
	},
	{
	    "id": 2,
	    "question": "How many articles does the 1987 Philippine Constitution have?",
	    "choices": [
	      "12 Articles",
	      "14 Articles",
	      "18 Articles",
	      "16 Articles",
	      "20 Articles"
	    ],
	    "correct_ans": "18 Articles",
	    "explanation": "The 1987 Philippine Constitution has a total of 18 articles."
	},
	{
	    id: 3,
	    question: "What is the official language of the Philippines as stated in the Constitution?",
	    choices: [
	        "English",
	        "Filipino",
	        "Spanish",
	        "Mandarin",
	        "Tagalog"
	    ],
	    correct_ans: "Filipino",
	    explanation: `The official language of the Philippines, as stated in the Constitution, is Filipino, which is based on 
	    				Tagalog. English is also recognized as an official language and is used for communication in government and education.`
	},
	{
	    id: 4,
	    question: "What does the Constitution guarantee with regard to religion?",
	    choices: [
	        "Freedom of speech",
	        "Freedom of assembly",
	        "Freedom of religion",
	        "Freedom of the press",
	        "Freedom of travel"
	    ],
	    correct_ans: "Freedom of religion",
	    explanation: `The Philippine Constitution guarantees freedom of religion. It ensures the separation of church and state, 
	    				prohibiting the establishment of a state religion and protecting the right of individuals to practice their chosen religion freely.`
	},
	{
	    id: 5,
	    question: "How many terms can a Philippine President serve according to the Constitution?",
	    choices: [
	        "1 term",
	        "2 terms",
	        "3 terms",
	        "4 terms",
	        "No term limit"
	    ],
	    correct_ans: "1 term",
	    explanation: `According to the Philippine Constitution, a President can serve for a <b>1 term</b> of six years, and re-election is not allowed.`
	},
	{
	    id: 6,
	    question: "What is the maximum age limit for someone to be eligible for the position of a senator in our Constitution?",
	    choices: [
	        "35 years old",
	        "40 years old",
	        "45 years old",
	        "50 years old",
	        "No age limit"
	    ],
	    correct_ans: "No age limit",
	    explanation: `there is no maximum age limit stipulated in the Constitution for someone to be eligible for the position of a senator`
	},
	{
	    id: 7,
	    question: "Based on the 1987 Constitution of the Republic of the Philippines, Article VI, Section 5 (1), how many members should the House of Representatives have, unless otherwise fixed by law?",
	    choices: [
	        "100 members",
	        "200 members",
	        "250 members",
	        "300 members",
	        "350 members"
	    ],
	    correct_ans: "250 members",
	    explanation: "According to the 1987 Constitution of the Republic of the Philippines, Article VI, Section 5(1), the House of Representatives shall be composed of not more than two hundred and fifty (250) members, unless otherwise fixed by law."
	},
	{
	    id: 8,
	    question: "Who has the power to declare martial law in the Philippines according to the Constitution?",
	    choices: [
	        "The President",
	        "The Chief Justice",
	        "The Senate",
	        "The House of Representatives",
	        "The Supreme Court"
	    ],
	    correct_ans: "The President",
	    explanation: `The 1987 Constitution empowers the President of the Republic to declare 
	    			martial law for a period not exceeding 60 days in cases of rebellion and invasion, when public safety requires it.`
	},
	{
	    id: 9,
	    question: "What is the term length of a Philippine senator as specified in the Constitution?",
	    choices: [
	        "2 years",
	        "4 years",
	        "6 years",
	        "8 years",
	        "10 years"
	    ],
	    correct_ans: "6 years",
	   	explanation: `A Philippine senator's term length, as specified in the Constitution, is six years.`
	},
	{
	    id: 11,
	    question: "What is the term length for a member of the Philippine House of Representatives?",
	    choices: [
	        "3 years",
	        "4 years",
	        "5 years",
	        "6 years",
	        "7 years"
	    ],
	    correct_ans: "3 years",
	    explanation: "The term length for a member of the Philippine House of Representatives is three years as defined in the 1987 Philippine Constitution."
	},
	{
	    "id": 12,
	    "question": "We, the sovereign Filipino people...' is part of which section in The Constitution of The Republic Of The Philippines?",
	    "choices": [
	      "Preamble",
	      "Article I National Territory",
	      "Article II Declaration of Principles and State Policies",
	      "Article III Bill of Rights",
	      "Article IV Citizenship"
	    ],
	    "correct_ans": "Preamble",
		'explanation': 'This phrase is part of \'Preamble\' in The Constitution Of The Republic Of The Philippines.'
	},
	{
	    "id": 13,
	    "question": "What does the Preamble of the Philippines Constitution embody?",
	    "choices": [
	      "The ideals and aspirations of the Filipino people",
	      "The sovereignty of the State",
	      "The integrity of the national territory",
	      "The supremacy of the military",
	      "The duty of the Government"
	    ],
	    "correct_ans": "The ideals and aspirations of the Filipino people",
	    "explanation": "The Preamble of the Philippines Constitution embodies the ideals and aspirations of the Filipino people."
	},
		{
	    "id": 14,
	    "question": "What does Section 1 of Article III in the Philippines Constitution state?",
	    "choices": [
	      "No person shall be deprived of life, liberty, or property without due process of law, nor shall any person be denied the equal protection of the laws",
	      "The right of the people to be secure in their persons, houses, papers, and effects against unreasonable searches and seizures of whatever nature and for any purpose shall be inviolable",
	      "The privacy of communication and correspondence shall be inviolable except upon lawful order of the court, or when public safety or order requires otherwise, as prescribed by law",
	      "No law shall be passed abridging the freedom of speech, of expression, or of the press",
	      "No law shall be made respecting an establishment of religion, or prohibiting the free exercise thereof"
	    ],
	    "correct_ans": "No person shall be deprived of life, liberty, or property without due process of law, nor shall any person be denied the equal protection of the laws",
	    "explanation": "Section 1 of Article III in the Philippines Constitution states that no person shall be deprived of life, liberty, or property without due process of law, nor shall any person be denied the equal protection of the laws."
	},
	{
	    "id": 15,
	    "question": "What does Section 3 of Article III in the Philippines Constitution state about privacy?",
	    "choices": [
	      "The privacy of communication and correspondence is always violable",
	      "The privacy of communication and correspondence is never violable",
	      "The privacy of communication and correspondence shall be inviolable except upon lawful order of the court, or when public safety or order requires otherwise, as prescribed by law",
	      "The privacy of communication and correspondence can be violated without a lawful order",
	      "The privacy of communication and correspondence can be violated when public safety or order requires otherwise"
	    ],
	    "correct_ans": "The privacy of communication and correspondence shall be inviolable except upon lawful order of the court, or when public safety or order requires otherwise, as prescribed by law",
	    "explanation": 'Section 3 states that: The privacy of communication and correspondence shall be inviolable except upon lawful order of the court.'
	},
	{
	    'id': 16,
	    'question': 'What does Section 4 state about freedom?',
	    'choices': [
	        'No law shall be passed abridging the freedom',
	        'No law shall be passed abridging the freedom speech',
	        'No law shall be passed abridging',
	        'No law shall',
	        'No law'
	    ],
	    'correct_ans': 'No law shall be passed abridging the freedom speech',
	    'explanation': 'Section 4 states that: No law shall be passed abridging the freedom speech.'
	},

	{
	    "id": 17,
	    "question": "What does Section 6 of Article III in the Philippines Constitution state about liberty of abode?",
	    "choices": [
	      "The liberty of abode and of changing the same within the limits prescribed by law shall not be impaired except upon lawful order of the court",
	      "The liberty of abode can be impaired without a lawful order",
	      "The liberty of abode can be impaired at any time",
	      "The liberty of abode is not protected by law",
	      "The liberty of abode can be impaired for any reason"
	    ],
	    "correct_ans": "The liberty of abode and of changing the same within the limits prescribed by law shall not be impaired except upon lawful order of the court",
	    "explanation": "Section 6 of Article III in the Philippines Constitution states that the liberty of abode and of changing the same within the limits prescribed by law shall not be impaired except upon lawful order of the court."
	},
	{
	    "id": 18,
	    "question": "What does Section 7 of Article III in the Philippines Constitution state about public information?",
	    "choices": [
	      "The right of the people to information on matters of public concern shall not be recognized",
	      "The right of the people to information on matters of public concern shall be recognized",
	      "The right of the people to information on matters of public concern is not protected by law",
	      "The right of the people to information on matters of public concern can be denied",
	      "The right of the people to information on matters of public concern is limited"
	    ],
	    "correct_ans": "The right of the people to information on matters of public concern shall be recognized",
	    "explanation": 'Section 7 states that: The right of the people to information on matters of public concern shall be recognized.'
	},
	{
	    'id': 19,
	    'question': 'What does Section 8 state about forming unions?',
	    'choices': [
	        'The right to form unions is not recognized',
	        'The right to form unions is recognized',
	        'The right to form unions is limited',
	        'The right to form unions is prohibited',
	        'The right to form unions is unrestricted'
	    ],
	    'correct_ans': 'The right to form unions is recognized',
	    'explanation': 'Section 8 states that: The right to form unions is recognized.'
	},
	{
	    'id': 20,
	    'question': 'What does Section 9 state about private property?',
	    'choices': [
	        'Private property can be taken for public use without just compensation',
	        'Private property cannot be taken for public use without just compensation',
	        'Private property can be taken for public use with just compensation',
	        'Private property cannot be taken for public use with just compensation',
	        'Private property can always be taken for public use'
	    ],
	    'correct_ans': 'Private property cannot be taken for public use without just compensation',
	    'explanation': 'Section 9 states that: Private property cannot be taken for public use without just compensation.'
	},
	{
	    'id': 21,
	    'question': 'What does Section 10 state about contracts?',
	    'choices': [
	        'No law impairing the obligation contracts shall be passed',
	        'No law impairing contracts shall be passed',
	        'No law impairing contracts can be passed',
	        'No law impairing contracts will be passed',
	        'No law impairing contracts must be passed'
	    ],
	    'correct_ans': 'No law impairing contracts shall be passed',
	    'explanation': 'Section 10 states that: No law impairing contracts shall be passed.'
	},
	{
	    "id": 22,
	    "question": "What does Section 11 of Article III in the Philippines Constitution state about free access to courts?",
	    "choices": [
	      "Free access to courts is not recognized",
	      "Free access to courts is recognized",
	      "Free access to courts is limited",
	      "Free access to courts is prohibited",
	      "Free access to courts is unrestricted"
	    ],
	    "correct_ans": "Free access to courts is recognized",
	    "explanation": "Section 11 of Article III in the Philippines Constitution states that free access to courts and quasi-judicial bodies and adequate legal assistance shall not be denied to any person by reason of poverty."
	},
	{
	    "id": 23,
	    "question": "What does Section 12 of Article III in the Philippines Constitution state about rights of persons under investigation?",
	    "choices": [
	      "Rights of persons under investigation are not recognized",
	      "Rights of persons under investigation are recognized",
	      "Rights of persons under investigation are limited",
	      "Rights of persons under investigation are prohibited",
	      "Rights of persons under investigation are unrestricted"
	    ],
	    "correct_ans": "Rights of persons under investigation are recognized",
	    "explanation": 'Section 12(1) states that: Any person under investigation for the commission of an offense shall have the right to be informed of his right to remain silent and to have competent and independent counsel preferably of his own choice.'
	},
	{
	    'id': 24,
	    'question': 'What does Section 13 state about bail?',
	    'choices': [
	        'All persons, except those charged with offenses punishable by reclusion perpetua when evidence of guilt is strong, shall, before conviction, be bailable by sufficient sureties',
	        'All persons, except those charged with offenses punishable by reclusion perpetua when evidence of guilt is strong, shall, after conviction, be bailable by sufficient sureties',
	        'All persons, except those charged with offenses punishable by reclusion perpetua when evidence of guilt is strong, shall, before conviction, not be bailable by sufficient sureties',
	        'All persons, except those charged with offenses punishable by reclusion perpetua when evidence of guilt is strong, shall, after conviction, not be bailable by sufficient sureties',
	        'All persons shall, before conviction, be bailable by sufficient sureties'
	    ],
	    'correct_ans': 'All persons, except those charged with offenses punishable by reclusion perpetua when evidence of guilt is strong, shall, before conviction, be bailable by sufficient sureties',
	    'explanation': 'Section 13 states that: All persons, except those charged with offenses punishable by reclusion perpetua when evidence of guilt is strong, shall, before conviction, be bailable by sufficient sureties.'
	},
	{
	    'id': 25,
	    'question': 'What does Section 14 state about rights in criminal prosecution?',
	    'choices': [
	        'In all criminal prosecutions, the accused shall be presumed innocent until the contrary is proved',
	        'In all criminal prosecutions, the accused shall be presumed guilty until the contrary is proved',
	        'In all criminal prosecutions, the accused shall be presumed innocent until proven guilty',
	        'In all criminal prosecutions, the accused shall not be presumed innocent until the contrary is proved',
	        'In all criminal prosecutions, the accused shall not be presumed guilty until the contrary is proved'
	    ],
	    'correct_ans': 'In all criminal prosecutions, the accused shall be presumed innocent until the contrary is proved',
	    'explanation': 'Section 14(2) states that: In all criminal prosecutions, the accused shall be presumed innocent until the contrary is proved.'
	},
	{
	    'id': 26,
	    'question': 'What does Section 15 state about suspension?',
	    'choices': [
	        'The privilege of the writ of habeas corpus shall not be suspended except in cases of invasion or rebellion when the public safety requires it',
	        'The privilege of the writ of habeas corpus can always be suspended',
	        'The privilege of the writ of habeas corpus can never be suspended',
	        'The privilege of the writ of habeas corpus can only be suspended in cases of invasion or rebellion',
	        'The privilege of the writ of habeas corpus can only be suspended when public safety requires it'
	    ],
	    'correct_ans': 'The privilege of the writ of habeas corpus shall not be suspended except in cases of invasion or rebellion when the public safety requires it',
	    'explanation': 'Section 15 states that: The privilege of the writ of habeas corpus shall not be suspended except in cases of invasion or rebellion when the public safety requires it.'
	},
	{
	    "id": 27,
	    "question": "What does Section 16 of Article III in the Philippines Constitution state about rights of persons under investigation?",
	    "choices": [
	      "All persons shall have the right to a speedy disposition of their cases before all judicial, quasi-judicial, or administrative bodies",
	      "All persons shall have the right to a slow disposition of their cases before all judicial, quasi-judicial, or administrative bodies",
	      "All persons shall have the right to a speedy disposition of their cases only before judicial bodies",
	      "All persons shall have the right to a speedy disposition of their cases only before quasi-judicial bodies",
	      "All persons shall have the right to a speedy disposition of their cases only before administrative bodies"
	    ],
	    "correct_ans": "All persons shall have the right to a speedy disposition of their cases before all judicial, quasi-judicial, or administrative bodies",
	    "explanation": 'Section 16 states that: All persons shall have the right to a speedy disposition of their cases before all judicial, quasi-judicial, or administrative bodies.'
	},
	{
	    'id': 28,
	    'question': 'What does Section 17 state about self-incrimination?',
	    'choices': [
	        'No person shall be compelled to be a witness against himself',
	        'No person shall be compelled to be a witness for himself',
	        'No person shall be compelled to be a witness against others',
	        'No person shall be compelled to be a witness for others',
	        'No person shall be compelled to be a witness'
	    ],
	    'correct_ans': 'No person shall be compelled to be a witness against himself',
	    'explanation': 'Section 17 states that: No person shall be compelled to be a witness against himself.'
	},
	{
	    'id': 29,
	    'question': 'What does Section 18 state about military commissions?',
	    'choices': [
	        'In all criminal prosecutions, the accused shall not be subject to trial by military commission',
	        'In all criminal prosecutions, the accused shall be subject to trial by military commission',
	        'In all criminal prosecutions, the accused may be subject to trial by military commission',
	        'In all criminal prosecutions, the accused can choose to be subject to trial by military commission',
	        'In all criminal prosecutions, the accused can refuse to be subject to trial by military commission'
	    ],
	    'correct_ans': 'In all criminal prosecutions, the accused shall not be subject to trial by military commission',
	    'explanation': 'Section 18(1) states that: In all criminal prosecutions, the accused shall not be subject to trial by military commission.'
	},
	{
	  "id": 30,
	  "question": "What is the prime duty of the Government according to Section 4 of Article II: Declaration of Principles and State Policies of the 1987 Constitution of the Philippines?",
	  "choices": [
	    "To provide healthcare to all citizens",
	    "To ensure high GDP growth",
	    "To serve and protect the people",
	    "To maintain diplomatic relations with other countries",
	    "To promote tourism"
	  ],
	  "correct_ans": "To serve and protect the people",
	  "explanation": "According to Section 4 of Article II, the prime duty of the Government is to serve and protect the people. This means that all actions and policies of the Government should be directed towards this goal."
	},
	{
	  "id": 31,
	  "question": "What does Section 1 of Article II state about the Philippines?",
	  "choices": [
	    "The Philippines is a democratic and republican State",
	    "The Philippines is a monarchy",
	    "The Philippines is a communist state",
	    "The Philippines is a federal republic",
	    "The Philippines is an autocracy"
	  ],
	  "correct_ans": "The Philippines is a democratic and republican State",
	  "explanation": "Section 1 of Article II states that the Philippines is a democratic and republican State. Sovereignty resides in the people and all government authority emanates from them."
	},
	{
	  "id": 32,
	  "question": "What does Section 2 of Article II state about war?",
	  "choices": [
	    "The Philippines supports war as an instrument of national policy",
	    "The Philippines renounces war as an instrument of national policy",
	    "The Philippines is neutral about war",
	    "The Philippines supports war only in self-defense",
	    "The Philippines supports war if it benefits the economy"
	  ],
	  "correct_ans": "The Philippines renounces war as an instrument of national policy",
	  "explanation": "Section 2 of Article II states that the Philippines renounces war as an instrument of national policy, adopts the generally accepted principles of international law as part of the law of the land and adheres to the policy of peace, equality, justice, freedom, cooperation, and amity with all nations."
	},
	{
	  "id": 33,
	  "question": "What does Section 3 of Article II state about civilian authority?",
	  "choices": [
	    "Civilian authority is, at all times, supreme over the military",
	    "Military authority is, at all times, supreme over civilian authority",
	    "Civilian authority and military authority are equal",
	    "Civilian authority is supreme over the military only during peacetime",
	    "Military authority is supreme over civilian authority only during wartime"
	  ],
	  "correct_ans": "Civilian authority is, at all times, supreme over the military",
	  "explanation": "Section 3 of Article II states that civilian authority is, at all times, supreme over the military. The Armed Forces of the Philippines is the protector of the people and the State. Its goal is to secure the sovereignty of the State and the integrity of the national territory."
	},
	{
	  "id": 34,
	  "question": "What does Section 4 of Article II state about the duty of the Government?",
	  "choices": [
	    "The prime duty of the Government is to serve and protect foreign interests",
	    "The prime duty of the Government is to serve and protect corporations",
	    "The prime duty of the Government is to serve and protect political parties",
	    "The prime duty of the Government is to serve and protect religious institutions",
	    "The prime duty of the Government is to serve and protect the people"
	  ],
	  "correct_ans": "The prime duty of the Government is to serve and protect the people",
	  "explanation": "Section 4 of Article II states that the prime duty of the Government is to serve and protect the people. The Government may call upon the people to defend the State and, in fulfillment thereof, all citizens may be required, under conditions provided by law, to render personal military or civil service."
	},
	{
	  "id": 35,
	  "question": "What does Section 6 of Article II state about the separation of Church and State?",
	  "choices": [
	    "The separation of Church and State shall be inviolable",
	    "The Church is supreme over the State",
	    "The State is supreme over the Church",
	    "The Church and State are equal",
	    "The Church and State shall be one"
	  ],
	  "correct_ans": "The separation of Church and State shall be inviolable",
	  "explanation": "Section 6 of Article II states that the separation of Church and State shall be inviolable. This means that there should be a clear distinction between the government and religious institutions, and neither should interfere with the affairs of the other."
	},
	{
		"id": 36,
	    "question": "Who are eligible to exercise suffrage according to the 1987 Constitution of the Republic of the Philippines?",
	    "choices": [
	        "All citizens of the Philippines who are at least 18 years old",
	        "All citizens of the Philippines who are at least 21 years old",
	        "All citizens of the Philippines who own a property",
	        "All citizens of the Philippines who are literate",
	        "All citizens of the Philippines who have resided in the Philippines for at least two years"
	    ],
	    "correct_ans": "All citizens of the Philippines who are at least 18 years old",
	    "explanation": "According to Article V of the 1987 Constitution of the Republic of the Philippines, suffrage may be exercised by all citizens of the Philippines not otherwise disqualified by law, who are at least eighteen years of age."
	},
	{
		"id": 37,
        "question": "Which article in The Constitution of the Republic of the Philippines discusses suffrage?",
        "choices": [
            "Article I",
            "Article II",
            "Article III",
            "Article IV",
            "Article V"
        ],
        "correct_ans": "Article V",
        "explanation": "\"Article V\" in The Constitution of the Republic of the Philippines discusses suffrage."
    },
    {
      "id": 38,
      "question": "Which government agency in the Philippines is primarily responsible for promoting and protecting human rights in the country?",
      "choices": [
        "Department of Defense",
        "National Police Commission",
        "Department of Foreign Affairs",
        "Commission on Human Rights",
        "Department of Justice"
      ],
      "correct_ans": "Commission on Human Rights",
      "explanation": "The Commission on Human Rights is the government agency in the Philippines primarily responsible for promoting and protecting human rights in the country."
    },
    {
	    id: 39,
	    question: "Which branch of the Philippine government is responsible for making and enacting laws?",
	    choices: [
	        "Executive Branch",
	        "Judicial Branch",
	        "Military Branch",
	        "Legislative Branch",
	        "Local Government Units"
	    ],
	    correct_ans: "Legislative Branch",
	    explanation: "The Legislative Branch of the Philippine government, which includes the Senate and the House of Representatives, is responsible for making and enacting laws. The Executive Branch enforces the laws, and the Judicial Branch interprets them."
	},
	{
	    id: 40,
	    question: "What does Article 6 of the 1987 Philippine Constitution primarily address?",
	    choices: [
	        "The Bill of Rights",
	        "The Executive Department",
	        "The Legislative Department",
	        "Social Justice and Human Rights",
	        "Local Government"
	    ],
	    correct_ans: "The Legislative Department",
	    explanation: "Article 6 of the Philippine Constitution deals with the Legislative Department, outlining the structure, powers, and functions of the Philippine Congress, which is composed of the Senate and the House of Representatives. It defines the roles and responsibilities of legislators in the Philippine government."
	},
	{
	    id: 41,
	    question: "Which article of the 1987 Philippine Constitution discusses the protection of human rights and guarantees individual liberties?",
	    choices: [
	        "Article 2",
	        "Article 3",
	        "Article 4",
	        "Article 5",
	        "Article 6"
	    ],
	    correct_ans: "Article 3",
	    explanation: "Article 3 of the 1987 Philippine Constitution is known as the Bill of Rights. It addresses the protection of human rights and guarantees individual liberties."
	},
	{
	    id: 42,
	    question: "What is the primary focus of Article 4 of the 1987 Philippine Constitution?",
	    choices: [
	        "National Economy and Patrimony",
	        "Citizenship",
	        "Local Government",
	        "Suffrage",
	        "The Family"
	    ],
	    correct_ans: "Citizenship",
	    explanation: "Article 4 of the 1987 Philippine Constitution primarily focuses on the concept of citizenship, including the acquisition and loss of Philippine citizenship."
	},
	{
	    id: 43,
	    question: "Which article of the 1987 Philippine Constitution establishes the principles and policies governing education, science, technology, arts, culture, and sports in the Philippines?",
	    choices: [
	        "Article 12",
	        "Article 13",
	        "Article 14",
	        "Article 15",
	        "Article 16"
	    ],
	    correct_ans: "Article 14",
	    explanation: "Article 14 of the 1987 Philippine Constitution establishes the principles and policies governing education, science, technology, arts, culture, and sports in the Philippines."
	},
	{
	    id: 44,
	    question: "Which article of the 1987 Philippine Constitution outlines the process for amending or revising the Constitution?",
	    choices: [
	        "Article 17",
	        "Article 18",
	        "Article 19",
	        "Article 20",
	        "Article 21"
	    ],
	    correct_ans: "Article 17",
	    explanation: "Article 17 of the 1987 Philippine Constitution outlines the process for amending or revising the Constitution, ensuring that such changes are made through a deliberate and structured procedure."
	},
	{
    	id: 45,
	    question: "What is the primary role of the President as outlined in Article 7 of the 1987 Philippine Constitution?",
	    choices: [
	        "Legislating laws",
	        "Judicial review",
	        "Chief executive and commander-in-chief",
	        "Election supervision",
	        "Local government administration"
	    ],
	    correct_ans: "Chief executive and commander-in-chief",
	    explanation: "Article 7 of the 1987 Philippine Constitution designates the President as the chief executive and commander-in-chief of the armed forces, responsible for enforcing laws and ensuring the country's security."
	},
	{
	    id: 46,
	    question: "In case of a vacancy in the Office of the President, who succeeds the President as per Article 7 of the 1987 Philippine Constitution?",
	    choices: [
	        "The Vice President",
	        "The Senate President",
	        "The Chief Justice",
	        "The Speaker of the House",
	        "The Secretary of Foreign Affairs"
	    ],
	    correct_ans: "The Vice President",
	    explanation: "Article 7 of the 1987 Philippine Constitution stipulates that in case of a vacancy in the Office of the President, the Vice President succeeds to the presidency."
	},
	{
	    id: 47,
	    question: "Under Article 7, what must the President submit to Congress at the opening of its regular session?",
	    choices: [
	        "A State of the Nation Address (SONA)",
	        "A list of cabinet members",
	        "A foreign policy statement",
	        "A report on international relations",
	        "A military strategy plan"
	    ],
	    correct_ans: "A State of the Nation Address (SONA)",
	    explanation: "Article 7 of the 1987 Philippine Constitution mandates that the President shall address Congress at the opening of its regular session, delivering a State of the Nation Address (SONA)."
	},
	{
	    id: 48,
	    question: "According to Article 7, what is the minimum age requirement to run for the Office of the President?",
	    choices: [
	        "25 years old",
	        "30 years old",
	        "35 years old",
	        "40 years old",
	        "45 years old"
	    ],
	    correct_ans: "40 years old",
	    explanation: "Article 7 of the 1987 Philippine Constitution states that a candidate for the Office of the President must be at least 40 years old on the day of the election."
	},
	{
	    id: 49,
	    question: "What is the role of the President's Cabinet according to Article 7 of the Philippine Constitution?",
	    choices: [
	        "To serve as the legislative branch of government",
	        "To oversee the military and defense forces",
	        "To provide advice and assistance to the President",
	        "To preside over the Senate sessions",
	        "To enforce the laws independently"
	    ],
	    correct_ans: "To provide advice and assistance to the President",
	    explanation: "Article 7 of the Philippine Constitution stipulates that the President's Cabinet members are responsible for providing advice and assistance to the President in the execution of their duties."
	},
	{
	    id: 50,
	    question: "What specific actions can Congress take if the President declares martial law, as defined in Article 7 of the 1987 Philippine Constitution?",
	    choices: [
	        "Congress can revoke the declaration by a majority vote.",
	        "Congress has no authority to intervene in martial law declarations.",
	        "Congress can only delay the implementation of martial law.",
	        "Congress can approve martial law declarations but cannot revoke them.",
	        "Congress can only seek approval from the Supreme Court."
	    ],
	    correct_ans: "Congress can revoke the declaration by a majority vote.",
	    explanation: "Article 7 of the 1987 Philippine Constitution grants Congress the authority to revoke a presidential declaration of martial law by a majority vote."
	},
	{
	    id: 51,
	    question: "According to Article 7, who can remove the President from office through impeachment?",
	    choices: [
	        "The Supreme Court",
	        "The Senate",
	        "The House of Representatives",
	        "The Ombudsman",
	        "The President's Cabinet"
	    ],
	    correct_ans: "The House of Representatives",
	    explanation: "Article 7 of the Philippine Constitution specifies that the House of Representatives has the authority to initiate impeachment proceedings against the President, which may lead to removal from office."
	},
	{
	    id: 52,
	    question: "What is the significance of the President's State of the Nation Address (SONA) as per Article 7 of the Philippine Constitution?",
	    choices: [
	        "It is a ceremonial speech with no legal significance.",
	        "It outlines the President's foreign policy.",
	        "It informs Congress and the public about the state of the nation and proposed legislative agenda.",
	        "It serves as a declaration of war if needed.",
	        "It appoints new cabinet members."
	    ],
	    correct_ans: "It informs Congress and the public about the state of the nation and proposed legislative agenda.",
	    explanation: "Article 7 of the Philippine Constitution mandates that the President's State of the Nation Address (SONA) informs Congress and the public about the state of the nation and the President's proposed legislative agenda."
	},
	{
    "id": 53,
    "question": "According to the Philippine Constitution, which article outlines the fundamental principles, policies, and values that guide the State in all phases of national development, including foreign relations, social justice, and human rights?",
    "choices": [
      "Article II - Declaration of Principles and State Policies",
      "Article III - Bill of Rights",
      "Article IV - Citizenship",
      "Article V - Suffrage",
      "Article VI - Legislative Department"
    ],
    "correct_ans": "Article II - Declaration of Principles and State Policies",
    "explanation": "Article II - Declaration of Principles and State Policies. This article serves as the guiding framework for the government and establishes the fundamental principles that should govern the country. It encompasses a wide range of principles, including the promotion of social justice, equality, and respect for human rights. The Declaration of Principles and State Policies sets the tone for the governance and direction of the nation. Articles III to VI address specific rights, citizenship, suffrage, and the legislative department, respectively, but Article II provides the overarching principles that shape the Philippine government's actions and decisions."
  }




	
]