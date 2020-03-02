class CreateLeases < ActiveRecord::Migration[6.0]
  def change
    create_table :leases do |t|
      t.integer :building_id
      t.integer :company_id

    end
  end
end
