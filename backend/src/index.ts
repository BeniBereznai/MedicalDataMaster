import { AppDataSource } from "./data-source"
import { Patient } from "./entity/patient"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new patient into the database...")
    const patient = new Patient()
    patient.firstName = "Timber"
    patient.lastName = "Saw"
    patient.BirthDate = new Date('1999-03-03')
    patient.Taj = 123456789
    
    
    await AppDataSource.manager.save(patient)
    console.log("Saved a new patient with id: " + patient.id)

    console.log("Loading users from the database...")
    const Patients = await AppDataSource.manager.find(Patient)
    console.log("Loaded Patients: ", Patients)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
