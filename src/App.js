import "./App.css";
import ListingFiltersMenu from "./components/listingFiltersMenu/ListingFiltersMenu";
import FilteredItems from "./components/listingFiltersMenu/filters/filteredItems/FilteredItems";
import ListingPage from "./components/listingPage/ListingPage";

function App() {
  return (
    <div className="App">
      <ListingFiltersMenu />
      <FilteredItems />
      <ListingPage />
    </div>
  );
}

export default App;
