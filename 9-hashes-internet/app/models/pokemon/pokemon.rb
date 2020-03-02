require 'activerecord'

class Pokemon < ActiveRecord::Base
    belongs_to :trainer
end