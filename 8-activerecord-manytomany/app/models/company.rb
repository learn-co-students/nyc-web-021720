class Company < ActiveRecord::Base
    has_many :leases 
    has_many :buildings, through: :leases
end