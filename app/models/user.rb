class User < ApplicationRecord
    has_many :dreams
    has_many :comments
    validates_presence_of :email, :password
    has_secure_password
end
