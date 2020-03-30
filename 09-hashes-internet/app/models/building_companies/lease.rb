class Lease < ActiveRecord::Base
    belongs_to :building
    belongs_to :company
end