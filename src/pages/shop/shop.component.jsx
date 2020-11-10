import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import { shopData } from "../../constants/directory.data";

const ShopPage = () => {
  const collections = shopData;

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
