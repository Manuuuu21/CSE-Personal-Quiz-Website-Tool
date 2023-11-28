/**
 * Author: @Manuel G. Sintos
 * Date: Nov 27, 2023, 1:11 PM
 *
 */

let tableData6 = `
	<center><b>Employment Status of Survey Respondents in the Philippines</b></center>
	<table style="width:100%">
	  <th>Employed</th>	<th>Unemployed</th>
<tr><td>60%</td>			<td>25%</td></tr>
	</table>
	<br/>
`;

let tableData8 = `
	<center><b>Student Performance in Different Subjects</b></center>
	<table style="width:100%">
	    <th>Student</th>
	    <th>Math</th>
	    <th>Science</th>
	    <th>English</th>
	    <th>History</th>
	    <th>PE</th>
	    <tr>
	    	<td>John</td>
	    	<td>85</td>
	    	<td>90</td>
	    	<td>88</td>
	    	<td>92</td>
	    	<td>95</td>
	    </tr>
	    <tr>
	    	<td>Mary</td>
	    	<td>90</td>
	    	<td>85</td>
	    	<td>92</td>
	    	<td>88</td>
	    	<td>90</td>
	    </tr>
	    <tr>
	    	<td>Peter</td>
	    	<td>88</td>
	    	<td>92</td>
	    	<td>85</td>
	    	<td>90</td>
	    	<td>88</td>
	    </tr>
	    <tr>
	    	<td>Susan</td>
	    	<td>92</td>
	    	<td>88</td>
	    	<td>90</td>
	    	<td>85</td>
	    	<td>92</td>
	    </tr>
	    <tr>
	    	<td>Paul</td>
	    	<td>95</td>
	    	<td>95</td>
	    	<td>95</td>
	    	<td>95</td>
	    	<td>95</td>
	    </tr>
	</table>
	<br/>
`;

let tableData13 = `
	<center><b>COVID-19 Cases</b></center>
	<table style="width:100%">
		<th>Total Cases</th>
		<th>New Cases</th>
		<th>Total Deaths</th>
		<th>New Deaths</th>
		<th>Total Recovered</th>
		<th>Active Cases</th>      
		<tr>
			<td>100,000</td>
			<td>500</td>
			<td>2,000</td>
			<td>10</td>
			<td>97,000</td>
			<td>1,000</td>
		</tr>
	</table>
	<br/>
`;

