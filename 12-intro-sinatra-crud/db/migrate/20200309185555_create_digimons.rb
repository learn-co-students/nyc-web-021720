class CreateDigimons < ActiveRecord::Migration
  def change
    create_table :digimons do |t|
      t.string :name
      t.string :ability
    end
  end
end
