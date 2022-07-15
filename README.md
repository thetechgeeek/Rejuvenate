<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/thetechgeeek/Rejuvenate">
    <img src="logo_rejuvate.jpg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Rejuvenate</h3>

  <p align="center">
    a robust skincare e-commerce web application
    <br />
    <a href="https://github.com/thetechgeeek/Rejuvenate"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://rejuvenate0.herokuapp.com/">View Live version</a>
    ·
    <a href="https://github.com/thetechgeeek/Rejuvenate">Report Bug</a>
    ·
    <a href="https://github.com/thetechgeeek/Rejuvenate/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://rejuvenate0.herokuapp.com/)
Modern and user-friendly skincare shopping platform incorporating:

✔ Fully featured shopping cart with seamless payment system offering PayPal & credit/debit payments
✔ Holistic administrative dashboard to manage products, orders and users
✔ Product rating & review system
✔ Added functionalties such as product search, carousel, pagination & more

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

## Tech Stack

**Client:** React, Redux, Bootstrap
**Server:** Node.js, Express
**Database:** MongoDB

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

### ES Modules in Node

We use ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error

You can also install and setup Babel if you would like

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@example.com (Admin)
123456

john@example.com (Customer)
123456

jane@example.com (Customer)
123456
```


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
[product-screenshot]: logo_rejuvate.jpg
