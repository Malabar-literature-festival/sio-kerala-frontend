import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../backend/api";
import { Label, SelectBox } from "./styles";
import { DownIcon, TickIcon } from "../../../icons";
import { useTranslation } from "react-i18next";
import { addSelectObject } from "../../../store/actions/select";

function CustomSelect(props) {
  const themeColors = useSelector((state) => state.themeColors);
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [defaultValue] = useState(props.default);
  const [selectedId, setSelectedId] = useState(props.value);
  const [initialized, setInitialized] = useState(false);
  const [selectedValue, setSelectedValue] = useState(props.label);
  const [options, setOptions] = useState([]);
  const selectData = useSelector((state) => state.select[props.selectApi]);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const toggleOptions = () => {
    setOptionsVisible(!optionsVisible);
  };
  const fetchData = useCallback(async () => {
    if (props.apiType === "API") {
      const optionHandler = (data) => {
        setOptions(data);
        setInitialized(true);
        try {
          const selected = data.filter((item) => item.id === selectedId)[0]
            .value;
          setSelectedValue(selected ? selected : props.placeHolder);
        } catch {}
      };
      if (selectData) {
        optionHandler(selectData);
      } else {
        if (initialized) {
        } else {
          await getData({}, `${props.selectApi}`)
            .then((response) => {
              if (response.status === 200) {
                optionHandler(response.data);
                dispatch(addSelectObject(response.data, props.selectApi));
              } else if (response.status === 404) {
                setInitialized(false);
              } else {
                setInitialized(false);
              }
            })
            .catch((error) => {
              setInitialized(false);
            });
        }
      }
    } else if (props.apiType === "CSV") {
      const options = props.selectApi.split(",").map((item) => {
        return {
          id: item.trim(),
          value: item.trim().charAt(0).toUpperCase() + item.trim().slice(1),
        };
      });
      setOptions(options);
      setInitialized(true);
      try {
        const selected = options.filter((item) => item.id === selectedId)[0]
          .value;
        setSelectedValue(selected ? selected : props.placeHolder);
      } catch {}
    } else if (props.apiType === "JSON") {
      const options = props.selectApi;
      setOptions(options);
      setInitialized(true);
      try {
        console.log(options);
        const selected = options.filter((item) => item.id === selectedId)[0]
          .value;
        setSelectedValue(selected ? selected : props.placeHolder);
      } catch {}
    }
  }, [
    props.apiType,
    props.selectApi,
    props.placeHolder,
    initialized,
    selectedId,
    selectData,
    dispatch,
  ]);

  useEffect(() => {
    fetchData();
  }, [props.selectApi, fetchData]);
  const selectRef = useRef(null);

  useEffect(() => {
    function handleClick(event) {
      if (!selectRef.current.contains(event.target)) {
        setOptionsVisible(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <SelectBox
      theme={themeColors}
      className={`custom-select ${optionsVisible ? "open" : "close"} ${
        props.customClass
      }`}
      ref={selectRef}
    >
      <button
        className={`${
          selectedId !== null && selectedId.length !== 0 ? "has" : ""
        }`}
        onClick={toggleOptions}
      >
        {props.error?.length ? (
          <>
            <Label
              theme={themeColors}
              className={`${
                !props.value.length > 0 ? "shrink error" : "error"
              }`}
            >
              {`${t(props.label)}${props.required ? " *" : ""}`}
            </Label>
          </>
        ) : (
          <>
            <Label
              theme={themeColors}
              className={`${!props.value.length > 0 ? "shrink" : ""}`}
            >
              <TickIcon />
              {`${t(props.label)}${props.required ? " *" : ""}`}
            </Label>
          </>
        )}
        {`${
          props.value.length === 0
            ? `${t(props.label)}${props.required ? " *" : ""}`
            : `${selectedValue}`
        }`}
        <DownIcon />
      </button>
      {optionsVisible && initialized && (
        <ul className="options">
          {options.length &&
            options?.map((option) => (
              <li
                value={option.id === selectedId}
                className={`${option.id === selectedId}`}
                key={option.id}
                onClick={() => {
                  if (selectedId === option.id) {
                    props.onSelect(
                      { id: defaultValue, value: props.label },
                      props.id,
                      props.type
                    );
                    setSelectedValue(props.label);
                    setSelectedId(defaultValue);
                  } else {
                    props.onSelect(option, props.id, props.type);
                    setSelectedValue(option.value);
                    setSelectedId(option.id);
                  }
                  toggleOptions();
                }}
              >
                {option.value}
              </li>
            ))}
        </ul>
      )}
      {initialized && options.length === 0 && (
        <ul key={0} className="options">
          <li
            onClick={() => {
              fetchData();
            }}
          >
            Refresh
          </li>
        </ul>
      )}
    </SelectBox>
  );
}

export default CustomSelect;
