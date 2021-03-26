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
    permitted = [:page_name, :title, :body, :image_source, images: []]
    # permitted << :other if params[:action] == 'create' && current_user.admin?
    permitted
  end

  form do |f|
    f.inputs do
      f.input :page_name
      f.input :title
      f.input :body
      f.input :images, as: :file, input_html: { multiple: true }
      f.object.images.each do |at|
        span image_tag(at.variant(resize: "250x250!"))
      end
    end

    f.actions
  end

end
