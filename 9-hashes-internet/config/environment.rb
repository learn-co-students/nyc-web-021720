require 'bundler/setup'
Bundler.require

ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: "db/development.db"
)

ActiveRecord::Base.logger = Logger.new(STDOUT)

# require_all '../app'
require_relative '../app/models/pokemon/trainer'
require_relative '../app/models/pokemon/pokemon'
# require_relative './pokemon/pokemon'