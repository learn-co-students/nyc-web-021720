
# Rails API

## Questions

## Learning Goals

- [ ] Initialize a Rails application in API mode
- [ ] Set up Rails to serve JSON
- [ ] Refactor existing app to work with new backend
- [ ] Utilize `fetch` to make calls to Rails API and manipulate DOM with response


## Running the App 

* make sure you are in the director for the Rails app
  * `cd rails-api`
* bundle to get all the gems
  * `bundle install`
* create the Postgres database (you should have Postgres installed from the Day 1 setup steps)
  * `rails db:create`
* run migrations
  * `rails db:migrate`
* seed data
  * `rails db:seed`
* run the Rails server
  * `rails s`
* confirm the app is serving JSON
  * `http://localhost:3000/api/v1/movies`

### Helpful Commands

* create a Rails app in API mode with a Postgresql database (and not as a Git repository)
  * `rails new movies-api --api -G -d=postgresql`


* create a new resource:
  * `rails g resource Api::V1::Movie title year:integer score:integer imageUrl`