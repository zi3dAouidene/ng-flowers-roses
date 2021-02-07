import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from './product';

export class ProductData implements InMemoryDbService {

  createDb(): { products: Product[]} {
    const products: Product[] = [
      {
        id: 1,
        productName: 'Peony',
        productCode: 'PEO-0011',
        releaseDate: 'March 19, 2021',
        description: 'Peony (or paeony) is a name for plants in the genus  Paeonia, the only genus in the flowering plant family  Paeoniaceae. ',
        price: 19.95,
        starRating: 3.2,
        imageUrl: 'assets/images/peony2.jpg',
        category: 'Garden',
        tags: ['Peony', 'Garden', 'home']
      },
      {
        id: 2,
        productName: 'Lisianthus',
        productCode: 'LIS-0023',
        releaseDate: 'March 18, 2021',
        description: 'Eustoma, commonly known as lisianthus or prairie gentian, is a small genus in the gentian family. They are native to warm regions of the southern United States, Mexico, Caribbean and northern South America.',
        price: 32.99,
        starRating: 4.2,
        imageUrl: 'assets/images/lisianthus.jpg',
        category: 'Garden',
        tags: ['Peony', 'Garden', 'home']
      },
      {
        id: 5,
        productName: 'Pompon',
        productCode: 'TBX-0048',
        releaseDate: 'May 21, 2021',
        description: 'Many different flower forms and colors are available, and breeders are continuously offering new varieties, including novelties. Pompons are spray chrysanthemums that have been created by pinching the center bud of the chrysanthemum plant. ',
        price: 8.9,
        starRating: 4.8,
        imageUrl: 'assets/images/pompon.jpg',
        category: 'Flower',
        tags: ['Flower', 'Pompon', 'Gaarden']
      },
      {
        id: 8,
        productName: 'Freesia',
        productCode: 'FRS-0022',
        releaseDate: 'May 15, 2021',
        description: "FREESIA'S Symbolize innocence and thoughtfulness. "
        +"The Freesia is a genus of about 20 species of South African flowering plants of the Iris Family Iridaceae",
        price: 11.55,
        starRating: 3.7,
        imageUrl: 'assets/images/ORANGEFREESIA.jpg',
        category: 'Freesia,Orange'
      },
      {
        id: 10,
        productName: 'Violet',
        productCode: 'VLT-0042',
        releaseDate: 'October 15, 2021',
        description: 'Violets are a flexible flower! Widely cultivated for thousands of years they are used for eating and medicine; as well as a beautiful plant for decoration! Their scientific name is Viola spp from the family Violaceae.',
        price: 35.95,
        starRating: 4.6,
        imageUrl: 'assets/images/violet.jpg',
        category: 'Flower'
      },

      {
        id: 84,
        productName: 'Ranunculus',
        productCode: 'RNC-0011',
        releaseDate: 'March 19, 2021',
        description: 'Ranunculus is native to the eastern region of the Mediterranean.The name Ranunculus comes from rana, which is Latin forfrog, and refers to the wet boggy places where these plants are found in the wild.',
        price: 19.95,
        starRating: 3.2,
        imageUrl: 'assets/images/yellow-ranunculus.jpg',
        category: 'Garden',
        tags: ['gerbera', 'yard','Ranunculus', 'home']
      },
     

    ];
    return { products };
  }
}
