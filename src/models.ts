export interface IResponse {
  message: string;
  success: boolean;
}

export const CustomResponse = (
  message: string,
  success: boolean
): IResponse => {
  return {
    message,
    success,
  };
};
