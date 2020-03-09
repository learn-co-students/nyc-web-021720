class CreateSquirrels < ActiveRecord::Migration
  def change
    create_table :squirrels do |t|
      t.string :name
      t.integer :weight
    end
  end
end
