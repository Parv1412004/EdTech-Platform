# Project Setup & Run Guide

## Steps to Run the Project  

1. **Download the Project**  
   - Clone the repository or download the ZIP file from GitHub.  
   - Extract the ZIP file to your preferred location.  

2. **Open the Project in a Code Editor**  
   - Use VS Code or any other preferred code editor.  

3. **Install Dependencies**  
   - Open the terminal and run:  
     ```sh
     npm install
     ```
   - Navigate to the server folder and install server dependencies:  
     ```sh
     cd server
     npm install
     ```

4. **Configure Environment Variables**  
   - Open the `.env` file.  
   - Add the required environment variables, such as:  
     - **MongoDB Connection String**  
     - **Cloud API Key**  
     - **Secret Key**, etc.  

5. **Start the Project**  
   - In the main terminal, run:  
     ```sh
     npm run start
     ```
   - In another terminal, navigate to the `server` folder and run:  
     ```sh
     npm run start
     ```
   - This will start the server.  
  
