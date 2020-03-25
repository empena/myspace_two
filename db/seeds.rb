150.times do
  username = Faker::FunnyName.name 
  location = Faker::Nation.capital_city
  avatar = Faker::Avatar.image(slug: username, size: "200x200", format: "png", set: 'set7')
  Friend.create(username: username, location: location, avatar: avatar)
end

puts "150 Friends Seeded

# t.string "username"
# t.string "avatar"
# t.string "location"