# Country Information App

This is a simple web application built with React that allows users to search for country information. The app retrieves data from the [Restcountries API](https://restcountries.com/) to display details about countries based on user input.

## Features

- **Search**: Users can enter a country name in the search bar and click the "Search" button to retrieve information about that country.
- **Country Details**: The app displays information about the searched country, including its flag, name, capital, region, population, official language, and currency.
- **Error Handling**: If the search query doesn't match any country or if there's an issue with the API request, the app will display a "Data not found" message.

## Getting Started

To run this application locally, follow these steps:

1. Clone this repository to your local machine.

2. Install the required dependencies using npm or yarn. Run the following command in the project directory:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

4. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to use the application.

## Usage

1. Enter a country name in the search input field.
2. Click the "Search" button to retrieve information about the country.
3. The app will display the country's details if found.
4. If the country is not found or if there's an issue with the search, a "Data not found" message will be displayed.

## Technologies Used

- React
- JavaScript
- CSS

## API Used

- [Restcountries API](https://restcountries.com/)

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/my-feature` or `git checkout -b bugfix/my-bug-fix`.
3. Make your changes and commit them with clear and concise messages.
4. Push your changes to your fork: `git push origin feature/my-feature`.
5. Open a pull request to the main repository's `main` branch.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
