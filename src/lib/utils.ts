import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import moment from "moment";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDateLLL = (date: any) => {
  return moment(date).format("DD.MM.YYYY, HH:mm");
};

export const getDayLLL = (date: any) => {
  return moment(date).format("MMMM D, YYYY");
};

export const getMonthLLL = (date: any) => {
  return moment(date).format("YYYY-MM");
};
