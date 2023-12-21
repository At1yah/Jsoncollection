document.addEventListener("DOMContentLoaded", function() {
  let mangoData = {
    mangoes: [

      { "name": "Julie Mango",
        "description": "The St. Julian or Julie, for short, is adored by Jamaicans for its rich flavor and delightful texture. While not very colorful, it transitions from green to a reddish-orange hue when ripe. Its distinctive round shape with a flattish side makes it easily recognizable. Best enjoyed just shy of ripeness to avoid overly runny or 'blobsy' flesh, the Julie Mango is renowned for its juiciness.",
        "image": "JulieMango.webp",
        "origin": "Possibly Trinidad and Tobago or India",
      },
      {
        "name": "East Indian Mango",
        "description": "Embraced by mango enthusiasts, the East Indian variety is considered the epitome of class. Introduced to the island by indentured laborers from India around 1845, it boasts a large, fleshy, and sweet profile.",
        "image": "Eastindian.jpeg",
        "origin": "Bombay, India",
      },
     {
      "name": "Stringy Mango",
      "description": "As the name implies, this mango is ubiquitous and widely known. Bred with other varieties for intriguing flavors, it evokes childhood memories of devouring dozens during summer months. The only downside is the time spent picking fibres from one's teeth afterward. The skin, lacking flavor, is typically not consumed by avid mango enthusiasts.",
      "image": "Stringy.jpeg",
      "origin": "East India, Burma, and the Andaman Islands",
    },
    {
      "name": "Bombay Mango",
      "description": "The Bombay mango, originating from India, is a medium to large-sized fruit with bright green to yellowish skin and occasional red blushes. Known for its sweet and tangy flavor, the mango has a smooth, non-fibrous texture and a fragrant aroma. It is prized for its juicy and succulent flesh, making it a popular choice among mango enthusiasts. Best enjoyed when fully ripe, the Bombay mango is versatile in the kitchen, used in various dishes, desserts, salads, and beverages. Overall, it is a sought-after mango variety appreciated for its unique taste and appealing characteristics.",
      "image": "Bombay.webp",
      "origin": "Bombay, India",
    },
    {
      "name": "Emperor Mango",
      "description": "The Emperor mango, originating from Taiwan, is a large and uniquely shaped fruit with vibrant red, orange, and green skin. Known for its exceptionally sweet and tropical flavor, the mango has smooth, non-fibrous flesh and a buttery consistency. Its aromatic fragrance enhances the overall sensory experience. Best enjoyed when fully ripe, the Emperor mango is versatile in the kitchen, utilized in a variety of culinary creations, including desserts and tropical dishes. Overall, it is a sought-after mango variety prized for its distinctive appearance and exquisite taste.",
      "image": "Emperor.jpeg",
      "origin": "Taiwan",
    },
    {
      "name": "Blackie Mango",
      "description": "As sweet as it is widely known, the Blackie Mango is sometimes smaller than hairy mangoes. Its palatable skin, though prone to black spots, is often consumed along with every bit of flesh. Despite its green or yellowish skin, the origin of the name remains a mystery.",
      "image": "blacky-mango.jpg",
      "origin": "Unknown: Possibly India",
    },
    {
      "name": "Keitt Mango",
      "description": "The Keitt mango is medium to large in size, with a somewhat flattened and oval shape. It is recognized by its vibrant green skin, even when ripe, and lacks the typical red blush seen in many other mango varieties. Known for its balanced sweet and mildly tangy flavor, the mango has smooth, non-fibrous flesh with a firm texture. While less intensely aromatic, it offers a pleasant tropical scent. Originally from Florida, the Keitt mango is enjoyed best when fully ripe, typically during the late summer months. ",
      "image": "Keitt.jpeg",
      "origin": "Florida",
    },
    {
      "name": "Number 11 Mango",
      "description": "Distinguished by its unique shape and flavor, the Number 11 Mango has firm flesh and a tanginess close to the seed. Enthusiasts are known to 'juice' the mango until the seed is white.",
      "image": "number11.jpeg",
      "origin": "Cuba"
    },
    {
      "name": "Turpentine Mango",
      "description": "FThe Turpentine mango is a medium to large mango variety known for its elongated shape and green skin. It offers a bold and complex flavor, featuring a balance of sweetness, tartness, and a hint of citrus. The mango's fibrous and stringy texture contributes to its unique eating experience. Recognized by its distinctive turpentine-like aroma, this mango has cultural significance and is cultivated in regions like Cuba. Best enjoyed when fully ripe and turns bright yellow.",
      "image": "turpentine.jpeg",
      "origin": "Cuba"
    },
    
  ]
}

let mangoesContainer = document.getElementById("mangoesContainer");

  mangoData.mangoes.forEach(mango => {
    let mangoElement = document.createElement("div");
    mangoElement.classList.add("mango");

    let mangoHTML = `
      <h2>${mango.name}</h2>
      <p>${mango.description}</p>
      <img src="${mango.image}" alt="${mango.name}">
      <p>Origin: ${mango.origin}</p>
    `;

    mangoElement.innerHTML = mangoHTML;
    mangoesContainer.appendChild(mangoElement);
  });
});
