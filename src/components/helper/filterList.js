export const filterListings = (listing, filterItems) => {
  const { price, area, bedroom, region } = filterItems;

  const isPriceValid =
    (!price.fromPrice || listing.price >= price.fromPrice) &&
    (!price.toPrice || listing.price <= price.toPrice);

  const isAreaValid =
    (!area.fromArea || listing.area >= area.fromArea) &&
    (!area.toArea || listing.area <= area.toArea);

  const isBedroomValid = !bedroom || listing.bedrooms === bedroom;

  const isRegionValid =
    region.length === 0 || region.includes(listing.city.region.name);

  return isPriceValid && isAreaValid && isBedroomValid && isRegionValid;
};
