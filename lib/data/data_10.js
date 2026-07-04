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

let tableData17 = `
    <center><b>Annual LGU Budget Allocation (FY 2024)</b></center>
    <table style="width:100%">
        <th>Department</th>
        <th>Allocation (₱ Millions)</th>
        <th>Spent Q1-Q3</th>
        <th>Remaining Q4</th>
        <th>Personnel Count</th>
    </tr>
    <tr>
        <td>Education & Youth</td>
        <td>150</td>
        <td>115</td>
        <td>35</td>
        <td>450</td>
    </tr>
    <tr>
        <td>Health & Sanitation</td>
        <td>120</td>
        <td>90</td>
        <td>30</td>
        <td>320</td>
    </tr>
    <tr>
        <td>Public Works & Infra</td>
        <td>200</td>
        <td>160</td>
        <td>40</td>
        <td>180</td>
    </tr>
    <tr>
        <td>Social Welfare (DSWD)</td>
        <td>80</td>
        <td>68</td>
        <td>12</td>
        <td>100</td>
    </tr>
    <tr>
        <td>Disaster Risk Mgmt</td>
        <td>50</td>
        <td>25</td>
        <td>25</td>
        <td>50</td>
    </tr>
    </table>
    <br/>
`;

let tableData18 = `
    <center><b>Agricultural Production and Yield in Region IV-A (2023)</b></center>
    <table style="width:100%">
        <th>Crop</th>
        <th>Area Harvested (Hectares)</th>
        <th>Total Production (MT)</th>
        <th>Average Price per MT (₱)</th>
    </tr>
    <tr>
        <td>Rice</td>
        <td>45,000</td>
        <td>180,000</td>
        <td>22,000</td>
    </tr>
    <tr>
        <td>Corn</td>
        <td>20,000</td>
        <td>80,000</td>
        <td>18,000</td>
    </tr>
    <tr>
        <td>Coconut</td>
        <td>60,000</td>
        <td>300,000</td>
        <td>15,000</td>
    </tr>
    <tr>
        <td>Banana</td>
        <td>15,000</td>
        <td>120,000</td>
        <td>25,000</td>
    </tr>
    <tr>
        <td>Vegetables</td>
        <td>10,000</td>
        <td>50,000</td>
        <td>35,000</td>
    </tr>
    </table>
    <br/>
`;

let tableData19 = `
    <center><b>Public Rail Transit Performance (Metro Manila)</b></center>
    <table style="width:100%">
        <th>Line</th>
        <th>Daily Passengers</th>
        <th>Ticket Price (₱)</th>
        <th>Operating Cost/Day (₱)</th>
        <th>On-Time Rate</th>
    </tr>
    <tr>
        <td>LRT Line 1</td>
        <td>350,000</td>
        <td>30</td>
        <td>6,500,000</td>
        <td>92%</td>
    </tr>
    <tr>
        <td>LRT Line 2</td>
        <td>180,000</td>
        <td>25</td>
        <td>3,200,000</td>
        <td>95%</td>
    </tr>
    <tr>
        <td>MRT Line 3</td>
        <td>400,000</td>
        <td>28</td>
        <td>7,800,000</td>
        <td>88%</td>
    </tr>
    <tr>
        <td>PNR Commuter</td>
        <td>70,000</td>
        <td>20</td>
        <td>1,100,000</td>
        <td>82%</td>
    </tr>
    </table>
    <br/>
`;

let tableData20 = `
    <center><b>Philippine Power Generation Mix (2023)</b></center>
    <table style="width:100%">
        <th>Energy Source</th>
        <th>Installed Capacity (MW)</th>
        <th>Power Generated (GWh)</th>
        <th>CO2 Emission Rate (kg/MWh)</th>
    </tr>
    <tr>
        <td>Coal</td>
        <td>12,000</td>
        <td>55,000</td>
        <td>950</td>
    </tr>
    <tr>
        <td>Natural Gas</td>
        <td>3,800</td>
        <td>18,000</td>
        <td>450</td>
    </tr>
    <tr>
        <td>Geothermal</td>
        <td>1,900</td>
        <td>10,500</td>
        <td>120</td>
    </tr>
    <tr>
        <td>Hydroelectric</td>
        <td>3,700</td>
        <td>9,500</td>
        <td>0</td>
    </tr>
    <tr>
        <td>Solar & Wind</td>
        <td>2,600</td>
        <td>5,000</td>
        <td>0</td>
    </tr>
    </table>
    <br/>
`;

