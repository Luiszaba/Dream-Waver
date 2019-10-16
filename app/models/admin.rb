class Admin < ApplicationRecord
    validates_presence_of :email, :password_digest
    has_secure_password
end
