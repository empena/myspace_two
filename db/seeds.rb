150.times do
  username = Faker::FunnyName.name 
  location = Faker::Nation.capital_city
  avatar = Faker::Avatar.image(slug: username, size: "200x200", format: "png", set: 'set7')
  Friend.create(username: username, location: location, avatar: avatar)
end

<<<<<<< HEAD
puts "150 Friends Seeded"
=======
>>>>>>> 45a36101b152732cd614d024a94062f542e22051
