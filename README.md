# Money-Tracker Interactive App! 

Submitted by: 

**Tahim Bhuiya**

This web app: **is a simple personal finance tracker where users can log transactions with an amount, description, and date/time, and instantly see their updated balance. The app displays transactions in a clean list with color-coded amounts (green for income, red for expenses), formatted dates, and a visually distinct cents display. In this continuation, I have improved the styling for better readability, formatted the datetime output for clarity, and prepared the backend to store and retrieve transaction data using a Node.js/Express server with MongoDB.**

## Features

The following **required** functionality is completed:

- [x] **The user can add a new transaction with an amount, description, and date/time**
- [x] **The total balance is automatically calculated and displayed at the top of the page**
- [x] **Transactions are displayed in a list with the most recent first**
- [x] **Amounts are color-coded (green for income, red for expenses)**

The following **additional** features are implemented:

- [x] **Cents are displayed in a smaller font for a cleaner look**
- [x] **Dates and times are formatted into a more readable format**
- [x] **Backend integration with Node.js/Express and MongoDB for persistent data storage**


## Notes

**Building this finance tracker app came with several challenges, particularly in backend integration, data formatting, and styling. Some of the main challenges included:**

**Connecting to MongoDB and Handling Data Persistence**
One of the primary challenges was ensuring that the app could reliably connect to MongoDB using environment variables. This involved properly configuring the .env file, managing asynchronous database operations with Mongoose, and ensuring transactions were saved and retrieved correctly from the backend.

**Formatting and Displaying Dates**
By default, JavaScript date values returned from MongoDB appeared in ISO format (e.g., 2025-08-07T22:52:00.000Z), which isn’t user-friendly. Formatting these values into a readable, localized date and time required additional logic on the frontend to improve the user experience.

**Styling Transaction List and Balance Display**
Designing a clean, compact UI was key to making the tracker easy to use. Balances needed to be styled with smaller cents, income needed to appear in green, expenses in red, and transaction descriptions had to be subtle but readable. Small font tweaks and layout adjustments ensured everything fit well in a mobile-friendly view.

**Synchronizing Frontend and Backend Data**
Another challenge was ensuring that when a user added a transaction, the frontend state updated in sync with the backend database. Handling asynchronous fetch requests and updating state without losing the new transaction data required careful sequencing of API calls and state updates.