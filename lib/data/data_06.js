/**
 * Author: @Manuel G. Sintos
 * Date: Nov 27, 2023, 1:11 PM
 *
 */

const data_06 = [
	{
	    "id": 0,
	    "question": "A bakery has 36 chocolate cupcakes and 24 vanilla cupcakes. If they want to arrange these cupcakes into boxes with an equal number of cupcakes in each box and with no cupcakes left over, what is the maximum number of cupcakes they can have in each box?",
	    "choices": [
	      "4 cupcakes",
	      "8 cupcakes",
	      "12 cupcakes",
	      "16 cupcakes",
	      "20 cupcakes"
	    ],
	    "correct_ans": "12 cupcakes",
	    "explanation": "To find the maximum number of cupcakes per box, we need to find the greatest common factor (GCF) of 36 and 24.<br/><br/>Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36<br/>Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24<br/>The common factors are 1, 2, 3, 4, 6, and 12. The greatest of these is 12.<br/><br/>Therefore, the maximum number of cupcakes they can have in each box is 12",
	    "poster_name": "Manuel G. Sintos"
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
	    explanation: "Sally initially had 5 apples. After giving 2 apples to her friend, she has 3 apples left.",
    	"poster_name": "Manuel G. Sintos"
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
	    explanation: "To divide 24 chocolates equally among 6 friends, you can perform 24 ÷ 6 = 4. So, each friend will receive 4 chocolates.",
    	"poster_name": "Manuel G. Sintos"
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
	    explanation: "To find the distance traveled, you can multiply the speed (60 miles per hour) by the time (3 hours): 60 miles/hour × 3 hours = 180 miles.",
    	"poster_name": "Manuel G. Sintos"
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
	    explanation: "To calculate the discounted price, subtract 10% of $20 from the original price: $20 - (10% of $20) = $20 - $2 = $18.",
    	"poster_name": "Manuel G. Sintos"
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
	    explanation: "The area of a rectangle is calculated by multiplying its length and width: 8 units × 6 units = 48 square units.",
    	"poster_name": "Manuel G. Sintos"
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
	    explanation: "John has 3 times as many marbles as Sarah, so 3 * 12 marbles = 36 marbles.",
    	"poster_name": "Manuel G. Sintos"
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
	    explanation: "To calculate the discounted price, subtract 20% of $50 from the original price: $50 - (20% of $50) = $50 - $10 = $40.",
    	"poster_name": "Manuel G. Sintos"
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
	    explanation: "If a pizza has 8 slices and you eat 3, then there are 8 - 3 = 5 slices left.",
    	"poster_name": "Manuel G. Sintos"
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
	    explanation: "To find the distance traveled, multiply the speed (50 miles per hour) by the time (4 hours): 50 miles/hour × 4 hours = 200 miles.",
    	"poster_name": "Manuel G. Sintos"
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
	    explanation: "If you start with $120 and spend $45, you have $120 - $45 = $75 left.",
    	"poster_name": "Manuel G. Sintos"
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
	    explanation: "If you start with 250 pesos and spend 120 pesos, you have 130 pesos left.",
    	"poster_name": "Manuel G. Sintos"
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
	    explanation: "Sarah wants to buy 2 school bags, so she will spend 2 * 350 pesos = 700 pesos.",
    	"poster_name": "Manuel G. Sintos"
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
	    explanation: "To distribute 48 pencils equally among 12 students, you can perform 48 ÷ 12 = 4 pencils per student.",
    	"poster_name": "Manuel G. Sintos"
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
	    explanation: "To calculate the discounted price, subtract 15% of 180 pesos from the original price: 180 pesos - (15% of 180 pesos) = 180 pesos - 27 pesos = 153 pesos.",
    	"poster_name": "Manuel G. Sintos"
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
	    explanation: "To find out how many students can share each desk, divide the number of students (24) by the number of desks (6): 24 students ÷ 6 desks = 4 students per desk.",
    	"poster_name": "Manuel G. Sintos"
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
	    explanation: "To find the cost of each pencil, divide the total cost (24 pesos) by the number of pencils in the pack (8): 24 pesos ÷ 8 pencils = 3 pesos per pencil.",
    	"poster_name": "Manuel G. Sintos"
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
	    explanation: "To find the total number of pages, multiply the number of books (5) by the number of pages in each book (120): 5 books × 120 pages/book = 600 pages.",
    	"poster_name": "Manuel G. Sintos"
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
	    explanation: "To find the total cups of flour needed, multiply the cups of flour per batch (2 cups) by the number of batches (4): 2 cups/batch × 4 batches = 8 cups.",
    	"poster_name": "Manuel G. Sintos"
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
	    explanation: "To find the total cost, multiply the cost of one bicycle (2,500 pesos) by the number of bicycles (2): 2,500 pesos/bicycle × 2 bicycles = 5,000 pesos.",
   		"poster_name": "Manuel G. Sintos"
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
	    explanation: "If a pizza has 6 slices and you eat 2 slices, then there are 6 - 2 = 4 slices left.",
    	"poster_name": "Manuel G. Sintos"
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
	    explanation: "To divide 36 chocolates into 6 equal groups, you can perform 36 ÷ 6 = 6 chocolates per group.",
    	"poster_name": "Manuel G. Sintos"
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
	    explanation: "To find the distance traveled, multiply the speed (80 kilometers per hour) by the time (2.5 hours): 80 kilometers/hour × 2.5 hours = 200 kilometers.",
    	"poster_name": "Manuel G. Sintos"
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
	    explanation: "To calculate the discounted price, subtract 15% of 400 pesos from the original price: 400 pesos - (15% of 400 pesos) = 400 pesos - 60 pesos = 340 pesos.",
    	"poster_name": "Manuel G. Sintos"
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
	    explanation: "To find the total cost of 3 ice creams, multiply the cost per ice cream (45 pesos) by the number of ice creams (3): 45 pesos/ice cream × 3 ice creams = 135 pesos. Subtracting this from your initial amount gives 180 pesos - 135 pesos = 45 pesos left.",
    	"poster_name": "Manuel G. Sintos"
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
	    explanation: "To find out how many students can be seated at each desk, divide the number of students (30) by the total number of desks (5 rows × 6 desks/row = 30 desks): 30 students ÷ 30 desks = 5 students per desk.",
    	"poster_name": "Manuel G. Sintos"
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
	    explanation: "To distribute 48 candies equally among 8 friends, you can perform 48 ÷ 8 = 6 candies per friend.",
    	"poster_name": "Manuel G. Sintos"
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
	    explanation: "To divide 16 pencils into 4 equal groups, you can perform 16 ÷ 4 = 4 pencils per group.",
    	"poster_name": "Manuel G. Sintos"
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
	    explanation: "To arrange the roses into bouquets with an equal number of red and white roses, you need to find the greatest common factor (GCF) of 36 and 24, which is 12. Therefore, each bouquet will have 12 roses.",
    	"poster_name": "Manuel G. Sintos"
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
	    explanation: "If you have 1,000 pesos and buy a toy for 250 pesos, you will have 1,000 pesos - 250 pesos = 750 pesos left.",
    	"poster_name": "Manuel G. Sintos"
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
	    explanation: "To calculate the discounted price, subtract 25% of 600 pesos from the original price: 600 pesos - (25% of 600 pesos) = 600 pesos - 150 pesos = 450 pesos.",
    	"poster_name": "Manuel G. Sintos"
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
	    explanation: "To find out how many students can be seated at each desk, divide the number of students (35) by the total number of desks (7 rows × 5 desks/row = 35 desks): 35 students ÷ 35 desks = 5 students per desk.",
    	"poster_name": "Manuel G. Sintos"
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
	    explanation: "To calculate the win-loss ratio, divide the number of wins (10) by the number of losses (15 - 10 = 5): 10:5, which simplifies to 2:1. However, the ratio is typically expressed as a fraction, so it becomes 2/3, which is equivalent to 2:3.",
    	"poster_name": "Manuel G. Sintos"
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
	    explanation: "To distribute 40 chocolates equally among 10 friends, you can perform 40 ÷ 10 = 4 chocolates per friend.",
    	"poster_name": "Manuel G. Sintos"
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
	    explanation: "To calculate the discounted price, subtract 15% of 12,000 pesos from the original price: 12,000 pesos - (15% of 12,000 pesos) = 12,000 pesos - 1,800 pesos = 10,200 pesos.",
    	"poster_name": "Manuel G. Sintos"
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
	    explanation: "To determine the number of bags needed, divide the total number of apples (18) by the number of apples per bag (3): 18 apples ÷ 3 apples/bag = 6 bags.",
    	"poster_name": "Manuel G. Sintos"
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
	    explanation: "Let x be the amount invested in the second account in pesos. Then, the amount invested in the first account is 2x pesos. The interest earned from the first account is 0.06 * (2x) pesos, and the interest earned from the second account is 0.04 * x pesos. The total interest is given as 36,000 pesos, so we can write the equation: 0.06 * (2x) + 0.04 * x = 36,000. Solving for x, we find x = 12,000 pesos. The total amount initially invested in both accounts is 2x + x = 3x = 3 * 12,000 pesos = 36,000 pesos.",
    	"poster_name": "Manuel G. Sintos"
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
	    `,
    	"poster_name": "Manuel G. Sintos"
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
	    `,
    	"poster_name": "Manuel G. Sintos"
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
	    `,
    	"poster_name": "Manuel G. Sintos"
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
	    `,
    	"poster_name": "Manuel G. Sintos"
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
	    "explanation": "Given that 250 square meters cost Php 1,250,000.00, the cost per square meter is Php 1,250,000.00 / 250 = Php 5,000.00.<br/><br/>1 hectare is equivalent to 10,000 square meters. So, if you buy 1 hectare, the cost would be 10,000 * Php 5,000.00 = Php 50,000,000.00.<br/><br/>Therefore, if you buy 1 hectare, it will cost you Php 50,000,000.00.",
    	"poster_name": "Manuel G. Sintos"
	},
	{
	    "id": 42,
	    "question": "A barangay received ₱15,750.00 for infrastructure projects and another ₱28,250.00 for social services. What is the total amount of funds received by the barangay?",
	    "choices": [
	      "₱42,000.00",
	      "₱43,000.00",
	      "₱44,000.00",
	      "₱45,000.00",
	      "₱46,000.00"
	    ],
	    "correct_ans": "₱44,000.00",
	    "explanation": "To find the total amount, we add the two amounts: ₱15,750.00 + ₱28,250.00 = ₱44,000.00",
	    "poster_name": "Manuel G. Sintos"
  	},
  	{
	    "id": 43,
	    "question": "A government employee earns a basic monthly salary of ₱22,500.00. They also receive a monthly allowance of ₱3,500.00. What is their total monthly income?",
	    "choices": [
	      "₱25,000.00",
	      "₱26,000.00",
	      "₱26,500.00",
	      "₱27,000.00",
	      "₱27,500.00"
	    ],
	    "correct_ans": "₱26,000.00",
	    "explanation": "The total monthly income is the sum of the basic salary and the allowance: ₱22,500.00 + ₱3,500.00 = ₱26,000.00",
	    "poster_name": "Manuel G. Sintos"
  	},
  	{
	    "id": 44,
	    "question": "A municipality distributed 1,250 food packs in Barangay A, 975 food packs in Barangay B, and 1,525 food packs in Barangay C. How many food packs were distributed in total?",
	    "choices": [
	      "3,650",
	      "3,700",
	      "3,750",
	      "3,800",
	      "3,850"
	    ],
	    "correct_ans": "3,750",
	    "explanation": "To find the total number of food packs distributed, we add the number of packs distributed in each barangay: 1,250 + 975 + 1,525 = 3,750",
	    "poster_name": "Manuel G. Sintos"
  	},
  	{
    "id": 45,
    "question": "If a farmer harvests 500 mangoes and sells 320 of them, how many mangoes are left?",
    "choices": [
      "120 mangoes",
      "150 mangoes",
      "180 mangoes",
      "200 mangoes",
      "220 mangoes"
    ],
    "correct_ans": "180 mangoes",
    "explanation": "To find the number of mangoes left, subtract the number of mangoes sold from the total harvest: 500 mangoes - 320 mangoes = 180 mangoes.",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 46,
    "question": "A student scored 85 on a math test and 92 on a science test. What is the average of their scores?",
    "choices": [
      "86.5",
      "88.0",
      "88.5",
      "89.0",
      "89.5"
    ],
    "correct_ans": "88.5",
    "explanation": "To find the average score, add the scores and divide by the number of tests: (85 + 92) / 2 = 177 / 2 = 88.5",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 47,
    "question": "If a movie ticket costs ₱250, and you buy 4 tickets, how much will you spend?",
    "choices": [
      "₱500",
      "₱750",
      "₱1000",
      "₱1250",
      "₱1500"
    ],
    "correct_ans": "₱1000",
    "explanation": "To find the total cost, multiply the cost of one ticket by the number of tickets: ₱250 x 4 = ₱1000",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 48,
    "question": "A cake is divided into 10 equal slices. If you eat 4 slices, what fraction of the cake did you eat?",
    "choices": [
      "1/5",
      "2/5",
      "1/2",
      "3/5",
      "4/5"
    ],
    "correct_ans": "2/5",
    "explanation": "You ate 4 out of 10 slices, which is 4/10. Simplify the fraction by dividing both numerator and denominator by 2: 4/10 = 2/5",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 49,
    "question": "If a train travels 120 miles in 2 hours, what is its average speed?",
    "choices": [
      "40 mph",
      "50 mph",
      "60 mph",
      "70 mph",
      "80 mph"
    ],
    "correct_ans": "60 mph",
    "explanation": "To find the average speed, divide the distance traveled by the time taken: 120 miles / 2 hours = 60 mph",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 50,
    "question": "A store is offering a 30% discount on a shirt that originally costs ₱450. How much is the discount?",
    "choices": [
      "₱105",
      "₱120",
      "₱135",
      "₱150",
      "₱165"
    ],
    "correct_ans": "₱135",
    "explanation": "To calculate the discount, multiply the original price by the discount rate: ₱450 x 0.30 = ₱135",
    "poster_name": "Manuel G. Sintos"
  },
   {
    "id": 51,
    "question": "If a room has a length of 5 meters and a width of 4 meters, what is its area?",
    "choices": [
      "9 square meters",
      "16 square meters",
      "20 square meters",
      "25 square meters",
      "30 square meters"
    ],
    "correct_ans": "20 square meters",
    "explanation": "To find the area of a rectangle, multiply its length by its width: 5 meters x 4 meters = 20 square meters",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 52,
    "question": "What is 25% of 200?",
    "choices": [
      "25",
      "40",
      "50",
      "75",
      "100"
    ],
    "correct_ans": "50",
    "explanation": "To find 25% of 200, multiply 200 by 0.25: 200 x 0.25 = 50",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 53,
    "question": "If you buy a book for ₱180 and pay with a ₱200 bill, how much change will you receive?",
    "choices": [
      "₱10",
      "₱15",
      "₱20",
      "₱25",
      "₱30"
    ],
    "correct_ans": "₱20",
    "explanation": "To find the change, subtract the cost of the book from the amount paid: ₱200 - ₱180 = ₱20",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 54,
    "question": "A class has 40 students. If 3/4 of them are present, how many students are present?",
    "choices": [
      "10 students",
      "20 students",
      "25 students",
      "30 students",
      "35 students"
    ],
    "correct_ans": "30 students",
    "explanation": "To find 3/4 of 40, multiply 40 by 3/4: (3/4) x 40 = 30",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 55,
    "question": "If a dozen eggs costs ₱80, how much does one egg cost?",
    "choices": [
      "₱5.50",
      "₱6.00",
      "₱6.50",
      "₱6.67",
      "₱7.00"
    ],
    "correct_ans": "₱6.67",
    "explanation": "To find the cost of one egg, divide the cost of a dozen by 12: ₱80 / 12 = ₱6.67 (approximately)",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 56,
    "question": "A recipe requires 1/2 cup of sugar. If you want to make half the recipe, how much sugar do you need?",
    "choices": [
      "1/8 cup",
      "1/4 cup",
      "1/3 cup",
      "3/8 cup",
      "3/4 cup"
    ],
    "correct_ans": "1/4 cup",
    "explanation": "To find half of 1/2 cup, multiply 1/2 by 1/2: (1/2) x (1/2) = 1/4",
    "poster_name": "Manuel G. Sintos"
  },
   {
    "id": 57,
    "question": "If a worker earns ₱600 per day, how much will they earn in 5 days?",
    "choices": [
      "₱2400",
      "₱2500",
      "₱2800",
      "₱3000",
      "₱3200"
    ],
    "correct_ans": "₱3000",
    "explanation": "To find the total earnings, multiply the daily wage by the number of days: ₱600 x 5 = ₱3000",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 58,
    "question": "A student spends 2 hours studying math and 1.5 hours studying science. How many hours did the student study in total?",
    "choices": [
      "2.5 hours",
      "3.0 hours",
      "3.5 hours",
      "4.0 hours",
      "4.5 hours"
    ],
    "correct_ans": "3.5 hours",
    "explanation": "To find the total study time, add the time spent on each subject: 2 hours + 1.5 hours = 3.5 hours",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 59,
    "question": "If a liter of juice costs ₱75, how much will 3 liters cost?",
    "choices": [
      "₱200",
      "₱210",
      "₱225",
      "₱240",
      "₱250"
    ],
    "correct_ans": "₱225",
    "explanation": "To find the total cost, multiply the cost per liter by the number of liters: ₱75 x 3 = ₱225",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 60,
    "question": "A train travels at 80 km/h. How far will it travel in 2 hours and 30 minutes?",
    "choices": [
      "160 km",
      "180 km",
      "200 km",
      "220 km",
      "240 km"
    ],
    "correct_ans": "200 km",
    "explanation": "First, convert 2 hours and 30 minutes to 2.5 hours. Then, multiply the speed by the time: 80 km/h x 2.5 hours = 200 km",
    "poster_name": "Manuel G. Sintos"
  },
   {
    "id": 61,
    "question": "If a bag of rice weighs 50 kg and you use 20 kg, how much rice is left in the bag?",
    "choices": [
      "20 kg",
      "25 kg",
      "30 kg",
      "35 kg",
      "40 kg"
    ],
    "correct_ans": "30 kg",
    "explanation": "To find the remaining weight, subtract the amount used from the initial amount: 50 kg - 20 kg = 30 kg",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 62,
    "question": "What is the perimeter of a square with sides of 12 cm?",
    "choices": [
      "24 cm",
      "36 cm",
      "48 cm",
      "60 cm",
      "144 cm"
    ],
    "correct_ans": "48 cm",
    "explanation": "To find the perimeter of a square, multiply the length of one side by 4: 12 cm x 4 = 48 cm",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 63,
    "question": "If a movie starts at 7:15 PM and lasts for 2 hours and 10 minutes, when will it end?",
    "choices": [
      "9:00 PM",
      "9:15 PM",
      "9:25 PM",
      "9:30 PM",
      "9:45 PM"
    ],
    "correct_ans": "9:25 PM",
    "explanation": "To find the end time, add the duration to the start time: 7:15 PM + 2 hours 10 minutes = 9:25 PM",
    "poster_name": "Manuel G. Sintos"
  },
  {
    "id": 64,
    "question": "A store sells a pen for ₱25 and a notebook for ₱45. How much will it cost to buy 2 pens and 1 notebook?",
    "choices": [
      "₱70",
      "₱85",
      "₱90",
      "₱95",
      "₱100"
    ],
    "correct_ans": "₱95",
    "explanation": "Calculate the cost of 2 pens: 2 x ₱25 = ₱50. Then add the cost of the notebook: ₱50 + ₱45 = ₱95",
    "poster_name": "Manuel G. Sintos"
  },
   {
        "id": 65,
        "question": "If a worker is paid ₱150 per hour and works for 8 hours, how much are they paid?",
        "choices": [
            "₱1000",
            "₱1100",
            "₱1200",
            "₱1300",
            "₱1400"
        ],
        "correct_ans": "₱1200",
        "explanation": "To calculate the total pay, multiply the hourly rate by the number of hours worked: ₱150/hour x 8 hours = ₱1200",
        "poster_name": "Manuel G. Sintos"
    },
    {
        "id": 66,
        "question": "A taxi charges a flag-down rate of ₱40 and ₱15 per kilometer. How much will it cost to travel 10 kilometers?",
        "choices": [
            "₱180",
            "₱190",
            "₱200",
            "₱210",
            "₱220"
        ],
        "correct_ans": "₱190",
        "explanation": "Calculate the cost for the distance: ₱15/km x 10 km = ₱150. Add the flag-down rate: ₱150 + ₱40 = ₱190",
        "poster_name": "Manuel G. Sintos"
    },
    {
        "id": 67,
        "question": "If a pizza is cut into 12 slices and you eat 1/3 of the pizza, how many slices did you eat?",
        "choices": [
            "2 slices",
            "3 slices",
            "4 slices",
            "5 slices",
            "6 slices"
        ],
        "correct_ans": "4 slices",
        "explanation": "To find 1/3 of 12 slices, divide 12 by 3: 12 / 3 = 4 slices",
        "poster_name": "Manuel G. Sintos"
    },
    {
        "id": 68,
        "question": "A store offers a 20% discount on shoes. If the original price is ₱1200, how much is the discounted price?",
        "choices": [
            "₱900",
            "₱960",
            "₱1000",
            "₱1060",
            "₱1100"
        ],
        "correct_ans": "₱960",
        "explanation": "Calculate the discount amount: ₱1200 x 0.20 = ₱240. Subtract the discount from the original price: ₱1200 - ₱240 = ₱960",
        "poster_name": "Manuel G. Sintos"
    },
    {
        "id": 69,
        "question": "If a train travels at a speed of 75 km/h, how long will it take to travel 300 km?",
        "choices": [
            "3 hours",
            "4 hours",
            "5 hours",
            "6 hours",
            "7 hours"
        ],
        "correct_ans": "4 hours",
        "explanation": "To find the time, divide the distance by the speed: 300 km / 75 km/h = 4 hours",
        "poster_name": "Manuel G. Sintos"
    },
    {
        "id": 70,
        "question": "If a rectangle has a length of 15 cm and a width of 8 cm, what is its perimeter?",
        "choices": [
            "23 cm",
            "30 cm",
            "46 cm",
            "50 cm",
            "120 cm"
        ],
        "correct_ans": "46 cm",
        "explanation": "To find the perimeter of a rectangle, use the formula: Perimeter = 2(length + width). So, 2(15 cm + 8 cm) = 2(23 cm) = 46 cm",
        "poster_name": "Manuel G. Sintos"
    },
    {
        "id": 71,
        "question": "A store sells a book for ₱220, which is at a 10% discount. What was the original price of the book?",
        "choices": [
            "₱240",
            "₱242",
            "₱244.20",
            "₱245",
            "₱250"
        ],
        "correct_ans": "₱244.44",
         "explanation": "If ₱220 is 90% of the original price, then Original Price = 220 / 0.9 = ₱244.44",
        "poster_name": "Manuel G. Sintos"
    },
    {
        "id": 72,
        "question": "If 5 kg of rice costs ₱225, how much does 1 kg of rice cost?",
        "choices": [
            "₱40",
            "₱45",
            "₱50",
            "₱55",
            "₱60"
        ],
        "correct_ans": "₱45",
        "explanation": "To find the cost of 1 kg, divide the total cost by the number of kilograms: ₱225 / 5 kg = ₱45/kg",
        "poster_name": "Manuel G. Sintos"
    },
    {
         "id": 73,
         "question": "A worker earns ₱500 per day. If they work for 22 days in a month, how much do they earn?",
         "choices": [
             "₱10,000",
             "₱10,500",
             "₱11,000",
             "₱11,500",
             "₱12,000"
         ],
         "correct_ans": "₱11,000",
         "explanation": "To find the total earnings, multiply the daily wage by the number of days worked: ₱500/day x 22 days = ₱11,000",
         "poster_name": "Manuel G. Sintos"
     },
     {
         "id": 74,
         "question": "If a car travels 150 km in 3 hours, what is its average speed?",
         "choices": [
             "40 km/h",
             "45 km/h",
             "50 km/h",
             "55 km/h",
             "60 km/h"
         ],
         "correct_ans": "50 km/h",
         "explanation": "To find the average speed, divide the distance traveled by the time taken: 150 km / 3 hours = 50 km/h",
         "poster_name": "Manuel G. Sintos"
     },
     {
         "id": 75,
         "question": "A shirt originally costs ₱550. If there's a 15% discount, how much is the discount?",
         "choices": [
             "₱72.50",
             "₱82.50",
             "₱85.50",
             "₱90.50",
             "₱92.50"
         ],
         "correct_ans": "₱82.50",
         "explanation": "To calculate the discount, multiply the original price by the discount rate: ₱550 x 0.15 = ₱82.50",
         "poster_name": "Manuel G. Sintos"
     },
    {
        "id": 76,
        "question": "If a circle has a radius of 7 cm, what is its diameter?",
        "choices": [
            "3.5 cm",
            "7 cm",
            "14 cm",
            "21 cm",
            "28 cm"
        ],
        "correct_ans": "14 cm",
        "explanation": "The diameter of a circle is twice its radius: 2 x 7 cm = 14 cm",
        "poster_name": "Manuel G. Sintos"
    },
    {
        "id": 77,
        "question": "What is 30% of ₱400?",
        "choices": [
            "₱100",
            "₱110",
            "₱120",
            "₱130",
            "₱140"
        ],
        "correct_ans": "₱120",
        "explanation": "To find 30% of ₱400, multiply ₱400 by 0.30: ₱400 x 0.30 = ₱120",
        "poster_name": "Manuel G. Sintos"
    },
    {
        "id": 78,
        "question": "If you buy groceries worth ₱850 and pay with a ₱1000 bill, how much change will you receive?",
        "choices": [
            "₱120",
            "₱130",
            "₱140",
            "₱150",
            "₱160"
        ],
        "correct_ans": "₱150",
        "explanation": "To find the change, subtract the total cost from the amount paid: ₱1000 - ₱850 = ₱150",
        "poster_name": "Manuel G. Sintos"
    },
    {
        "id": 79,
        "question": "A class has 45 students. If 2/3 of them are girls, how many girls are in the class?",
        "choices": [
            "15 girls",
            "20 girls",
            "25 girls",
            "30 girls",
            "35 girls"
        ],
        "correct_ans": "30 girls",
        "explanation": "To find 2/3 of 45, multiply 45 by 2/3: (2/3) x 45 = 30",
        "poster_name": "Manuel G. Sintos"
    },
    {
        "id": 80,
        "question": "If a pack of 6 bottles of water costs ₱120, how much does one bottle cost?",
        "choices": [
            "₱18",
            "₱19",
            "₱20",
            "₱21",
            "₱22"
        ],
        "correct_ans": "₱20",
        "explanation": "To find the cost of one bottle, divide the total cost by the number of bottles: ₱120 / 6 = ₱20",
        "poster_name": "Manuel G. Sintos"
    },
     {
        "id": 81,
        "question": "If you have ₱500 and spend ₱125, how much money do you have left?",
        "choices": [
            "₱350",
            "₱365",
            "₱370",
            "₱375",
            "₱380"
        ],
        "correct_ans": "₱375",
        "explanation": "To find the remaining amount, subtract the amount spent from the initial amount: ₱500 - ₱125 = ₱375",
        "poster_name": "Manuel G. Sintos"
    },
    {
        "id": 82,
        "question": "A book has 300 pages. If you read 60 pages, what fraction of the book have you read?",
        "choices": [
            "1/6",
            "1/5",
            "1/4",
            "1/3",
            "1/2"
        ],
        "correct_ans": "1/5",
        "explanation": "You read 60 out of 300 pages, which is 60/300. Simplify the fraction by dividing both by 60: 60/300 = 1/5",
        "poster_name": "Manuel G. Sintos"
    },
    {
        "id": 83,
        "question": "If a worker earns ₱480 in 8 hours, how much do they earn per hour?",
        "choices": [
            "₱50",
            "₱55",
            "₱60",
            "₱65",
            "₱70"
        ],
        "correct_ans": "₱60",
        "explanation": "To find the hourly rate, divide the total earnings by the number of hours worked: ₱480 / 8 hours = ₱60/hour",
        "poster_name": "Manuel G. Sintos"
    },
    {
        "id": 84,
        "question": "A journey starts at 9:00 AM and takes 3 hours and 30 minutes. What time does the journey end?",
        "choices": [
            "12:00 PM",
            "12:15 PM",
            "12:30 PM",
            "1:00 PM",
            "1:30 PM"
        ],
        "correct_ans": "12:30 PM",
        "explanation": "To find the end time, add the duration to the start time: 9:00 AM + 3 hours 30 minutes = 12:30 PM",
        "poster_name": "Manuel G. Sintos"
    },
    {
        "id": 85,
        "question": "If a bag contains 24 marbles and 1/4 of them are blue, how many blue marbles are there?",
        "choices": [
            "4 marbles",
            "5 marbles",
            "6 marbles",
            "7 marbles",
            "8 marbles"
        ],
        "correct_ans": "6 marbles",
        "explanation": "To find 1/4 of 24, divide 24 by 4: 24 / 4 = 6",
        "poster_name": "Manuel G. Sintos"
    },
    {
        "id": 86,
        "question": "A store is selling shirts at ₱280 each. If you buy 3 shirts, how much will you pay?",
        "choices": [
            "₱740",
            "₱780",
            "₱800",
            "₱820",
            "₱840"
        ],
        "correct_ans": "₱840",
        "explanation": "To find the total cost, multiply the price of one shirt by the number of shirts: ₱280 x 3 = ₱840",
        "poster_name": "Manuel G. Sintos"
    },
    {
        "id": 87,
        "question": "If a movie ticket costs ₱320, and you have ₱1000, how much money will you have left if you buy 2 tickets?",
        "choices": [
            "₱340",
            "₱350",
            "₱360",
            "₱370",
            "₱380"
        ],
        "correct_ans": "₱360",
        "explanation": "Calculate the cost of 2 tickets: 2 x ₱320 = ₱640. Then subtract this from the amount you have: ₱1000 - ₱640 = ₱360",
        "poster_name": "Manuel G. Sintos"
    },
    {
        "id": 88,
        "question": "A worker is paid ₱450 for 6 hours of work. How much will they be paid for 10 hours of work?",
        "choices": [
            "₱700",
            "₱725",
            "₱750",
            "₱775",
            "₱800"
        ],
        "correct_ans": "₱750",
        "explanation": "First, find the hourly rate: ₱450 / 6 hours = ₱75/hour. Then, multiply the hourly rate by 10 hours: ₱75/hour x 10 hours = ₱750",
        "poster_name": "Manuel G. Sintos"
    },
    {
        "id": 89,
        "question": "If a train travels at 60 miles per hour, how far will it travel in 2.5 hours?",
        "choices": [
            "120 miles",
            "130 miles",
            "140 miles",
            "150 miles",
            "160 miles"
        ],
        "correct_ans": "150 miles",
        "explanation": "Multiply the speed by the time: 60 mph x 2.5 hours = 150 miles",
        "poster_name": "Manuel G. Sintos"
    },
    {
        "id": 90,
        "question": "A store offers a 25% discount on a bag that originally costs ₱800. How much will you save?",
        "choices": [
            "₱100",
            "₱150",
            "₱200",
            "₱225",
            "₱250"
        ],
        "correct_ans": "₱200",
        "explanation": "Calculate the discount amount: ₱800 x 0.25 = ₱200",
        "poster_name": "Manuel G. Sintos"
    },
     {
        "id": 91,
        "question": "If a plant grows 2 cm per week, how much will it grow in 6 weeks?",
        "choices": [
            "8 cm",
            "10 cm",
            "12 cm",
            "14 cm",
            "16 cm"
        ],
        "correct_ans": "12 cm",
        "explanation": "Multiply the growth per week by the number of weeks: 2 cm/week x 6 weeks = 12 cm",
        "poster_name": "Manuel G. Sintos"
    },
    {
        "id": 92,
        "question": "What is the area of a rectangle with a length of 9 meters and a width of 6 meters?",
        "choices": [
            "15 square meters",
            "30 square meters",
            "45 square meters",
            "54 square meters",
            "60 square meters"
        ],
        "correct_ans": "54 square meters",
        "explanation": "To find the area, multiply the length by the width: 9 meters x 6 meters = 54 square meters",
        "poster_name": "Manuel G. Sintos"
    },
    {
        "id": 93,
        "question": "If 40% of a number is 80, what is the number?",
        "choices": [
            "100",
            "120",
            "150",
            "200",
            "240"
        ],
        "correct_ans": "200",
        "explanation": "If 40% is 80, then 1% is 80 / 40 = 2, and 100% is 2 x 100 = 200",
        "poster_name": "Manuel G. Sintos"
    },
    {
        "id": 94,
        "question": "A recipe calls for 3 cups of flour. If you only want to make half the recipe, how much flour do you need?",
        "choices": [
            "1 cup",
            "1.25 cups",
            "1.5 cups",
            "1.75 cups",
            "2 cups"
        ],
        "correct_ans": "1.5 cups",
        "explanation": "To find half of 3 cups, divide 3 by 2: 3 / 2 = 1.5 cups",
        "poster_name": "Manuel G. Sintos"
    },
    {
    	"id": 95,
        "question": "If you buy a phone for ₱15,000 and sell it for ₱17,500, how much profit do you make?",
        "choices": [
            "₱1,500",
            "₱2,000",
            "₱2,500",
            "₱3,000",
            "₱3,500"
        ],
        "correct_ans": "₱2,500",
        "explanation": "To find the profit, subtract the cost price from the selling price: ₱17,500 - ₱15,000 = ₱2,500",
        "poster_name": "Manuel G. Sintos"
    },
    {
        "id": 96,
        "question": "A car travels 240 km in 4 hours. What is its average speed?",
        "choices": [
            "50 km/h",
            "60 km/h",
            "70 km/h",
            "80 km/h",
            "90 km/h"
        ],
        "correct_ans": "60 km/h",
        "explanation": "To find the average speed, divide the distance traveled by the time taken: 240 km / 4 hours = 60 km/h",
        "poster_name": "Manuel G. Sintos"
    },
    {
        "id": 97,
        "question": "If a discount of 30% is applied to an item that costs ₱700, what is the selling price?",
        "choices": [
            "₱450",
            "₱470",
            "₱490",
            "₱500",
            "₱520"
        ],
        "correct_ans": "₱490",
        "explanation": "Calculate the discount amount: ₱700 x 0.30 = ₱210. Subtract the discount from the original price: ₱700 - ₱210 = ₱490",
        "poster_name": "Manuel G. Sintos"
    },
    {
        "id": 98,
        "question": "If a square has a side length of 11 cm, what is its area?",
        "choices": [
            "22 sq. cm",
            "44 sq. cm",
            "110 sq. cm",
            "121 sq. cm",
            "144 sq. cm"
        ],
        "correct_ans": "121 sq. cm",
        "explanation": "To find the area of a square, square the side length: 11 cm x 11 cm = 121 sq. cm",
        "poster_name": "Manuel G. Sintos"
    },
    {
        "id": 99,
        "question": "What is 15% of ₱1200?",
        "choices": [
            "₱150",
            "₱160",
            "₱170",
            "₱180",
            "₱190"
        ],
        "correct_ans": "₱180",
        "explanation": "To find 15% of ₱1200, multiply ₱1200 by 0.15: ₱1200 x 0.15 = ₱180",
        "poster_name": "Manuel G. Sintos"
    },
    {
        "id": 100,
        "question": "If you divide ₱900 equally among 5 people, how much does each person get?",
        "choices": [
            "₱150",
            "₱160",
            "₱170",
            "₱180",
            "₱190"
        ],
        "correct_ans": "₱180",
        "explanation": "To divide the amount equally, divide the total amount by the number of people: ₱900 / 5 people = ₱180/person",
        "poster_name": "Manuel G. Sintos"
    }
];