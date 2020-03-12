class PatientsController < ApplicationController
  def index
    @patients = Patient.all
  end

  def show
    @patient = Patient.find(params[:id])
  end

  def new
    # display new patient form
  end

  def create
    patient = Patient.create(name: params[:name], condition: params[:condition])
    # redirect_to patients_path go to index
    redirect_to patient_path(patient.id) # go to show
  end

  def edit
    @patient = Patient.find(params[:id])
  end

  def update
    patient = Patient.find(params[:id]).update(condition: params[:condition])
    # redirect_to patients_path go to index
    redirect_to patient_path(patient.id) # go to show
  end

end
