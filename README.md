# objects_js_dom

#Manage Students Objects Project

This project allows you to manage student information (e.g., name, age, subjects) using JavaScript and the DOM. The user can update the student's information or remove it entirely through a simple user interface.

## Project Features:
- **View Student Information**: Initially displays student details (name, age, subjects).
- **Update Student Information**: Allows the user to input new values for the student's name, age, and subjects.
- **Remove Student Information**: Clears the student data and resets it to "Not Available".


## How to Use:
1. **Clone the repository** or download the project files to your local machine.
2. Open the `index.html` file in a web browser.
3. You'll see the current student information displayed on the page.
4. To **update the student information**, fill in the form fields (Name, Age, Subjects) and click the "Update Student" button.
5. To **remove the student information**, click the "Remove Student Information" button. This will reset the student data to "Not Available".

## How It Works:
- The student information is stored in a JavaScript object.
- The `displayStudentInfo()` function is used to update the displayed information in the HTML.
- When the form is submitted, the new data from the form is used to update the student object, and the DOM is updated accordingly.
- The "Remove" button resets the student object to an empty state and updates the page to show "Not Available".

## Technologies Used:
- **HTML** for structuring the webpage.
- **CSS** for styling the webpage.
- **JavaScript** for manipulating the DOM and managing student data.

## Installation:
1. Ensure that you have a modern web browser (e.g., Google Chrome, Firefox, etc.).
2. Simply open the `index.html` file in your browser. No additional installation or setup is required.

## License:
This project is open-source and available under the MIT License.
