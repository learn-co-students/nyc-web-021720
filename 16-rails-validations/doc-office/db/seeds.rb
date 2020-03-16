# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# ? OLD SEED DATA (done with Tim)
# d1 = Doctor.create(name: "Joseph", specialty: "blankets")
# d2 = Doctor.create(name: "Matthew", specialty: "yellow hats")

# p1 = Patient.create(name: "Gabbie", condition: "loves cooking so much")
# p2 = Patient.create(name: "Jeff", condition: "itis")

# a1 = Appointment.create(patient: p2, doctor: d1, appointment_time: DateTime.now)
# a2 = Appointment.create(patient: p1, doctor: d2, appointment_time: DateTime.now)
# a3 = Appointment.create(patient: p2, doctor: d1, appointment_time: DateTime.now)
# a4 = Appointment.create(patient: p1, doctor: d2, appointment_time: DateTime.now)
# a5 = Appointment.create(patient: p2, doctor: d1, appointment_time: DateTime.now)


Doctor.destroy_all
Patient.destroy_all
Appointment.destroy_all


doctors = [
  {name: "Dr. Dre", specialty: "Making Hits", experience: 28, img_url: "https://i.insider.com/55c3c5eddd0895804e8b46ab?width=1100&format=jpeg&auto=webp"},
  {name: "Dr. Phil", specialty: "Tellin It Like it Is", experience: 35, img_url: "https://cdn1.thr.com/sites/default/files/2018/10/dr_phil.jpg"},
  {name: "Dr. Strange", specialty: "Time and Space", experience: 1000, img_url: "https://cdn.vox-cdn.com/thumbor/7K3uPy1iLOC4ovn73AY28U_-FGg=/0x0:1920x1079/1200x800/filters:focal(1085x298:1391x604)/cdn.vox-cdn.com/uploads/chorus_image/image/64773806/ply_dr_strange_graded.0.jpg"},
  {name: "Dr. Grey", specialty: "Doctor-ing", experience: 15, img_url: "https://uploads.poplyft.com/wp-content/uploads/2015/12/19171928/6358210837831832421606865759_mg.jpg"},
  {name: "Dr. Dolittle", specialty: "Talking to Animals", experience: 6, img_url: "https://cdn.onebauer.media/one/empire-tmdb/films/3050/images/g97xTt18p0WWnj6wxLGC0vBKFwQ.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg"},
  {name: "Dr. Seuss", specialty: "Tongue Twisters", experience: 50, img_url: "https://kubrick.htvapps.com/htv-prod/ibmig/cms/image/wcvb/19089804-19089804.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*"},
  {name: "Dr. Oz", specialty: "Healthy Habits", experience: 24, img_url: "https://cdn1.thr.com/sites/default/files/2019/10/drozshow_s08_s09_more_photography-gallery_16-h_2019.jpg"},
  {name: "Dr. Who", specialty: "Not getting Canceled", experience: 15, img_url: "https://ichef.bbci.co.uk/images/ic/1200x675/p01l5bkt.jpg"},
  {name: "Dr. Manhattan", specialty: "Being Blue", experience: 55, img_url: "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/10/Dr-Manhattan-in-Watchmen-2008.jpg"},
  {name: "Dr. Doom", specialty: "Being Evil and Stuff", experience: 12, img_url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fantastic-four-doctor-doom-1565775461.jpg"},
]

patients = [
  {name: "Andrew Casarsa", img_url: "https://ca.slack-edge.com/T02MD9XTF-UTFAJGADR-cf894db2cc40-512", age: rand(100..200)},
  {name: "Abubaker.Noorzi", img_url: "https://ca.slack-edge.com/T02MD9XTF-USKPQMFV1-ee03b5fb67db-512", age: rand(100..200)},
  {name: "Brian Desplantes", img_url: "https://ca.slack-edge.com/T02MD9XTF-UTE1462M8-1e7847284ba9-512", age: rand(100..200)},
  {name: "Brianna Dixon", img_url: "https://ca.slack-edge.com/T02MD9XTF-UF63J2E82-6cb1e0456369-512", age: rand(100..200)},
  {name: "Chett Tiller (he/him)", img_url: "https://ca.slack-edge.com/T02MD9XTF-UD88L20GM-06e73e1b25fc-512", age: rand(100..200)},
  {name: "Gabbie Piraino", img_url: "https://ca.slack-edge.com/T02MD9XTF-UEACERAQZ-a4abcb7c233f-512", age: rand(100..200)},
  {name: "Jake Pino", img_url: "https://ca.slack-edge.com/T02MD9XTF-UTFAJKN3D-4678bf4651a3-512", age: rand(100..200)},
  {name: "Jeffrey Musselman", img_url: "https://ca.slack-edge.com/T02MD9XTF-UMC62QVAM-019eb6bf04b1-512", age: rand(100..200)},
  {name: "Joseph Guzzardo", img_url: "https://ca.slack-edge.com/T02MD9XTF-UTSAY8SBW-e765b6686b19-512", age: rand(100..200)},
  {name: "Joseph Chavez", img_url: "https://ca.slack-edge.com/T02MD9XTF-UTV12QFAA-5e0f67a69902-512", age: rand(100..200)},
  {name: "Nick Echevarria", img_url: "https://ca.slack-edge.com/T02MD9XTF-UTFAJNSG3-gf02695f8e76-512", age: rand(100..200)},
  {name: "Samanthaponce5", img_url: "https://ca.slack-edge.com/T02MD9XTF-UTE14D134-e7b461359dbd-512", age: rand(100..200)},
  {name: "Tim Campbell (he/him)", img_url: "https://ca.slack-edge.com/T02MD9XTF-U5W0HE7M3-bb8cf38d782b-512", age: rand(100..200)},
  {name: "Zach Brown", img_url: "https://ca.slack-edge.com/T02MD9XTF-UTUL96JBZ-a1aee35da883-512", age: rand(100..200)},
  {name: "Gregory Dwyer", img_url: "https://ca.slack-edge.com/T02MD9XTF-U8H2RA3C1-643c8ce562ef-512"}
]

puts "Creating Doctors..."

doctors.each do |doctor|
  Doctor.create(doctor)
end

puts "Creating Patients..."

patients.each do |patient|
  Patient.create(patient)
end

puts "Creating Appointments..."

30.times do
  Appointment.create(patient: Patient.all.sample, doctor: Doctor.all.sample, appointment_time: DateTime.now)
end

