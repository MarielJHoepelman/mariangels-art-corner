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
    permitted = [:page_name, :title, :body, :image_source,  :image, image_attributes: [:_destroy], images: []]
    # permitted << :other if params[:action] == 'create' && current_user.admin?
    permitted
  end

  form do |f|
    f.inputs do
      f.input :page_name
      f.input :title
      f.input :body
      # f.input :images, as: :file, input_html: { multiple: true }
      # f.object.images.each do |at|
      #   span image_tag(at.variant(resize: "250x250!"))
      # end
      f.input :image, required: true, as: :file

      if f.object.image.present?
        span image_tag(f.object.image.url(:thumb))
        f.semantic_fields_for :image_attributes do |image_fields|
          image_fields.input :_destroy, as: :boolean, label: 'Delete?'
        end
      end
    end

    f.actions
  end

end
