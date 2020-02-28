class AddSickToPatients < ActiveRecord::Migration[6.0]
  def change
    add_column :patients, :sick, :boolean
  end
end
