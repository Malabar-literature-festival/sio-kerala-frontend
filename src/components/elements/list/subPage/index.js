import { useTranslation } from "react-i18next";
import FormInput from "../../input";
import ListTable from "../list";
import { Footer, Header, Overlay, Page } from "./../manage/styles";
const SubPage = ({ subAttributes, setLoaderBox, setMessage, closeModal }) => {
  const [t] = useTranslation();
  console.log(subAttributes);
  return (
    <Overlay>
      <Page className={subAttributes?.item?.params?.customClass ?? ""}>
        <Header>{`${t(subAttributes?.data?.[subAttributes?.item?.params?.itemTitle])} / ${t(subAttributes?.item?.title)}`}</Header>
        <ListTable setMessage={setMessage} setLoaderBox={setLoaderBox} parentReference={subAttributes?.item?.params?.parentReference} referenceId={subAttributes?.data?._id} attributes={subAttributes.item.attributes} {...subAttributes.item.params}></ListTable>
        <Footer>
          <FormInput type="close" value={"Cancel"} onChange={closeModal} />
        </Footer>
      </Page>
    </Overlay>
  );
};
export default SubPage;
