import { useTranslation } from "react-i18next";
import FormInput from "../../input";
import ListTable from "../list";
import { Footer, Header, Overlay, Page } from "./../manage/styles";
import { getValue } from "../functions";
const SubPage = ({  subAttributes, setLoaderBox, setMessage, closeModal, itemTitle }) => {
  const [t] = useTranslation();
  const titleValue = (itemTitle.collection?.length > 0 ? subAttributes?.data?.[itemTitle.collection]?.[itemTitle.name] ?? "" : subAttributes?.data?.[itemTitle.name]) || "Please update the itemTitle | - ItemTitle: Give item title for List Item Table inside each page. This array name should be there inside the array.";
  const viewMode = subAttributes.item.type ?? "subList";
  return (
    <Overlay>
      <Page className={subAttributes?.item?.params?.customClass ?? ""}>
        <Header>{`${getValue(itemTitle, titleValue)} / ${t(subAttributes?.item?.title)}`}</Header>
        <ListTable viewMode={viewMode} setMessage={setMessage} setLoaderBox={setLoaderBox} parentReference={subAttributes?.item?.params?.parentReference} referenceId={subAttributes?.data?._id} attributes={subAttributes.item.attributes} {...subAttributes.item.params}></ListTable>
        <Footer>
          <FormInput type="close" value={"Cancel"} onChange={closeModal} />
        </Footer>
      </Page>
    </Overlay>
  );
};
export default SubPage;
