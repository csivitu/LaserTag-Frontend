import QRCode from "qrcode";

export const generateQR = async (text) => {
  try {
    const opts = {
      type: "svg",
    };

    return await QRCode.toString(text, opts);
  } catch (err) {
    console.error(err);
  }
};