import FilterRegion from "../listingFiltersMenu/filters/filterRegion/FilterRegion";
import FilterPrice from "../listingFiltersMenu/filters/filterPrice/FilterPrice";
import FilterArea from "../listingFiltersMenu/filters/filterArea/FilterArea";
import FilterBedroom from "../listingFiltersMenu/filters/filterBedroom/FilterBedroom";

export const filterMenu = [
  { title: "რეგიონი", Modal: FilterRegion },
  { title: "საფასო კატეგორია", Modal: FilterPrice },
  { title: "ფართობი", Modal: FilterArea },
  { title: "საძინებლების რაოდენობა", Modal: FilterBedroom },
];
