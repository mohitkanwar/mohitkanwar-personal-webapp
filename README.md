# MohitkanwarApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---
# Code Structure
The app directory consists of the following paths

1. layout
1. pages
1. shared

## layout
This directory contains the components used to design the overall layout of the application.
e.g.  
  * Header
  * Footer
  * Wrapper 

  The header  contains the logo and navigation items for web.

  The Footer contains the footer items

  Wrapper is the parent component that stiches header and footer together, and defines the layout.

  ## pages

  This folder contains the main pages that are displayed on the main navigation. Each page is a module, and has a home component to be displayed.

  To create a new page, 
  1. add a new module
  1. update the navigation bar
  1. update the app routing
  1. if required, update the module routing

  As of today, there are three pages
  1. Home : this is the home page of the application
  1. General : This module contains the general pages e.g. privacy policy etc.
  1. Technology : This module contains the blogs related to technology

## Shared
This section contains the components that can be used across the modules. e.g.
1. md-read
   * This component has the ability to read a markdown file and display it on the page as HTML
1. page-not-found
    * This component is the default component when a given page is not found.