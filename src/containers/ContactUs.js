import { ContactUs as ContactUsComponent } from "../components/ContactUs";
import { asyncFetcher } from "../actions/asyncFetcher";
import { useHistory } from "react-router-dom";

const ContactUs = () => {
  const history = useHistory();

  const submitContactData = async (data) => {
    await asyncFetcher("contacts", "POST", data);
  };

  return (
    <ContactUsComponent
      submitContactData={submitContactData}
      history={history}
    />
  );
};

export default ContactUs;