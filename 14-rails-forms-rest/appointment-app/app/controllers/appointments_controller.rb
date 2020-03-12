class AppointmentsController < ApplicationController
  def destroy
    appointment = Appointment.destroy(params[:id])
    redirect_to patient_path(appointment.patient.id)
  end
end
