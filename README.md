# Preview

```
Sebuah Kafe Twinklebucks membutuhkan aplikasi untuk mencatat recipe-recipe minuman yang akan disajikan di Twinklebucks.
Kalian diminta untuk membuat sebuah aplikasi yang dapat melakukan Create, Read, Update, Delete terhadap Recipe & Bahan Minuman
Contohnya data yang akan diterima adalah

Contoh Bahan
- Espresso
- Milk
- Strawberry Syrup
- Chocolate Syrup
- Vanilla Syrup
- Whipped Cream

Contoh Recipe,
Recipe Coffe Latte
- Espresso
- Milk

Recipe Straberry Frappucino
- Milk
- Strawberry Syrup
- Whipped Cream

```

# Title

```
Cafe Recipe Admin App

```

# ERD Schema, Mockup Design

```
https://app.diagrams.net/#G1x2Fkrw1blOp2Ix_W0QkQbxGR2dyc36PU

```

# URL

```
http://localhost:3000
```

# METHODS

1. Users

```
- POST /users/register
- POST /users/login
```

2. Menus

```
- POST /menu
- GET /menu
- GET /menu/:id
- PUT /menu/:id
- DELETE /menu/:id

```

3. Ingredients

```
- POST /ingredients
- GET /ingredients
- GET /ingredients/:id
- PATCH /ingredients/:id
- DELETE /ingredients/:id

```

4. Recipes

```
- GET /recipes
- PATCH /recipes/:id
- GET /recipes/:id
```

# ENDPOINTS

### USERS

1. Register new Admin

```
Method: POST
URL: /users/register
Required Auth: No
```

- Request Body:

```
{
  full_name: "Admin"
  email: "<email admin>",
  password: "<password admin>",
  role: "Admin"
}
```

- Success Response:

```
{
  success: true,
  message: "Successfully create new user"
}
```

2. Login

```
Method: POST
URL: /users/login
Required Auth: No
```

- Request Body:

```
{
  email: "<email admin>",
  password: "<password admin>",
}
```

- Success Response:

```
{
  success: true,
  access_token: "<admin access_token>"
}
```

### MENUS

1. Create New Menu

```
Method: POST
URL: /menu
Required Auth: Yes (only for admin role)
```

- Request Headers:

```
{
  access_token: "<admin access_token>"
}
```

- Request Body:

```
{
  name: "<menu name>",
  image: "<menu image>",
  recipes: ["", "", "", ""]
}
```

- Success Response:

```
{
  success: true,
  message: "Successfully created a new menu"
}
```

2. Get All Menu

```
Method: GET
URL: /menu
Required Auth: Yes (only for admin role)
```

- Request Headers:

```
{
  access_token: "<admin access_token>"
}
```

- Success Response:

```
[
  {
    "id": 1,
    "name": "Vanilla Latte",
    "image": "https://cf.shopee.co.id/file/262377119bfb1f13f637e06bbf930b8f",
    "createdAt": "2021-08-26T10:56:04.000Z",
    "updatedAt": "2021-08-26T10:56:04.000Z"
  }
]
```

3. Get Detail Menu by Specific Id

```
Method: GET
URL: /menu/:id
Required Auth: Yes (only for admin role)
```

- Request Params

```
id: integer
```

- Request Headers:

```
{
  access_token: "<admin access_token>"
}
```

- Success Response:

```
{
  data: {
    menu : {
      id: "<menu id from database system>",
      name: "<menu name>",
      image: "<menu image>",
     },
     recipes: []

  }
}
```
// kepake 
4. Update Menu by Specific Id

```
Method: PUT
URL: /menu/:id
Required Auth: Yes (only for admin role)
```

- Request Params

```
id: integer
```

- Request Headers:

```
{
  access_token: "<admin access_token>"
}
```

- Request Body:

```
{
  name: "<menu name>",
  image: "<menu image>",
}
```

- Success Response:

```
{
  success: true,
  maessage: "Successfully updated a menu with id <id>"
}
```

5. Delete Menu by Specific Id

```
Method: DELETE
URL: /menu/:id
Required Auth: Yes (only for admin role)
```

- Request Params

```
id: integer
```

- Request Headers:

```
{
  access_token: "<admin access_token>"
}
```

- Success Response:

```
{
  success: true,
  message: "Successfully deleted a menu with id <id>"
}
```

### Ingredients

1. Create New Ingredients

```
Method: POST
URL: /ingredients
Required Auth: Yes (only for admin role)
```

- Request Headers:

```
{
  access_token: "<admin access_token>"
}
```

- Request Body:

```
{
  name: "<ingredient name>",
}
```

- Success Response:

```
{
  success: true,
  message: "Successfully created a new ingredient",
  ingredient: { name: "<ingredient name>" }
}
```

2. Get All Ingredients

```
Method: GET
URL: /ingredients
Required Auth: Yes (only for admin role)
```

- Request Headers:

```
{
  access_token: "<admin access_token>"
}
```

- Success Response:

```
{
  ingredients : [
    {
      id: "<ingredient id from database system>",
      name: "<ingredient name>",
    }
  ]
}
```

