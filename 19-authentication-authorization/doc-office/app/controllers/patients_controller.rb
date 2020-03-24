class PatientsController < ApplicationController
  before_action :find_patient, only: [:show, :edit, :update, :destroy]
  
  def index
    @patients = Patient.all
  end

  def show
    if @current_patient.id == params[:id].to_i
      session[:cookie_counter] ||= session[:cookie_counter] = 1000
      current_count = session[:cookie_counter].to_i
      session[:cookie_counter] = current_count -= 1

      render :show 
    else
      redirect_to patients_path  
    end 
  end

  def new
    @patient = Patient.new
  end

  def create
    @patient = Patient.create(patient_params)
  
    if @patient.valid?
      session[:patient_id] = @patient.id
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
    params.require(:patient).permit(:name, :condition, :img_url, :age, :password)
  end

  def find_patient
    @patient = Patient.find(params[:id])
  end 
end
