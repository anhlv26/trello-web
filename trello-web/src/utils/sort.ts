// // Định nghĩa kiểu cho các tham số
// type OriginalArrayType = { [key: string]: any };
// type OrderArrayType = string[];

// import { Card, Column } from "~/types/type";

// export const mapOrder = (
//   originalArray: OriginalArrayType[],
//   orderArray: OrderArrayType,
//   key: string
// ): OriginalArrayType[] => {
//   if (!originalArray || !orderArray || !key) return [];

//   const clonedArray = [...originalArray];
//   const orderedArray = clonedArray.sort((a, b) => {
//     return orderArray.indexOf(a[key]) - orderArray.indexOf(b[key]);
//   });

//   return orderedArray;
// };

// Định nghĩa kiểu cho các tham số
// type OriginalArrayType = (Column | Card)[]; // Sửa lại kiểu này để khớp với Column
// type OrderArrayType = string[];
// type ColumnKey = "_id";

// export const mapOrder = <T extends OriginalArrayType>(
//   originalArray: T,
//   orderArray: OrderArrayType,
//   key: ColumnKey
// ): OriginalArrayType[] => {
//   if (!originalArray || !orderArray || !key) return [];

//   const clonedArray = [...originalArray];
//   const orderedArray = clonedArray.sort((a, b) => {
//     return orderArray.indexOf(a[key]) - orderArray.indexOf(b[key]);
//   });

//   return orderedArray;
// };


// import { Column, Card } from "~/types/type";

// // // Định nghĩa kiểu cho các tham số
// type OriginalArrayType = (Column | Card)[];
// type OrderArrayType = string[];
// type KeyType = "_id"; // Đặt tên kiểu cho key

// // export const mapOrder = (
// //   originalArray: OriginalArrayType,
// //   orderArray: OrderArrayType,
// //   key: KeyType
// // ): (Column | Card)[] => {
// //   if (!originalArray || !orderArray || !key) return originalArray;

// //   const clonedArray = [...originalArray];
// //   const orderedArray = clonedArray.sort((a, b) => {
// //     return orderArray.indexOf((a as any)[key]) - orderArray.indexOf((b as any)[key]);
// //   });

// //   return orderedArray;
// // };
// export const mapOrder = (
//   originalArray: OriginalArrayType,
//   orderArray: OrderArrayType,
//   key: KeyType
// ): Column[] => {
//   if (!originalArray || !orderArray || !key) return originalArray as Column[];

//   const clonedArray = [...originalArray];
//   const orderedArray = clonedArray.sort((a, b) => {
//     return orderArray.indexOf((a as any)[key]) - orderArray.indexOf((b as any)[key]);
//   });

//   return orderedArray as Column[];
// };

export const mapOrder = <T extends { _id: string }>(
  array: T[],
  order: string[],
  key: '_id'
): T[] => {
  if (!array || array.length === 0) return [];
  const map = new Map(array.map(item => [item[key], item]));
  return order.map(id => map.get(id)).filter(item => item !== undefined) as T[];
};
