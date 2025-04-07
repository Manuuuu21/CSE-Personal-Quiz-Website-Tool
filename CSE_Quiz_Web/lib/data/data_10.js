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

let tableData14 = `
    <center><b>COVID-19 Cases in Metro Manila (July 2023)</b></center>
    <table style="width:100%">
        <th>City</th>
        <th>Total Cases</th>
        <th>New Cases</th>
        <th>Total Deaths</th>
        <th>Total Recovered</th>
        <th>Active Cases</th>
        <th>Population</th>
    </tr>
    <tr>
        <td>Manila</td>
        <td>50,000</td>
        <td>250</td>
        <td>1,000</td>
        <td>48,500</td>
        <td>500</td>
        <td>1.8M</td>
    </tr>
    <tr>
        <td>Quezon City</td>
        <td>75,000</td>
        <td>300</td>
        <td>1,500</td>
        <td>72,700</td>
        <td>800</td>
        <td>3M</td>
    </tr>
    <tr>
        <td>Makati</td>
        <td>30,000</td>
        <td>150</td>
        <td>500</td>
        <td>29,200</td>
        <td>300</td>
        <td>600K</td>
    </tr>
    <tr>
         <td>Pasig</td>
         <td>40,000</td>
         <td>200</td>
         <td>800</td>
         <td>38,900</td>
         <td>300</td>
         <td>800K</td>
     </tr>
     <tr>
         <td>Caloocan</td>
         <td>60,000</td>
         <td>280</td>
         <td>1,200</td>
         <td>58,000</td>
         <td>800</td>
         <td>2M</td>
     </tr>
    </table>
    <br/>
`;

let tableData15 = `
    <center><b>Quarterly Sales Performance (2023)</b></center>
    <table style="width:100%">
        <th>Salesperson</th>
        <th>Q1 Sales</th>
        <th>Q2 Sales</th>
        <th>Q3 Sales</th>
        <th>Q4 Sales</th>
        <th>Target</th>
    </tr>
    <tr>
        <td>Alice</td>
        <td>$25,000</td>
        <td>$28,000</td>
        <td>$30,000</td>
        <td>$33,000</td>
        <td>$32,000</td>
    </tr>
    <tr>
        <td>Bob</td>
        <td>$20,000</td>
        <td>$22,000</td>
        <td>$26,000</td>
        <td>$30,000</td>
        <td>$28,000</td>
    </tr>
    <tr>
        <td>Charlie</td>
        <td>$22,000</td>
        <td>$25,000</td>
        <td>$28,000</td>
        <td>$31,000</td>
        <td>$30,000</td>
    </tr>
    <tr>
        <td>David</td>
        <td>$18,000</td>
        <td>$21,000</td>
        <td>$24,000</td>
        <td>$29,000</td>
        <td>$25,000</td>
    </tr>
    <tr>
        <td>Emily</td>
        <td>$21,000</td>
        <td>$23,000</td>
        <td>$27,000</td>
        <td>$32,000</td>
        <td>$31,000</td>
    </tr>
    </table>
    <br/>
`;