let tableData21 = `
    <center><b>Civil Service Examination Results by Region (2023)</b></center>
    <table style="width:100%">
        <th>Region</th>
        <th>Total Examinees</th>
        <th>Number Passed</th>
        <th>Passing Rate (%)</th>
        <th>Honor Graduates Exempted</th>
    </tr>
    <tr>
        <td>NCR</td>
        <td>42,000</td>
        <td>7,560</td>
        <td>18.0%</td>
        <td>1,200</td>
    </tr>
    <tr>
        <td>Region III</td>
        <td>28,000</td>
        <td>4,480</td>
        <td>16.0%</td>
        <td>650</td>
    </tr>
    <tr>
        <td>Region IV-A</td>
        <td>35,000</td>
        <td>5,950</td>
        <td>17.0%</td>
        <td>850</td>
    </tr>
    <tr>
        <td>Region VII</td>
        <td>22,000</td>
        <td>3,300</td>
        <td>15.0%</td>
        <td>400</td>
    </tr>
    <tr>
        <td>Region XI</td>
        <td>18,000</td>
        <td>2,520</td>
        <td>14.0%</td>
        <td>300</td>
    </tr>
    </table>
    <br/>
`;

let tableData22 = `
    <center><b>Hospital Bed Capacity & Admissions</b></center>
    <table style="width:100%">
        <th>Hospital</th>
        <th>Bed Capacity</th>
        <th>Annual Admissions</th>
        <th>Average Stay (Days)</th>
        <th>Occupancy Rate (%)</th>
    </tr>
    <tr>
        <td>Hospital A</td>
        <td>500</td>
        <td>18,250</td>
        <td>8.0</td>
        <td>80%</td>
    </tr>
    <tr>
        <td>Hospital B</td>
        <td>300</td>
        <td>12,600</td>
        <td>6.5</td>
        <td>75%</td>
    </tr>
    <tr>
        <td>Hospital C</td>
        <td>250</td>
        <td>8,500</td>
        <td>7.0</td>
        <td>68%</td>
    </tr>
    <tr>
        <td>Hospital D</td>
        <td>150</td>
        <td>6,000</td>
        <td>5.5</td>
        <td>85%</td>
    </tr>
    <tr>
        <td>Hospital E</td>
        <td>400</td>
        <td>14,600</td>
        <td>7.5</td>
        <td>78%</td>
    </tr>
    </table>
    <br/>
`;

let tableData23 = `
    <center><b>Digital Payment Usage in the Philippines (2023)</b></center>
    <table style="width:100%">
        <th>Payment Method</th>
        <th>Active Users (Millions)</th>
        <th>Transaction Volume (₱ Billions)</th>
        <th>Avg Transaction Size (₱)</th>
    </tr>
    <tr>
        <td>E-Wallets (GCash/Maya)</td>
        <td>58.0</td>
        <td>1,160</td>
        <td>800</td>
    </tr>
    <tr>
        <td>Credit/Debit Cards</td>
        <td>12.0</td>
        <td>480</td>
        <td>3,500</td>
    </tr>
    <tr>
        <td>Online Banking</td>
        <td>25.0</td>
        <td>750</td>
        <td>2,500</td>
    </tr>
    <tr>
        <td>Cash on Delivery (COD)</td>
        <td>35.0</td>
        <td>210</td>
        <td>1,200</td>
    </tr>
    <tr>
        <td>Over-the-Counter (OTC)</td>
        <td>15.0</td>
        <td>90</td>
        <td>1,500</td>
    </tr>
    </table>
    <br/>
`;

let tableData24 = `
    <center><b>Disaster Relief Assistance Distribution (NDRRMC)</b></center>
    <table style="width:100%">
        <th>Province</th>
        <th>Families Affected</th>
        <th>Evacuation Centers</th>
        <th>Relief Packs</th>
        <th>Assistance Cost (₱ Millions)</th>
    </tr>
    <tr>
        <td>Province Alpha</td>
        <td>45,000</td>
        <td>120</td>
        <td>40,000</td>
        <td>24.0</td>
    </tr>
    <tr>
        <td>Province Beta</td>
        <td>30,000</td>
        <td>85</td>
        <td>32,000</td>
        <td>18.5</td>
    </tr>
    <tr>
        <td>Province Gamma</td>
        <td>60,000</td>
        <td>150</td>
        <td>55,000</td>
        <td>33.0</td>
    </tr>
    <tr>
        <td>Province Delta</td>
        <td>25,000</td>
        <td>60</td>
        <td>22,000</td>
        <td>12.0</td>
    </tr>
    <tr>
        <td>Province Epsilon</td>
        <td>15,000</td>
        <td>40</td>
        <td>15,000</td>
        <td>8.5</td>
    </tr>
    </table>
    <br/>
`;

let tableData25 = `
    <center><b>OFW Remittances by Region of Origin (2023)</b></center>
    <table style="width:100%">
        <th>Region</th>
        <th>Number of OFWs</th>
        <th>Cash Remittances (₱ Billions)</th>
        <th>Avg Remittance/OFW (₱)</th>
    </tr>
    <tr>
        <td>Luzon</td>
        <td>1,100,000</td>
        <td>165.0</td>
        <td>150,000</td>
    </tr>
    <tr>
        <td>Visayas</td>
        <td>450,000</td>
        <td>58.5</td>
        <td>130,000</td>
    </tr>
    <tr>
        <td>Mindanao</td>
        <td>350,000</td>
        <td>42.0</td>
        <td>120,000</td>
    </tr>
    <tr>
        <td>BARMM</td>
        <td>100,000</td>
        <td>10.0</td>
        <td>100,000</td>
    </tr>
    </table>
    <br/>
`;