3. Get Detail Ingredient by Specific Id

```
Method: GET
URL: /ingredients/:id
Required Auth: Yes (only for admin role)
```

- Request Params

```
id: integer
```

- Request Headers:

```
{
  access_token: "<admin access_token>"
}
```

- Success Response:

```
{
  ingredients :
  {
    id: "<ingredient id from database system>",
    name: "<ingredients name>",
  }

}
```

4. Update Ingredient by Specific Id

```
Method: PUT
URL: /ingredients/:id
Required Auth: Yes (only for admin role)
```

- Request Params

```
id: integer
```

- Request Headers:

```
{
  access_token: "<admin access_token>"
}
```

- Request Body:

```
{
  id: "<ingredient id from database system>",
  name: "<ingredient name>",
}
```

- Success Response:

```
{
  success: true,
  message: "Successfully updated a ingredient with id <id>"
}
```

5. Delete Ingredient by Specific Id

```
Method: DELETE
URL: /ingredients/:id
Required Auth: Yes (only for admin role)
```

- Request Params

```
id: integer
```

- Request Headers:

```
{
  access_token: "<admin access_token>"
}
```

- Success Response:

```
{
  success: true,
  maessage: "Successfully deleted a ingredient with id <id>"
}
```

### Recipes

1. Get All Recipes and Menu in Database

```
Method: GET
URL: /recipes
Required Auth: Yes (only for admin role)
```

- Request Headers:

```
{
  access_token: "<admin access_token>"
}
```

- Success Response:

```
{
  success: true,
  data: []
}
```

2. Add some Recipe to Menu

```
Method: POST
URL: /recipes/:id
Require Auth: Yes (only for admin role)

```

- Request Headers:

```
{
  access_token: "<admin access_token>"
}
```
- Request Body:
```
{
  recipes: [{
    MenuId: "<menu id>",
    IngredientId: "<ingredient id"
  }]
}
```

- Success Response:

```
{
  success: true,
  message: "Successfully add recipe of menu",
}
```

3. Get Recipe of Menu with Specific id

```
Method: GET
URL: /recipes/:id
Require Auth: Yes (only for admin role)

```

- Request Params:

```
- id: integer
```

- Request Headers:

```
{
  access_token: "<admin access_token>"
}
```

- Success Response:

```
[
  {
    "id": 1,
    "MenuId": 1,
    "IngredientId": 2,
    "createdAt": "2021-08-26T10:56:04.000Z",
    "updatedAt": "2021-08-26T10:56:04.000Z",
    "Ingredient": {
      "id": 2,
      "name": "Milk",
      "createdAt": "2021-08-26T10:52:04.962Z",
      "updatedAt": "2021-08-26T10:52:04.962Z"
    }
  },
  {
    "id": 2,
    "MenuId": 1,
    "IngredientId": 5,
    "createdAt": "2021-08-26T11:00:04.000Z",
    "updatedAt": "2021-08-26T11:00:04.000Z",
    "Ingredient": {
      "id": 5,
      "name": "Vanilla Syrup",
      "createdAt": "2021-08-26T10:52:04.962Z",
      "updatedAt": "2021-08-26T10:52:04.962Z"
    }
  },
  {
    "id": 3,
    "MenuId": 1,
    "IngredientId": 6,
    "createdAt": "2021-08-26T11:03:04.000Z",
    "updatedAt": "2021-08-26T11:03:04.000Z",
    "Ingredient": {
      "id": 6,
      "name": "Whipped Cream",
      "createdAt": "2021-08-26T10:52:04.962Z",
      "updatedAt": "2021-08-26T10:52:04.962Z"
    }
  }
]
```

# RESTful Error Message

1. Response Error (400) Bad Request - SequelizeValidationError

- Response Body:

```
{
  status: 400,
  message: "<array of error message>"
}
```

2. Status 400 Bad Request - SequelizeDatabaseError

- Response Body:

```
{
  status: 400,
  message: "<array of error message>"
}
```

3. Status 400 Bad Request - SequelizeUniqueConstraintError

- Response Body:

```
{
  status: 400,
  message: "<array of error message>"
}
```

4. Response Error (400) Bad Request - Invalid email or password

- Response Body:

```
{
  status: 400,
  message: ['Invalid email or password']
}
```

5. Status 401 JsonWebTokenError

- Response Body:

```
{
  status: 401,
  message: ['UnAuthenticated - You are not logged in']
}
```

6. Status 403 UnAuthorized

- Response Body:

```
{
  status: 403,
  message: ['UnAuthorized - Access is Denied']
}
```

7. Status 404 Menu Not Found

- Response Body:

```
{
  status: 404,
  message: ['Menu Not Found']
}
```

8. Status 404 Ingredient Not Found

- Response Body:

```
{
  status: 404,
  message: ['Ingredient Not Found']
}
```

9. Status 404 Recipe Not Found

- Response Body:

```
{
  status: 404,
  message: ['Recipe Not Found']
}
```

10. Status 500 Internal Server Errors

- Response Body:

```
{
  status: 500,
  message: ['Internal Server Errors']
}
```
