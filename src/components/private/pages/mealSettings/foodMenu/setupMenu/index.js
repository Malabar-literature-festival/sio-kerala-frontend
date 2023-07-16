import React, { useState } from "react";
import styled from "styled-components";
import { GetIcon } from "../../../../../../icons";

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

const SetupMenu = ({ openData }) => {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const [menuId] = useState(openData.data._id);
  const mealTimeCategories = [
    { _id: "1", title: "Breakfast" },
    { _id: "2", title: "Lunch" },
    { _id: "3", title: "Snacks" },
    { _id: "4", title: "Dessert" },
    { _id: "5", title: "Brunch" },
    { _id: "6", title: "Snack" },
  ];

  const handleAddFood = (mealTimeCategoryId, dayIndex) => {
    // Handle adding food to the selected cell
    console.log(`Adding food to Meal Time Category ${mealTimeCategoryId} on Day ${dayIndex} to ${menuId}`);
    alert(`Adding food to Meal Time Category ${mealTimeCategoryId} on Day ${dayIndex} to ${menuId}`);
  };

  return (
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
        {mealTimeCategories.map((mealTimeCategory, categoryIndex) => (
          <TableRow key={mealTimeCategory._id}>
            <MealCategoryCell>{mealTimeCategory.title}</MealCategoryCell>
            {daysOfWeek.map((day, dayIndex) => (
              <TableCell className={dayIndex === 0 && mealTimeCategories ? "first" : ""} key={dayIndex}>
                <Div>
                  <FoodButton onClick={() => handleAddFood(mealTimeCategory._id, dayIndex)}>
                    <GetIcon icon={"add"}></GetIcon>
                  </FoodButton>
                </Div>{" "}
              </TableCell>
            ))}
            <MealCategoryCell></MealCategoryCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SetupMenu;
