# angular-redux-rxjs-boilerplate
Angular 5 and Redux-Observable boilerplate with Angular CLI


A highly opinionated, advanced starter kit for web development using 
<a href="https://angular.io/">Angular 5</a>,
<a href="https://redux.js.org/">Redux</a> and 
<a href="https://redux-observable.js.org/">Redux-observable</a>.

A React version yu can find here <a href="https://github.com/krzyszt/react-redux-rxjs-boilerplate">react-redux-rxjs-boilerplate</a>.

## Quick start

1. Clone this repo using `git clone https://github.com/krzyszt/angular-redux-rxjs-boilerplate.git`
2. Move to the appropriate directory: `cd angular-redux-rxjs-boilerplate`<br />
3. Run `yarn install` in order to install dependencies<br />
4. At this point you can run `ng serve -o` to see the example app at `http://localhost:4200`

## Redux and Epics(Redux-Observable). Welcome to Reactive Programming! 

The starter kit comes with a configured Redux store which uses 
<a href="https://redux-observable.js.org/">Redux-observable</a> 
(<a href="https://github.com/ReactiveX/RxJS">RxJS 5</a>- based middleware for Redux).
<br />

Redux-observable turns every action emitted by your Redux app into an observable stream. 
The core primitive of redux-observable is called an epic, which is a function that listens for actions on that stream, 
and allows you to react to those actions before optionally emitting new actions yourself — actions in , actions out. 
<br />

To add a new application slice just add a new reducer to the rootReducer then add new actions and epics or replace existing ones.
