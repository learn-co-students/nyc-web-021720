class RemoveBuildingIdFromCompany < ActiveRecord::Migration[6.0]
  def change
    remove_column :companies, :building_id
  end
end