let tableData26 = `
    <center><b>Water Utility Consumption & Billing Statistics</b></center>
    <table style="width:100%">
        <th>Customer Category</th>
        <th>Connections</th>
        <th>Total Water (Cu. Meters)</th>
        <th>Avg Rate/CuM (₱)</th>
        <th>Unpaid Bills Rate</th>
    </tr>
    <tr>
        <td>Residential</td>
        <td>250,000</td>
        <td>5,000,000</td>
        <td>35</td>
        <td>8%</td>
    </tr>
    <tr>
        <td>Commercial</td>
        <td>35,000</td>
        <td>2,800,000</td>
        <td>65</td>
        <td>4%</td>
    </tr>
    <tr>
        <td>Industrial</td>
        <td>2,500</td>
        <td>1,500,000</td>
        <td>85</td>
        <td>2%</td>
    </tr>
    <tr>
        <td>Institutional</td>
        <td>5,000</td>
        <td>700,000</td>
        <td>45</td>
        <td>12%</td>
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
  },
  {
    "id": 44,
    "question": tableData17 + `
        What percentage of the total LGU budget (₱600 Million) was allocated to Public Works & Infrastructure?
    `,
    "choices": [
        "25.0%",
        "30.0%",
        "33.3%",
        "35.0%",
        "40.0%"
    ],
    "correct_ans": "33.3%",
    "explanation": "Public Works & Infrastructure allocation = ₱200 Million. Total LGU Budget = ₱150M + ₱120M + ₱200M + ₱80M + ₱50M = ₱600 Million. Percentage = (200 / 600) * 100% = 33.33% ≈ 33.3%.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 45,
    "question": tableData17 + `
        Which department has the highest average budget allocation per personnel?
    `,
    "choices": [
        "Education & Youth",
        "Health & Sanitation",
        "Public Works & Infra",
        "Social Welfare (DSWD)",
        "Disaster Risk Mgmt"
    ],
    "correct_ans": "Public Works & Infra",
    "explanation": "Calculate Allocation / Personnel Count for each: Education (150M/450 = ₱333,333), Health (120M/320 = ₱375,000), Public Works (200M/180 = ₱1,111,111), Social Welfare (80M/100 = ₱800,000), Disaster Risk (50M/50 = ₱1,000,000). Public Works & Infra has the highest allocation per personnel at ₱1.11 Million.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 46,
    "question": tableData17 + `
        What percentage of the Health & Sanitation total budget remains unspent going into Q4?
    `,
    "choices": [
        "15%",
        "20%",
        "25%",
        "30%",
        "35%"
    ],
    "correct_ans": "25%",
    "explanation": "Health & Sanitation Total Allocation = ₱120 Million; Remaining Q4 = ₱30 Million. Percentage remaining = (30 / 120) * 100% = 25%.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 47,
    "question": tableData17 + `
        If Social Welfare (DSWD) spends 75% of its remaining Q4 budget, how much money will it return unspent at year end?
    `,
    "choices": [
        "₱1.5 Million",
        "₱2.0 Million",
        "₱3.0 Million",
        "₱4.5 Million",
        "₱6.0 Million"
    ],
    "correct_ans": "₱3.0 Million",
    "explanation": "Social Welfare remaining Q4 budget = ₱12 Million. If it spends 75%, it leaves 25% unspent. Unspent amount = 25% * ₱12 Million = ₱3.0 Million.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 48,
    "question": tableData17 + `
        What is the simplified ratio of the Education & Youth budget allocation to the Health & Sanitation budget allocation?
    `,
    "choices": [
        "3 : 2",
        "4 : 3",
        "5 : 4",
        "5 : 3",
        "6 : 5"
    ],
    "correct_ans": "5 : 4",
    "explanation": "Education Allocation = 150; Health Allocation = 120. Ratio = 150 : 120. Dividing both terms by 30 gives 5 : 4.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 49,
    "question": tableData18 + `
        Which crop achieved the highest agricultural yield in Metric Tons per Hectare?
    `,
    "choices": [
        "Rice",
        "Corn",
        "Coconut",
        "Banana",
        "Vegetables"
    ],
    "correct_ans": "Banana",
    "explanation": "Yield = Total Production / Area Harvested. Rice (180,000 / 45,000 = 4.0 MT/ha), Corn (80,000 / 20,000 = 4.0 MT/ha), Coconut (300,000 / 60,000 = 5.0 MT/ha), Banana (120,000 / 15,000 = 8.0 MT/ha), Vegetables (50,000 / 10,000 = 5.0 MT/ha). Banana has the highest yield at 8.0 MT/ha.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 50,
    "question": tableData18 + `
        What is the total monetary value generated by Rice production in Region IV-A?
    `,
    "choices": [
        "₱2.85 Billion",
        "₱3.50 Billion",
        "₱3.96 Billion",
        "₱4.20 Billion",
        "₱4.50 Billion"
    ],
    "correct_ans": "₱3.96 Billion",
    "explanation": "Total Value = Total Production * Average Price per MT = 180,000 MT * ₱22,000 = ₱3,960,000,000 = ₱3.96 Billion.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 51,
    "question": tableData18 + `
        Banana production accounts for what percentage of the combined total metric tons produced across all five crops?
    `,
    "choices": [
        "12.5%",
        "14.2%",
        "16.4%",
        "18.5%",
        "20.0%"
    ],
    "correct_ans": "16.4%",
    "explanation": "Combined total production = 180,000 + 80,000 + 300,000 + 120,000 + 50,000 = 730,000 MT. Banana percentage = (120,000 / 730,000) * 100% = 16.44% ≈ 16.4%.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 52,
    "question": tableData18 + `
        If Coconut yield per hectare increases by 10% next year while the harvested area remains constant, what will be the new total Coconut production?
    `,
    "choices": [
        "310,000 MT",
        "320,000 MT",
        "330,000 MT",
        "340,000 MT",
        "350,000 MT"
    ],
    "correct_ans": "330,000 MT",
    "explanation": "Current Coconut production = 300,000 MT. A 10% increase = 300,000 * 0.10 = 30,000 MT. New production = 300,000 + 30,000 = 330,000 MT.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 53,
    "question": tableData18 + `
        What is the total combined economic value of all harvested crops listed in the table?
    `,
    "choices": [
        "₱12.50 Billion",
        "₱13.80 Billion",
        "₱14.65 Billion",
        "₱15.20 Billion",
        "₱16.00 Billion"
    ],
    "correct_ans": "₱14.65 Billion",
    "explanation": "Calculate Production * Price for each crop: Rice (3.96B), Corn (80,000 * 18,000 = 1.44B), Coconut (300,000 * 15,000 = 4.50B), Banana (120,000 * 25,000 = 3.00B), Vegetables (50,000 * 35,000 = 1.75B). Total = 3.96 + 1.44 + 4.50 + 3.00 + 1.75 = ₱14.65 Billion.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 54,
    "question": tableData19 + `
        Which public rail line generates the highest net daily operating profit (Daily Revenue minus Daily Operating Cost)?
    `,
    "choices": [
        "LRT Line 1",
        "LRT Line 2",
        "MRT Line 3",
        "PNR Commuter",
        "None"
    ],
    "correct_ans": "LRT Line 1",
    "explanation": "Calculate Daily Revenue = Passengers * Ticket Price, then subtract Operating Cost: LRT Line 1 (350,000 * 30 = 10.5M; Net = 10.5M - 6.5M = ₱4.0M), LRT Line 2 (180,000 * 25 = 4.5M; Net = 4.5M - 3.2M = ₱1.3M), MRT Line 3 (400,000 * 28 = 11.2M; Net = 11.2M - 7.8M = ₱3.4M), PNR (70,000 * 20 = 1.4M; Net = 1.4M - 1.1M = ₱0.3M). LRT Line 1 has the highest net daily profit at ₱4.0 Million.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 55,
    "question": tableData19 + `
        What is the weighted average ticket price per passenger across all four transit lines combined?
    `,
    "choices": [
        "₱25.00",
        "₱26.80",
        "₱27.60",
        "₱28.20",
        "₱29.50"
    ],
    "correct_ans": "₱27.60",
    "explanation": "Total Daily Revenue = 10.5M + 4.5M + 11.2M + 1.4M = ₱27,600,000. Total Daily Passengers = 350,000 + 180,000 + 400,000 + 70,000 = 1,000,000. Weighted average price = ₱27,600,000 / 1,000,000 = ₱27.60.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 56,
    "question": tableData19 + `
        If MRT Line 3 increases its daily operating costs by 10% to conduct system repairs, what will be its new daily operating cost?
    `,
    "choices": [
        "₱8,180,000",
        "₱8,350,000",
        "₱8,580,000",
        "₱8,720,000",
        "₱9,000,000"
    ],
    "correct_ans": "₱8,580,000",
    "explanation": "Current operating cost for MRT Line 3 = ₱7,800,000. 10% increase = ₱780,000. New operating cost = ₱7,800,000 + ₱780,000 = ₱8,580,000.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 57,
    "question": tableData19 + `
        What percentage of total daily train commuters in Metro Manila are transported by MRT Line 3?
    `,
    "choices": [
        "35.0%",
        "38.0%",
        "40.0%",
        "42.5%",
        "45.0%"
    ],
    "correct_ans": "40.0%",
    "explanation": "Total daily passengers across all 4 lines = 1,000,000. MRT Line 3 passengers = 400,000. Percentage = (400,000 / 1,000,000) * 100% = 40.0%.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 58,
    "question": tableData19 + `
        By how much does LRT Line 1's daily ticket revenue exceed LRT Line 2's daily ticket revenue?
    `,
    "choices": [
        "₱4,500,000",
        "₱5,000,000",
        "₱5,500,000",
        "₱6,000,000",
        "₱6,500,000"
    ],
    "correct_ans": "₱6,000,000",
    "explanation": "LRT Line 1 Revenue = 350,000 * ₱30 = ₱10,500,000. LRT Line 2 Revenue = 180,000 * ₱25 = ₱4,500,000. Difference = ₱10,500,000 - ₱4,500,000 = ₱6,000,000.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 59,
    "question": tableData20 + `
        What percentage of total power generated (GWh) comes from clean or renewable sources (Geothermal, Hydroelectric, Solar & Wind)?
    `,
    "choices": [
        "20.5%",
        "22.8%",
        "25.5%",
        "28.2%",
        "30.0%"
    ],
    "correct_ans": "25.5%",
    "explanation": "Total Power Generated = 55,000 + 18,000 + 10,500 + 9,500 + 5,000 = 98,000 GWh. Renewable Generation = 10,500 + 9,500 + 5,000 = 25,000 GWh. Percentage = (25,000 / 98,000) * 100% = 25.51% ≈ 25.5%.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 60,
    "question": tableData20 + `
        Which energy source achieved the highest efficiency ratio in terms of power generated per MW of installed capacity (GWh / MW)?
    `,
    "choices": [
        "Coal",
        "Natural Gas",
        "Geothermal",
        "Hydroelectric",
        "Solar & Wind"
    ],
    "correct_ans": "Geothermal",
    "explanation": "Ratio = Power Generated / Installed Capacity: Coal (55,000 / 12,000 = 4.58), Natural Gas (18,000 / 3,800 = 4.74), Geothermal (10,500 / 1,900 = 5.53), Hydroelectric (9,500 / 3,700 = 2.57), Solar & Wind (5,000 / 2,600 = 1.92). Geothermal is highest at 5.53 GWh/MW.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 61,
    "question": tableData20 + `
        What is the total CO2 emission (in million kg) produced by Coal power generation in 2023? (Note: 1 GWh = 1,000 MWh)
    `,
    "choices": [
        "45,000 million kg",
        "48,500 million kg",
        "52,250 million kg",
        "55,000 million kg",
        "60,000 million kg"
    ],
    "correct_ans": "52,250 million kg",
    "explanation": "Coal Power Generated = 55,000 GWh = 55,000,000 MWh. CO2 Emission = 55,000,000 MWh * 950 kg/MWh = 52,250,000,000 kg = 52,250 million kg.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 62,
    "question": tableData20 + `
        If Solar & Wind power generation doubles to 10,000 GWh, replacing an equivalent 5,000 GWh of Coal generation, by how many million kg will total CO2 emissions be reduced?
    `,
    "choices": [
        "3,500 million kg",
        "4,200 million kg",
        "4,750 million kg",
        "5,100 million kg",
        "5,500 million kg"
    ],
    "correct_ans": "4,750 million kg",
    "explanation": "Replacing 5,000 GWh (5,000,000 MWh) of Coal generation avoids 5,000,000 MWh * 950 kg/MWh = 4,750,000,000 kg = 4,750 million kg of CO2 emissions.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 63,
    "question": tableData20 + `
        What is the simplified ratio of Coal installed capacity to total Renewable installed capacity (Geothermal + Hydro + Solar & Wind)?
    `,
    "choices": [
        "60 : 41",
        "30 : 19",
        "3 : 2",
        "5 : 3",
        "12 : 7"
    ],
    "correct_ans": "60 : 41",
    "explanation": "Coal Installed Capacity = 12,000 MW. Renewable Installed Capacity = 1,900 + 3,700 + 2,600 = 8,200 MW. Ratio = 12,000 : 8,200 = 120 : 82 = 60 : 41.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 64,
    "question": tableData21 + `
        What is the overall passing rate across all five regions combined for written civil service examinees?
    `,
    "choices": [
        "15.2%",
        "16.0%",
        "16.4%",
        "17.1%",
        "18.0%"
    ],
    "correct_ans": "16.4%",
    "explanation": "Total Examinees = 42,000 + 28,000 + 35,000 + 22,000 + 18,000 = 145,000. Total Passed = 7,560 + 4,480 + 5,950 + 3,300 + 2,520 = 23,810. Overall Passing Rate = (23,810 / 145,000) * 100% = 16.42% ≈ 16.4%.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 65,
    "question": tableData21 + `
        Which region produced the largest total number of civil service eligible individuals (Number Passed + Honor Graduate Exemptions)?
    `,
    "choices": [
        "NCR",
        "Region III",
        "Region IV-A",
        "Region VII",
        "Region XI"
    ],
    "correct_ans": "NCR",
    "explanation": "Calculate Total Eligibles = Passed + Exempted: NCR (7,560 + 1,200 = 8,760), Region III (4,480 + 650 = 5,130), Region IV-A (5,950 + 850 = 6,800), Region VII (3,300 + 400 = 3,700), Region XI (2,520 + 300 = 2,820). NCR produced the largest total at 8,760.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 66,
    "question": tableData21 + `
        What percentage of total written exam passers across all five regions came from NCR?
    `,
    "choices": [
        "28.5%",
        "30.2%",
        "31.8%",
        "33.5%",
        "35.0%"
    ],
    "correct_ans": "31.8%",
    "explanation": "Total Passers = 23,810. NCR Passers = 7,560. Percentage = (7,560 / 23,810) * 100% = 31.75% ≈ 31.8%.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 67,
    "question": tableData21 + `
        If Region VII's total examinees increase by 10% next year and its passing rate improves to 18%, how many examinees will pass the exam in Region VII?
    `,
    "choices": [
        "3,960",
        "4,180",
        "4,356",
        "4,500",
        "4,840"
    ],
    "correct_ans": "4,356",
    "explanation": "New examinees = 22,000 * 1.10 = 24,200. Passers = 24,200 * 0.18 = 4,356.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 68,
    "question": tableData21 + `
        In Region IV-A, what is the simplified ratio of Honor Graduate Exemptions to total examinees who passed the written exam?
    `,
    "choices": [
        "1 : 5",
        "1 : 6",
        "1 : 7",
        "1 : 8",
        "2 : 11"
    ],
    "correct_ans": "1 : 7",
    "explanation": "Exemptions in Region IV-A = 850; Written Passers = 5,950. Ratio = 850 : 5,950. Dividing both by 850 gives 1 : 7.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 69,
    "question": tableData22 + `
        What is the average bed capacity across all five hospitals combined?
    `,
    "choices": [
        "280 beds",
        "300 beds",
        "320 beds",
        "350 beds",
        "380 beds"
    ],
    "correct_ans": "320 beds",
    "explanation": "Total Bed Capacity = 500 + 300 + 250 + 150 + 400 = 1,600 beds. Average = 1,600 / 5 = 320 beds.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 70,
    "question": tableData22 + `
        Which hospital had the highest number of annual admissions per bed capacity?
    `,
    "choices": [
        "Hospital A",
        "Hospital B",
        "Hospital C",
        "Hospital D",
        "Hospital E"
    ],
    "correct_ans": "Hospital B",
    "explanation": "Admissions / Capacity: Hospital A (18,250/500 = 36.5), Hospital B (12,600/300 = 42.0), Hospital C (8,500/250 = 34.0), Hospital D (6,000/150 = 40.0), Hospital E (14,600/400 = 36.5). Hospital B is highest at 42.0 admissions per bed.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 71,
    "question": tableData22 + `
        If Hospital D expands its bed capacity by 30 beds and maintains an 85% occupancy rate, how many beds will be occupied on average?
    `,
    "choices": [
        "140 beds",
        "148 beds",
        "153 beds",
        "160 beds",
        "165 beds"
    ],
    "correct_ans": "153 beds",
    "explanation": "New bed capacity = 150 + 30 = 180 beds. Occupied beds = 180 * 0.85 = 153 beds.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 72,
    "question": tableData22 + `
        What is the total number of patient-days spent by patients in Hospital A annually (Admissions * Average Stay)?
    `,
    "choices": [
        "130,000",
        "138,500",
        "146,000",
        "152,000",
        "160,000"
    ],
    "correct_ans": "146,000",
    "explanation": "Annual Admissions = 18,250; Average Stay = 8.0 days. Total patient-days = 18,250 * 8.0 = 146,000 days.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 73,
    "question": tableData22 + `
        What is the median bed capacity among the five hospitals?
    `,
    "choices": [
        "250 beds",
        "280 beds",
        "300 beds",
        "320 beds",
        "400 beds"
    ],
    "correct_ans": "300 beds",
    "explanation": "Arrange bed capacities in ascending order: 150, 250, 300, 400, 500. The median (middle value) is 300 beds.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 74,
    "question": tableData23 + `
        E-Wallets represent what percentage of total active users across all listed digital payment methods?
    `,
    "choices": [
        "32.0%",
        "36.5%",
        "40.0%",
        "42.5%",
        "45.0%"
    ],
    "correct_ans": "40.0%",
    "explanation": "Total Active Users = 58.0 + 12.0 + 25.0 + 35.0 + 15.0 = 145.0 Million. E-Wallet Users = 58.0 Million. Percentage = (58.0 / 145.0) * 100% = 40.0%.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 75,
    "question": tableData23 + `
        Which payment method recorded the highest average transaction size in Philippine Pesos?
    `,
    "choices": [
        "E-Wallets (GCash/Maya)",
        "Credit/Debit Cards",
        "Online Banking",
        "Cash on Delivery (COD)",
        "Over-the-Counter (OTC)"
    ],
    "correct_ans": "Credit/Debit Cards",
    "explanation": "Comparing average transaction size: Credit/Debit Cards (₱3,500), Online Banking (₱2,500), OTC (₱1,500), COD (₱1,200), E-Wallets (₱800). Credit/Debit Cards is the highest.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 76,
    "question": tableData23 + `
        What is the total annual transaction volume in ₱ Billions across all five payment methods combined?
    `,
    "choices": [
        "₱2,450 Billion",
        "₱2,580 Billion",
        "₱2,690 Billion",
        "₱2,750 Billion",
        "₱2,800 Billion"
    ],
    "correct_ans": "₱2,690 Billion",
    "explanation": "Total Transaction Volume = 1,160 + 480 + 750 + 210 + 90 = ₱2,690 Billion.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 77,
    "question": tableData23 + `
        If Cash on Delivery (COD) volume decreases by 20% while E-Wallets increase by 15%, what will be the new difference in volume between E-Wallets and COD?
    `,
    "choices": [
        "₱1,050 Billion",
        "₱1,112 Billion",
        "₱1,166 Billion",
        "₱1,220 Billion",
        "₱1,280 Billion"
    ],
    "correct_ans": "₱1,166 Billion",
    "explanation": "New COD Volume = 210 * 0.80 = ₱168 Billion. New E-Wallet Volume = 1,160 * 1.15 = ₱1,334 Billion. Difference = 1,334 - 168 = ₱1,166 Billion.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 78,
    "question": tableData23 + `
        What is the simplified ratio of E-Wallet transaction volume to Credit/Debit Card transaction volume?
    `,
    "choices": [
        "29 : 12",
        "25 : 11",
        "5 : 2",
        "3 : 1",
        "7 : 3"
    ],
    "correct_ans": "29 : 12",
    "explanation": "E-Wallet Volume = 1,160; Credit/Debit Volume = 480. Ratio = 1,160 : 480. Dividing both numbers by 40 yields 29 : 12.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 79,
    "question": tableData24 + `
        Which province received the highest cost of disaster assistance per affected family?
    `,
    "choices": [
        "Province Alpha",
        "Province Beta",
        "Province Gamma",
        "Province Delta",
        "Province Epsilon"
    ],
    "correct_ans": "Province Beta",
    "explanation": "Cost per family = (Assistance Cost * 1,000,000) / Families Affected: Alpha (24M/45k = ₱533), Beta (18.5M/30k = ₱617), Gamma (33M/60k = ₱550), Delta (12M/25k = ₱480), Epsilon (8.5M/15k = ₱567). Province Beta is highest at ₱617 per family.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 80,
    "question": tableData24 + `
        What percentage of total affected families across all five provinces were located in Province Gamma?
    `,
    "choices": [
        "28.5%",
        "31.0%",
        "34.3%",
        "36.8%",
        "40.0%"
    ],
    "correct_ans": "34.3%",
    "explanation": "Total Affected Families = 45,000 + 30,000 + 60,000 + 25,000 + 15,000 = 175,000. Gamma Families = 60,000. Percentage = (60,000 / 175,000) * 100% = 34.28% ≈ 34.3%.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 81,
    "question": tableData24 + `
        What is the average number of relief packs distributed per evacuation center across all provinces combined?
    `,
    "choices": [
        "320 packs",
        "345 packs",
        "360 packs",
        "380 packs",
        "410 packs"
    ],
    "correct_ans": "360 packs",
    "explanation": "Total Relief Packs = 40,000 + 32,000 + 55,000 + 22,000 + 15,000 = 164,000. Total Evacuation Centers = 120 + 85 + 150 + 60 + 40 = 455. Average = 164,000 / 455 = 360.44 ≈ 360 packs.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 82,
    "question": tableData24 + `
        If Province Alpha distributes an additional 10,000 relief packs at a cost of ₱600 per pack, what will be its new total cost of assistance in ₱ Millions?
    `,
    "choices": [
        "₱26.0 Million",
        "₱28.5 Million",
        "₱30.0 Million",
        "₱32.0 Million",
        "₱35.0 Million"
    ],
    "correct_ans": "₱30.0 Million",
    "explanation": "Additional Cost = 10,000 * ₱600 = ₱6,000,000 = ₱6.0 Million. New total assistance cost = ₱24.0M + ₱6.0M = ₱30.0 Million.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 83,
    "question": tableData24 + `
        What is the total number of active evacuation centers open across all five provinces?
    `,
    "choices": [
        "420",
        "435",
        "455",
        "470",
        "490"
    ],
    "correct_ans": "455",
    "explanation": "Total Evacuation Centers = 120 + 85 + 150 + 60 + 40 = 455.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 84,
    "question": tableData25 + `
        What is the total cash remittance in ₱ Billions sent by OFWs from all regions combined?
    `,
    "choices": [
        "₱250.0 Billion",
        "₱265.5 Billion",
        "₱275.5 Billion",
        "₱285.0 Billion",
        "₱290.0 Billion"
    ],
    "correct_ans": "₱275.5 Billion",
    "explanation": "Total Remittances = 165.0 + 58.5 + 42.0 + 10.0 = ₱275.5 Billion.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 85,
    "question": tableData25 + `
        What percentage of total OFW cash remittances originated from workers whose home region is Luzon?
    `,
    "choices": [
        "52.5%",
        "55.0%",
        "57.2%",
        "59.9%",
        "62.5%"
    ],
    "correct_ans": "59.9%",
    "explanation": "Total Remittances = ₱275.5 Billion. Luzon Remittances = ₱165.0 Billion. Percentage = (165.0 / 275.5) * 100% = 59.89% ≈ 59.9%.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 86,
    "question": tableData25 + `
        What is the overall weighted average remittance per OFW across all regions combined?
    `,
    "choices": [
        "₱125,000",
        "₱130,500",
        "₱137,750",
        "₱142,000",
        "₱145,500"
    ],
    "correct_ans": "₱137,750",
    "explanation": "Total OFWs = 1,100,000 + 450,000 + 350,000 + 100,000 = 2,000,000. Total Remittances = ₱275,500,000,000. Weighted Average = 275,500,000,000 / 2,000,000 = ₱137,750.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 87,
    "question": tableData25 + `
        If remittances from Mindanao increase by 15% next year, what will be the new remittance total for Mindanao in ₱ Billions?
    `,
    "choices": [
        "₱45.2 Billion",
        "₱46.8 Billion",
        "₱48.3 Billion",
        "₱50.0 Billion",
        "₱51.5 Billion"
    ],
    "correct_ans": "₱48.3 Billion",
    "explanation": "Current Mindanao Remittances = ₱42.0 Billion. 15% increase = 42.0 * 1.15 = ₱48.3 Billion.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 88,
    "question": tableData25 + `
        What is the simplified ratio of the number of OFWs from Luzon to the number of OFWs from Mindanao?
    `,
    "choices": [
        "3 : 1",
        "22 : 7",
        "11 : 4",
        "5 : 2",
        "15 : 4"
    ],
    "correct_ans": "22 : 7",
    "explanation": "Luzon OFWs = 1,100,000; Mindanao OFWs = 350,000. Ratio = 1,100,000 : 350,000 = 110 : 35. Dividing by 5 gives 22 : 7.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 89,
    "question": tableData26 + `
        Which customer category generated the highest total billing revenue (Total Water Used * Average Rate)?
    `,
    "choices": [
        "Residential",
        "Commercial",
        "Industrial",
        "Institutional",
        "None"
    ],
    "correct_ans": "Commercial",
    "explanation": "Billing Revenue: Residential (5,000,000 * 35 = ₱175M), Commercial (2,800,000 * 65 = ₱182M), Industrial (1,500,000 * 85 = ₱127.5M), Institutional (700,000 * 45 = ₱31.5M). Commercial generated the highest revenue at ₱182 Million.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 90,
    "question": tableData26 + `
        What is the overall average water consumption per connection for Residential customers?
    `,
    "choices": [
        "15 Cu. Meters",
        "18 Cu. Meters",
        "20 Cu. Meters",
        "22 Cu. Meters",
        "25 Cu. Meters"
    ],
    "correct_ans": "20 Cu. Meters",
    "explanation": "Residential Water Used = 5,000,000 CuM; Residential Connections = 250,000. Average = 5,000,000 / 250,000 = 20 Cu. Meters per connection.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 91,
    "question": tableData26 + `
        Commercial water usage accounts for what percentage of total water consumed across all customer categories?
    `,
    "choices": [
        "22.5%",
        "25.0%",
        "28.0%",
        "30.5%",
        "35.0%"
    ],
    "correct_ans": "28.0%",
    "explanation": "Total Water Consumed = 5,000,000 + 2,800,000 + 1,500,000 + 700,000 = 10,000,000 CuM. Commercial Water = 2,800,000 CuM. Percentage = (2,800,000 / 10,000,000) * 100% = 28.0%.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 92,
    "question": tableData26 + `
        If Institutional unpaid bills rate of 12% is reduced by half to 6%, how much unpaid revenue is recovered assuming total Institutional billing of ₱31.5 Million?
    `,
    "choices": [
        "₱1.25 Million",
        "₱1.50 Million",
        "₱1.89 Million",
        "₱2.10 Million",
        "₱2.50 Million"
    ],
    "correct_ans": "₱1.89 Million",
    "explanation": "Reducing unpaid rate from 12% to 6% recovers 6% of billing. Revenue recovered = 6% * ₱31.5 Million = 0.06 * 31,500,000 = ₱1,890,000 = ₱1.89 Million.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 93,
    "question": tableData26 + `
        What is the median number of connections among the four customer categories?
    `,
    "choices": [
        "12,500",
        "15,000",
        "20,000",
        "25,000",
        "30,000"
    ],
    "correct_ans": "20,000",
    "explanation": "Connections in ascending order: 2,500 (Industrial), 5,000 (Institutional), 35,000 (Commercial), 250,000 (Residential). Median for 4 items = average of middle two = (5,000 + 35,000) / 2 = 20,000.",
    "poster_name": "Manuel G. Sintos"
  }

];





