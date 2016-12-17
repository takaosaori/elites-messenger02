class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.integer :user_id
      t.integer :timeline_id
      
      add_index :like, [:user_id, :timeline_id], :unique => true

      t.timestamps null: false
    end
  end
end
