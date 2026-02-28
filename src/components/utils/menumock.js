export const RESTAURANTS = {
  data: {
    cards: [

      // ----- CARD 0 : RESTAURANT INFO -----
      {
        card: {
          card: {
            info: {
              id: "16865",
              name: "Pizza Hut",
              cuisines: ["Pizzas", "Italian"],
              costForTwo: "₹350 for two",
              avgRating: 4.4,
              areaName: "Janpath",
              sla: {
                deliveryTime: 32,
              }
            }
          }
        }
      },

      // ----- CARD 1 : OFFERS (ignored) -----
      {
        card: { card: { offers: [] } }
      },

      // ----- CARD 2 : MENU ITEMS -----
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [

                // CATEGORY 1
                {
                  card: {
                    card: {
                      title: "Recommended",
                      itemCards: [
                        {
                          card: {
                            info: {
                              id: "101",
                              name: "Margherita Pizza",
                              price: 19900,
                              description: "Classic cheese pizza",
                              isVeg: 1
                            }
                          }
                        },
                        {
                          card: {
                            info: {
                              id: "102",
                              name: "Veggie Supreme",
                              price: 29900,
                              description: "Loaded with veggies",
                              isVeg: 1
                            }
                          }
                        }
                      ]
                    }
                  }
                },

                // CATEGORY 2
                {
                  card: {
                    card: {
                      title: "Sides",
                      itemCards: [
                        {
                          card: {
                            info: {
                              id: "201",
                              name: "Garlic Bread",
                              price: 12900,
                              isVeg: 1
                            }
                          }
                        },
                        {
                          card: {
                            info: {
                              id: "202",
                              name: "Pepsi",
                              price: 7900,
                              isVeg: 1
                            }
                          }
                        }
                      ]
                    }
                  }
                }

              ]
            }
          }
        }
      }
    ]
  }
};
