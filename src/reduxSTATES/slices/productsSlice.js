import { createSlice } from "@reduxjs/toolkit";
import shirt from "assets/images/shirt-man.png";
import shirt2 from "assets/images/shirt-2.png";
import shirt3 from "assets/images/shirt-3.png";
import shirt4 from "assets/images/shirt-4.png";

import ptie1 from "assets/images/ptie-1.png";
import ptie2 from "assets/images/ptie-2.png";
import ptie3 from "assets/images/ptie-3.png";
import ptie4 from "assets/images/ptie-4.png";

import necktie from "assets/images/necktie.png";
import papillontie from "assets/images/papillontie.png";

import belt1 from "assets/images/belt-1.png";

import socks1 from "assets/images/socks-1.png";
import socks2 from "assets/images/socks-2.png";
import socks3 from "assets/images/socks-3.png";

const initialState = {
  data: [
    {
      id: "1",
      productName: "BUTTONED SHIRT",
      productSpeciality: "CUT AND FABRIC COMPOSITION-",
      description:
        "ELEGANT BUTTON-UP SHIRT, STANDARD COLLAR MODEL, BUTTONS EXPOSED SATIN FABRIC. ELEGANT BUTTON-DOWN SHIRT WITH REGULAR COLLAR EXPOSED BUTTONS IN A VARIETY OF COLORS",
      productTypes: [
        { id: "1", title: "Super Slim 97/3", isSelected: false },
        { id: "2", title: "Square 80/20", isSelected: false },
      ],
      sizeChart: {
        value: true,
        title: "Size Chart",
      },
      colors: {
        isORDivision: false,
        values: [
          { id: "1", value: "#51B8FA", isSelected: false },
          { id: "2", value: "#D451FA", isSelected: false },
          { id: "3", value: "black", isSelected: false },
          { id: "4", value: "white", isSelected: false },
        ],
      },
      sizes: {
        selectedSize: "",
        diffrentSizes: [
          { id: "1", value: "XS", isSelected: false },
          { id: "2", value: "S", isSelected: false },
          { id: "3", value: "M", isSelected: false },
          { id: "4", value: "L", isSelected: false },
          { id: "5", value: "XL", isSelected: false },
          { id: "6", value: "XXL", isSelected: false },
          { id: "7", value: "3XL", isSelected: false },
        ],
      },
      images: [
        {
          img: shirt,
        },
        {
          img: shirt2,
        },
        {
          img: shirt3,
        },
        {
          img: shirt4,
        },
      ],
    },
    {
      id: "2",
      productName: "A JEWEL FOR A SHIRT",
      productSpeciality: "WHAT DO YOU LIKE MORE-",
      description:
        "BLACK BOW TIE, SOLID COLOR. HAS A SUBTLE SHINE THAT GIVES PRESENCE AND PLEASANTNESS. EASY TO USE, ADJUSTABLE STRAP FOR ANY NECK AND EASY CLOSURE.",
      productTypes: [
        { id: "1", title: "NECKTIE", iconImg: necktie, isSelected: false },
        {
          id: "2",
          title: "PAPILLON",
          iconImg: papillontie,
          isSelected: false,
        },
      ],
      sizeChart: false,
      colors: {
        isORDivision: false,
        values: [
          { id: "1", value: "#CCCCCC", isSelected: false },
          { id: "2", value: "#0018FF", isSelected: false },
          { id: "3", value: "black", isSelected: false },
          { id: "4", value: "#E82B34", isSelected: false },
        ],
      },
      images: [
        {
          img: ptie1,
        },
        {
          img: ptie2,
        },
        {
          img: ptie3,
        },
        {
          img: ptie4,
        },
      ],
    },
    {
      id: "3",
      productName: "CHOOSE A BELT FOR YOUR PANTS",
      productSpeciality: "WHAT A BUCKLE-",
      description:
        "A MODEL MADE OF 100% FINE LEATHER IN A BLACK SHADE WITH A GLOSSY FINISH. THIS IS AN ITEM  WILL LUXURIOUSLY UPGRADE ANY PAIR OF PANTS FOR DAYTIME AND EVENING HOURS.",
      productTypes: [
        { id: "1", title: "CLASSIC", isSelected: false },
        { id: "2", title: "CLUTCH", isSelected: false },
        { id: "3", title: "CLASP", isSelected: false },
        { id: "4", title: "ELEGANT", isSelected: false },
      ],
      sizeChart: false,
      images: [
        {
          img: belt1,
        },
        {
          img: ptie2,
        },
        {
          img: ptie3,
        },
        {
          img: ptie4,
        },
      ],
    },
    {
      id: "4",
      productName: "THE SOCKS",
      description:
        "A MODEL MADE OF 100% FINE LEATHER IN A BLACK SHADE WITH A GLOSSY FINISH. THIS IS AN ITEM THAT WILL LUXURIOUSLY UPGRADE ANY PAIR OF PANTS FOR DAYTIME AND EVENING HOURS.",
      sizeChart: false,
      colors: {
        isORDivision: true,
        values: [
          { id: "1", value: "rainbow", isSelected: false },
          { id: "2", value: "black", isSelected: false },
          { id: "3", value: "white", isSelected: false },
        ],
      },
      images: [
        {
          img: socks1,
        },
        {
          img: socks2,
        },
        {
          img: socks3,
        },
      ],
    },
  ],
  selectedProducts: [
    {
      productId: "1",
      productType: "none",
      productColor: "none",
      productSize: "none",
    },
    {
      productId: "2",
      productType: "none",
      productColor: "none",
      productSize: "not-provided",
    },
    {
      productId: "3",
      productType: "none",
      productColor: "not-provided",
      productSize: "not-provided",
    },
    {
      productId: "4",
      productType: "not-provided",
      productColor: "none",
      productSize: "not-provided",
    },
  ],
};

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    productTypeSelector: (state, action) => {
      let isProductSelected = state.selectedProducts.find(
        (elem) => elem.productId === action.payload.id
      );

      if (isProductSelected) {
        state.selectedProducts = state.selectedProducts.map((elem) =>
          elem.productId === action.payload.id
            ? { ...elem, productType: action.payload.productTypeValue }
            : elem
        );
      } else {
        state.selectedProducts = [
          ...state.selectedProducts,
          {
            productId: action.payload.id,
            productType: action.payload.productTypeValue,
            productColor: "none",
            productSize: "none",
          },
        ];
      }

      state.data = state.data.map((item) => {
        if (item.id === action.payload.id)
          return {
            ...item,
            productTypes: item.productTypes.map((e) =>
              e.id == action.payload.prductTypeId
                ? { ...e, isSelected: true }
                : { ...e, isSelected: false }
            ),
          };
        else return { ...item };
      });
    },
    productColorSelector: (state, action) => {
      let id = action.payload.id;
      let value = action.payload.productColor;

      let isProductSelected = state.selectedProducts.find(
        (elem) => elem.productId === id
      );

      if (isProductSelected) {
        state.selectedProducts = state.selectedProducts.map((elem) =>
          elem.productId === id ? { ...elem, productColor: value } : elem
        );
      } else {
        state.selectedProducts = [
          ...state.selectedProducts,
          {
            productId: id,
            productColor: value,
            productType: "none",
            productSize: "none",
          },
        ];
      }

      state.data = state.data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            colors: {
              ...item.colors,
              values: item.colors.values.map((elem) =>
                elem.id === action.payload.colorId
                  ? { ...elem, isSelected: true }
                  : { ...elem, isSelected: false }
              ),
            },
          };
        } else {
          return item;
        }
      });
    },
    productSizeSelector: (state, action) => {
      let id = action.payload.id;
      let value = action.payload.optionValue;

      let isProductSelected = state.selectedProducts.find(
        (elem) => elem.productId === id
      );

      if (isProductSelected) {
        state.selectedProducts = state.selectedProducts.map((elem) =>
          elem.productId === id ? { ...elem, productSize: value } : elem
        );
      } else {
        state.selectedProducts = [
          ...state.selectedProducts,
          {
            productId: id,
            productSize: value,
            productType: "none",
            productColor: "none",
          },
        ];
      }

      state.data = state.data.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            sizes: {
              ...item.sizes,
              selectedSize: action.payload.optionValue
                ? action.payload.optionValue
                : "",
              diffrentSizes: item.sizes.diffrentSizes.map((elem) =>
                elem.value === action.payload.optionValue
                  ? { ...elem, isSelected: true }
                  : { ...elem, isSelected: false }
              ),
            },
          };
        } else {
          return item;
        }
      });

      // setState({
      //     ...state,
      //     sizes: {
      //       ...sizes,
      //       selectedSize: e.target.value ? e.target.value : "",
      //       diffrentSizes: state.sizes.diffrentSizes.map((item) =>
      //         e.target.value === item.value
      //           ? { ...item, isSelected: true }
      //           : { ...item, isSelected: false }
      //       ),
      //     },
      //   })
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  productTypeSelector,
  productColorSelector,
  productSizeSelector,
} = productsSlice.actions;

export default productsSlice.reducer;
