class PatientsController < ApplicationController
  before_action :find_patient, only: [:show, :edit, :update, :destroy]
  
  def index
    @patients = Patient.all
  end

  def show
    # @patient = Patient.find(params[:id]) 
    
    # counter key
    # increment counter key
    # conditional 
    # counter hits limit display different view

    # if cookies[:cookie_counter]
    #   cookies[:cookie_counter] -= 1
    # else 
    #   cookies[:cookie_counter] = 3
    # end 

    session[:cookie_counter] ||= session[:cookie_counter] = 3
    current_count = session[:cookie_counter].to_i
    

    session[:cookie_counter] = current_count -= 1

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
    # @patient = Patient.find(params[:id])
  end

  def update
    # @patient = Patient.find(params[:id])

    if @patient.update(patient_params)
      redirect_to patient_path(@patient)
    else 
      flash[:errors] = patient.errors.full_messages
      redirect_to edit_patient_path(@patient)  
    end 

  end

  def destroy
    # @patient = Patient.find(params[:id])
    @patient.destroy

    redirect_to patients_path
  end

  private

  def patient_params
    params.require(:patient).permit(:name, :condition)
  end

  def find_patient
    @patient = Patient.find(params[:id])
  end 
end
