Project Setup & Run Guide
Steps to Run the Project
Download the Project

Clone the repository or download the ZIP file from GitHub.
Extract the ZIP file to your preferred location.
Open the Project in a Code Editor

Use VS Code or any other preferred code editor.
Install Dependencies

Open the terminal and run:
sh
Copy
Edit
npm install
Navigate to the server folder and install server dependencies:
sh
Copy
Edit
cd server
npm install
Configure Environment Variables

Open the .env file.
Add the required environment variables, such as:
MongoDB Connection String
Cloud API Key
Secret Key, etc.
Start the Project

In the main terminal, run:
sh
Copy
Edit
npm run start
In another terminal, navigate to the server folder and run:
sh
Copy
Edit
node app.js
This will start the server.
🎉 Your project is now up and running! 🚀