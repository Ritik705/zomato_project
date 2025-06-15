let res=[];
const resname= [
    "The Blue Spoon", "Tasty Bites", "Spice Avenue", "Urban Eats", "The Garden Bistro",
    "Sushi Haven", "Bistro Bliss", "Flavors of Italy", "Grill Masters", "Ocean's Delight",
    "The Wooden Spoon", "Chili & Lime", "The Gourmet Table", "The Hidden Gem", "Savor & Sizzle",
    "Sunset Diner", "The Green Plate", "Classic Comfort", "Café Del Mar", "Savory Junction",
    "Woodland Eats", "Serenity Café", "Brew & Bites", "Golden Bowl", "The Chophouse",
    "Baked & Braised", "Curry House", "Spicy Delights", "The Crimson Table", "The Royal Feast",
    "Lakeside Grill", "Meat & Potatoes", "Noodle Nirvana", "Sizzle & Serve", "Riverside Dining",
    "Coastal Catch", "The Brass Bell", "Seasons & Spices", "Royal Tandoor", "The Rustic Fork",
    "The Local Café", "Steak & Barrel", "Taste of Asia", "Fusion Flavors", "Deli & Co.",
    "Whisk & Whiskers", "The Spice Market", "Chic & Chic", "Smoked & Roasted", "Vibrant Vibes",
    "Mama's Kitchen", "The Urban Table", "Café de Luxe", "Salt & Pepper Bistro", "Fireside Grill",
    "Picnic on Main", "Café Bon Appétit", "The Artisan Kitchen", "Oyster & Vine", "Taco Haven",
    "The Savory Spoon", "Palate Pleasures", "The Blue Whale", "Bubba's BBQ", "Crimson Tide",
    "Zen Bistro", "Farm Fresh Café", "Chow Time", "Heavenly Bites", "Café Sunshine",
    "Rising Star Grill", "Sunset Bistro", "The Roasted Bean", "The Waterfront", "Grilled Perfection",
    "Café Aromas", "Spices of India", "Brewery & Co.", "Bistro 101", "Simply Delicious",
    "The Burger Joint", "Taste of Heaven", "Taco & Tequila", "The Sizzling Grill", "Taste of Mexico",
    "Savor the Flavor", "The Oak Room", "Gusto Bistro", "The Gravy Train", "Sea Breeze Grill",
    "The Bistro Box", "Pinch of Salt", "Burger Haven", "Fiesta Grill", "Italiano", "The Rustic Table",
    "Salt & Vinegar", "Bistro 56", "Taco Town", "Ocean Breeze Grill", "Café Continental", "Trendy Treats",
    "Spicy Flavors", "Sunny Side Café", "Lunar Lounge", "Crisp & Crunch", "The Patio Dining",
    "Taste of Tuscany", "Café Rewind", "Comfort Kitchen", "Hot Pot & Grill", "The Burger Lab",
    "Sushi & Rolls", "Chopsticks & Spoons", "Pasta Paradise", "Seaside Diner", "The Fork & Knife",
    "Basil & Thyme", "The Fryer", "Grilled & Chilled", "The Ember Grill", "Ginger & Garlic", "Taco Shack",
    "The Hungry Hippo", "Delish Diner", "Steakhouse 56", "The Olive Tree", "The Butcher’s Grill"
  ];
  const food = [
    "Pizza", "Burger", "Pasta", "Sushi", "Tacos", "Salad", "Ice Cream", "Steak", "Fried Chicken", "Pancakes",
    "Burrito", "Hot Dog", "Spaghetti", "Lasagna", "Ramen", "Kebab", "Tuna Salad", "Caesar Salad", "Chicken Wings", "Dumplings",
    "Fries", "Curry", "Samosa", "Spring Rolls", "Nachos", "Fish and Chips", "Risotto", "Pad Thai", "Pho", "Chow Mein",
    "Focaccia", "Croissant", "Bagel", "Macarons", "Cheesecake", "Donuts", "Cinnamon Rolls", "Apple Pie", "Chocolate Cake", "Brownies",
    "Baked Potato", "Grilled Cheese", "Clam Chowder", "Goulash", "Meatloaf", "Tiramisu", "Gelato", "Pavlova", "Waffles", "Moussaka"
  ];
  const delhiLocation = [
    "Connaught Place", "India Gate", "Qutub Minar", "Red Fort", "Lotus Temple", "Humayun's Tomb", "Jama Masjid", 
    "Chandni Chowk", "Akshardham Temple", "Raj Ghat", "Parliament House", "Dilli Haat", "Jantar Mantar", "Lajpat Nagar", 
    "Karol Bagh", "Hauz Khas Village", "Delhi Haat", "Sarojini Nagar Market", "ISKCON Temple", "Paharganj", 
    "Nizamuddin Dargah", "Lodhi Garden", "Purana Qila", "Rashtrapati Bhavan", "Bangla Sahib Gurudwara", "Pragati Maidan", 
    "Saket Mall", "Chattarpur Temple", "Delhi Zoo", "JNU (Jawaharlal Nehru University)", "Vasant Vihar", "Gurgaon", 
    "Dwarka", "Okhla Bird Sanctuary", "Mehrauli Archaeological Park", "Rajouri Garden", "Ansal Plaza", "Daryaganj", 
    "Greater Kailash", "Green Park", "Khan Market", "Select Citywalk Mall", "Kalkaji Mandir", "R K Puram", 
    "Vikramshila Complex", "Delhi University", "Chhatarpur", "Zakir Hussain Rose Garden", "Sunder Nursery", "Mandi House"
  ];
  
  
for(let i=0;i<100;i++)
{
      let obj={}
      obj.image=`img${Math.floor(Math.random()*7+1)}.jpeg`;
      obj.name=resname[Math.floor(Math.random()*99)];
       obj.foodtype= food[Math.floor(Math.random()*49)];
      obj.rating=(Math.random()*5+1).toFixed(1);
      obj.price=Math.floor(Math.random()*2500+100);
      obj.location=delhiLocation[Math.floor(Math.random()*49)];
      obj.distance=Math.floor(Math.random()*30+5).toFixed(1);
      obj.alcohol=Math.random()>0.7;
      obj.offer=Math.floor(Math.random()*40+10);
      res.push(obj);
}
const arrofjson=JSON.stringify(res,null,2);
const fs=require('fs');
fs.writeFileSync('res.Json',arrofjson,'utf-8');