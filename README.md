## Cybermaxi News App

This is a Next.js 14 application built with TypeScript, Tailwind CSS, GraphQL (using StepZen), and React Timeago to display news articles.

### Features

* **Dynamic News Feed:** Fetches news articles from various sources using StepZen.
* **Categories and Keywords:** Filter news by categories and keywords.
* **Dark Mode:** Toggle between light and dark themes.
* **Timeago:** Displays time since article publication using React Timeago.

### Installation

1. Clone this repository.
2. Install dependencies:

   ```bash
   npm install
   ```

### Usage

1. **Set up your StepZen API:**
   - Create a StepZen account and obtain your API key.
   - Configure StepZen to connect to your desired news API.
2. **Set environment variables:**
   - Create a `.env.local` file at the root of the project.
   - Add the following variables with your values:

     ```
     NEXT_PUBLIC_STEPZEN_API_KEY=<your_stepzen_api_key>
     ```

3. **Run the application:**

   ```bash
   npm run dev
   ```

   This will start the development server and open the app in your browser at http://localhost:3000.

### Technologies

* **Next.js:** Server-side rendering framework
* **TypeScript:** Superset of JavaScript for type safety
* **Tailwind CSS:** Utility-first CSS framework
* **GraphQL:** Data query language
* **StepZen:** GraphQL management platform
* **React Timeago:** React component for displaying relative time

### Deployment

You can deploy this application to any platform that supports Next.js applications, such as Vercel, Netlify, or AWS Amplify. Follow the deployment instructions specific to your chosen platform.

### Contributing

Pull requests are welcome. Please follow the standard Git workflow and ensure your code adheres to the project's style and formatting guidelines.

### License

This project is licensed under the MIT License. See the `LICENSE` file for details.

### Disclaimer

This is a basic structure for a README file. You may need to add additional information specific to your project, such as:

* Detailed setup instructions for StepZen
* Contribution guidelines
* Screenshots or a demo link
* Contact information

