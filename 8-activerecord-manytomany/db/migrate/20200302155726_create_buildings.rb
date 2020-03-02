class CreateBuildings < ActiveRecord::Migration[6.0]
  def change
    create_table :buildings do |t|
      t.string :city
      t.string :name
      t.integer :num_of_floors
    end
  end
end
