Company Building

Building
- has many companies
- has a city
- has a name
- number of floors

Company 
- belongs to a building 
- has a name 

- What would the tables look like 
- Which table(s) will have foreign keys
  - why?

  - Which methods should AR build for each model

    - CRUD (Create, Read, Update, Delete)

  - Create
    - Building.create && .new && .save
  - Read
    - building.companies
    - Building.all
    - building.city
    - building.name
    - Building.first
    - company.building
    - Comnpany.all
    - Building.find(takes in an argument of id)
    - Building.find_by(takes in a key/value to find an instance by)
  - Update
    - building.companies.push
    - company.building=
    - building.city=
    - building.name=
  - Delete
    - building.destroy
    - Building.destroy_all

    what are the macros that we have to write to setup the relationship in ruby

Building has many Companies
Company has many Buildings

What changes will I have to make to my domain? 