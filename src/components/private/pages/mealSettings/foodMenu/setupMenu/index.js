import React, { useCallback, useEffect, useState } from "react";
import { GetIcon } from "../../../../../../icons";
import { deleteData, getData, postData } from "../../../../../../backend/api";
import { NoData } from "../../../../../elements/list/styles";
import { ColumnContainer, RowContainer } from "../../../../../styles/containers/styles";
import Search from "../../../../../elements/search";
import { TabContainer, TabButton, Table, TableHeader, TableBody, TableRow, MealCategoryCell, Div, TableCell, TabData, TabDataItem, MealItem, Title, Variants, Variant, ReplacableItems } from "./styles"; // Import styles from styles.js
import DraggableItem from "./dragdrop/drag";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import DropTarget from "./dragdrop/drop";
import { CloseButton } from "../../../../../elements/list/popup/styles";
import { Header } from "../../../../../elements/list/manage/styles";
const SetupMenu = ({ openData, themeColors, setMessage }) => {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const [menuId] = useState(openData.data._id);
  const [data] = useState(openData.data);
  const [menuData, setMenuData] = useState(null);
  const [meals, setMeals] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [activeTab, setActiveTab] = useState("meals");
  const [searchValue, setSearchValue] = useState("");
  const searchChange = (item) => {
    setSearchValue(item.target.value);
  };

  const handleTabClick = useCallback((tab) => {
    setActiveTab(tab);
    getData({}, tab === "meals" ? "meal/search" : "recipe/search").then((result) => {
      tab === "meals" ? setMeals(result.data.response) : setRecipes(result.data.response);
    });
  }, []);

  useEffect(() => {
    handleTabClick("meals");
    // console.log(openData.data);
  }, [handleTabClick]);
  const [showReplacable, setShowReplcable] = useState(0);
  const [replacableItems, setReplacableItems] = useState({});
  const openReplacableItems = (foodMenuItem, mealOrRecepe) => {
    setShowReplcable(foodMenuItem);
    getData({ foodMenuItem: foodMenuItem }, "food-menu/replacable-items").then((response) => {
      if (response.status === 200) {
        const tempReplacableItems = { ...replacableItems };
        if (mealOrRecepe === "recipe") {
          tempReplacableItems[`replacable-${mealOrRecepe}-${foodMenuItem}`] = response.data.replacableItems?.[0]?.recipeVariants ?? [];
        } else {
          tempReplacableItems[`replacable-${mealOrRecepe}-${foodMenuItem}`] = response.data.replacableItems?.[0]?.meals ?? [];
        }
        setReplacableItems(tempReplacableItems);
      }
    });
  };
  // const handleAddFood = (mealTimeCategoryId, dayIndex) => {
  //   // Handle adding food to the selected cell
  //   console.log(`Adding food to Meal Time Category ${mealTimeCategoryId} on Day ${dayIndex} to ${menuId}`);
  //   alert(`Adding food to Meal Time Category ${mealTimeCategoryId} on Day ${dayIndex} to ${menuId}`);
  // };
  const deleteItem = async (id, index, mealOrRecepe, mealTimeCategory, dayNumber, optionNo) => {
    setMessage({
      type: 2,
      content: "Are you sure you want to delete?",
      proceed: "Delete",
      onProceed: async () => {
        try {
          // Call the deleteData function to delete the item with the given id from the server (Assuming this is an asynchronous function)
          await deleteData({ id }, "food-menu-item");

          // Create a copy of menuData.foodMenu to work with
          const menuDataTemp = { ...menuData };

          // Find the items object based on the provided parameters (mealTimeCategory, dayNumber, optionNo)
          const items = menuDataTemp.foodMenu.find((cat) => cat.mealTimeCategory === mealTimeCategory && cat.dayNumber === dayNumber && cat.optionNo === optionNo);

          // Check the value of mealOrRecepe to decide whether to delete from recipeVariants or meals
          if (mealOrRecepe === "recipe") {
            // Delete the recipeVariant at the specified index
            items.recipeVariants.splice(index, 1);
          } else {
            // Delete the meal at the specified index
            items.meals.splice(index, 1);
          }

          // If both recipeVariants and meals are empty, remove the entire items object from menuDataTemp.foodMenu
          if (items.recipeVariants.length === 0 && items.meals.length === 0) {
            const itemIndex = menuDataTemp.foodMenu.findIndex((cat) => cat.mealTimeCategory === mealTimeCategory && cat.dayNumber === dayNumber && cat.optionNo === optionNo);
            if (itemIndex !== -1) {
              menuDataTemp.foodMenu.splice(itemIndex, 1);
            }
          }

          // Update the state with the modified menuDataTemp
          setMenuData(menuDataTemp);
        } catch (error) {
          // Handle any errors that occur during the deletion process
          console.log(error);
        }
      },
      data: { id },
    });
  };
  const deleteReplcableItem = async (id, index) => {
    setMessage({
      type: 2,
      content: "Are you sure you want to delete?",
      proceed: "Delete",
      onProceed: async () => {
        try {
          // Call the deleteData function to delete the item with the given id from the server (Assuming this is an asynchronous function)
          const response = await deleteData({ id }, "food-menu-item/replacable-item");
          if (response.data?.success === true) {
            const items = { ...replacableItems };
            items[`replacable-recipe-${showReplacable}`].splice(index, 1);

            // Update the state with the modified menuDataTemp
            setReplacableItems(items);
          }
          // Find the items object based on the provided parameters (mealTimeCategory, dayNumber, optionNo)
        } catch (error) {
          // Handle any errors that occur during the deletion process
          console.log(error);
        }
      },
      data: { id },
    });
  };
  const onDrop = async (item, data) => {
    const menuDataTemp = { ...menuData };
    const foodMenuItem = data.foodMenuItem;
    if (showReplacable) {
      const replacableItemsTemp = { ...replacableItems };
      if (data.mealOrRecepe === "recipe" && activeTab === "recipes") {
        const response = await postData({ ...data, mealOrRecepe: item.mealOrRecepe, foodMenuItem, recipeVariant: item._id, optionNo: data.optionNo }, "food-menu-item/replacable-item");
        if (response?.data?.success === true) {
          const replacableItems = replacableItemsTemp[`replacable-${item.mealOrRecepe}-${foodMenuItem}`];
          if (replacableItems) {
            replacableItems.push({
              ...item,
              ...data,
              foodMenuReplacableItem: response.data.foodMenuReplacableItem._id,
            });
          } else {
            replacableItemsTemp[`replacable-${item.mealOrRecepe}-${foodMenuItem}`] = [
              {
                ...item,
                ...data,
                foodMenuReplacableItem: response.data.foodMenuReplacableItem._id,
              },
            ];
          }
        }
      } else if (data.mealOrRecepe === "meal" && activeTab === "meals") {
        const response = await postData({ ...data, mealOrRecepe: item.mealOrRecepe, foodMenuItem, meal: item._id }, "food-menu-item/replacable-item");
        if (response?.data?.success === true) {
          const replacableItems = replacableItemsTemp[`replacable-${item.mealOrRecepe}-${foodMenuItem}`];
          if (replacableItems) {
            replacableItems.push({
              ...item,
              ...data,
              foodMenuReplacableItem: response.data.foodMenuReplacableItem._id,
            });
          } else {
            replacableItemsTemp[`replacable-${item.mealOrRecepe}-${foodMenuItem}`] = [
              {
                ...item,
                ...data,
                foodMenuReplacableItem: response.data.foodMenuReplacableItem._id,
              },
            ];
          }
        }
      }
      setReplacableItems(replacableItemsTemp);
    } else {
      const items = menuDataTemp.foodMenu.find((cat) => data.mealTimeCategory === cat.mealTimeCategory && data.dayNumber === cat.dayNumber && data.optionNo === cat.optionNo);
      if (item.mealOrRecepe === "recipe") {
        const response = await postData({ ...data, mealOrRecepe: item.mealOrRecepe, foodMenu: menuId, recipeVariant: item._id, optionNo: data.optionNo }, "food-menu-item");
        if (response?.data?.success === true) {
          if (items) {
            items.recipeVariants.push({ ...item, ...data, foodMenuItem: response.data.foodMenuItem._id });
          } else {
            menuDataTemp.foodMenu.push({ ...data, meals: [], recipeVariants: [{ ...item, ...data, foodMenuItem: response.data.foodMenuItem._id }] });
          }
        }
      } else {
        const response = await postData({ ...data, mealOrRecepe: item.mealOrRecepe, foodMenu: menuId, meal: item._id, optionNo: data.optionNo }, "food-menu-item");
        if (response?.data?.success === true) {
          if (items) {
            items.meals.push({ ...item, ...data, foodMenuItem: response.data.foodMenuItem._id });
          } else {
            menuDataTemp.foodMenu.push({ ...data, recipeVariants: [], meals: [{ ...item, ...data, foodMenuItem: response.data.foodMenuItem._id }] });
          }
        }
      }
      setMenuData(menuDataTemp);
    }
  };
  useEffect(() => {
    getData({ menuId: openData.data._id }, "food-menu/get-a-menu").then((response) => {
      if (response.status === 200) {
        setMenuData(response.data);
      }
    });
  }, [openData.data._id]);

  return menuData ? (
    <ColumnContainer style={{ marginBottom: "30px" }}>
      <DndProvider backend={HTML5Backend}>
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
              {menuData.mealTimeCategories.map((mealTimeCategory) => (
                <TableRow key={mealTimeCategory._id}>
                  <MealCategoryCell>{mealTimeCategory.mealtimeCategoriesName}</MealCategoryCell>
                  {daysOfWeek.map((day, dayNumber) => {
                    const options = menuData.foodMenu.filter((item) => item.mealTimeCategory === mealTimeCategory._id && item.dayNumber === dayNumber && (item.meals.length > 0 || item.recipeVariants.length > 0));
                    return (
                      <TableCell className={dayNumber === 0 ? "first" : ""} key={dayNumber}>
                        {options.map((items, index) => {
                          return (
                            <Div key={`drop-${index + mealTimeCategory._id + dayNumber + items.optionNo}`}>
                              <DropTarget
                                onDrop={showReplacable ? () => {} : onDrop}
                                data={{ mealTimeCategory: mealTimeCategory._id, dayNumber, optionNo: items.optionNo }}
                                element={
                                  <Variants className="vertical">
                                    {items?.recipeVariants?.length > 0
                                      ? items.recipeVariants.map((item, index) => {
                                          // Render your items inside the FoodButton here
                                          // For example, you can render a list of items like this
                                          return (
                                            <Variant key={item._id} className="vertical">
                                              <span className="recipe">{item.recipe.title} </span>
                                              <span className="variant">{item.variant} </span>
                                              <span
                                                className="delete"
                                                onClick={() => {
                                                  deleteItem(item.foodMenuItem, index, "recipe", mealTimeCategory._id, dayNumber, items.optionNo);
                                                }}
                                              >
                                                <GetIcon icon={"close"} />
                                              </span>
                                              {data.menuType === "Dynamic" && (
                                                <span
                                                  title="Replacable Items"
                                                  className={`replace ${showReplacable === item.foodMenuItem && "selected"}`}
                                                  onClick={() => {
                                                    console.log(item.foodMenuItem);
                                                    openReplacableItems(item.foodMenuItem, "recipe");
                                                  }}
                                                >
                                                  <GetIcon icon={"replace"} />
                                                </span>
                                              )}
                                              {showReplacable === item.foodMenuItem && (
                                                <DropTarget
                                                  onDrop={onDrop}
                                                  data={{ mealTimeCategory: mealTimeCategory._id, dayNumber, optionNo: items.optionNo, foodMenuItem: item.foodMenuItem, mealOrRecepe: "recipe", index }}
                                                  element={
                                                    <ReplacableItems>
                                                      <Header className="small">
                                                        <span>{`Replacable Recipes`}</span>
                                                        <CloseButton theme={themeColors} onClick={() => setShowReplcable(false)}>
                                                          <GetIcon icon={"Close"} />
                                                        </CloseButton>
                                                      </Header>
                                                      <Variants className="vertical">
                                                        {replacableItems[`replacable-recipe-${item.foodMenuItem}`]?.length > 0 ? (
                                                          replacableItems[`replacable-recipe-${item.foodMenuItem}`].map((replacableItem, index) => (
                                                            <Variant key={replacableItem._id} className="vertical">
                                                              <span className="recipe">{replacableItem.recipe?.title}</span>
                                                              <span className="variant">{replacableItem.variant}</span>
                                                              <span
                                                                className="delete"
                                                                title="Remove Item"
                                                                onClick={() => {
                                                                  deleteReplcableItem(replacableItem.foodMenuReplacableItem, index);
                                                                }}
                                                              >
                                                                <GetIcon icon={"close"} />
                                                              </span>
                                                            </Variant>
                                                          ))
                                                        ) : (
                                                          <Variant className="vertical">
                                                            <GetIcon icon={"add"}></GetIcon>
                                                          </Variant>
                                                        )}
                                                      </Variants>
                                                    </ReplacableItems>
                                                  }
                                                />
                                              )}
                                            </Variant>
                                          );
                                        })
                                      : ""}
                                    {items?.meals?.length > 0
                                      ? items.meals.map((item, index) => {
                                          return (
                                            <Variant key={item._id} className="vertical">
                                              <span className="recipe">{item.title} </span>
                                              <span className="variant">{"Items: " + item.mealItems.length} </span>
                                              <span
                                                className="delete"
                                                title="Remove Item"
                                                onClick={() => {
                                                  deleteItem(item.foodMenuItem, index, "meals", mealTimeCategory._id, dayNumber, items.optionNo);
                                                }}
                                              >
                                                <GetIcon icon={"close"} />
                                              </span>
                                              {data.menuType === "Dynamic" && (
                                                <span
                                                  title="Replacable Items"
                                                  className={`replace`}
                                                  onClick={() => {
                                                    openReplacableItems(item.foodMenuItem, "meal");
                                                  }}
                                                >
                                                  <GetIcon icon={"replace"} />
                                                </span>
                                              )}
                                              {showReplacable === item.foodMenuItem && (
                                                <DropTarget
                                                  onDrop={onDrop}
                                                  data={{ mealTimeCategory: mealTimeCategory._id, dayNumber, optionNo: items.optionNo, foodMenuItem: item.foodMenuItem, mealOrRecepe: "meal", index }}
                                                  element={
                                                    <ReplacableItems>
                                                      <Header className="small">
                                                        <span>{`Replacable Meals`}</span>
                                                        <CloseButton theme={themeColors} onClick={() => setShowReplcable(false)}>
                                                          <GetIcon icon={"Close"} />
                                                        </CloseButton>
                                                      </Header>
                                                      <Variants className="vertical">
                                                        {replacableItems[`replacable-meal-${item.foodMenuItem}`]?.length > 0 ? (
                                                          replacableItems[`replacable-meal-${item.foodMenuItem}`].map((replacableItem, index) => (
                                                            <Variant key={replacableItem._id} className="vertical">
                                                              <span className="recipe">{replacableItem.title}</span>
                                                              <span className="variant">{"Items: " + replacableItem.mealItems.length}</span>
                                                              <span
                                                                className="delete"
                                                                title="Remove Item"
                                                                onClick={() => {
                                                                  deleteReplcableItem(replacableItem.foodMenuReplacableItem, index);
                                                                }}
                                                              >
                                                                <GetIcon icon={"close"} />
                                                              </span>
                                                            </Variant>
                                                          ))
                                                        ) : (
                                                          <Variant className="vertical">
                                                            <GetIcon icon={"add"}></GetIcon>
                                                          </Variant>
                                                        )}
                                                      </Variants>
                                                    </ReplacableItems>
                                                  }
                                                />
                                              )}
                                            </Variant>
                                          );
                                        })
                                      : ""}
                                  </Variants>
                                }
                              ></DropTarget>
                            </Div>
                          );
                        })}
                        {(data.menuType === "Optional" || options.length === 0) && (
                          <Div>
                            <DropTarget
                              onDrop={showReplacable ? () => {} : onDrop}
                              data={{ mealTimeCategory: mealTimeCategory._id, dayNumber, optionNo: options.length + 1 }}
                              element={
                                <Variants className="vertical">
                                  <GetIcon icon={"add"}></GetIcon>
                                </Variants>
                              }
                            />
                          </Div>
                        )}
                      </TableCell>
                    );
                  })}
                  <MealCategoryCell></MealCategoryCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </RowContainer>
        <RowContainer className="mealSelection">
          <TabContainer>
            <TabButton active={activeTab === "meals"} onClick={() => handleTabClick("meals")}>
              Meals
            </TabButton>
            <TabButton active={activeTab === "recipes"} onClick={() => handleTabClick("recipes")}>
              Recipes
            </TabButton>
          </TabContainer>

          <TabData>
            <Search title={"Search"} theme={themeColors} placeholder="Search" value={searchValue} onChange={searchChange} />
            {activeTab === "meals" && meals && (
              <TabDataItem>
                {meals.map((meal) => (
                  // <MealItem key={meal._id}>
                  //   <div>{meal.title ?? "Title not found!"}</div>
                  // </MealItem>
                  <DraggableItem
                    key={meal._id}
                    item={{ ...meal, mealOrRecepe: "meal", meal: { title: meal.title } }}
                    element={
                      <MealItem key={meal._id}>
                        <Title>{meal.title ?? "Title not found!"}</Title>
                        <Title>
                          <span>BHD</span>
                          <span className="price">{meal.price}</span>
                          <span className="offer">{meal.offerPrice}</span>
                        </Title>
                        <Variants>
                          {meal.mealItems.map((item) => {
                            const recipeVariant = item.recipeVariant;
                            return (
                              <Variant key={item._id}>
                                <span>
                                  <span className="recipe">{recipeVariant.recipe.title}</span>
                                </span>
                                <span className="variant">{recipeVariant.variant}</span>
                              </Variant>
                            );
                          })}
                        </Variants>
                      </MealItem>
                    }
                  />
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
                          <DraggableItem
                            key={variant._id}
                            item={{ ...variant, mealOrRecepe: "recipe", recipe: { title: recipe.title } }}
                            element={
                              <Variant>
                                <span>
                                  <span>BHD</span>
                                  <span className="price">{variant.price}</span>
                                  <span className="offer">{variant.price}</span>{" "}
                                </span>
                                <span className="variant">{variant.variant} </span>
                              </Variant>
                            }
                          />
                        );
                      })}
                    </Variants>
                  </MealItem>
                ))}
              </TabDataItem>
            )}
          </TabData>
        </RowContainer>
      </DndProvider>
    </ColumnContainer>
  ) : (
    <NoData>Loading</NoData>
  );
};

export default SetupMenu;
