require 'test_helper'

class DreamControllerTest < ActionDispatch::IntegrationTest
  test "should get title:string" do
    get dream_title:string_url
    assert_response :success
  end

  test "should get description:text" do
    get dream_description:text_url
    assert_response :success
  end

end
