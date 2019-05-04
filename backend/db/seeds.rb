eric = User.create(username: "eric", password: "123", bio: Faker::Hipster.paragraph(2, true))
healthy_bob = User.create(username: "bob", password: "123", bio: Faker::Hipster.paragraph(2, true))

5.times do
  Snack.create(name: Faker::Dessert.variety, user: eric)
end

5.times do
  Snack.create(name: Faker::Food.vegetables, user: healthy_bob)
end

5.times do
  Snack.create(name: Faker::Dessert.topping, user: eric )
end

5.times do
  Snack.create(name: Faker::Food.fruits, user: healthy_bob)
end
