# Callbacks-Assignment4

SC372: Web Development
Assignment 4: Callbacks – Rock, Paper, Scissors
In this assignment, you will practice putting together all the skills we have reviewed so far by building a simple rock-
paper-scissors game on a single web page. You have creative freedom, but your web page should emulate game play by
letting the user play against the computer. On the user’s turn, they will pick their throw by clicking one of the 3 choices.
On the computer’s turn, a random choice will be made by the computer, then a winner will be determined. A sketch of
the draft page is shown below.
Theme and appearance are up to you, but you must fulfil the following specs.
1. The page should contain at least three sections; the player throw, the computer throw, and the outcome.
2. The player throw section contains three figures, with images representing the three moves. When the user clicks
on an image, a border should appear around it (to mark the player's throw), and the computer throw is then
decided.
3. The computer throw section should show one image at a time. When the page is first opened (or reloaded), a
question mark image should be displayed. While the computer throw is ongoing, each of the three play images
should shuffle in every half second. When the computer decides its throw (randomly), then the chosen throw
image should be displayed as shown above. The computer should spend a total of 3 seconds “thinking”.
4. The winner of the game is then decided (computer, player, or tie), and the outcome section should be updated
accordingly.
5. For some extra credit points, keep track of the number of wins, losses, and ties for each page reload and update
on-screen displays. You can add a fourth section in the HTML file to display the current score. Make sure that you
add a "reset" button that clears the counters and displays.
Implementation:
Most of your work will be in the callback functions. At minimum you will need functions to highlight the player choice,
shuffle the images for the computer throw, decide the winner (your logic must account for all 9 throws), reset the game,
etc.
For full credit, your code must adhere to our coding standards and validate at W3C. Choose appropriate HTML tags to
match the structure of the content on the page. All CSS styles must be in a separate css file, do not use inline styles. Do
not user innerHTML to add elements. Do not use inline JavaScript ("onClick") on an HTML element, use event listeners to
listen for events.
Place all your images in a subfolder and use relative hrefs for them
