React Interview Task – UI Implementation
This project is a React-based implementation of a given Figma UI design as part of an interview assignment. The goal was to translate the provided design into a responsive and maintainable React application, while ensuring future scalability and ease of data updates.

✨ Features
🔧 Component-Based Architecture: The entire UI is broken down into reusable and modular React components for better scalability and code readability.

🎨 Pixel-Perfect Design: UI closely matches the provided Figma design.

🔄 Dynamic Data Rendering: Extracted UI content from the design and converted it into a structured JSON file for flexible data management.

⚙️ State Management: Utilized useState and useEffect hooks to manage and populate dynamic content.

🔗 API-Like Data Handling: Fetched data from a local JSON file to simulate API behavior, making future integration with backend services seamless.

🛠️ Tech Stack
React (Vite-based setup)

Tailwind CSS 

JavaScript (ES6+)

Figma (for design reference)


📊 How It Works
The static content from the Figma design was converted into a data.json file under the src/data directory.

On component mount, the data is fetched using useEffect and stored in a useState variable.

This dynamic approach ensures that any UI or content updates can be done directly in the JSON file, without modifying component logic.

When real APIs are available, this structure allows a plug-and-play replacement for data fetching.


# Clone the repository
git clone https://github.com/Akash7785/websultanateTask


# Install dependencies
npm install

# Run the app
npm run dev
✅ Why This Approach?
🔁 Reusability: Components are designed for reusability across different parts of the application.

🧩 Maintainability: Data-driven UI using external JSON ensures that updates are simple and centralized.

📈 Scalability: Structure supports easy integration with real APIs and backend systems.


Thank you for the opportunity!
This project reflects my approach to building clean, maintainable, and scalable front-end applications using React. I'm open to feedback and excited to contribute further.