const data_10 = [
	{
    "id": 0,
    "question": "Question: The Department of Education in the Philippines reported that the number of students who enrolled in public schools for the school year 2022-2023 increased by 10% compared to the previous school year. If the total number of students who enrolled in the school year 2021-2022 was 22,500,000, how many students enrolled in the school year 2022-2023?",
    "choices": [
      "22,750,000",
      "24,500,000",
      "24,750,000",
      "25,000,000",
      "25,750,000"
    ],
    "correct_ans": "24,750,000",
    "explanation": "To find the number of students who enrolled in the school year 2022-2023, we need to increase the number of students in 2021-2022 by 10%. This can be calculated as follows:<br/><br/>22,500,000 (number of students in 2021-2022) * 10% (increase) = 2,250,000 (increase in students)<br/><br/>Then, add this increase to the original number of students:<br/><br/>22,500,000 (original number of students) + 2,250,000 (increase) = 24,750,000<br/><br/>Therefore, the number of students who enrolled in the school year 2022-2023 is 24,750,000. So, the correct answer is 24,750,000."
  },
  {
    "id": 1,
    "question": "Question: The Philippine Statistics Authority reported that the population of the Philippines increased by 1.63% from 2022 to 2023. If the population in 2022 was 113,000,000, what was the population in 2023?",
    "choices": [
      "114,000,000",
      "114,739,000",
      "115,000,000",
      "115,500,000",
      "116,000,000"
    ],
    "correct_ans": "114,739,000",
    "explanation": "To find the population in 2023, we need to increase the population in 2022 by 1.63%. This can be calculated as follows:<br/><br/>113,000,000 (population in 2022) * 1.63% (increase) = 1,739,000 (increase in population)<br/><br/>Then, add this increase to the original population:<br/><br/>113,000,000 (original population) + 1,739,000 (increase) = 114,739,000<br/><br/>Therefore, the population in 2023 was 114,739,000. So, the correct answer is 114,739,000."
  },
  {
    "id": 2,
    "question": "Question: The Department of Health in the Philippines reported that the number of COVID-19 cases decreased by 15% from January 2023 to February 2023. If there were 50,000 cases in January, how many cases were there in February?",
    "choices": [
      "42,500",
      "35,000",
      "40,000",
      "45,000",
      "47,500"
    ],
    "correct_ans": "42,500",
    "explanation": "To find the number of cases in February, we need to decrease the number of cases in January by 15%. This can be calculated as follows:<br/><br/>50,000 (cases in January) * 15% (decrease) = 7,500 (decrease in cases)<br/><br/>Then, subtract this decrease from the original number of cases:<br/><br/>50,000 (original number of cases) - 7,500 (decrease) = 42,500<br/><br/>Therefore, the number of cases in February was 42,500. So, the correct answer is 42,500."
  },
  {
    "id": 3,
    "question": "The Department of Tourism in the Philippines reported that the number of foreign tourists increased by 20% from 2022 to 2023. If there were 5,000,000 foreign tourists in 2022, how many foreign tourists were there in 2023?",
    "choices": [
      "5,500,000",
      "6,000,000",
      "6,500,000",
      "7,000,000",
      "7,500,000"
    ],
    "correct_ans": "6,000,000",
    "explanation": "To find the number of foreign tourists in 2023, we need to increase the number of foreign tourists in 2022 by 20%. This can be calculated as follows:<br/><br/>5,000,000 (foreign tourists in 2022) * 20% (increase) = 1,000,000 (increase in foreign tourists)<br/><br/>Then, add this increase to the original number of foreign tourists:<br/><br/>5,000,000 (original number of foreign tourists) + 1,000,000 (increase) = 6,000,000<br/><br/>Therefore, the number of foreign tourists in 2023 was 6,000,000. So, the correct answer is 6,000,000."
  },
  {
    "id": 4,
    "question": "The Department of Agriculture in the Philippines reported that the rice production decreased by 5% from 2022 to 2023. If the rice production in 2022 was 20,000,000 metric tons, what was the rice production in 2023?",
    "choices": [
      "18,000,000",
      "19,000,000",
      "19,500,000",
      "20,000,000",
      "21,000,000"
    ],
    "correct_ans": "19,500,000",
    "explanation": "To find the rice production in 2023, we need to decrease the rice production in 2022 by 5%. This can be calculated as follows:<br/><br/>20,000,000 (rice production in 2022) * 5% (decrease) = 1,000,000 (decrease in rice production)<br/><br/>Then, subtract this decrease from the original rice production:<br/><br/>20,000,000 (original rice production) - 1,000,000 (decrease) = 19,500,000<br/><br/>Therefore, the rice production in 2023 was 19,500,000. So, the correct answer is 19,500,000."
  },
  {
    "id": 5,
    "question": "The Department of Environment and Natural Resources in the Philippines reported that the forest cover increased by 2% from 2022 to 2023. If the forest cover in 2022 was 7,000,000 hectares, what was the forest cover in 2023?",
    "choices": [
      "7,100,000",
      "7,140,000",
      "7,200,000",
      "7,500,000",
      "8,000,000"
    ],
    "correct_ans": "7,140,000",
    "explanation": "To find the forest cover in 2023, we need to increase the forest cover in 2022 by 2%. This can be calculated as follows:<br/><br/>7,000,000 (forest cover in 2022) * 2% (increase) = 140,000 (increase in forest cover)<br/><br/>Then, add this increase to the original forest cover:<br/><br/>7,000,000 (original forest cover) + 140,000 (increase) = 7,140,000<br/><br/>Therefore, the forest cover in 2023 was 7,140,000. So, the correct answer is 7,140,000."
  },
  {
    "id": 6,
    "question": tableData6 + `
	    In a survey conducted by the Philippine Statistics Authority, it was found that 60% of the respondents were employed, 25% were unemployed, and the rest were not in the labor force. If the total number of respondents was 10,000, how many were not in the labor force?
    `,
    "choices": [
      "1,000",
      "1,500",
      "2,000",
      "2,500",
      "3,000"
    ],
    "correct_ans": "1,500",
    "explanation": "To find the number of respondents not in the labor force, we subtract the percentage of those employed and unemployed from 100%:<br/><br/>100% (total) - 60% (employed) - 25% (unemployed) = 15% (not in the labor force)<br/><br/>Then, we calculate 15% of the total number of respondents:<br/><br/>10,000 (total respondents) * 15% = 1,500<br/><br/>Therefore, 1,500 respondents were not in the labor force. So, the correct answer is 1,500."
  },
  {
    "id": 7,
    "question": tableData6 + `
	    In a survey conducted by the Philippine Statistics Authority, it was found that 60% of the respondents were employed, 25% were unemployed, and the rest were not in the labor force. If the total number of respondents was 10,000, what was the ratio of employed to unemployed respondents?
    `,
    "choices": [
      "1:1",
      "2:1",
      "3:1",
      "4:1",
      "5:1"
    ],
    "correct_ans": "3:1",
    "explanation": "To find the ratio of employed to unemployed respondents, we calculate the number of employed and unemployed respondents and then form a ratio:<br/><br/>Employed = 10,000 * 60% = 6,000 Unemployed = 10,000 * 25% = 2,500 Ratio = 6,000 : 2,500 = 3 : 1<br/><br/>Therefore, the ratio of employed to unemployed respondents was 3:1. So, the correct answer is 3:1."
  },
  {
    "id": 8,
    "question": tableData6 + "In a survey conducted by the Philippine Statistics Authority, it was found that 60% of the respondents were employed, 25% were unemployed, and the rest were not in the labor force. If the total number of respondents was 10,000, what was the difference between the number of employed and unemployed respondents?",
    "choices": [
      "1,000",
      "2,500",
      "3,000",
      "3,500",
      "4,000"
    ],
    "correct_ans": "3,500",
    "explanation": "To find the difference between the number of employed and unemployed respondents, we calculate the number of employed and unemployed respondents and then subtract the smaller number from the larger number:<br/><br/>Employed = 10,000 * 60% = 6,000 Unemployed = 10,000 * 25% = 2,500 Difference = 6,000 - 2,500 = 3,500<br/><br/>Therefore, the difference between the number of employed and unemployed respondents was 3,500. So, the correct answer is 3,500."
  },
  {
    "id": 9,
    "question": "The Department of Education reported that out of the total number of students who enrolled in public schools in 2023, 45% were in elementary, 35% were in high school, and the rest were in senior high school. If the total number of students was 24,750,000, how many students were in senior high school?",
    "choices": [
      "4,950,000",
      "5,500,000",
      "6,000,000",
      "6,500,000",
      "7,000,000"
    ],
    "correct_ans": "6,500,000",
    "explanation": "To find the number of students in senior high school, we subtract the percentage of those in elementary and high school from 100%:<br/><br/>100% (total) - 45% (elementary) - 35% (high school) = 20% (senior high school)<br/><br/>Then, we calculate 20% of the total number of students:<br/><br/>24,750,000 (total students) * 20% = 4,950,000<br/><br/>Therefore, 4,950,000 students were in senior high school. So, the correct answer is 4,950,000."
  },
  {
	    id: 10,
	    question: tableData8 + `
	    	Based on the table above, who had the lowest grade in English?
	    `,
	    choices: [
	        "John",
	        "Mary",
	        "Peter",
	        "Susan",
	        "Paul"
	    ],
	    correct_ans: "Peter",
	    explanation: `
			To find the student with the lowest grade in English, we need to compare the English grades of all the students. Based on the data in the table, Peter had the lowest English grade with a score of 85. Therefore, the correct answer is Peter.
	    `
	},
	{
	    id: 11,
	    question: tableData8 + `
	    	Based on the table, which student had the lowest average grade across all subjects?
	    `,
	    choices: [
	        "John",
	        "Mary",
	        "Peter",
	        "Susan",
	        "Paul"
	    ],
	    correct_ans: "John",
	    explanation: `
			To find the student with the lowest average grade, we need to calculate the average grade for each student by adding up their grades in all subjects and dividing by the number of subjects. Based on the data in the table, John had the lowest average grade with an average of 90 ((85+90+88+92+95)/5 = 90). Therefore, the correct answer is John.
	    `
	},
	{
	    id: 12,
	    question: tableData8 + `
	    	Based on the table, which student had the second highest average grade across all subjects?
	    `,
	    choices: [
	        "John",
	        "Mary",
	        "Peter",
	        "Susan",
	        "Paul"
	    ],
	    correct_ans: "Susan",
	    explanation: `
			To find the student with the second highest average grade, we need to calculate the average grade for each student by adding up their grades in all subjects and dividing by the number of subjects. Based on the data in the table, Susan had the second highest average grade with an average of 89.4 ((92+88+90+85+92)/5 = 89.4).
	    `
	},
	{
	    id: 13,
	    question: tableData13 + `
	    	Based on the latest COVID-19 data for the Philippines as of November 25, 2023, what is the total number of active cases?
	    `,
	    choices: [
	        "500",
	        "1,000",
	        "2,000",
	        "10,000",
	        "97,000"
	    ],
	    correct_ans: "1,000",
	    explanation: `
				The total number of active cases is calculated by subtracting the total number of deaths and recoveries from the total cases.<br/>
        Therefore, Active Cases = Total Cases - (Total Deaths + Total Recovered)<br/>
        Active Cases = 100,000 - (2,000 + 97,000) = 1,000.
	    `
	},
	{
	    id: 14,
	    question: tableData13 + `
	    	What percentage of the total cases in the Philippines, as of November 25, 2023, have recovered?
	    `,
	    choices: [
	        "50%",
	        "75%",
	        "80%",
	        "90%",
	        "97%"
	    ],
	    "correct_ans": "97%",
	    "explanation": `
	        The percentage of total cases that have recovered is calculated by dividing the total recovered by the total cases and then multiplying by 100.<br/>
	        Recovery Percentage = (Total Recovered / Total Cases) * 100<br/>
	        Recovery Percentage = (97,000 / 100,000) * 100 = 97%<br/>
	    `
	},
];





