# LWS exam

This is a Laravel-based application for displaying anime list. It features CRUD capability of the framework alongside with React as a frontend side stack.

## Table of Contents

- [Stack](#stack)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Development Environment](#running-the-development-environment)
- [Contributing](#contributing)

## Stack

- **Laravel**: Powerful and efficient back-end framework.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Php**: Widely-used, open-source server-side scripting language designed primarily for web development. It is a powerful tool for creating dynamic and interactive web applications. 
- **React**: Modest JavaScript framework for enhancing HTML.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Php (version = 8.1.2)
- Laravel (version >= 10.48.20)
- Node.js (version >= 18.20.4)
- Yarn
- MySQL (version >= 8.0.39)

### Installation

1. **Clone the repository:**

   ```sh
    git clone git@github.com:sacalamitao/lws-exam.git
    cd lws-exam
   ```

2. **Install dependencies:**

    Make sure you have MySQL installed and running. Then, create the database and run migrations:

   ```sh
    composer install
    npm install
   ```

3. **Setup the database:**

   ```sh
    In MySQL
    CREATE DATABASE lws_exam;
   ```

### Running the Development Environment

  To start the development environment, use the following command:

   ```sh
    php artisan key:generate
    php artisan migrate
    npm run dev
    php artisan serve
   ```

   This will start the Laravel server and other necessary processes like compiling your assets.

  ## Note
  Ensure that you have properly set up your .env file according to your local database setup.

### Contributing

  **Creating a new branch:**

     ```sh
     git checkout -b lws-number-of-ticket/my-feature
     ```

     e.g. for user John Doe working on the feature "Add new user", the branch name would be:

     ```sh
     git checkout -b lws-01/add-new-user
     ```

  **Creating Service Objects:**

    Service objects are used to encapsulate business logic that doesn't belong in a model or controller. We store them in the `app/services` directory.
    This would be the basic design pattern that we should use for this project.

    We use `save` for service objects that are connected to a view, while `create!` is used for service objects that arent.

    A sample template for a service object is shown below:

  ```php
    php artisan make:class PostService

    <?php

    namespace App\Services;

    class PostService
    {
        // Service methods go here
    }

  ```

  **Creating a Pull Request:**

  Ensure that your code is properly tested and linted(not being implemented as of the moment, but will be in the future) before creating a pull request. 

  If all tests pass and there are no linting errors, you can create a pull request. Make sure to include a detailed description of the changes you made and any relevant information that will help reviewers understand your code. If possible add screenshots or gifs to show the changes you made.

  Tag a reviewer to review your code. Once the reviewer approves your code, you can merge it into the main branch.

  Delete the branch after merging it into the main branch.
