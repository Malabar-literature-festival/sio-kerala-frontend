import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GetIcon } from "../../../../../../icons";
import { getData } from "../../../../../../backend/api";
import { NoData } from "../../../../../elements/list/styles";
import {
  ColumnContainer,
  RowContainer,
} from "../../../../../styles/containers/styles";
import Search from "../../../../../elements/search";

const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const TabButton = styled.button`
  padding: 10px 20px;
  background-color: ${({ active }) => (active ? "#f9f9f9" : "#ccc")};
  border: none;
  border-radius: 4px;
  font-size: 14px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background-color: #e9e9e9;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: center;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const MealCategoryCell = styled.th`
  position: sticky;
  left: 0;
  top: 0;
  padding: 0px 10px 0 30px;
  text-align: left;
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
  background-color: white;
  text-align: center;
`;

const FoodButton = styled.button`
  padding: 5px 10px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #e9e9e9;
    transform: scale(1.2);
  }
`;
const TabData = styled.div`
  padding: 5px 10px;
  border: 1px solid #d2d2d2;
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const TabDataItem = styled.div`
  width: 100%;
`;
const MealItem = styled.div`
  background: white;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 10px;
`;
const Title = styled.div`
  width: 100%;
`;
const Variants = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow-wrap: anywhere;
  margin-top: 10px;
  column-gap: 10px;
`;
const Variant = styled.div`
  width: 100%;
  border: 1px solid;
  border-radius: 10px;
  padding: 5px 10px;
  font-weight: bolder;
  font-size: 14px;
  width: auto;
  flex-direction: column;
  display: flex;
  span {
    font-size: 10px;
  }
  .price {
    font-size: 10px;
    text-decoration: line-through;
  }
  .offer {
    font-size: 14px;
    font-weight: bolder;
  }
  .variant {
    font-size: 14px;
  }
`;
const SetupMenu = ({ openData, themeColors }) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [menuId] = useState(openData.data._id);
  const [menuData, setMenuData] = useState(null);
  const [meals, setMeals] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [activeTab, setActiveTab] = useState("meals");
  const [searchValue, setSearchValue] = useState("");
  const searchChange = (item) => {
    setSearchValue(item.target.value);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    getData({}, tab === "meals" ? "food-group" : "recipe/search").then(
      (result) => {
        tab === "meals"
          ? setMeals(result.data.response)
          : setRecipes(result.data.response);
        console.log("meals", meals, "recipes", recipes);
      }
    );
  };
  const handleAddFood = (mealTimeCategoryId, dayIndex) => {
    // Handle adding food to the selected cell
    console.log(
      `Adding food to Meal Time Category ${mealTimeCategoryId} on Day ${dayIndex} to ${menuId}`
    );
    alert(
      `Adding food to Meal Time Category ${mealTimeCategoryId} on Day ${dayIndex} to ${menuId}`
    );
  };

  useEffect(() => {
    getData({ menuId: openData.data._id }, "food-menu/get-a-menu").then(
      (response) => {
        setMenuData(response.data);
        console.log(response);
      }
    );
  }, [openData.data._id]);

  return menuData ? (
    <ColumnContainer>
      <RowContainer>
        <Table>
          <thead>
            <tr>
              <MealCategoryCell></MealCategoryCell>
              {daysOfWeek.map((day, index) => (
                <TableHeader key={index}>{day}</TableHeader>
              ))}
            </tr>
          </thead>
          <TableBody>
            {menuData.mealTimeCategories.map(
              (mealTimeCategory, categoryIndex) => (
                <TableRow key={mealTimeCategory._id}>
                  <MealCategoryCell>
                    {mealTimeCategory.mealtimeCategoriesName}
                  </MealCategoryCell>
                  {daysOfWeek.map((day, dayIndex) => (
                    <TableCell
                      className={dayIndex === 0 ? "first" : ""}
                      key={dayIndex}
                    >
                      <Div>
                        <FoodButton
                          onClick={() =>
                            handleAddFood(mealTimeCategory._id, dayIndex)
                          }
                        >
                          <GetIcon icon={"add"}></GetIcon>
                        </FoodButton>
                      </Div>
                    </TableCell>
                  ))}
                  <MealCategoryCell></MealCategoryCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </RowContainer>
      <RowContainer className="mealSelection">
        <TabContainer>
          <TabButton
            active={activeTab === "meals"}
            onClick={() => handleTabClick("meals")}
          >
            Meals
          </TabButton>
          <TabButton
            active={activeTab === "recipes"}
            onClick={() => handleTabClick("recipes")}
          >
            Recipes
          </TabButton>
        </TabContainer>

        <TabData>
          <Search
            title={"Search"}
            theme={themeColors}
            placeholder="Search"
            value={searchValue}
            onChange={searchChange}
          />
          {activeTab === "meals" && meals && (
            <TabDataItem>
              {meals.map((meal) => (
                <MealItem key={meal._id}>
                  <div>{meal.packageName ?? "Title not found!"}</div>
                </MealItem>
              ))}
            </TabDataItem>
          )}
          {activeTab === "recipes" && recipes && (
            <TabDataItem>
              {recipes.map((recipe) => (
                <MealItem key={recipe._id}>
                  <Title>{recipe.title ?? "Title not found!"}</Title>
                  <Variants>
                    {recipe.recipeVariants.map((variant) => {
                      return (
                        <Variant>
                          <span>
                            <span>BHD</span>
                            <span className="price">{variant.price}</span>
                            <span className="offer">{variant.price}</span>{" "}
                          </span>
                          <span className="variant">{variant.variant} </span>
                        </Variant>
                      );
                    })}
                  </Variants>
                </MealItem>
              ))}
            </TabDataItem>
          )}
        </TabData>
      </RowContainer>
    </ColumnContainer>
  ) : (
    <NoData>Loading</NoData>
  );
};

export default SetupMenu;
