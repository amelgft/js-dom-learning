### The Problem
in the webpage there is and h1: Refresh me
when the page is reload, the dice of player one and two got thrown randomly and the one who has higher value between them win, 
if the winner is player one, than the h1 change to "player one win" otherwise "player two win" 
else "Draw" 


# The Challenging thing about it is :
1- i dont understand how everything is going to be changed after the page is loaded
2- i dont understand how the dices images which are six can be changed and where 
all the six are placed ? and as they are images how we can compare the number of points
in the dices ? 
3-should i create one unified dices div and call them later ? or create for each player a div 
that contain six images ? 
3-should i point for each dice image a number  ? i mean for image who contain one circle, 
i give it somehow a value "one" than use those values later and compare them (player 1 vs ply 2) and the biggest one should be announce in h1 that he is the winner
4-also as we have random selection ,back to the previous problem as we in js we will use the math.random function i think, so how it can select randomly among images ? impossible
--so am thinking about idk maybe labelling html elements images and try to make them idk somehow labeled with a value than called them ? maybe 



## chatgpt proposed "what i need" to solve this 

**To solve this problem effectively, you should focus on the following key areas:**

# DOM Manipulation:

Selecting elements (document.querySelector, document.getElementById)
Changing element attributes (e.g., element.src to change image source)
Updating text content (element.textContent or element.innerHTML)

# Event Handling:
Understanding and using the DOMContentLoaded event to execute JavaScript after the page has loaded

# Random Number Generation:
Using Math.random() and Math.floor() to generate random numbers within a specific range
Conditional Logic:

Writing if-else statements to compare values and execute different code blocks based on conditions
Basic JavaScript Syntax:

Variables, loops, and functions
Arrays and objects for storing and manipulating data

# Debugging:
Using browser developer tools to inspect elements and debug JavaScript code
Level of Challenge
This project is generally considered beginner to intermediate level. Here's why:

# Beginner Elements:
HTML/CSS: Structuring the page and styling it is basic and fundamental for web development.
Basic JavaScript: Generating random numbers, selecting DOM elements, and handling events are introductory topics in JavaScript
 