import RegionSelect from "./RegionSelect";

const Search = ({ value, onChange, regions }) =>
    <div className="search-bar">
        <input className="search-form" placeholder="Search for a country" value={value} onChange={onChange} />
        <RegionSelect regions={regions}>Filter</RegionSelect>
    </div>


export default Search;