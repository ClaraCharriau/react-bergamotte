export interface IProductImg {
  url: string;
  alt: string;
}

export interface IProduct {
  id: number;
  productName: string;
  details: string;
  description: string;
  price: number;
  isAvailable: boolean;
  image: IProductImg;
}

export const PRODUCTS = [
  {
    id: 1,
    productName: "Limequat Gino",
    details: "Lorem Ipsum",
    price: 50,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem modi in provident error repellat asperiores at, atque quas quaerat, nisi deserunt esse? Perferendis veritatis eaque dicta enim cum. Voluptates, doloremque!",
    image: {
      url: "/img/citrus-limequat.jpg",
      alt: "Citronnier Limequat en pot",
    },
    isAvailable: true
  },
  {
    id: 2,
    productName: "Pink rose",
    details: "Lorem Ipsum",
    price: 30,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem modi in provident error repellat asperiores at, atque quas quaerat, nisi deserunt esse? Perferendis veritatis eaque dicta enim cum. Voluptates, doloremque!",
    image: {
      url: "/img/citrus-limequat.jpg",
      alt: "Citronnier Limequat en pot",
    },
    isAvailable: true,
  },
  {
    id: 3,
    productName: "Palmier Palmito",
    details: "Lorem Ipsum",
    price: 40,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem modi in provident error repellat asperiores at, atque quas quaerat, nisi deserunt esse? Perferendis veritatis eaque dicta enim cum. Voluptates, doloremque!",
    image: {
      url: "/img/citrus-limequat.jpg",
      alt: "Citronnier Limequat en pot",
    },
    isAvailable: false,
  },
  {
    id: 4,
    productName: "Kiwi",
    details: "Lorem Ipsum",
    price: 50,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem modi in provident error repellat asperiores at, atque quas quaerat, nisi deserunt esse? Perferendis veritatis eaque dicta enim cum. Voluptates, doloremque!",
    image: {
      url: "/img/citrus-limequat.jpg",
      alt: "Citronnier Limequat en pot",
    },
    isAvailable: true,
  }
];
