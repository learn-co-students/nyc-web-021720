class ApplicationController < ActionController::Base
  before_action :current_patient
  before_action :logged_in

  def current_patient
    @current_patient = Patient.find_by(id: session[:patient_id])
    # @current_patient = Patient.find(session[patient_id])
  end 

  def logged_in

    if @current_patient
      #behave normal
    else
      redirect_to new_login_path 
    end 
  end 

end
