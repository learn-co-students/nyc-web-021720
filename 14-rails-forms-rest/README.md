# Rails forms and REST

> **Note:** If you are having environment issues, please let a teacher know as soon as possible. Don't let this stop you from doing the pre-work and participating.

## Scenario
You work at a clinic and have been tracking appointments between doctors and patients on paper for over 50 years. The rest of the office takes pride in it, but it is error-prone. Lucky for you, you and a few of your coworkers already know how to make web apps! You team up to create an application with the following app requirements:

* View all doctors
  - GET `/doctors`
* View all patients
  - GET `/patients`
* View a patient with their appointments
  - GET `/patients/:id`
* Create a new doctor with a name and specialty
  - GET `/doctors/new`
* Create a new patient with a name and a condition
  - GET `/patients/new`
* Create a new appointment between a patient and a doctor with a time and date
  - GET `/appointments/new` # show a form
* Edit a doctor's specialty
  - GET `/doctors/:id/edit`
* Edit a patient's condition
  - GET `/patients/:id/edit`
* Edit the doctor for an appointment
  - GET `/appointment/:id/edit`
* Remove (or cancel) an appointment
  - ???

## **Discussion questions:** Doctor's office app development plan

> **Note:** Each group needs to work on all of these questions and *each individual in each group* needs to have an understanding of this domain. We'll use the same domain for the workshop and the lecture, and they will build on each other. It would be a good idea for one person to drive/take notes and send a copy of the notes to others since we may be breaking into new groups throughout the day.

In your table groups, set up the foundations for the system that we'll be building in lecture by thinking through and documenting each the following:

* Physically/digitally draw the models in the domain, including:
  * their relationships
  * their attributes and their attributes' data types
  * their foreign-keys (if applicable)
  * Domain model:
    - Doctor (model)
      - relationships
        - has many appointments
        - has many patients through appointments
      - attributes
        - name:string
        - specialty:string
    - Patient (model)
      - relationships
        - has many appointments
        - has many doctors through appointments
      - attributes
        - name:string
        - condition:string
    - Appointment (model)
      - relationships
        - belongs to doctor
        - belongs to patient
      - attributes
        - patient_id:integer
        - doctor_id:integer
        - appointment_time:datetime
* Type out the commands you'll use to generate the application, models, and schema below:
  * Application: `rails new appointment-app`
  * Model: `rails _ _____ ______`
    - `rails g model Doctor name:string specialty:string`
    - `rails g model Patient name:string condition:string`
    - `rails g model Appointment patient_id:integer doctor_id:integer appointment_time:datetime`
  * Schema: `rails db:migrate`
* Note changes you need to make to your migrations, if any
* Note changes you'll need to make to your models, if any
* Type out the command you'll use to test that your database is set up properly:
  * `rails c` or `rails console`
* Create seeds
* Type out the HTTP verb and routes that you think your application will need:
  * (ex. `get '/example', to: controller#action`)
  * HTTP Verbs:
    * GET,
    * POST,
    * PATCH,
    * DELETE
* Type out the views/templates that you think your application will need:
  * (ex. `views/examples/index.html.erb`)
* For each view that will need to be a form, type out what information will need to be included on that form:
  * (ex. `Example create form: we need the title and description of the example.`)
* Type out the commands you'll use to generate the controllers for each route:
  * `rails _ __________ example`
* Type out the command that you'll use to check that your routes are set up correctly
  * `rails ______`
* Type out the command you'll use to start your server:
  * `rails _` or `rails ______`
* Type out enough lines of your seed data that would help you to test that your application meets all of the requirements:
  * (ex. `Example.create(title: "Another example!")`)

## **Workshop/review:** Doctor's office app MVP

In this workshop we'll review the process of **building a Rails app one requirement at a time** using the development plan we created above. We'll use this time to focus on the following requirements:

* View all doctors
* View all patients
* View a patient with their appointments


## **Lecture:** Doctor's office app remaining functionality

> **Note to self:** Record, please!

In this lecture, we'll build on top of our app's MVP (minimum viable product) to add in create, update, and delete functionality. If we have time, we will also build validations into our form.

### Objectives
* Define CRUD and REST, and map aspects of each to the other
* Write Rails forms in plain HTML that send data to the server
* Rewrite Rails forms using Rails view helpers
* Use form data on the server-side to process forms
* Create update and delete functionality

### Notes
