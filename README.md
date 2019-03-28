# SdgTask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `npm install` to get all needed packages.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## About the task

This solution has been developed in about 6 hours during 3 days. Although my main framework is AngularJS, I wanted to use Angular 7 so I had to do some research in the syntax and some elements that I used here.

The Front End consists in 2 views rendered by 2 components, and another component to wrap them up. One view is public containing the login form, and the other one is auth-protected containing the elevators info for the specific logged user. A service to authenticate the user, another service to get the elevators data, a guard to protect the private view, and an interceptor to send the JWT along with the requests.

What I couldn't implement but considered it was the possibility to 'refresh' the app every minute as the database is updated every minute so that the user will see the new data as it comes into the database. Also a layout improvement with more sophisticated design, more unit tests and e2e testing.
