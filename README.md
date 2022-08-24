## Getting Started

To get a local copy up and running follow these simple steps.
<br/>

### Prerequisites

NodeJS, MongoDB is installed on your machine 

### Installation

1. Clone the project

```sh
$ git clone https://github.com/yadav-Keshav/ticket_booking
```

2. Install NPM packages

```sh
$ yarn install or $ npm install
```

3. Start the API

```sh
$ yarn dev or $ npm run dev
```

## Setup ENV
At first create a .env file into your root directory and use all the provided variables. 
- PORT=8000 (use any port no)
- DB_URI=mongodb+srv:<username>:<password>@cluster0.2jqjb3f.mongodb.net/?retryWrites=true&w=majority 
(replace username and password with your own username & password)
- SALT_ROUND=10 (SALT_ROUND should be minimum 10)
- JWT_SECRET=wXlf2n3VHwAoa5KqpTUUDz9+1GOYp3Zo/iVZND9hXck= (JWT_SECRET should be min 32char long)
<br/><br/>



