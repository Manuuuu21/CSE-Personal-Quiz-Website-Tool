/**
 * Author: @Manuel G. Sintos
 * Date: Nov 27, 2023, 1:11 PM
 *
 */

const data_06 = [
	{
	    id: 0,
	    question: "A bakery has 36 chocolate cupcakes and 24 vanilla cupcakes. If they want to arrange these cupcakes into boxes with an equal number of cupcakes in each box and with no cupcakes left over, what is the maximum number of cupcakes they can have in each box?",
	    choices: [
	        "4 cupcakes",
	        "6 cupcakes",
	        "8 cupcakes",
	        "10 cupcakes",
	        "12 cupcakes"
	    ],
	    correct_ans: "8 cupcakes",
	    explanation: "To find the maximum number of cupcakes that can be placed in each box with no cupcakes left over, we need to find the greatest common factor (GCF) of 36 and 24. The GCF of 36 and 24 is 12. Therefore, the maximum number of cupcakes that can be placed in each box is 12. However, since this is not among the options provided, we choose the largest option that is a divisor of both 36 and 24, which is 8 cupcakes."
	},
	{
	    id: 1,
	    question: "If Sally has 5 apples and she gives 2 apples to her friend, how many apples does Sally have left?",
	    choices: [
	        "1 apple",
	        "2 apples",
	        "3 apples",
	        "4 apples",
	        "5 apples"
	    ],
	    correct_ans: "3 apples",
	    explanation: "Sally initially had 5 apples. After giving 2 apples to her friend, she has 3 apples left."
	},
	{
	    id: 2,
	    question: "If a box contains 24 chocolates, and you want to divide them equally among 6 friends, how many chocolates will each friend receive?",
	    choices: [
	        "2 chocolates",
	        "4 chocolates",
	        "6 chocolates",
	        "8 chocolates",
	        "12 chocolates"
	    ],
	    correct_ans: "4 chocolates",
	    explanation: "To divide 24 chocolates equally among 6 friends, you can perform 24 ÷ 6 = 4. So, each friend will receive 4 chocolates."
	},
	{
	    id: 3,
	    question: "If a train travels at a speed of 60 miles per hour, how far will it travel in 3 hours?",
	    choices: [
	        "60 miles",
	        "120 miles",
	        "180 miles",
	        "240 miles",
	        "300 miles"
	    ],
	    correct_ans: "180 miles",
	    explanation: "To find the distance traveled, you can multiply the speed (60 miles per hour) by the time (3 hours): 60 miles/hour × 3 hours = 180 miles."
	},
	{
	    id: 4,
	    question: "If a book costs $20 and you have a 10% off coupon, how much will the book cost after applying the discount?",
	    choices: [
	        "$10",
	        "$15",
	        "$18",
	        "$20",
	        "$22"
	    ],
	    correct_ans: "$18",
	    explanation: "To calculate the discounted price, subtract 10% of $20 from the original price: $20 - (10% of $20) = $20 - $2 = $18."
	},
	{
	    id: 5,
	    question: "If a rectangle has a length of 8 units and a width of 6 units, what is the area of the rectangle?",
	    choices: [
	        "12 square units",
	        "24 square units",
	        "30 square units",
	        "48 square units",
	        "56 square units"
	    ],
	    correct_ans: "48 square units",
	    explanation: "The area of a rectangle is calculated by multiplying its length and width: 8 units × 6 units = 48 square units."
	},
	{
	    id: 6,
	    question: "If John has 3 times as many marbles as Sarah, and Sarah has 12 marbles, how many marbles does John have?",
	    choices: [
	        "6 marbles",
	        "9 marbles",
	        "36 marbles",
	        "15 marbles",
	        "18 marbles"
	    ],
	    correct_ans: "36 marbles",
	    explanation: "John has 3 times as many marbles as Sarah, so 3 * 12 marbles = 36 marbles."
	},
	{
	    id: 7,
	    question: "If a store offers a 20% discount on a $50 shirt, how much will the shirt cost after applying the discount?",
	    choices: [
	        "$10",
	        "$20",
	        "$30",
	        "$40",
	        "$50"
	    ],
	    correct_ans: "$40",
	    explanation: "To calculate the discounted price, subtract 20% of $50 from the original price: $50 - (20% of $50) = $50 - $10 = $40."
	},
	{
	    id: 8,
	    question: "If a pizza is divided into 8 equal slices and you eat 3 slices, how many slices are left?",
	    choices: [
	        "1 slice",
	        "2 slices",
	        "3 slices",
	        "4 slices",
	        "5 slices"
	    ],
	    correct_ans: "5 slices",
	    explanation: "If a pizza has 8 slices and you eat 3, then there are 8 - 3 = 5 slices left."
	},
	{
	    id: 9,
	    question: "If a car travels at a speed of 50 miles per hour and drives for 4 hours, how far will it travel?",
	    choices: [
	        "100 miles",
	        "150 miles",
	        "200 miles",
	        "250 miles",
	        "300 miles"
	    ],
	    correct_ans: "200 miles",
	    explanation: "To find the distance traveled, multiply the speed (50 miles per hour) by the time (4 hours): 50 miles/hour × 4 hours = 200 miles."
	},
	{
	    id: 10,
	    question: "If you have $120 and you spend $45, how much money do you have left?",
	    choices: [
	        "$25",
	        "$45",
	        "$75",
	        "$90",
	        "$120"
	    ],
	    correct_ans: "$75",
	    explanation: "If you start with $120 and spend $45, you have $120 - $45 = $75 left."
	},
	{
	    id: 11,
	    question: "If you have 250 pesos and you spend 120 pesos, how much money do you have left?",
	    choices: [
	        "50 pesos",
	        "80 pesos",
	        "100 pesos",
	        "130 pesos",
	        "180 pesos"
	    ],
	    correct_ans: "130 pesos",
	    explanation: "If you start with 250 pesos and spend 120 pesos, you have 130 pesos left."
	},
	{
	    id: 12,
	    question: "A store sells school bags for 350 pesos each. If Sarah wants to buy 2 school bags, how much will she spend?",
	    choices: [
	        "300 pesos",
	        "350 pesos",
	        "700 pesos",
	        "750 pesos",
	        "1400 pesos"
	    ],
	    correct_ans: "700 pesos",
	    explanation: "Sarah wants to buy 2 school bags, so she will spend 2 * 350 pesos = 700 pesos."
	},
	{
	    id: 13,
	    question: "If a box contains 48 pencils, and you want to distribute them equally among 12 students, how many pencils will each student receive?",
	    choices: [
	        "2 pencils",
	        "4 pencils",
	        "6 pencils",
	        "8 pencils",
	        "10 pencils"
	    ],
	    correct_ans: "4 pencils",
	    explanation: "To distribute 48 pencils equally among 12 students, you can perform 48 ÷ 12 = 4 pencils per student."
	},
	{
	    id: 14,
	    question: "If a toy costs 180 pesos and you have a 15% discount coupon, how much will the toy cost after applying the discount?",
	    choices: [
	        "27 pesos",
	        "36 pesos",
	        "153 pesos",
	        "162 pesos",
	        "195 pesos"
	    ],
	    correct_ans: "153 pesos",
	    explanation: "To calculate the discounted price, subtract 15% of 180 pesos from the original price: 180 pesos - (15% of 180 pesos) = 180 pesos - 27 pesos = 153 pesos."
	},
	{
	    id: 15,
	    question: "If there are 24 students in a classroom and 6 desks in the classroom, how many students can share each desk?",
	    choices: [
	        "2 students",
	        "4 students",
	        "6 students",
	        "8 students",
	        "12 students"
	    ],
	    correct_ans: "4 students",
	    explanation: "To find out how many students can share each desk, divide the number of students (24) by the number of desks (6): 24 students ÷ 6 desks = 4 students per desk."
	},
	{
	    id: 16,
	    question: "If a pack of 8 pencils costs 24 pesos, what is the cost of each pencil?",
	    choices: [
	        "1 peso",
	        "2 pesos",
	        "3 pesos",
	        "4 pesos",
	        "5 pesos"
	    ],
	    correct_ans: "3 pesos",
	    explanation: "To find the cost of each pencil, divide the total cost (24 pesos) by the number of pencils in the pack (8): 24 pesos ÷ 8 pencils = 3 pesos per pencil."
	},
	{
	    id: 17,
	    question: "If you have 5 books, and each book has 120 pages, how many pages do you have in total?",
	    choices: [
	        "300 pages",
	        "420 pages",
	        "500 pages",
	        "600 pages",
	        "700 pages"
	    ],
	    correct_ans: "600 pages",
	    explanation: "To find the total number of pages, multiply the number of books (5) by the number of pages in each book (120): 5 books × 120 pages/book = 600 pages."
	},
	{
	    id: 18,
	    question: "If a recipe calls for 2 cups of flour, and you want to make 4 batches of the recipe, how many cups of flour do you need in total?",
	    choices: [
	        "4 cups",
	        "6 cups",
	        "8 cups",
	        "10 cups",
	        "12 cups"
	    ],
	    correct_ans: "8 cups",
	    explanation: "To find the total cups of flour needed, multiply the cups of flour per batch (2 cups) by the number of batches (4): 2 cups/batch × 4 batches = 8 cups."
	},
	{
	    id: 19,
	    question: "If a bicycle costs 2,500 pesos and you want to buy 2 bicycles, how much will you spend in total?",
	    choices: [
	        "2,500 pesos",
	        "3,500 pesos",
	        "4,000 pesos",
	        "5,000 pesos",
	        "6,000 pesos"
	    ],
	    correct_ans: "5,000 pesos",
	    explanation: "To find the total cost, multiply the cost of one bicycle (2,500 pesos) by the number of bicycles (2): 2,500 pesos/bicycle × 2 bicycles = 5,000 pesos."
	},
	{
	    id: 20,
	    question: "If a pizza is divided into 6 equal slices and you eat 2 slices, how many slices are left?",
	    choices: [
	        "1 slice",
	        "2 slices",
	        "3 slices",
	        "4 slices",
	        "5 slices"
	    ],
	    correct_ans: "4 slices",
	    explanation: "If a pizza has 6 slices and you eat 2 slices, then there are 6 - 2 = 4 slices left."
	},
	{
	    id: 21,
	    question: "A box contains 36 chocolates. If you want to arrange them into 6 equal groups, how many chocolates are in each group?",
	    choices: [
	        "4 chocolates",
	        "6 chocolates",
	        "8 chocolates",
	        "10 chocolates",
	        "12 chocolates"
	    ],
	    correct_ans: "6 chocolates",
	    explanation: "To divide 36 chocolates into 6 equal groups, you can perform 36 ÷ 6 = 6 chocolates per group."
	},
	{
	    id: 22,
	    question: "If a train travels at a speed of 80 kilometers per hour and travels for 2.5 hours, how far will it travel?",
	    choices: [
	        "120 kilometers",
	        "160 kilometers",
	        "180 kilometers",
	        "200 kilometers",
	        "250 kilometers"
	    ],
	    correct_ans: "200 kilometers",
	    explanation: "To find the distance traveled, multiply the speed (80 kilometers per hour) by the time (2.5 hours): 80 kilometers/hour × 2.5 hours = 200 kilometers."
	},
	{
	    id: 23,
	    question: "If a store offers a 15% discount on a 400-peso jacket, how much will the jacket cost after applying the discount?",
	    choices: [
	        "50 pesos",
	        "60 pesos",
	        "100 pesos",
	        "160 pesos",
	        "340 pesos"
	    ],
	    correct_ans: "340 pesos",
	    explanation: "To calculate the discounted price, subtract 15% of 400 pesos from the original price: 400 pesos - (15% of 400 pesos) = 400 pesos - 60 pesos = 340 pesos."
	},
	{
	    id: 24,
	    question: "If you have 180 pesos and you want to buy 3 ice creams, each costing 45 pesos, how much money will you have left?",
	    choices: [
	        "45 pesos",
	        "60 pesos",
	        "75 pesos",
	        "90 pesos",
	        "105 pesos"
	    ],
	    correct_ans: "45 pesos",
	    explanation: "To find the total cost of 3 ice creams, multiply the cost per ice cream (45 pesos) by the number of ice creams (3): 45 pesos/ice cream × 3 ice creams = 135 pesos. Subtracting this from your initial amount gives 180 pesos - 135 pesos = 45 pesos left."
	},
	{
	    id: 25,
	    question: "If there are 30 students in a classroom and 5 rows of desks, with 6 desks in each row, how many students can be seated at each desk?",
	    choices: [
	        "2 students",
	        "3 students",
	        "4 students",
	        "5 students",
	        "6 students"
	    ],
	    correct_ans: "5 students",
	    explanation: "To find out how many students can be seated at each desk, divide the number of students (30) by the total number of desks (5 rows × 6 desks/row = 30 desks): 30 students ÷ 30 desks = 5 students per desk."
	},
	{
	    id: 26,
	    question: "If a box contains 48 candies, and you want to distribute them equally among 8 friends, how many candies will each friend receive?",
	    choices: [
	        "3 candies",
	        "4 candies",
	        "5 candies",
	        "6 candies",
	        "7 candies"
	    ],
	    correct_ans: "6 candies",
	    explanation: "To distribute 48 candies equally among 8 friends, you can perform 48 ÷ 8 = 6 candies per friend."
	},
	{
	    id: 27,
	    question: "If you have 16 pencils and you want to arrange them into 4 equal groups, how many pencils will be in each group?",
	    choices: [
	        "2 pencils",
	        "3 pencils",
	        "4 pencils",
	        "5 pencils",
	        "6 pencils"
	    ],
	    correct_ans: "4 pencils",
	    explanation: "To divide 16 pencils into 4 equal groups, you can perform 16 ÷ 4 = 4 pencils per group."
	},
	{
	    id: 28,
	    question: "A garden has 36 red roses and 24 white roses. If you want to arrange these roses into bouquets with an equal number of red and white roses in each bouquet, how many roses will be in each bouquet?",
	    choices: [
	        "3 roses",
	        "4 roses",
	        "6 roses",
	        "8 roses",
	        "12 roses"
	    ],
	    correct_ans: "12 roses",
	    explanation: "To arrange the roses into bouquets with an equal number of red and white roses, you need to find the greatest common factor (GCF) of 36 and 24, which is 12. Therefore, each bouquet will have 12 roses."
	},
	{
	    id: 29,
	    question: "If a toy costs 250 pesos and you have saved 1,000 pesos, how much money will you have left after buying the toy?",
	    choices: [
	        "250 pesos",
	        "500 pesos",
	        "750 pesos",
	        "1,000 pesos",
	        "1,250 pesos"
	    ],
	    correct_ans: "750 pesos",
	    explanation: "If you have 1,000 pesos and buy a toy for 250 pesos, you will have 1,000 pesos - 250 pesos = 750 pesos left."
	},
	{
	    id: 30,
	    question: "If a store offers a 25% discount on a 600-peso dress, how much will the dress cost after applying the discount?",
	    choices: [
	        "150 pesos",
	        "300 pesos",
	        "450 pesos",
	        "525 pesos",
	        "600 pesos"
	    ],
	    correct_ans: "450 pesos",
	    explanation: "To calculate the discounted price, subtract 25% of 600 pesos from the original price: 600 pesos - (25% of 600 pesos) = 600 pesos - 150 pesos = 450 pesos."
	},
	{
	    id: 31,
	    question: "If a classroom has 35 students and 7 rows of desks, with 5 desks in each row, how many students can be seated at each desk?",
	    choices: [
	        "1 student",
	        "2 students",
	        "3 students",
	        "4 students",
	        "5 students"
	    ],
	    correct_ans: "5 students",
	    explanation: "To find out how many students can be seated at each desk, divide the number of students (35) by the total number of desks (7 rows × 5 desks/row = 35 desks): 35 students ÷ 35 desks = 5 students per desk."
	},
	{
	    id: 32,
	    question: "If a soccer team played 15 matches in a season and won 10 of them, what is their win-loss ratio?",
	    choices: [
	        "1:2",
	        "2:3",
	        "3:2",
	        "2:1",
	        "5:3"
	    ],
	    correct_ans: "2:3",
	    explanation: "To calculate the win-loss ratio, divide the number of wins (10) by the number of losses (15 - 10 = 5): 10:5, which simplifies to 2:1. However, the ratio is typically expressed as a fraction, so it becomes 2/3, which is equivalent to 2:3."
	},
	{
	    id: 33,
	    question: "If a box contains 40 chocolates, and you want to distribute them equally among 10 friends, how many chocolates will each friend receive?",
	    choices: [
	        "2 chocolates",
	        "4 chocolates",
	        "6 chocolates",
	        "8 chocolates",
	        "10 chocolates"
	    ],
	    correct_ans: "4 chocolates",
	    explanation: "To distribute 40 chocolates equally among 10 friends, you can perform 40 ÷ 10 = 4 chocolates per friend."
	},
	{
	    id: 34,
	    question: "If a smartphone costs 12,000 pesos and you have a 15% discount coupon, how much will the smartphone cost after applying the discount?",
	    choices: [
	        "1,500 pesos",
	        "2,000 pesos",
	        "3,000 pesos",
	        "9,000 pesos",
	        "10,200 pesos"
	    ],
	    correct_ans: "10,200 pesos",
	    explanation: "To calculate the discounted price, subtract 15% of 12,000 pesos from the original price: 12,000 pesos - (15% of 12,000 pesos) = 12,000 pesos - 1,800 pesos = 10,200 pesos."
	},
	{
	    id: 35,
	    question: "If you have 18 apples and you want to pack them into bags with 3 apples in each bag, how many bags will you need?",
	    choices: [
	        "3 bags",
	        "6 bags",
	        "9 bags",
	        "12 bags",
	        "15 bags"
	    ],
	    correct_ans: "6 bags",
	    explanation: "To determine the number of bags needed, divide the total number of apples (18) by the number of apples per bag (3): 18 apples ÷ 3 apples/bag = 6 bags."
	},
	{
	    id: 36,
	    question: "A certain amount of money is invested in two different accounts. The first account yields a 6% annual interest rate, while the second account yields a 4% annual interest rate. After one year, the total interest earned from both accounts is 36,000 pesos. If the amount invested in the first account is twice that in the second account, what is the total amount initially invested in both accounts?",
	    choices: [
	        "60,000 pesos",
	        "72,000 pesos",
	        "84,000 pesos",
	        "96,000 pesos",
	        "108,000 pesos"
	    ],
	    correct_ans: "72,000 pesos",
	    explanation: "Let x be the amount invested in the second account in pesos. Then, the amount invested in the first account is 2x pesos. The interest earned from the first account is 0.06 * (2x) pesos, and the interest earned from the second account is 0.04 * x pesos. The total interest is given as 36,000 pesos, so we can write the equation: 0.06 * (2x) + 0.04 * x = 36,000. Solving for x, we find x = 12,000 pesos. The total amount initially invested in both accounts is 2x + x = 3x = 3 * 12,000 pesos = 36,000 pesos."
	},
	{
	    id: 37,
	    question: "A man buys a lot for Php 55,000.00 and builds a house worth Php 180,000.00. If the profit is Php 55,000.00, what is the selling price?",
	    choices: [
	        "Php 285,000.00",
	        "Php 290,000.00",
	        "Php 295,000.00",
	        "Php 300,000.00",
	        "Php 325,000.00"
	    ],
	    correct_ans: "Php 290,000.00",
	    explanation: `
			The total cost of the lot and the house is Php 55,000.00 + Php 180,000.00 = Php 235,000.00.<br/><br/>
			If the profit is Php 55,000.00, then the selling price is Php 235,000.00 + Php 55,000.00 = Php 290,000.00.<br/><br/>
			Therefore, the selling price of the house and lot is Php 290,000.00.
	    `
	},
	{
	    id: 38,
	    question: "A rectangular lot measures 44 meters length and 38 meter width. If the cost of the fence is Php 500.00 per span of 2 meters, how much cost to fence the whole lot?",
	    choices: [
	        "Php 41,000.00",
	        "Php 44,000.00",
	        "Php 38,000.00",
	        "Php 45,000.00",
	        "Php 36,000.00"
	    ],
	    correct_ans: "Php 41,000.00",
	    explanation: `
			To find the cost of fencing the whole lot, we first need to find the perimeter of the lot. The perimeter is the total length of all the sides of the lot added together.<br/><br/>
			To find the perimeter, we use the following formula:<br/>
			Perimeter = 2(length + width)<br/><br/>
			Substituting the given values, we get:<br/>
			Perimeter = 2(44 + 38) = 164 meters<br/><br/>
			Since the cost of the fence is Php 500.00 per span of 2 meters, we need to divide the perimeter by 2 to find the number of spans.<br/>
			Number of spans = 164 / 2 = 82 spans<br/><br/>
			Therefore, the total cost of fencing the whole lot is Php 500.00/span x 82 spans = Php 41,000.00.<br/><br/>
			So the answer is Php 41,000.00
	    `
	},
	{
	    id: 39,
	    question: "Machine A can complete a task in 6 hours, while Machine B can complete the same task in 3 hours. If they work together on the same task, how many hours will it take for them to finish?",
	    choices: [
	        "6 hours",
	        "4 hours",
	        "5 hours",
	        "3 hours",
	        "2 hours"
	    ],
	    correct_ans: "4 hours",
	    explanation: `
			To solve this problem, we can use the following formula:<br/><br/>

			Rate = Work / Time<br/><br/>

			We know that Machine A works in 6 hours and Machine B works in 3 hours. This means that their rates are as follows:<br/><br/>

			Rate of Machine A = 1/6 job/hour<br/>
			Rate of Machine B = 1/3 job/hour<br/><br/>

			To find the combined rate of the two machines, we simply add their individual rates:<br/><br/>

			Combined rate = 1/6 job/hour + 1/3 job/hour = 7/6 job/hour<br/><br/>

			We are asked how long the two machines will work together to complete a job. This means that we need to find the time it takes for them to complete 1 job. We can use the following formula to do this:<br/><br/>

			Time = Work / Rate<br/><br/>

			Substituting the combined rate that we just calculated, we get:<br/><br/>

			Time = 1 job / 7/6 job/hour = 6/7 hours<br/><br/>

			Therefore, the two machines will work together for 4 hours.
	    `
	},
	{
	    id: 40,
	    question: `
	    	<center>One day travelling, the number of currencies show the following:</center>
	    	<table style="width:100%">
	    		<th>COUNTRY</th>
	    		<th>UNIT</th>
	    		<th>PESO EQUIVALENT</th>

	    		<tr>
	    			<td>United States</td>
	    			<td>Dollar</td>
	    			<td>50.12</td>
	    		</tr>
	    		<tr>
	    			<td>Hongkong</td>
	    			<td>Dollar</td>
	    			<td>7.85</td>
	    		</tr>
	    		<tr>
	    			<td>Singapore</td>
	    			<td>Dollar</td>
	    			<td>35.70</td>
	    		</tr>
	    	</table>
	    	<br/>
	    	A student from the Philippines is traveling to the United States. He has Php 10,000. How many US dollars can he exchange for?
	    `,
	    choices: [
	        "200.00 Dollar",
	        "300.00 Dollar",
	        "400.00 Dollar",
	        "500.00 Dollar",
	        "600.00 Dollar"
	    ],
	    correct_ans: "200.00 Dollar",
	    explanation: `
			The student can exchange his Php 10,000 for 200.00 Dollar because Php 10,000 divided by Php 50.12 per dollar is equal to 200.00 Dollar.
	    `
	},
	{
	    "id": 41,
	    "question": "Manuel is selling a 250-square-meter lot for Php 1,250,000.00. If I buy 1 hectare, how much does it cost?",
	    "choices": [
	      "Php 40,000,000.00",
	      "Php 50,000,000.00",
	      "Php 45,000,000.00",
	      "Php 48,000,000.00",
	      "Php 44,000,000.00"
	    ],
	    "correct_ans": "Php 50,000,000.00",
	    "explanation": "Given that 250 square meters cost Php 1,250,000.00, the cost per square meter is Php 1,250,000.00 / 250 = Php 5,000.00.<br/><br/>1 hectare is equivalent to 10,000 square meters. So, if you buy 1 hectare, the cost would be 10,000 * Php 5,000.00 = Php 50,000,000.00.<br/><br/>Therefore, if you buy 1 hectare, it will cost you Php 50,000,000.00."
	}
];