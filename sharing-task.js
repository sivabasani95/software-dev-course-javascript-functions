/*
===========================================
🤝 Collaborative Coding Challenge: Event Helpers
===========================================

🎯 Objective:
Students will work in small teams to collaboratively design and implement
reusable functions that solve specific tasks. This activity encourages:

- Teamwork
- Critical thinking
- Knowledge sharing
*/

// ============================================
// 🎉 Scenario:
// Your bootcamp is organizing an event to showcase projects.
// Your team will write reusable JavaScript functions to help manage the event.
// Each function must:
// - Use parameters
// - Use return statements
// - Follow the single responsibility principle
// ============================================


// ============================================
// 🧩 Task 1: Generate Attendee Badge
// ============================================
// Create a function that:
// - Takes a name and a role (e.g., "Alice", "speaker")
// - Returns a string in the format: "Name: Alice, Role: Speaker"

// Steps:
// 1. Define the function with two parameters.
// 2. Format the output string properly.
// 3. Capitalize the role if needed.
// 4. Return the result.


// ============================================
// 🧩 Task 2: Calculate Event Cost
// ============================================
// Create a function that:
// - Takes number of attendees and cost per attendee.
// - Applies a 10% discount if attendees exceed 100.
// - Returns the total cost.

// Steps:
// 1. Multiply attendees by cost.
// 2. Check if attendee count is over 100.
// 3. If so, apply a 10% discount.
// 4. Return the final total.


// ============================================
// 🧩 Task 3: Validate Email
// ============================================
// Create a function that:
// - Takes an email string as input.
// - Returns true if the email contains both "@" and "." characters.
// - Returns false otherwise.

// Steps:
// 1. Check if the string includes both "@" and ".".
// 2. Return true or false accordingly.


// ============================================
// 🧠 Collaborative Steps
// ============================================

// 📌 Design Phase:
// - Brainstorm function requirements: What inputs and outputs are needed?
// - Assign roles within your team:
//   ▸ Pseudocode Writer
//   ▸ Initial Coder
//   ▸ Testers / Debuggers

// 🛠️ Implementation Phase:
// - Write and refine your three functions as a team
// - Use return statements and ensure reusability

// 🧪 Testing Phase:
// - Each member writes test cases for each function
// - Use console.log() to test different inputs and edge cases

// 🎤 Presentation Phase:
// - Share your functions with the class
// - Explain how your team approached the design and testing process

// ✅ Bonus: Can you extend any of the functions to be more flexible or reusable?

// ============================================
// 🧩 Task 1: Generate Attendee Badge
// ============================================

/**
 * Generates a badge string for an attendee.
 * @param {string} name - The attendee's name.
 * @param {string} role - The attendee's role.
 * @returns {string} - A formatted badge string.
 */
function generateBadge(name, role) {
    const formattedRole = role.charAt(0).toUpperCase() + role.slice(1).toLowerCase();
    return `Name: ${name}, Role: ${formattedRole}`;
}

// Example Tests:
console.log(generateBadge("Alice", "speaker")); // Name: Alice, Role: Speaker
console.log(generateBadge("Bob", "organizer")); // Name: Bob, Role: Organizer


// ============================================
// Task 2: Calculate Event Cost
// ============================================

/**
 * Calculates the total event cost, with discounts.
 * @param {number} attendees - Number of attendees.
 * @param {number} costPerAttendee - Cost per attendee.
 * @returns {number} - Total cost after any discounts.
 */
function calculateEventCost(attendees, costPerAttendee) {
    let total = attendees * costPerAttendee;
    if (attendees > 100) {
        total *= 0.90; // Apply 10% discount
    }
    return total;
}

// Example Tests:
console.log(calculateEventCost(50, 20));    // 1000
console.log(calculateEventCost(150, 20));   // 2700 (with discount)


// ============================================
// Task 3: Validate Email
// ============================================

/**
 * Validates a basic email format.
 * @param {string} email - The email to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
function validateEmail(email) {
    return email.includes("@") && email.includes(".");
}

// Example Tests:
console.log(validateEmail("user@example.com")); // true
console.log(validateEmail("invalid-email"));    // false


