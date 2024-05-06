# My React Application

<img src="assets/screenshot.png">

My React Application is a web application built with React that provides various pages for user authentication and account management.

## Pages

- **Home**: Landing page of the application.
- **Login**: Allows users to log in to their accounts.
- **Register**: Allows new users to create an account.
- **Reset Password**: Allows users to reset their passwords.
- **Waiting Confirmation**: Informs users to check their email for confirmation.
- **Confirmation**: Displays a confirmation message after successful registration.


## Installation

### Using Dockerfile

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Build the Docker image using the provided Dockerfile:

   ```shell
   docker build -t docker-react .
   ```

   Replace `docker-react` with the desired name for your Docker image.

4. Run the Docker container:

   ```shell
   docker run -d \
      --name docker-react \
      -v ${PWD}:/usr/src/app \
      -v /usr/src/app/node_modules \
      -p 3000:3000 \
      --rm \
      docker-react
   ```

   This command will start the Docker container in detached mode, and the application will be accessible at [http://localhost:3000](http://localhost:3000) in your browser.

### Using npm

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using npm:

   ```shell
   npm install
   ```

4. Start the development server:

   ```shell
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## License

This project is licensed under the [MIT License](LICENSE).
