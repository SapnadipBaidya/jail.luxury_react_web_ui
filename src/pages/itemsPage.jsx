import React, { useEffect, useState, useCallback } from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  findItemsByCatagoryId,
  getAllColors,
  getSizeFilterByCatagory,
} from "../store/actions/itemActions";
import GridWrapper from "../components/wrappers/GridWrapper";
import FilterWrapper from "../components/wrappers/FilterWrapper";
import { useAuth } from "../contexts/AuthProvider";
import SortFilterComponent from "../components/wrappers/sortFilterComponent";
import PaginationComponent from "../components/paginationComponent/pagination";

function ItemsPage() {
  const { user } = useAuth();
  const theme = useTheme();
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.idStorageReducer.id);
  const itemsArr = useSelector((state) => state.itemReducer);
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));

  const [selectedFilters, setSelectedFilters] = useState({
    gender: "",
    size: [],
    color: [],
    price: [0, 1000000],
  });

  const [showFilters, setShowFilters] = useState(false);
  const [page, setPage] = useState(1);

  const fetchItems = useCallback(() => {
    const payload = {
      productFilters: {
        sizes: selectedFilters.size,
        colors: selectedFilters.color,
        fk_category_id: categoryId,
        gender: selectedFilters.gender,
        priceStart: selectedFilters.price[0],
        priceEnd: selectedFilters.price[1],
      },
      defaultFlag: 1,
      page,
      userId: user?.id,
    };
    dispatch(findItemsByCatagoryId(payload));
  }, [dispatch, categoryId, selectedFilters, user?.id]);

  useEffect(() => {
    fetchItems();
    dispatch(getSizeFilterByCatagory(categoryId));
    dispatch(getAllColors());
  }, [ dispatch, categoryId,page]);

  const onClearFilters = () => {
    const defaultFilters = {
      gender: "",
      size: [],
      color: [],
      price: [0, 1000000],
    };
    setSelectedFilters(defaultFilters);

    const payload = {
      productFilters: {
        fk_category_id: categoryId,
        priceStart: defaultFilters.price[0],
        priceEnd: defaultFilters.price[1],
      },
      defaultFlag: 1,
      page,
      userId: user?.id,
    };

    dispatch(findItemsByCatagoryId(payload));
  };

  const onApplyFilters = (filters) => {
    setSelectedFilters(filters);
    fetchItems();
    setShowFilters(false); // Close filter modal after applying filters
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "99vw",
    height: "99vh",
    overflow: "hidden",
  };

  return (
    <div style={containerStyle}>
      {/* 🔹 SortFilterComponent on Desktop - Always on top */}
      {!isMobileOrTablet && (
        <SortFilterComponent setShowFilters={setShowFilters} showFilters={showFilters} />
      )}

      {/* 🔄 Main Content Container */}
      {!itemsArr?.loading ? (
        <div
          style={{
            display: "flex",
            flexDirection: isMobileOrTablet ? "column" : "row",
            justifyContent: "center",
            alignItems: "flex-start",
            width: "100%",
            maxWidth: "99%",
            flexGrow: 1,
            overflow: "auto",
          }}
        >
          {/* 🔹 Desktop View: Show Both Filter & Grid */}
          {!isMobileOrTablet && showFilters && (
            <FilterWrapper
              onApplyFilters={onApplyFilters}
              onClearFilters={onClearFilters}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          )}

          {/* 🔹 Mobile View: Show Either Filter or Grid */}
          {isMobileOrTablet ? (
            showFilters ? (
              <FilterWrapper
                onApplyFilters={onApplyFilters}
                onClearFilters={onClearFilters}
                selectedFilters={selectedFilters}
                setSelectedFilters={setSelectedFilters}
              />
            ) : (
              <GridWrapper
                itemsArr={itemsArr}
                type="Product"
                setShowFilters={setShowFilters}
                showFilters={showFilters}
                page={page}
                setPage={setPage}
              />
            )
          ) : (
            /* 🔹 Desktop View: Show GridWrapper Always */
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                flexGrow: 1,
              }}
            >
              <GridWrapper
                itemsArr={itemsArr}
                type="Product"
                setShowFilters={setShowFilters}
                showFilters={showFilters}
                page={page}
                setPage={setPage}
              />

              {/* 🔹 Pagination Always Under GridWrapper */}
              <PaginationComponent page={page} setPage={setPage} />
            </div>
          )}
        </div>
      ) : (
        "loading"
      )}

      {/* 🔹 Mobile/Tablet: SortFilterComponent is Fixed at Bottom */}
      {isMobileOrTablet && (
        <SortFilterComponent setShowFilters={setShowFilters} showFilters={showFilters} />
      )}
    </div>
  );
}

export default ItemsPage;