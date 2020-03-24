class SessionsController < ApplicationController
  skip_before_action :logged_in, only: [:new, :create]
  
  def new 
  end 

  def create 
    patient = Patient.find_by(name: params[:session][:name])
    patient.authenticate(params[:session][:password])
    session[:patient_id] = patient.id

    redirect_to patient_path(patient)
  end 

  def destroy 
    session[:patient_id] = nil

    redirect_to doctors_path
  end 
end
