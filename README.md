# Next.js - Strapi - Personal Portfolio & Blog

![screenshot image](/screenshot.png)

## Introduction

If you are looking for a solid alternative to WordPress for a personal website built entirely in TypeScript, this project might be suitable. This is a basic portfolio and blog website built with Next.js and Strapi, featuring a minimalistic design with all essential functionalities including:

-   Home page
-   About page
-   Projects page
-   Articles page
-   Contact page
-   Search page

The frontend is developed using Next.js and the backend utilizes Strapi as a CMS for easy content management. Additionally, the project integrates libraries such as Tailwind CSS, Radix UI, and Lucide React for interface development. Formik and Yup are used for form building (contact and comments).

## Installation Guide

Ensure you have Node.js, Next.js, Strapi, and MySQL installed. For environment setup, refer to the respective documentation online.

**Don't forget to set up environment variables for your production app using a `.env` file in the CMS folder.**

Step 1: Run the backend development environment (Strapi) using the command:

```sh
npm run dev
```

Once running, the backend listens on http://localhost:1337.

Step 2: Run the frontend development environment (Next.js) using the command:

```sh
npm run dev
```

Once running, the frontend listens on http://localhost:3000.
