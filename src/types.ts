export enum ProductType {
  CONFIGURABLE = 'configurable',
  SIMPLE = 'simple'
}

export enum AttributeCode {
  COLOR = 'color',
  SIZE = 'size'
}

export type Variant = {
  attributes: [
    {
      code: AttributeCode;
      value_index: number;
    }
  ];
  product: {
    id: number;
    sku: string;
    image: string;
  };
};

export type SimpleProduct = {
  type: ProductType.SIMPLE;
  id: number;
  sku: string;
  title: string;
  regular_price: {
    currency: string;
    value: number;
  };
  image: string;
  brand: number;
  variantId: undefined;
};

export interface ConfigurableProduct extends SimpleProduct {
  type: ProductType.CONFIGURABLE;
  configurable_options: [
    {
      attribute_id: number;
      attribute_code: AttributeCode;
      label: string;
      position: number;
      id: number;
      values: [
        {
          label: string;
          value_index: number;
          value: string;
        }
      ];
    }
  ];
  variants: Variant[];
}

export type Brands = {
  id: number;
  title: string;
  sort: string;
  code: string;
};

export type Product = SimpleProduct | (ConfigurableProduct & { variantId?: number });
export type CartProduct = {
  count: number;
  product: Product;
};
export type CartProducts = CartProduct[];
