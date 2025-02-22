## Quiz Application with Timed Questions

In this task, trainees will create a quiz application that leverages the Node.js 
- event loop, 
- asynchronous operations, 
- and timers. 

This project will help solidify their understanding of these key concepts and demonstrate how to handle user input and manage timed events in a Node.js application.

#### Instructions
1. ##### Timed Questions:
    - Use setInterval to display the remaining time for each question.

    - Implement a countdown timer for the entire quiz duration.

2. ##### Asynchronous Question Handling:
    - Ensure questions are asked asynchronously without blocking the main event loop.
    - Handle user input asynchronously using readline-sync.

3. ##### Dynamic Question Handling:
    - Allow the quiz to dynamically move to the next question after the previous one is answered or if the time for the current question runs out.
4. ##### Quiz Termination:
    - Stop the quiz if all questions are answered before time runs out.
    - Display the final score once the quiz ends.
5. ##### Error Handling:
    - Handle cases where user input is invalid or the quiz times out.