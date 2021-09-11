import {Box, Image, Badge} from '@chakra-ui/react'

function randomColorGenerator() {
  var characters = ["a","b","c","d","e","f",0,1,2,3,4,5,6,7,8,9];
  var randomColorArray = [];
  for (var i = 0; i < 6; i++) {
      var randomIndex = Math.floor(Math.random()*characters.length);
      randomColorArray.push(characters[randomIndex])
  }
  return `#${randomColorArray.join("")}`;
}

function Card({entry}) {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  }

  let imagePreview = null;
  const previewExists = entry.preview_picture !== null

  if (previewExists) {
    imagePreview = <Image objectFit="cover" height="200px" width="100%" src={entry.preview_picture} alt={entry.title} />;
  } else {
    imagePreview = <Box bg={randomColorGenerator()} height="200px" width="100%"></Box>;
  }

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      
      {imagePreview}  

      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {entry.title}
        </Box>

        <Box>
          <Box as="span" color="gray.600" fontSize="sm">
            {entry.domain_name}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Card;