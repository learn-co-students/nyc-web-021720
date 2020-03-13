# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
d1 = Doctor.create(name: "Joseph", specialty: "blankets")
d2 = Doctor.create(name: "Matthew", specialty: "yellow hats")

p1 = Patient.create(name: "Gabbie", condition: "loves cooking so much")
p2 = Patient.create(name: "Jeff", condition: "itis")

a1 = Appointment.create(patient: p2, doctor: d1, appointment_time: DateTime.now)
a2 = Appointment.create(patient: p1, doctor: d2, appointment_time: DateTime.now)
a3 = Appointment.create(patient: p2, doctor: d1, appointment_time: DateTime.now)
a4 = Appointment.create(patient: p1, doctor: d2, appointment_time: DateTime.now)
a5 = Appointment.create(patient: p2, doctor: d1, appointment_time: DateTime.now)
