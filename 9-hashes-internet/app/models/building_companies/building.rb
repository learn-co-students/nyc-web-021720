class Building < ActiveRecord::Base
    has_many :leases 
    has_many :companies, through: :leases
end