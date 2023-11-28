/**
 * Author: @Manuel G. Sintos
 * Date: Nov 27, 2023, 1:11 PM
 *
 */

const data_04 = [
	{
	    id: 0,
	    question: "Simplify the equation for x: 2x + 5 = 15.",
	    choices: [
	        "x = 5",
	        "x = 7.5",
	        "x = 8",
	        "x = 10",
	        "x = 20"
	    ],
	    correct_ans: "x = 5",
	    explanation: `
	    	To solve the equation for x, subtract 5 from both sides of the equation:<br/>
	    	2x + 5 - 5 = 15 - 5<br/><br/>
	    	This simplifies to:<br/>
	    	2x = 10<br/><br/>
	    	Now, divide both sides of the equation by 2 to isolate x:<br/>
	    	2x / 2 = 10 / 2<br/><br/>
	    	This results in:<br/>
	    	x = 5
	    `
	},
	{
	    id: 1,
	    question: "Simplify the equation for x: 3x - 7 = 20.",
	    choices: [
	        "x = 10",
	        "x = 12",
	        "x = 9",
	        "x = 11",
	        "x = 13"
	    ],
	    correct_ans: "x = 9",
	    explanation: `
	    	Add 7 to both sides of the equation. This will isolate the x-term on one side of the equation:<br/>
	    	3x - 7 + 7 = 20 + 7<br/><br/>
	    	Simplify both sides of the equation. This will give you the solution:<br/>
	    	3x = 27<br/><br/>
	    	Divide both sides of the equation by 3. This will isolate the x-variable on one side of the equation:<br/>
	    	(3x) / 3 = 27 / 3<br/><br/>
	    	Simplify both sides of the equation. This will give you the final answer:<br/>
	    	x = 9
	    `
	},
		{
	    id: 2,
	    question: "Solve for y: 4y - 7 = 5y + 2.",
	    choices: [
	        "y = -9",
	        "y = -5",
	        "y = 5",
	        "y = 9",
	        "y = 14"
	    ],
	    correct_ans: "y = -9",
	    explanation: `
	    	Step 1: Subtract 5y from both sides of the equation.<br/>
	    	4y - 7 - 5y = 5y + 2 - 5y<br/><br/>
	    	Step 2: Simplify both sides of the equation.<br/>
	    	-y - 7 = 2<br/><br/>
	    	Step 3: Add 7 to both sides of the equation.<br/>
	    	-y = 2 + 7<br/><br/>
	    	Step 4: Simplify both sides of the equation.<br/>
	    	-y = 9<br/><br/>
	    	Step 5: Divide both sides of the equation by -1.<br/>
	    	y = -9
	    `
	},
	{
	    id: 3,
	    question: "Calculate the area of a right triangle with a base of 6 units and a height of 8 units.",
	    choices: [
	        "12 square units",
	        "24 square units",
	        "30 square units",
	        "36 square units",
	        "48 square units"
	    ],
	    correct_ans: "24 square units",
	    explanation: `
	    	To calculate the area of a right triangle, you can use the following formula:<br/>
			Area = (1/2) * base * height<br/><br/>
			In this case, the base is 6 units and the height is 8 units, so the area is:<br/><br/>
			Area = (1/2) * 6 * 8 = 24 square units
	    `
	},
	{
	    id: 4,
	    question: "If a rectangle has a length of 10 units and a width of 5 units, what is its perimeter?",
	    choices: [
	        "15 units",
	        "20 units",
	        "25 units",
	        "30 units",
	        "35 units"
	    ],
	    correct_ans: "30 units",
	    explanation: `
	    	The perimeter of a rectangle is given by the formula P = 2 * (length + width).<br/><br/>
	    	P = 2 * (length + width)<br/>
			P = 2 * (10 + 5)<br/>
			P = 2 * 15<br/>
			P = 30 units
	    `
	},
	{
	    id: 5,
	    question: "If a car travels at a speed of 60 miles per hour, how far will it travel in 3 hours?",
	    choices: [
	        "120 miles",
	        "140 miles",
	        "160 miles",
	        "180 miles",
	        "200 miles"
	    ],
	    correct_ans: "180 miles",
	    explanation: `
	    	The formula for calculating distance is:<br/>
			Distance = Speed x Time<br/><br/>
			In this case, the speed is 60 miles per hour and the time is 3 hours. So, the distance traveled is 180 miles.<br/>
	    `
	},
	{
	    id: 6,
	    question: "What is the square root of 144?",
	    choices: [
	        "6",
	        "8",
	        "10",
	        "12",
	        "14"
	    ],
	    correct_ans: "12",
	    explanation: "The square root of a number is a value that, when multiplied by itself, equals the original number. In this case, the square root of 144 is 12 because 12 × 12 = 144."
	},
	{
	    id: 7,
	    question: "If 20% of a number is 30, what is the number?",
	    choices: [
	        "15",
	        "100",
	        "150",
	        "200",
	        "250"
	    ],
	    correct_ans: "150",
	    explanation: `
			If 20% of a number is 30, then 1% of the number is 30 / 20 = 1.5<br/>
			So, the number is 100 * 1.5 = 150.<br/>
			In other words, we can set up the following equation and solve for the number:<br/><br/>
			0.2x = 30<br/>
			x = 30 / 0.2<br/>
			x = 150<br/><br/>
			Therefore, the number is 150.

	    `
	},
	{
	    id: 8,
	    question: "What is the value of the square root of 49?",
	    choices: [
	        "4",
	        "6",
	        "7",
	        "8",
	        "9"
	    ],
	    correct_ans: "7",
	    explanation: "The square root of 49 is 7 because 7 multiplied by itself (7 x 7) equals 49."
	},
	{
	    id: 9,
	    question: "If a circle has a radius of 5 centimeters, what is its circumference?",
	    choices: [
	        "35.4 cm",
	        "20.4 cm",
	        "15.4 cm",
	        "31.4 cm",
	        "30.4 cm"
	    ],
	    correct_ans: "31.4 cm",
	    explanation: `
	    	The circumference of a circle is the distance around the circle. It is equal to 2πr, where r is the radius of the circle.<br/><br/>
			In this case, the radius is 5 centimeters, so the circumference is 2π * 5 = 10π centimeters.<br/><br/>
			π is an irrational number approximately equal to 3.14. So, the circumference of the circle is approximately equal to 10 * 3.14 = 31.4 centimeters.
	    `
	},
	{
	    id: 10,
	    question: "If a rectangle has a length of 12 units and a width of 8 units, what is its area?",
	    choices: [
	        "20 square units",
	        "48 square units",
	        "64 square units",
	        "96 square units",
	        "120 square units"
	    ],
	    correct_ans: "96 square units",
	    explanation: `
	    	The formula for the area of a rectangle:<br/>
			Area = Length * Width<br/><br/>
			In this case, the length is 12 units and the width is 8 units. So, the area is<br/><br/>
			Area = 12 * 8<br/>
			Area = 96 square units
	    `
	},
	{
	    id: 11,
	    question: "Simplify the expression: 2(3x + 4) - 5(2x - 1).",
	    choices: [
	        "-4x + 13",
	        "4x + 6",
	        "4x + 9",
	        "-4x - 1",
	        "4x - 13"
	    ],
	    correct_ans: "-4x + 13",
	    explanation: `
	    	Use the distributive property to distribute the 2 and the -5:<br/><br/>
			= 2(3x + 4) - 5(2x - 1)<br/>
			= (2 * 3x) + (2 * 4) - (5 * 2x) - (5 * -1)<br/>
			= 6x + 8 - 10x + 5<br/><br/>
			Combine the like terms:<br/>
			= 6x - 10x + 8 + 5<br/>
			= -4x + 13<br/><br/>
			Therefore, the simplified expression is -4x + 13.
	    `
	},
	{
	    id: 12,
	    question: "If a circle has a diameter of 14 centimeters, what is its radius?",
	    choices: [
	        "16 cm",
	        "7 cm",
	        "14 cm",
	        "28 cm",
	        "8 cm"
	    ],
	    correct_ans: "7 cm",
	    explanation: `
	    	the formula for the radius of a circle:<br/><br/>
			Radius = Diameter / 2<br/><br/>
			In this case, the diameter is 14 centimeters, so the radius is 14 / 2 = 7 centimeters.
	    `
	},
	{
	    id: 13,
	    question: "Solve for x: 5x - 3 = 2x + 7.",
	    choices: [
	        "x = 2/3",
	        "x = 1",
	        "x = 4/3",
	        "x = 5/3",
	        "x = 10/3"
	    ],
	    correct_ans: "x = 10/3",
	    explanation: `
			Subtract 2x from both sides of the equation:<br/>
			5x - 3 = 2x + 7<br/>
			5x - 2x - 3 = 2x - 2x + 7<br/>
			3x - 3 = 7<br/><br/>
			Add 3 to both sides of the equation:<br/>
			3x - 3 + 3 = 7 + 3<br/>
			3x = 10<br/><br/>
			Divide both sides of the equation by 3:<br/>
			3x / 3 = 10 / 3<br/>
			x = 10/3 or x = 3.33 (rounded to two decimal places)
	    `
	},
	{
	    id: 14,
	    question: "What is the product of 7 and 3/4?",
	    choices: [
	        "5.25",
	        "14",
	        "18.75",
	        "21.50",
	        "24"
	    ],
	    correct_ans: "5.25",
	    explanation: "First, we convert 3/4 to a decimal number. 3/4 is equal to 0.75. So, the product is 7 * 0.75 = 5.25"
	},
	{
	    id: 15,
	    question: "If a number is increased by 25% and the result is 75, what is the original number?",
	    choices: [
	        "45",
	        "60",
	        "75",
	        "90",
	        "100"
	    ],
	    correct_ans: "60",
	    explanation: `
	    	We are told that 75 is 25% greater than the original number.<br/>
			This means that 75 is 125% of the original number.<br/><br/>
			So, if we let x be the original number, we have the equation:<br/>
			x * 1.25 = 75<br/><br/>
			Dividing both sides of the equation by 1.25, we get:<br/>
			x = 75 / 1.25<br/><br/>
			Simplifying the right side, we get:<br/>
			x = 60
	    `
	},
	{
	    id: 16,
	    question: "What is the least common multiple (LCM) of 6 and 9?",
	    choices: [
	        "3",
	        "6",
	        "9",
	        "18",
	        "27"
	    ],
	    correct_ans: "18",
	    explanation: "To find the LCM of 6 and 9, first list the multiples of each number: Multiples of 6: 6, 12, 18, 24, ... Multiples of 9: 9, 18, 27, ... The least common multiple (LCM) is the smallest number that both 6 and 9 can divide into evenly, which is 18."
	},
	{
	    id: 17,
	    question: "Solve for x: 4(x - 3) = 20.",
	    choices: [
	        "x = 4",
	        "x = 5",
	        "x = 6",
	        "x = 7",
	        "x = 8"
	    ],
	    correct_ans: "x = 8",
	    explanation: `
	    	We can start by distributing the 4 on the left side of the equation:<br/>
			4(x - 3) = 20<br/>
			4x - 12 = 20<br/><br/>
			Then we can add 12 to both sides of the equation to get rid of the -12 term:<br/>
			4x - 12 + 12 = 20 + 12<br/>
			4x = 32<br/><br/>
			Finally, we can divide both sides of the equation by 4 to get x by itself:<br/>
			x = 32 / 4<br/>
			x = 8<br/><br/>
			Therefore, x is equal to 8.
	    `
	},
	{
	    id: 18,
	    question: "if 3a-3b is subtracted from 4a+4b, the result is?",
	    choices: [
	        "-a - 7b",
	        "7a - b",
	        "a + b",
	        "7a + b",
	        "a + 7b"
	    ],
	    correct_ans: "a + 7b",
	    explanation: `
	    	If 3a-3b is subtracted from 4a+4b, the result is:<br/>
			(4a+4b) - (3a-3b) = a+7b<br/><br/>

			This is because when we subtract two expressions, we distribute the negative sign:<br/>
			(4a+4b) - (3a-3b) = 4a+4b - 3a+3b<br/><br/>

			Then we combine like terms:<br/>
			= 4a+4b - 3a+3b = (4a-3a) + (4b+3b)<br/>
			= a+7b<br/><br/>
			Therefore, the result of subtracting 3a-3b from 4a+4b is a+7b.
	    `
	},
	{
	    id: 19,
	    question: "what is 2(1/2 + 1/3) + 4(1/2 + 1/3)?",
	    choices: [
	        "5/6",
	        "3",
	        "6/5",
	        "5",
	        "1"
	    ],
	    correct_ans: "5",
	    explanation: `
	    	We can first simplify the expression inside the parentheses:<br/>
			= 2(1/2+1/3) + 4(1/2+1/3) = 2(5/6) + 4(5/6)<br/><br/>
			Then we can multiply each term:<br/>
			= 2(5/6) + 4(5/6) = 10/6 + 20/6<br/><br/>
			Finally, we can combine the terms:<br/>
			= 10/6 + 20/6 = 30/6 = 5<br/><br/>
			Therefore, the answer is 5.
	    `
	},
	{
	    id: 20,
	    question: "what is 2(1/2 + 1/3) + 4(1/2 + 1/3)?",
	    choices: [
	        "5/6",
	        "3",
	        "6/5",
	        "5",
	        "1"
	    ],
	    correct_ans: "5",
	    explanation: `
	    	We can first simplify the expression inside the parentheses:<br/>
			= 2(1/2+1/3) + 4(1/2+1/3) = 2(5/6) + 4(5/6)<br/><br/>
			Then we can multiply each term:<br/>
			= 2(5/6) + 4(5/6) = 10/6 + 20/6<br/><br/>
			Finally, we can combine the terms:<br/>
			= 10/6 + 20/6 = 30/6 = 5<br/><br/>
			Therefore, the answer is 5.
	    `
	},
	{
	    id: 21,
	    question: "Solve for 'y': 3y - 7 = 20",
	    choices: [
	        "y = 3",
	        "y = 5",
	        "y = 7",
	        "y = 9",
	        "y = 27"
	    ],
	    correct_ans: "y = 9",
	    explanation: `
	    	To isolate 'y', <br/>
	    	first, add 7 to both sides of the equation: 3y - 7 + 7 = 20 + 7, <br/>
	    	which simplifies to 3y = 27. <br/><br/>
	    	Then, divide both sides by 3 to find y: (3y)/3 = 27/3, yielding y = 9.`
	},
	{
	    id: 22,
	    question: "Simplify the expression: 2x + 3x - 5x",
	    choices: [
	        "0",
	        "x",
	        "10x",
	        "-6x",
	        "5x"
	    ],
	    correct_ans: "0",
	    explanation: "To simplify the expression, combine like terms. 2x + 3x - 5x = (2 + 3 - 5)x = 0x = 0."
	},
	{
	    id: 23,
	    question: "Solve for 'x' in the equation: 4x - 7 = 17",
	    choices: [
	        "x = 6",
	        "x = 5",
	        "x = 7",
	        "x = 8",
	        "x = 9"
	    ],
	    correct_ans: "x = 6",
	    explanation: "To isolate 'x', first, add 7 to both sides of the equation: 4x - 7 + 7 = 17 + 7, which simplifies to 4x = 24. Then, divide both sides by 4 to find x: (4x)/4 = 24/4, yielding x = 6."
	},
	{
	    id: 24,
	    question: "Find the values of 'x' and 'y' in the system of equations:\n2x + 3y = 12\n4x - 2y = 10",
	    choices: [
	        "x = 2, y = 4",
	        "x = 3, y = 2",
	        "x = 4, y = 1",
	        "x = 1, y = 3",
	        "x = 0, y = 5"
	    ],
	    correct_ans: "x = 3, y = 2",
	    explanation: "Solve the system of equations using either substitution or elimination. The solution is x = 3 and y = 2."
	},
	{
	    id: 25,
	    question: "Simplify the expression: 3(x + 2) - 2(3 - x)",
	    choices: [
	        "5x + 6",
	        "3x + 6",
	        "x + 6",
	        "5x - 6",
	        "3x - 6"
	    ],
	    correct_ans: "5x + 6",
	    explanation: "To simplify the expression, distribute the numbers inside the parentheses and then combine like terms: 3(x + 2) - 2(3 - x) = 3x + 6 - 6 + 2x = (3x + 2x) + (6 - 6) = 5x + 6."
	},
	{
	    id: 26,
	    question: "Solve for 'y' in the equation: 2y/3 + 5 = 7",
	    choices: [
	        "y = 3",
	        "y = 2",
	        "y = 1",
	        "y = 4",
	        "y = 5"
	    ],
	    correct_ans: "y = 3",
	    explanation: "To solve for 'y', first, subtract 5 from both sides of the equation: 2y/3 + 5 - 5 = 7 - 5, which simplifies to 2y/3 = 2. Then, multiply both sides by 3 to find y: (2y/3) * 3 = 2 * 3, yielding y = 3."
	},
	{
	    id: 27,
	    question: "Find the values of 'x' and 'y' in the system of equations:\n3x - 2y = 8\n2x + y = 5",
	    choices: [
	        "x = 2, y = 1",
	        "x = 1, y = 2",
	        "x = 3, y = 4",
	        "x = 4, y = 3",
	        "x = 5, y = 0"
	    ],
	    correct_ans: "x = 2, y = 1",
	    explanation: "Solve the system of equations either by substitution or elimination. The solution is x = 2 and y = 1."
	}










































];