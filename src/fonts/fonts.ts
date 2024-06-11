import localFont from 'next/font/local';

const calSansFont = localFont({
  src: './CalSans.otf',
});

const productSansFont = localFont({
  src: './ProductSans.ttf',
});

export const fonts = {
  calSans: calSansFont.className,
  productSans: productSansFont.className,
};
