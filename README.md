# Lendsqr Mocky GraphQL API Backend

This project is an example of an Express server built with TypeScript that fetches and returns data in a paginated format. The server handles requests for paginated data, allowing clients to specify the page number and the number of items per page.

## Table of Contents

- [Lendsqr Mocky GraphQL API Backend](#lendsqr-mocky-graphql-api-backend)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
  - [Usage](#usage)
    - [Running the Server](#running-the-server)

## Installation

### Prerequisites

- Node.js (>=14.x)
- npm (>=6.x)

### Steps

1. **Clone the repository:**

    ```sh
    git clone https://github.com/Vicolas11/lendsqr_be_graphql.git
    cd lendsqr_be_graphql
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Install TypeScript and ts-node globally (if not already installed):**

    ```sh
    npm install -g typescript ts-node
    ```

## Usage

### Running the Server

To run the server in development mode using `ts-node`, use the following command:

```sh
npx ts-node server.ts
```
The server will start on port 3000 (or a port specified in the PORT environment variable).
