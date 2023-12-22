
<a name="readme-top"></a>

<br />
<div align="center">
    <img src="https://live.staticflickr.com/65535/53415183739_0678a49b6d.jpg" alt="Logo">
  

  <h3 align="center">Guia do campus - API</h3>

  <p align="center">
    <br />
    <a href="https://guiadocampus-jln105qc.b4a.run">View API</a>
    ·
    <a href="https://guiadocampus.vercel.app/">View website</a>
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
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<img src="https://live.staticflickr.com/65535/53415030818_2398366cd4_z.jpg" />

At IFPI Campus Pedro II, where I study, I noticed that despite having good infrastructure, internal communication faced challenges. Therefore, I developed a project using technologies such as QR codes and a website to enhance access to information about rooms and departments. The goal was to make communication more efficient and accessible, especially for students.

The basic idea is to distribute QR codes throughout the campus. Each department would have a QR code on the door that leads to the website's page for that specific department. This way, students would have instant access to information. If a student is not on campus, they can also access the website from home.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

#### Backend Technologies: 

* <a href="https://nodejs.org/en">
    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white">
    </a>
* <a href="https://nestjs.com/">
    <img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white">
    </a>
* <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
    </a>
* <a href="https://www.postgresql.org/">
    <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white">
    </a>
* <a href="https://www.prisma.io/">
    <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white">
    </a>
* <a href="https://aws.amazon.com">
    <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white">
    </a>
* <a href="https://www.docker.com/">
    <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white">
    </a>
* <a href="https://swagger.io/">
    <img src="https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white">
    </a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
1. first you will need a .env file with the values:
```
PORT=XXXX (The port you want to run your application)
DATABASE_URL=(the url of a postgres database)
TOKEN_KEY=(a secret token to generate jwt)
S3_BUCKET=(the name of a bucket in aws s3)
S3_REGION=(the region of you aws s3 server)

S3_ACCESS_KEY=(the access key to your aws)
S3_SECRET=(the secret access key to your aws)
```
2. run migrations to setup your database
```sh
npx prisma migrate deploy
```
3. npw to install the dependencies and run the app you will have two choices, using docker or without docker

#### with docker is quite easy. you have to run:

* docker
    ```sh
    docker build --pull --rm -f "Dockerfile" -t guiadocampus:latest "."
    ```
    when it finish just run:
    ```sh
    docker run -p 8080:80 guiadocampus:latest
    ```
then access your port 8080

#### if you don't have docker you will need node.js
* npm
  ```sh
    npm i
  ```
and to run:

* for development:
    ```sh
    npm run start:dev
    ```

* for production:
    ```sh
    npm run start:dev
    ```


<!-- USAGE EXAMPLES -->
## Usage

to fully understand the usage see the [Documentation](https://guiadocampus-jln105qc.b4a.run/api)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


