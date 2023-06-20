
# Library API

Challenge proposed by DNC to create an API that allows users to store, edit and remove books. It connects with the front-end repo provided by the teacher.

## Screenshots

<img src="https://github.com/kunzeleric/challenge-book-register/assets/114115220/1d30ce25-c296-4164-954e-efb344a1998a" width="400" height="250"/>


## Technologies

- Node.js
- Express
- MongoDB
- Mongoose

## API Documentation

### Returns all books

```http
  GET localhost:3000/livros
```

### Returns one book

```http
  GET localhost:3000/livros/:id
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Mandatory**. The ID Of the book you are searching. |


### Create a new book

```http
  POST localhost:3000/livros
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Mandatory**. The ID Of the book you are creating. |
| `titulo`      | `string` | **Mandatory**. The Title of the book you are creating. |
| `num_paginas`      | `number` | **Optional**. The number of pages of the book you are creating. |
| `isbn`      | `string` | **Optional**. The ISBN code of the book you are creating. |
| `editora`      | `string` | **Optional**. The editor of the book you are creating. |

### Edit a book

```http
  PUT localhost:3000/livros/:id
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Mandatory**. The ID Of the book you are creating. |
| `titulo`      | `string` | **Optional**. The Title of the book you are creating. |
| `num_paginas`      | `number` | **Optional**. The number of pages of the book you are creating. |
| `isbn`      | `string` | **Optional**. The ISBN code of the book you are creating. |
| `editora`      | `string` | **Optional**. The editor of the book you are creating. |


### Delete a book

```http
  DELETE localhost:3000/livros/:id
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Mandatory**. The ID Of the book you are deleting. |




## Setup

After cloning or downloading the project, use the commands below in the terminal.

```bash
  npm install my-project
  cd my-project
  npm run dev
```
    
## Author

- [@kunzeleric](https://www.github.com/kunzeleric)

