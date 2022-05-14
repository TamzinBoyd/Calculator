CHALLENGE

Given the task of creating a calculator based on methods already learnt. This was our first Javascript solo challenge.

BREAKING IT DOWN

1. User clicks on number(s) and they are displayed
2. User clicks on the operator then second number
3. User clicks equals to show the total of the sum
4. When user clicks "AC" the calculator needs to reset.

APPROACH

1. I started by storing all numbers in separate variables, before realising it would be more efficient to store them in an array.
2. Used a for loop to loop through and add an event listener to all number buttons.
3. This event needs to trigger a function which:
   - displays the numbers entered to the user
   - adds the number to a new array

Now I had my display showing the entered sum, but I needed to break it down so the sum could be completed on click of equals

The operand was easiest, I filtered the array of entered buttons and returned the operand clicked by the user. Storing this in a new array, then converted it to a string for later use.

The numbers were then able to be broken down using substring, to return 2 complete numbers.

From this I used an IF statement to read the value of the stored operand and carry out the relevant sum, which is then displayed in the total box to the user.