let tableData16 = `
     <center><b>Website Traffic Metrics (August 2023)</b></center>
     <table style="width:100%">
         <th>Page</th>
         <th>Page Views</th>
         <th>Unique Visitors</th>
         <th>Bounce Rate</th>
         <th>Avg. Time on Page</th>
         <th>Goal Conversion Rate</th>
     </tr>
     <tr>
         <td>Homepage</td>
         <td>150,000</td>
         <td>100,000</td>
         <td>45%</td>
         <td>00:05:30</td>
         <td>2.5%</td>
     </tr>
     <tr>
         <td>About Us</td>
         <td>80,000</td>
         <td>60,000</td>
         <td>30%</td>
         <td>00:04:00</td>
         <td>1.0%</td>
     </tr>
     <tr>
         <td>Products</td>
         <td>120,000</td>
         <td>95,000</td>
         <td>50%</td>
         <td>00:06:00</td>
         <td>5.0%</td>
     </tr>
      <tr>
         <td>Contact Us</td>
         <td>50,000</td>
         <td>40,000</td>
         <td>60%</td>
         <td>00:02:30</td>
         <td>8.0%</td>
     </tr>
     <tr>
         <td>Blog</td>
         <td>90,000</td>
         <td>70,000</td>
         <td>55%</td>
         <td>00:05:00</td>
         <td>0.5%</td>
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
    "explanation": "To find the number of students who enrolled in the school year 2022-2023, we need to increase the number of students in 2021-2022 by 10%. This can be calculated as follows:<br/><br/>22,500,000 (number of students in 2021-2022) * 10% (increase) = 2,250,000 (increase in students)<br/><br/>Then, add this increase to the original number of students:<br/><br/>22,500,000 (original number of students) + 2,250,000 (increase) = 24,750,000<br/><br/>Therefore, the number of students who enrolled in the school year 2022-2023 is 24,750,000. So, the correct answer is 24,750,000.",
    "poster_name": "Manuel G. Sintos"
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
    "explanation": "To find the population in 2023, we need to increase the population in 2022 by 1.63%. This can be calculated as follows:<br/><br/>113,000,000 (population in 2022) * 1.63% (increase) = 1,739,000 (increase in population)<br/><br/>Then, add this increase to the original population:<br/><br/>113,000,000 (original population) + 1,739,000 (increase) = 114,739,000<br/><br/>Therefore, the population in 2023 was 114,739,000. So, the correct answer is 114,739,000.",
    "poster_name": "Manuel G. Sintos"
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
    "explanation": "To find the number of cases in February, we need to decrease the number of cases in January by 15%. This can be calculated as follows:<br/><br/>50,000 (cases in January) * 15% (decrease) = 7,500 (decrease in cases)<br/><br/>Then, subtract this decrease from the original number of cases:<br/><br/>50,000 (original number of cases) - 7,500 (decrease) = 42,500<br/><br/>Therefore, the number of cases in February was 42,500. So, the correct answer is 42,500.",
    "poster_name": "Manuel G. Sintos"
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
    "explanation": "To find the number of foreign tourists in 2023, we need to increase the number of foreign tourists in 2022 by 20%. This can be calculated as follows:<br/><br/>5,000,000 (foreign tourists in 2022) * 20% (increase) = 1,000,000 (increase in foreign tourists)<br/><br/>Then, add this increase to the original number of foreign tourists:<br/><br/>5,000,000 (original number of foreign tourists) + 1,000,000 (increase) = 6,000,000<br/><br/>Therefore, the number of foreign tourists in 2023 was 6,000,000. So, the correct answer is 6,000,000.",
    "poster_name": "Manuel G. Sintos"
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
    "explanation": "To find the rice production in 2023, we need to decrease the rice production in 2022 by 5%. This can be calculated as follows:<br/><br/>20,000,000 (rice production in 2022) * 5% (decrease) = 1,000,000 (decrease in rice production)<br/><br/>Then, subtract this decrease from the original rice production:<br/><br/>20,000,000 (original rice production) - 1,000,000 (decrease) = 19,500,000<br/><br/>Therefore, the rice production in 2023 was 19,500,000. So, the correct answer is 19,500,000.",
    "poster_name": "Manuel G. Sintos"
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
    "explanation": "To find the forest cover in 2023, we need to increase the forest cover in 2022 by 2%. This can be calculated as follows:<br/><br/>7,000,000 (forest cover in 2022) * 2% (increase) = 140,000 (increase in forest cover)<br/><br/>Then, add this increase to the original forest cover:<br/><br/>7,000,000 (original forest cover) + 140,000 (increase) = 7,140,000<br/><br/>Therefore, the forest cover in 2023 was 7,140,000. So, the correct answer is 7,140,000.",
    "poster_name": "Manuel G. Sintos"
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
    "explanation": "To find the number of respondents not in the labor force, we subtract the percentage of those employed and unemployed from 100%:<br/><br/>100% (total) - 60% (employed) - 25% (unemployed) = 15% (not in the labor force)<br/><br/>Then, we calculate 15% of the total number of respondents:<br/><br/>10,000 (total respondents) * 15% = 1,500<br/><br/>Therefore, 1,500 respondents were not in the labor force. So, the correct answer is 1,500.",
    "poster_name": "Manuel G. Sintos"
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
    "explanation": "To find the ratio of employed to unemployed respondents, we calculate the number of employed and unemployed respondents and then form a ratio:<br/><br/>Employed = 10,000 * 60% = 6,000 Unemployed = 10,000 * 25% = 2,500 Ratio = 6,000 : 2,500 = 3 : 1<br/><br/>Therefore, the ratio of employed to unemployed respondents was 3:1. So, the correct answer is 3:1.",
    "poster_name": "Manuel G. Sintos"
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
    "explanation": "To find the difference between the number of employed and unemployed respondents, we calculate the number of employed and unemployed respondents and then subtract the smaller number from the larger number:<br/><br/>Employed = 10,000 * 60% = 6,000 Unemployed = 10,000 * 25% = 2,500 Difference = 6,000 - 2,500 = 3,500<br/><br/>Therefore, the difference between the number of employed and unemployed respondents was 3,500. So, the correct answer is 3,500.",
    "poster_name": "Manuel G. Sintos"
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
    "explanation": "To find the number of students in senior high school, we subtract the percentage of those in elementary and high school from 100%:<br/><br/>100% (total) - 45% (elementary) - 35% (high school) = 20% (senior high school)<br/><br/>Then, we calculate 20% of the total number of students:<br/><br/>24,750,000 (total students) * 20% = 4,950,000<br/><br/>Therefore, 4,950,000 students were in senior high school. So, the correct answer is 4,950,000.",
    "poster_name": "Manuel G. Sintos"
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
	    `,
    	"poster_name": "Manuel G. Sintos"
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
	    `,
    	"poster_name": "Manuel G. Sintos"
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
	    `,
    	"poster_name": "Manuel G. Sintos"
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
	    `,
    	"poster_name": "Manuel G. Sintos"
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
	    `,
    	"poster_name": "Manuel G. Sintos"
	},
	{
    "id": 15,
    "question": "The Social Security System (SSS) in the Philippines reported that the number of its members increased by 8% in 2023. If there were 40 million members in 2022, how many members were there in 2023?",
    "choices": [
      "42,200,000",
      "43,200,000",
      "44,400,000",
      "45,000,000",
      "46,600,000"
    ],
    "correct_ans": "43,200,000",
    "explanation": "To find the number of SSS members in 2023, we need to increase the number of members in 2022 by 8%.  This can be calculated as follows:  40,000,000 (members in 2022) * 8% (increase) = 3,200,000 (increase in members)  Then, add this increase to the original number of members:  40,000,000 (original number of members) + 3,200,000 (increase) = 43,200,000  Therefore, the number of SSS members in 2023 was 43,200,000.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 16,
    "question": "The Overseas Workers Welfare Administration (OWWA) reported a 12% decrease in the number of overseas Filipino workers (OFWs) deployed in 2023 compared to 2022. If 1,500,000 OFWs were deployed in 2022, how many were deployed in 2023?",
    "choices": [
      "1,300,000",
      "1,320,000",
      "1,400,000",
      "1,480,000",
      "1,680,000"
    ],
    "correct_ans": "1,320,000",
    "explanation": "To find the number of OFWs deployed in 2023, we need to decrease the number in 2022 by 12%.  This can be calculated as follows:  1,500,000 (OFWs in 2022) * 12% (decrease) = 180,000 (decrease in OFWs)  Then, subtract this decrease from the original number:  1,500,000 (original number of OFWs) - 180,000 (decrease) = 1,320,000  Therefore, the number of OFWs deployed in 2023 was 1,320,000.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 17,
    "question": "The Philippine Health Insurance Corporation (PhilHealth) announced that the number of Filipinos covered by health insurance increased by 3% in the last year. If 105,000,000 Filipinos were covered previously, how many are covered now?",
    "choices": [
      "106,000,000",
      "107,150,000",
      "108,000,000",
      "108,150,000",
      "109,000,000"
    ],
    "correct_ans": "108,150,000",
    "explanation": "To find the current number of Filipinos covered by PhilHealth, we need to increase the previous number by 3%.  This is calculated as:  105,000,000 (previously covered) * 3% (increase) = 3,150,000 (increase)  Then, add the increase to the original number:  105,000,000 (original number) + 3,150,000 (increase) = 108,150,000  Therefore, 108,150,000 Filipinos are now covered by PhilHealth.",
    "poster_name": "Manuel G. Sintos"
  },
  {
   "id": 18,
   "question": "The Energy Regulatory Commission (ERC) reported that electricity consumption increased by 7% this year. If the consumption last year was 80,000 GWh, what is the consumption this year?",
   "choices": [
    "85,600 GWh",
    "86,000 GWh",
    "85,000 GWh",
    "87,000 GWh",
    "84,000 GWh"
   ],
   "correct_ans": "85,600 GWh",
   "explanation": "To find the electricity consumption this year, we need to increase last year's consumption by 7%.  This is calculated as:  80,000 GWh (last year) * 7% (increase) = 5,600 GWh (increase)  Then, add the increase to the original consumption:  80,000 GWh (original consumption) + 5,600 GWh (increase) = 85,600 GWh  Therefore, the electricity consumption this year is 85,600 GWh.",
   "poster_name": "Manuel G. Sintos"
  },
  {
   "id": 19,
   "question": "The National Bureau of Investigation (NBI) reported a decrease in cybercrime incidents by 15%. If there were 12,000 incidents reported last year, how many incidents were reported this year?",
   "choices": [
    "10,200",
    "10,000",
    "9,800",
    "10,500",
    "9,500"
   ],
   "correct_ans": "10,200",
   "explanation": "To find the number of cybercrime incidents this year, we need to decrease last year's incidents by 15%.  This is calculated as:  12,000 (last year) * 15% (decrease) = 1,800 (decrease)  Then, subtract the decrease from the original number of incidents:  12,000 (original incidents) - 1,800 (decrease) = 10,200  Therefore, the number of cybercrime incidents reported this year is 10,200.",
   "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 20,
    "question": "The Bureau of Internal Revenue (BIR) collected 25% more taxes this year compared to the last. If they collected ₱5 trillion last year, how much did they collect this year?",
    "choices": [
      "₱6.0 trillion",
      "₱6.25 trillion",
      "₱6.5 trillion",
      "₱5.25 trillion",
      "₱5.5 trillion"
    ],
    "correct_ans": "₱6.25 trillion",
    "explanation": "To find the tax collection this year, we need to increase last year's collection by 25%.  This is calculated as:  ₱5 trillion (last year) * 25% (increase) = ₱1.25 trillion (increase)  Then, add the increase to the original collection:  ₱5 trillion (original collection) + ₱1.25 trillion (increase) = ₱6.25 trillion  Therefore, the BIR collected ₱6.25 trillion this year.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 21,
    "question": "The Department of Trade and Industry (DTI) reported that the export of electronics increased by 18%. If the export value last year was $10 billion, what is the export value this year?",
    "choices": [
      "$11.0 billion",
      "$11.8 billion",
      "$12.0 billion",
      "$12.8 billion",
      "$13.0 billion"
    ],
    "correct_ans": "$11.8 billion",
    "explanation": "To find the export value this year, we need to increase last year's value by 18%.  This is calculated as:  $10 billion (last year) * 18% (increase) = $1.8 billion (increase)  Then, add the increase to the original value:  $10 billion (original value) + $1.8 billion (increase) = $11.8 billion  Therefore, the export value of electronics this year is $11.8 billion.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 22,
    "question": "The Philippine Atmospheric, Geophysical and Astronomical Services Administration (PAGASA) stated that the average rainfall decreased by 10% this year. If the average rainfall last year was 2000 mm, what is the average rainfall this year?",
    "choices": [
      "1600 mm",
      "1700 mm",
      "1800 mm",
      "1900 mm",
      "2200 mm"
    ],
    "correct_ans": "1800 mm",
    "explanation": "To find the average rainfall this year, we need to decrease last year's rainfall by 10%.  This is calculated as:  2000 mm (last year) * 10% (decrease) = 200 mm (decrease)  Then, subtract the decrease from the original rainfall:  2000 mm (original rainfall) - 200 mm (decrease) = 1800 mm  Therefore, the average rainfall this year is 1800 mm.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 23,
    "question": "The Department of Agrarian Reform (DAR) distributed 14% more land to farmers this year. If they distributed 500,000 hectares last year, how many hectares did they distribute this year?",
    "choices": [
      "560,000 hectares",
      "570,000 hectares",
      "580,000 hectares",
      "590,000 hectares",
      "600,000 hectares"
    ],
    "correct_ans": "570,000 hectares",
    "explanation": "To find the land distributed this year, we need to increase last year's distribution by 14%.  This is calculated as:  500,000 hectares (last year) * 14% (increase) = 70,000 hectares (increase)  Then, add the increase to the original distribution:  500,000 hectares (original distribution) + 70,000 hectares (increase) = 570,000 hectares  Therefore, the DAR distributed 570,000 hectares this year.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 24,
    "question": "The Commission on Higher Education (CHED) reported that the number of college graduates increased by 6% this year. If there were 800,000 graduates last year, how many graduates are there this year?",
    "choices": [
      "848,000",
      "850,000",
      "858,000",
      "860,000",
      "870,000"
    ],
    "correct_ans": "848,000",
    "explanation": "To find the number of graduates this year, we need to increase last year's number by 6%.  This is calculated as:  800,000 (last year) * 6% (increase) = 48,000 (increase)  Then, add the increase to the original number:  800,000 (original number) + 48,000 (increase) = 848,000  Therefore, there are 848,000 graduates this year.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 25,
    "question": "The Cooperative Development Authority (CDA) recorded that the number of registered cooperatives decreased by 4% this year. If there were 25,000 cooperatives registered last year, how many are registered this year?",
    "choices": [
      "24,000",
      "23,900",
      "24,500",
      "23,000",
      "23,500"
    ],
    "correct_ans": "24,000",
    "explanation": "To find the number of registered cooperatives this year, we need to decrease last year's number by 4%.  This is calculated as:  25,000 (last year) * 4% (decrease) = 1,000 (decrease)  Then, subtract the decrease from the original number:  25,000 (original number) - 1,000 (decrease) = 24,000  Therefore, there are 24,000 registered cooperatives this year.",
    "poster_name": "Manuel G. Sintos"
  },
   {
    "id": 26,
    "question": "The Department of Information and Communications Technology (DICT) reported an increase in internet users by 22% this year. If there were 70 million internet users last year, how many are there this year?",
    "choices": [
      "80.4 million",
      "85.4 million",
      "84.0 million",
      "82.4 million",
      "88.4 million"
    ],
    "correct_ans": "85.4 million",
    "explanation": "To find the number of internet users this year, we need to increase last year's number by 22%.  This is calculated as:  70 million (last year) * 22% (increase) = 15.4 million (increase)  Then, add the increase to the original number:  70 million (original number) + 15.4 million (increase) = 85.4 million  Therefore, there are 85.4 million internet users this year.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 27,
    "question": "The Technical Education and Skills Development Authority (TESDA) certified 15% more skilled workers this year. If they certified 400,000 workers last year, how many did they certify this year?",
    "choices": [
      "450,000",
      "460,000",
      "470,000",
      "480,000",
      "490,000"
    ],
    "correct_ans": "460,000",
    "explanation": "To find the number of workers certified this year, we need to increase last year's number by 15%.  This is calculated as:  400,000 (last year) * 15% (increase) = 60,000 (increase)  Then, add the increase to the original number:  400,000 (original number) + 60,000 (increase) = 460,000  Therefore, TESDA certified 460,000 workers this year.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 28,
    "question": "The Department of Budget and Management (DBM) released 95% of the national budget. If the national budget is ₱4.5 trillion, how much was released?",
    "choices": [
      "₱4.275 trillion",
      "₱4.0 trillion",
      "₱4.1 trillion",
      "₱4.3 trillion",
      "₱4.2 trillion"
    ],
    "correct_ans": "₱4.275 trillion",
    "explanation": "To find the amount of the budget released, we calculate 95% of the total budget.  This is calculated as:  ₱4.5 trillion * 95% = ₱4.275 trillion  Therefore, ₱4.275 trillion of the national budget was released.",
    "poster_name": "Manuel G. Sintos"
  },

  {
    "id": 29,
    "question": tableData14 + `
        Which city has the highest number of active cases per capita (per person)?
    `,
    "choices": [
        "Manila",
        "Quezon City",
        "Makati",
        "Pasig",
        "Caloocan"
    ],
    "correct_ans": "Makati",
    "explanation": "To find active cases per capita, divide Active Cases by Population and compare: Manila (500/1,800,000 ≈ 0.00028), Quezon City (800/3,000,000 ≈ 0.00027), Makati (300/600,000 = 0.0005), Pasig (300/800,000 = 0.000375), Caloocan (800/2,000,000 = 0.0004). Makati has the highest.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 30,
    "question": tableData14 + `
        Which city has the lowest death rate (Total Deaths per Total Cases)?
    `,
    "choices": [
        "Manila",
        "Quezon City",
        "Makati",
        "Pasig",
        "Caloocan"
    ],
    "correct_ans": "Makati",
    "explanation": "Calculate the death rate (Deaths / Cases) for each city: Manila (1000/50000 = 0.02), Quezon City (1500/75000 = 0.02), Makati (500/30000 ≈ 0.0167), Pasig (800/40000 = 0.02), Caloocan (1200/60000 = 0.02). Makati has the lowest.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 31,
    "question": tableData14 + `
        What is the total population of the cities with more than 50,000 total COVID-19 cases?
    `,
    "choices": [
        "4,800,000",
        "5,000,000",
        "6,000,000",
        "6,800,000",
        "8,000,000"
    ],
    "correct_ans": "6,800,000",
    "explanation": "Cities with more than 50,000 cases: Manila (1,800,000), Quezon City (3,000,000), Caloocan (2,000,000). Total population: 1,800,000 + 3,000,000 + 2,000,000 = 6,800,000",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 32,
    "question": tableData14 + `
        Which city has approximately 5 times more total cases than active cases?
    `,
    "choices": [
        "Manila",
        "Quezon City",
        "Makati",
        "Pasig",
        "Caloocan"
    ],
    "correct_ans": "Manila",
    "explanation": "Compare the ratio of Total Cases to Active Cases: Manila (50000/500 = 100), Quezon City (75000/800 = 93.75), Makati (30000/300 = 100),  Pasig (40000/300 = 133.33), Caloocan (60000/800 = 75). Manila is closest to 100",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 33,
    "question": tableData14 + `
        If you sum the 'New Cases' and divide it by the total number of cities, which option is closest to the result?
    `,
    "choices": [
        "150",
        "200",
        "236",
        "250",
        "300"
    ],
    "correct_ans": "236",
    "explanation": "Sum of New Cases: 250 + 300 + 150 + 200 + 280 = 1180. Divide by the number of cities (5): 1180 / 5 = 236",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 34,
    "question": tableData15 + `
        Who achieved the highest percentage of their sales target?
    `,
    "choices": [
        "Alice",
        "Bob",
        "Charlie",
        "David",
        "Emily"
    ],
    "correct_ans": "Alice",
    "explanation": "Calculate the percentage of target achieved (Q4 Sales / Target * 100) for each: Alice (33000/32000 ≈ 103.1%), Bob (30000/28000 ≈ 107.1%), Charlie (31000/30000 ≈ 103.3%), David (29000/25000 = 116%), Emily (32000/31000 ≈ 103.2%). David has the highest.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 35,
    "question": tableData15 + `
        Which salesperson had the largest increase in sales from Q1 to Q4?
    `,
    "choices": [
        "Alice",
        "Bob",
        "Charlie",
        "David",
        "Emily"
    ],
    "correct_ans": "Bob",
    "explanation": "Calculate the increase (Q4 Sales - Q1 Sales) for each: Alice (33000-25000 = 8000), Bob (30000-20000 = 10000), Charlie (31000-22000 = 9000), David (29000-18000 = 11000), Emily (32000 - 21000 = 11000). Bob has the largest increase.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 36,
    "question": tableData15 + `
        What is the average sales target for all salespeople?
    `,
    "choices": [
        "$27,000",
        "$28,000",
        "$29,000",
        "$30,000",
        "$31,000"
    ],
    "correct_ans": "$29,200",
    "explanation": "Calculate the average target: (32000 + 28000 + 30000 + 25000 + 31000) / 5 = 29200",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 37,
    "question": tableData15 + `
        Which salesperson was closest to achieving their exact target in Q4?
    `,
    "choices": [
        "Alice",
        "Bob",
        "Charlie",
        "David",
        "Emily"
    ],
    "correct_ans": "Charlie",
    "explanation": "Compare the difference between Q4 Sales and Target: Alice (33000-32000 = 1000), Bob (30000-28000 = 2000), Charlie (31000-30000 = 1000), David (29000-25000 = 4000), Emily (32000-31000 = 1000). Charlie and Alice and Emily are close.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 38,
    "question": tableData15 + `
        If you sum the Q1 sales and compare it to the sum of the Q4 sales, what is the approximate difference?
    `,
    "choices": [
        "$30,000",
        "$35,000",
        "$40,000",
        "$45,000",
        "$50,000"
    ],
    "correct_ans": "$45,000",
    "explanation": "Sum of Q1 sales: 25000 + 20000 + 22000 + 18000 + 21000 = 106000. Sum of Q4 sales: 33000 + 30000 + 31000 + 29000 + 32000 = 155000. Difference: 155000 - 106000 = 49000",
    "poster_name": "Manuel G. Sintos"
  },

  {
    "id": 39,
    "question": tableData16 + `
        Which page has the highest number of goal conversions? (Conversions = Page Views * Goal Conversion Rate)
    `,
    "choices": [
        "Homepage",
        "About Us",
        "Products",
        "Contact Us",
        "Blog"
    ],
    "correct_ans": "Products",
    "explanation": "Calculate conversions for each page: Homepage (150000 * 0.025 = 3750), About Us (80000 * 0.01 = 800), Products (120000 * 0.05 = 6000), Contact Us (50000 * 0.08 = 4000), Blog (90000 * 0.005 = 450). Products have the highest conversions.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 40,
    "question": tableData16 + `
        Which page has the highest conversion rate among pages with more than 80,000 page views?
    `,
    "choices": [
        "Homepage",
        "About Us",
        "Products",
        "Blog",
        "None"
    ],
    "correct_ans": "Products",
    "explanation": "Pages with more than 80,000 views: Homepage, About Us, Products, Blog. Comparing their conversion rates: Homepage (2.5%), About Us (1.0%), Products (5.0%), Blog (0.5%). Products have the highest rate.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 41,
    "question": tableData16 + `
        What is the average bounce rate for all pages?
    `,
    "choices": [
        "45%",
        "48%",
        "50%",
        "52%",
        "55%"
    ],
    "correct_ans": "48%",
    "explanation": "Calculate the average bounce rate: (45 + 30 + 50 + 60 + 55) / 5 = 48",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 42,
    "question": tableData16 + `
        Which page has the lowest ratio of Unique Visitors to Page Views?
    `,
    "choices": [
        "Homepage",
        "About Us",
        "Products",
        "Contact Us",
        "Blog"
    ],
    "correct_ans": "Homepage",
    "explanation": "Calculate the ratio (Unique Visitors / Page Views): Homepage (100000/150000 ≈ 0.67), About Us (60000/80000 = 0.75), Products (95000/120000 ≈ 0.79), Contact Us (40000/50000 = 0.8), Blog (70000/90000 ≈ 0.78). Homepage has the lowest ratio.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 43,
    "question": tableData16 + `
        If you multiply the total Page Views by the average Goal Conversion Rate, which of the following is closest to the result?
    `,
    "choices": [
        "10,000",
        "12,000",
        "15,000",
        "18,000",
        "20,000"
    ],
    "correct_ans": "18,000",
    "explanation": "Total Page Views: 150000 + 80000 + 120000 + 50000 + 90000 = 490000. Average Goal Conversion Rate: (2.5 + 1.0 + 5.0 + 8.0 + 0.5) / 5 = 3.4%. Calculation: 490000 * 0.034 = 16660",
    "poster_name": "Manuel G. Sintos"
  }

];





