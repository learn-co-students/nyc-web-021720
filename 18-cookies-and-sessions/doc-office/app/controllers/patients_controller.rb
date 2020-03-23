class PatientsController < ApplicationController
  def index
    @patients = Patient.all
  end

  def show
    @patient = Patient.find(params[:id])
  end

  def new
    @patient = Patient.new
  end

  def create
    @patient = Patient.create(patient_params)
    # @patient = Patient.new(patient_params)

    # if @patient.save
    if @patient.valid?
      redirect_to patient_path(@patient)
    else
      flash[:errors] = @patient.errors.full_messages
      redirect_to new_patient_path  
    end 
  end

  def edit
    @patient = Patient.find(params[:id])
  end

  def update
    patient = Patient.find(params[:id])

    if patient.update(patient_params)
      redirect_to patient_path(patient)
    else 
      flash[:errors] = patient.errors.full_messages
      redirect_to edit_patient_path(patient)  
    end 

  end

  def destroy
    patient = Patient.find(params[:id])
    patient.destroy

    redirect_to patients_path
  end

  private

  def patient_params
    params.require(:patient).permit(:name, :condition)
  end
end
