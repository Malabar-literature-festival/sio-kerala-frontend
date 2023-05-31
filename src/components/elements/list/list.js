import { useEffect, useRef, useState } from "react";
import { Table, Th, Button, Td, Tr, Count, ArrowButton, AddButton, ButtonPanel, Filter, Filters, ToggleContainer, ToggleInput, ToggleSlider, NoData, ScrollLayout, FilterBox, Img } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RowContainer } from "../../styles/containers/styles";
import { AddIcon, FilterIcon, GetIcon, NextIcon, PreviousIcon } from "../../../icons";
import { useNavigate } from "react-router-dom";
import { deleteData, postData, putData } from "../../../backend/api";
import CrudForm from "./create";
import { useTranslation } from "react-i18next";
import { addPageObject } from "../../../store/actions/pages";
import FormInput from "../input";
import Manage from "./manage";
import Loader from "../loader";
import Search from "../search";
import SubPage from "./subPage";
import moment from "moment";
import DateRangeSelector from "../daterange";
const ListTable = ({ parentReference = "_id", referenceId = 0, actions = [], api, setMessage, attributes = [], addPrivilege = true, delPrivilege = true, updatePrivilege = true, shortName = "Item", itemTitle = "title", datefilter = false, viewMode = "list" }) => {
  const users = useSelector((state) =>
    state.pages[`${api}`]
      ? state.pages[`${api}`]
      : {
          data: null,
          isLoading: true,
          error: null,
        }
  );
  const [showSublist, setShowSubList] = useState(false);
  const [currentApi] = useState(`${api}`);
  const [subAttributes, setSubAttributes] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const themeColors = useSelector((state) => state.themeColors);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [t] = useTranslation();
  const [showLoader, setShowLoader] = useState(false);
  /**
   * Function to set the showLoader state.
   * @param {boolean} status The status of the loader.
   */
  const setLoaderBox = (status) => {
    setShowLoader(status);
  };
  // processing attributes
  const [initialized, setInitialized] = useState(false);
  const [prevCrud, setPrevCrud] = useState("");
  const [formInput, setFormInput] = useState([]);
  const [errroInput, setErrorInput] = useState([]);
  const [addValues, setAddValues] = useState({});
  const [updateId, setUpdateId] = useState("");
  const [updateValues, setUpdateValues] = useState({});
  const [udpateView, setUpdateView] = useState(() => {});
  const [filterView, setFilterView] = useState({});
  useEffect(() => {
    const addValuesTemp = {
      addValues: {},
      updateValues: {},
      viewValues: {},
      errorValues: {},
      filterValues: {},
    };
    let tempFilter = false;
    let date = new Date();
    attributes.forEach((item) => {
      if (item.type === "checkbox") {
        let bool = JSON.parse(item.default === "false" || item.default === "true" ? item.default : "false");
        if (item.add) {
          addValuesTemp.addValues[item.name] = bool;
        }
        addValuesTemp.updateValues[item.name] = bool;
      } else if (item.type === "datetime" || item.type === "date" || item.type === "time") {
        addValuesTemp.addValues[item.name] = date.toISOString();
        if (item.add) {
          addValuesTemp.updateValues[item.name] = date.toISOString();
        }
      } else if (item.type === "image" || item.type === "file") {
        if (item.add) {
          addValuesTemp.addValues[item.name] = [];
        }
        if (item.update) {
          addValuesTemp.updateValues[item.name] = [];
        }
      } else {
        if (item.add) {
          addValuesTemp.addValues[item.name] = item.default;
        }
        addValuesTemp.updateValues[item.name] = item.default;
        if (item.type === "select") {
          addValuesTemp.filterValues[item.name] = "";
          tempFilter = true;
        }
      }
      addValuesTemp.errorValues[item.name] = "";
      addValuesTemp.filterValues["searchkey"] = "";
    });
    if (referenceId !== 0) {
      addValuesTemp.filterValues[parentReference] = referenceId;
    }
    setFormInput(attributes);
    setAddValues(addValuesTemp.addValues);
    setErrorInput(addValuesTemp.errorValues);
    setUpdateValues(addValuesTemp.updateValues);
    setFilterView(addValuesTemp.filterValues);

    setFilter(tempFilter);
    setInitialized(true);
  }, [attributes, dispatch, setPrevCrud, prevCrud, setFormInput, setAddValues, setUpdateValues, setFilterView, parentReference, referenceId]);

  // end processing attributes
  useEffect(() => {
    setLoaderBox(users.isLoading);
    if (currentIndex === 0 && users.data?.count) {
      setCount(users.data.filterCount);
      setTotalCount(users.data.totalCount);
    }
  }, [users, currentIndex]);

  useEffect(() => {
    if (initialized) {
      dispatch(addPageObject(currentApi, currentIndex, filterView));
    }
  }, [initialized, currentApi, currentIndex, dispatch, filterView]);
  const refreshView = (currentIndex) => {
    try {
      dispatch(addPageObject(currentApi, currentIndex, filterView));
    } catch {}
  };

  //crud functions
  const [isCreating, setIsCreating] = useState(false);
  const isCreatingHandler = (value, callback) => {
    if (isCreating) {
      setUpdateView(() => callback);
      setIsCreating(false);
      navigate({}, "", window.location.pathname);
    } else {
      window.location.hash = "add";
      setIsCreating(true);
    }
  };
  const [isEditing, setIsEditing] = useState(false);
  const isEditingHandler = (value, callback) => {
    setLoaderBox(true);
    if (!isEditing) {
      setUpdateView(() => callback);
      const updateValues = {};
      setUpdateId(value._id);
      formInput.forEach((item) => {
        if (item.update) {
          if (item.type === "checkbox") {
            let bool = value[item.name].toString() === "true" ? true : false;
            updateValues[item.name] = bool;
          } else if (item.type === "select") {
            console.log(typeof value[item.name]);
            updateValues[item.name] = typeof value[item.name] === "undefined" ? "" : typeof value[item.name] === "string" || typeof value[item.name] === "number" ? value[item.name] : value[item.name]?._id ? value[item.name]._id : "";
          } else if (item.type === "image") {
            updateValues["old_" + item.name] = value[item.name] ? value[item.name] : "";
            updateValues[item.name] = [];
          } else {
            updateValues[item.name] = value[item.name] ? value[item.name] : "";
          }
        }
      });
      updateValues["_id"] = value._id;
      console.log(updateValues);
      setUpdateValues(updateValues);
      setIsEditing(true);
      window.location.hash = "edit";
    } else {
      setUpdateId("");
      navigate({}, "", window.location.pathname);
      setIsEditing(false);
    }
    setLoaderBox(false);
  };
  const deleteHandler = async (item, id = "") => {
    await deleteData({ id }, currentApi)
      .then((response) => {
        if (response.status === 200) {
          setMessage({
            type: 1,
            content: `The '${item.title ? item.title : shortName}' deleted successfully!`,
            proceed: t("okay"),
          });
          setCount((count) => count - 1);
          setIsCreating(false);
          refreshView();
          // udpateView(0);
        } else if (response.status === 404) {
          setMessage({ type: 1, content: "User not found!", proceed: "Okay" });
        } else {
          setMessage({
            type: 1,
            content: "Something went wrong!",
            proceed: "Okay",
          });
        }
        setLoaderBox(false);
      })
      .catch((error) => {
        setMessage({
          type: 1,
          content: error.message + "Something went wrong!",
          proceed: "Okay",
        });
        setLoaderBox(false);
      });
  };
  const [action, setActions] = useState([]);
  const openAction = (item, data) => {
    // Actions Window
    setActions({ item, data });
    // setMessage({ type: 1, content: item.title + " / " + data._id, proceed: "Okay" });
  };
  const submitHandler = async (data) => {
    setLoaderBox(true);
    const saveData = referenceId === 0 ? { ...data } : { ...data, [parentReference]: referenceId };
    await postData(saveData, currentApi)
      .then((response) => {
        if (response.status === 200) {
          setMessage({
            type: 1,
            content: `The '${shortName}' saved successfully!`,
            proceed: "Okay",
          });
          setIsCreating(false);
          refreshView();
          // udpateView(0);
        } else if (response.status === 404) {
          setMessage({ type: 1, content: "User not found!", proceed: "Okay" });
        } else {
          setMessage({
            type: 1,
            content: "Something went wrong!",
            proceed: "Okay",
          });
        }
        setLoaderBox(false);
      })
      .catch((error) => {
        setMessage({
          type: 1,
          content: error.message + "Something went wrong!",
          proceed: "Okay",
        });
        setLoaderBox(false);
      });
  };

  const updateHandler = async (data) => {
    setLoaderBox(true);
    data = { ...data, id: updateId };
    await putData(data, `${currentApi}`)
      .then((response) => {
        if (response.status === 200) {
          setMessage({
            type: 1,
            content: `The '${shortName}' updated successfully!`,
            proceed: "Okay",
          });
          refreshView();
          setIsEditing(false);
        } else if (response.status === 404) {
          setMessage({ type: 1, content: "User not found!", proceed: "Okay" });
        } else {
          setMessage({
            type: 1,
            content: "Something went wrong!",
            proceed: "Okay",
          });
        }
        setLoaderBox(false);
      })
      .catch((error) => {
        alert(error);
        setLoaderBox(false);
      });
  };

  const filterChange = (option, name) => {
    const udpateValue = {
      ...filterView,
      [name]: option.id,
    };
    // updating the formm values
    setFilterView(udpateValue);
  };
  const dateRangeChange = (item) => {
    const startDate = new Date(item.startDate);
    startDate.setHours(0, 0, 0, 0); // Set start date to 00:00

    const endDate = new Date(item.endDate);
    endDate.setHours(23, 59, 59, 999); // Set end date to 23:59
    const udpateValue = {
      ...filterView,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
    };
    // updating the formm values
    setFilterView(udpateValue);
  };
  const closeManage = () => {
    setActions([]);
  };
  function convertMinutesToHHMM(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = Math.floor(minutes % 60);

    const hoursStr = hours.toString().padStart(2, "0");
    const minsStr = mins.toString().padStart(2, "0");

    return `${hoursStr}:${minsStr}`;
  }

  const TableRowWithActions = ({ attributes, data, slNo }) => {
    // data[attribute.name]?.title ? data[attribute.name]?.title : data[attribute.name]?.toString()
    return (
      <Tr key={`${shortName}-${slNo}`}>
        {attributes.map((attribute, index) => {
          if (attribute.view) {
            try {
              const itemValue = attribute.collection?.length > 0 && attribute.showItem?.length > 0 ? data[attribute.collection][attribute.showItem] : data[attribute.name];
              switch (attribute.type) {
                case "minute":
                  return <Td key={index}>{convertMinutesToHHMM(parseFloat(itemValue ?? 0))}</Td>;
                case "image":
                  return (
                    <Td key={index}>
                      <Img src={process.env.REACT_APP_CDN + itemValue} />
                    </Td>
                  );
                case "datetime":
                  let userFriendlyDateTime = moment(itemValue).format("DD.MM.YYYY, H:mm");
                  return <Td key={index}>{userFriendlyDateTime}</Td>;
                case "date":
                  let userFriendlyDate = moment(itemValue).format("DD.MM.YYYY");
                  return <Td key={index}>{userFriendlyDate}</Td>;
                case "textarea":
                  return (
                    <Td
                      key={index}
                      dangerouslySetInnerHTML={{
                        __html: itemValue?.substring(0, 200),
                      }}
                    ></Td>
                  );
                case "icon":
                  return (
                    <Td key={index}>
                      <i className={`fa-light ${itemValue}`} />
                    </Td>
                  );
                default:
                  switch (typeof itemValue) {
                    case "undefined":
                      return <Td key={index}>--</Td>;
                    case "object":
                      return <Td key={index}>{itemValue?.[attribute.showItem] ?? "--"}</Td>;
                    case "boolean":
                      return <Td key={index}>{itemValue.toString()}</Td>;
                    case "string":
                    case "number":
                    default:
                      if (attribute.type === "select" && attribute.apiType === "JSON") {
                        return attribute.selectApi
                          .filter((item) => item.id.toString() === itemValue?.toString())
                          .map((filteredItem) => (
                            <Td style={{ color: filteredItem.color }} key={index}>
                              {filteredItem.value}
                            </Td>
                          ));
                      } else {
                        return <Td key={index}>{itemValue?.toString().substring(0, 200)}</Td>;
                      }
                  }
              }
            } catch (error) {
              console.log(error);
              return <Td key={index}>--</Td>;
            }
          }

          return null;
        })}

        <Td key={`actions-${shortName}-${data._id}`} className="actions">
          {delPrivilege && (
            <Button
              key={`delete-${data._id}`}
              onClick={() => {
                setMessage({
                  type: 2,
                  content: t("deleteRequest", {
                    label: data[itemTitle] ? data[itemTitle].toString() : "Item",
                  }),
                  proceed: t("delete"),
                  onProceed: deleteHandler,
                  data: data,
                });
              }}
              className="delete"
            >
              <span>{t("delete")}</span>
              <GetIcon icon={"delete"} />
            </Button>
          )}
          {updatePrivilege && (
            <Button
              key={`edit-${data._id}`}
              onClick={() => {
                isEditingHandler(data, udpateView);
              }}
              className="edit"
            >
              <span>{t("edit")}</span>
              <GetIcon icon={"edit"} />
            </Button>
          )}
          {actions.map((item) => {
            return item.element === "button" ? (
              <Button
                key={`custom-${item.id}-${data._id}`}
                onClick={() => {
                  if (item.type === "callback") {
                    item.callback(item, data);
                  } else if (item.type === "call") {
                    window.location.href = `tel:${data.mobileNumber}`;
                  } else if (item.type === "subList") {
                    setSubAttributes({ item, data });
                    setShowSubList(true);
                  } else if (item.type === "subItem") {
                    setSubAttributes({ item, data });
                    setShowSubList(true);
                  } else {
                    openAction(item, data);
                  }
                }}
                className="edit"
              >
                <span>{t(item.title)}</span>
                <GetIcon icon={item.icon} />
              </Button>
            ) : (
              <ToggleContainer key={`${item.id}-${data._id}`}>
                <ToggleInput
                  type="checkbox"
                  checked={data[item.id]}
                  onChange={async (event) => {
                    // item.callback(item, data);
                    setLoaderBox(true);
                    await postData({ status: event.target.checked }, `${item.api}/${data._id}`)
                      .then((response) => {
                        if (response.status === 200) {
                          if (response.data?.message) {
                            setMessage({
                              type: 1,
                              content: t(response.data?.message),
                              proceed: t("okay"),
                            });
                          }
                          //
                          refreshView();
                          // setIsEditing(false);
                        } else if (response.status === 404) {
                          refreshView();
                          setMessage({
                            type: 1,
                            content: t("error"),
                            proceed: "Okay",
                          });
                        } else {
                          refreshView();
                          setMessage({
                            type: 1,
                            content: t("error"),
                            proceed: "Okay",
                          });
                        }
                        // setLoaderBox(false);
                      })
                      .catch((error) => {
                        alert(error);
                        // setLoaderBox(false);
                      });
                  }}
                />
                <ToggleSlider />
              </ToggleContainer>
            );
          })}
        </Td>
      </Tr>
    );
  };
  const closeModal = () => {
    setShowSubList(false);
  };
  const [searchValue, setSearchValue] = useState("");
  const [filter, setFilter] = useState(false);
  const searchTimeoutRef = useRef();
  const handleChange = (event) => {
    clearTimeout(searchTimeoutRef.current);
    setSearchValue(event.target.value);
    searchTimeoutRef.current = setTimeout(() => {
      setFilterView({ ...filterView, searchkey: event.target.value });
    }, 300);
  };
  useEffect(() => {
    return () => {
      clearTimeout(searchTimeoutRef.current);
    };
  }, []);

  //end crud functions
  return viewMode === "list" || viewMode === "subList" ? (
    <RowContainer>
      <ButtonPanel>
        <FilterBox>
          <Search theme={themeColors} placeholder="Search" value={searchValue} onChange={handleChange}></Search>
          {filter && (
            <Filter
              theme={themeColors}
              onClick={() => {
                refreshView(currentIndex);
              }}
            >
              <FilterIcon />
            </Filter>
          )}

          {datefilter && <DateRangeSelector onChange={dateRangeChange} themeColors={themeColors}></DateRangeSelector>}
        </FilterBox>
        <Filters>
          {formInput.map((item, index) => {
            return item.type === "select" && (item.filter ?? true) === true && <FormInput customClass={"filter"} placeholder={item.placeHolder} value={filterView[item.name]} key={`input` + index} id={item.name} {...item} onChange={filterChange} />;
          })}
        </Filters>
        {(addPrivilege ? addPrivilege : false) && (
          <AddButton onClick={() => isCreatingHandler(true, refreshView)}>
            <AddIcon></AddIcon>
            {t("addNew", { label: t(shortName) })}
          </AddButton>
        )}
      </ButtonPanel>
      <ScrollLayout>
        <Table>
          <thead>
            <Tr>
              {attributes.map((attribute, index) => {
                return attribute.view === true ? <Th key={shortName + attribute.name + index}>{t(attribute.label)}</Th> : "";
              })}
            </Tr>
          </thead>
          <tbody>{users.data?.response?.length > 0 && users.data.response.map((item, index) => <TableRowWithActions key={`${shortName}-${index}`} attributes={attributes} data={item} />)}</tbody>
        </Table>
      </ScrollLayout>
      {!users.data && !users.data?.response && <NoData>No {t(shortName)} found!</NoData>}
      {users.data?.response?.length === 0 && <NoData>No {t(shortName)} found!</NoData>}
      {count > 0 ? (
        count > 10 ? (
          <Count>
            <ArrowButton
              theme={themeColors}
              onClick={() => {
                setCurrentIndex((prev) => (prev > 9 ? prev - 10 : 0));
              }}
            >
              <PreviousIcon />
            </ArrowButton>
            {`Showing ${currentIndex + 1} - ${currentIndex + 10 > count ? count : currentIndex + 10} from ${count} out of ${totalCount}`}
            <ArrowButton
              theme={themeColors}
              onClick={() => {
                setCurrentIndex((prev) => (prev + 10 > count ? currentIndex : currentIndex + 10));
              }}
            >
              <NextIcon />
            </ArrowButton>
          </Count>
        ) : (
          <Count>{`Showing ${currentIndex + 1} -  ${count} from ${count} out of ${totalCount}`}</Count>
        )
      ) : (
        <Count>{`No Result Found`}</Count>
      )}

      {isCreating && (
        <CrudForm
          api={api}
          formType={"post"}
          header={t("addNewTitle", {
            label: t(shortName ? shortName : "Form"),
          })}
          formInput={formInput}
          formValues={addValues}
          formErrors={errroInput}
          submitHandler={submitHandler}
          isOpenHandler={isCreatingHandler}
          isOpen={isCreating}
        ></CrudForm>
      )}
      {isEditing && <CrudForm api={api} formType={"put"} updateId={updateId} header={t("update", { label: t(shortName ? shortName : "Form") })} formInput={formInput} formErrors={errroInput} formValues={updateValues} submitHandler={updateHandler} isOpenHandler={isEditingHandler} isOpen={isEditing}></CrudForm>}
      {action.data && <Manage setMessage={setMessage} setLoaderBox={setLoaderBox} onClose={closeManage} {...action}></Manage>}
      {showLoader && <Loader></Loader>}
      {showSublist && subAttributes?.item?.attributes?.length > 0 && <SubPage closeModal={closeModal} setMessage={setMessage} setLoaderBox={setLoaderBox} subAttributes={subAttributes}></SubPage>}
    </RowContainer>
  ) : (
    ""
  );
};
export default ListTable;
