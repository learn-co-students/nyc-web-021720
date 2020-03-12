require 'test_helper'

class PatientsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get patients_index_url
    assert_response :success
  end

  test "should get show" do
    get patients_show_url
    assert_response :success
  end

  test "should get new" do
    get patients_new_url
    assert_response :success
  end

  test "should get edit" do
    get patients_edit_url
    assert_response :success
  end

end
