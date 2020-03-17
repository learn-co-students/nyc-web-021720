class CreateDoctors < ActiveRecord::Migration[6.0]
  def change
    create_table :doctors do |t|
      t.string :name
      t.string :specialty
      t.integer :experience
      t.string :img_url

      t.timestamps
    end
  end
end
