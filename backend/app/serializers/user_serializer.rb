class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio

  has_many :snacks
end
