ActiveAdmin.register Content do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  # permit_params :page_name, :title, :body, :image_source
  #
  # or
  #
  permit_params do
    permitted = [:page_name, :title, :body, :image_source]
    permitted << :other if params[:action] == 'create' && current_user.admin?
    permitted
  end

end
