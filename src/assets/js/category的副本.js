const categories = [
  {
    name: 'Category',
    hasChildren: true,
    isSelected: false,
    children: [
      {
        name: 'Bottoms',
        hasChildren: true,
        isSelected: false,
        children: [
          {
            name: 'Trousers',
            hasChildren: false,
            isSelected: false
          },
          {
            name: 'Drawstring Pants',
            hasChildren: false,
            isSelected: false
          },
          {
            name: 'Shorts',
            hasChildren: true,
            children: [
              {
                name: 'Casual Shorts',
                hasChildren: false,
                isSelected: false
              },
              {
                name: 'Athletic Shorts',
                hasChildren: false,
                isSelected: false
              },
              {
                name: 'Swim Shorts',
                hasChildren: false,
                isSelected: false
              },
              {
                name: 'Cargo Shorts',
                hasChildren: false,
                isSelected: false
              }
            ]
          },
          {
            name: 'Pants',
            hasChildren: true,
            isSelected: false,
            children: [
              {
                name: 'Athletic Shorts',
                hasChildren: false,
                isSelected: false
              },
              {
                name: 'Casual Shorts',
                hasChildren: false,
                isSelected: false
              },
              {
                name: 'Jeans',
                hasChildren: true,
                isSelected: false,
                children: [
                  {
                    name: 'Skinny Jeans',
                    hasChildren: false,
                    isSelected: false
                  },
                  {
                    name: 'Baggy Jeans',
                    hasChildren: false,
                    isSelected: false
                  }
                ]
              },
              {
                name: 'SweatPants',
                hasChildren: false,
                isSelected: false
              },
              {
                name: 'Cargo Pants',
                hasChildren: false,
                isSelected: false
              },
              {
                name: 'Harem Pants',
                hasChildren: false,
                isSelected: false
              },
              {
                name: 'Yoga Pants',
                hasChildren: false,
                isSelected: false
              },
              {
                name: 'Capri Pants',
                hasChildren: false,
                isSelected: false
              }
            ]
          }
        ]
      },
      {
        name: 'Pajamas',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'Fashion Sets',
        hasChildren: true,
        isSelected: false,
        children: [
          {
            name: 'Athletic Sets',
            hasChildren: false,
            isSelected: false
          }
        ]
      },
      {
        name: 'Tops',
        hasChildren: true,
        isSelected: false,
        children: [
          {
            name: 'Tank Tops',
            hasChildren: false,
            isSelected: false
          },
          {
            name: 'Cardigans',
            hasChildren: false,
            isSelected: false
          },
          {
            name: 'Hoodies',
            hasChildren: false,
            isSelected: false
          },
          {
            name: 'Jerseys',
            hasChildren: false,
            isSelected: false
          },
          {
            name: 'Jackets',
            hasChildren: false,
            isSelected: false
          },
          {
            name: 'Sweaters',
            hasChildren: true,
            isSelected: false,
            children: [
              {
                name: 'Pullover Sweaters',
                hasChildren: false,
                isSelected: false
              }
            ]
          },
          {
            name: 'Suits & Blazers',
            hasChildren: true,
            isSelected: false,
            children: [
              {
                name: 'Three Piece Suits',
                hasChildren: false,
                isSelected: false
              }
            ]
          },
          {
            name: 'Winter Coats',
            hasChildren: false,
            isSelected: false
          },
          {
            name: 'Short Sleeves',
            hasChildren: false,
            isSelected: false
          },
          {
            name: 'V-Necks',
            hasChildren: false,
            isSelected: false
          },
          {
            name: 'Turtlenecks',
            hasChildren: false,
            isSelected: false
          },
          {
            name: 'Shirts',
            hasChildren: true,
            isSelected: false,
            children: [
              {
                name: 'Dress Shirts',
                hasChildren: false,
                isSelected: false
              },
              {
                name: 'T-Shirts',
                hasChildren: true,
                isSelected: false,
                children: [
                  {
                    name: 'Graphic Tees',
                    hasChildren: false,
                    isSelected: false
                  }
                ]
              },
              {
                name: 'Long Sleeved Shirts',
                hasChildren: false,
                isSelected: false
              },
              {
                name: 'Athletic Shirts',
                hasChildren: false,
                isSelected: false
              },
              {
                name: 'Sweatshirts',
                hasChildren: false,
                isSelected: false
              },
              {
                name: 'Casual Shirts',
                hasChildren: false,
                isSelected: false
              },
              {
                name: 'Button-up Shirts',
                hasChildren: false,
                isSelected: false
              },
              {
                name: 'Undershirts',
                hasChildren: true,
                isSelected: false,
                children: [
                  {
                    name: 'Binders',
                    hasChildren: false,
                    isSelected: false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'Robes',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'Uniforms',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'Waterproof Jackets',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'Reversible',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'Retro Fashion',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'Dance Wear',
        isSelected: false,
        hasChildren: false
      },
      {
        name: 'Beach Wear',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'Overalls',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'Capes',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'Costumes & Cosplay',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'U-Necks',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'Custom Made Clothing',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'Business Casual',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'Shorts',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'Plus Size Fashion',
        hasChildren: false,
        isSelected: false
      }
    ]
  },
  {
    name: 'Size',
    hasChildren: true,
    isSelected: false,
    children: [
      {
        name: 'XXS',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'XS',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'S',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'M',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'L',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'XL',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'XXL',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'XXXL',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'XXXXL',
        hasChildren: false,
        isSelected: false
      }
    ]
  },
  {
    name: 'Color',
    hasChildren: true,
    isSelected: false,
    children: [
      {
        name: 'Bronze',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'Black',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'Blue',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'Clear',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'Gold',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'Gray',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'Green',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'Multi-Color',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'Orange',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'Pink',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'Red',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'Silver',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'White',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'Yellow',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'Brown',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'Purple',
        hasChildren: false,
        isSelected: false
      },
      {
        name: 'Beige',
        hasChildren: false,
        isSelected: false
      }
    ]
  },
  {
    name: 'Rating',
    hasChildren: true,
    isSelected: false,
    children: [
      {
        name: '4Stars & up',
        hasChildren: false,
        isSelected: false
      },
      {
        name: '3Stars & up',
        hasChildren: false,
        isSelected: false
      },
      {
        name: '2Stars & up',
        hasChildren: false,
        isSelected: false
      },
      {
        name: '1Star & up',
        hasChildren: false,
        isSelected: false
      }
    ]
  }
]

export default categories
