# Teamwork Recruitment Task

## Overview

This repository contains the solution for the **Teamwork Marketing - Front-end Assessment** recruitment task.

The goal of this project was to built a reusable section of a webpage responsible for fetching and presenting data that illustrates how the product assists teams with their work planning.

The deployed version is available at [teamwork-eight.vercel.app](https://teamwork-eight.vercel.app/)

## 🚀 Setup and Installation

This project was built using **Nuxt 3**. To run it locally, follow these steps:

1. Clone repo:

```
git clone AleksandraZosia/teamwork
```

2. Install dependencies:

```bash
# npm
npm install
```

3. Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

Check out the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## 💡 Implementation Decisions & Principles

In tackling this assignment, my focus was on delivering a clean, functional solution while demonstrating an understanding of best practices, **without over-engineering the final product.**

1. Development Principles & Code Structure

I implemented the following structure to ensure maintainability and scalability, even for this small project:

- Modular SCSS/CSS:
- Defined core variables in dedicated partials, specifically:
- `_colors.scss` : Centralized management of the design system's color palette.
- ` _breakpoints.scss` : Defined standard media query breakpoints to ensure responsive layout is managed from a single source of truth.
  - Reusable Component Design:
    - The user interface is broken down into small, easy to manage components (e.g., `Accordion`, `Arrow`). This makes my code easy to read and maintain and modify.

2. Balancing Complexity (KISS Principle)
   To maintain focus on the core requirements and the **"Keep It Simple, Stupid" (KISS) principle**, I intentionally omitted certain architectural patterns:

| routing| the project contains only single view|

- global state management : component hiearchy is shallow and all data comes from single request, so prop drilling was minimal.

| Omitted feature         | Rationale                                                                                           |
| ----------------------- | --------------------------------------------------------------------------------------------------- |
| Routing                 | the project contains only single view                                                               |
| Global state management | component hiearchy is shallow and all data comes from single request, so prop drilling was minimal. |
