class AppointmentsController < ApplicationController
  # resources :appointments, only: [:edit, :update, :destroy]
  def edit

  end

  def update

  end

  def destroy
    appointment = Appointment.find(params[:id])
    appointment.destroy

    redirect_to patient_path(appointment.patient)
  end
end
