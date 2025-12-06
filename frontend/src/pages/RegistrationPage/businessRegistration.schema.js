export const businessRegistrationSchema = {
  business_name: {
    htmlFor: "business_name",
    label: "Business Name",
    iconName: "storefront",
    helper: "This name will be visible to your customers.",
    htmlProps: {
      id: "business_name",
      name: "business_name",   // <-- matches state key
      type: "text",
      required: true,
      autoComplete: "organization"
    }
  },

  business_email: {
    htmlFor: "business_email",
    label: "Email",
    iconName: "mail",
    helper: "Booking notifications will be sent to this email.",
    htmlProps: {
      id: "business_email",
      name: "business_email",  // <-- matches state key
      type: "email",
      required: true,
      autoComplete: "email"
    }
  },

  business_phone: {
    htmlFor: "business_phone",
    label: "Phone Number (optional)",
    iconName: "call",
    helper: "(optional) : Customers may use this number to reach your business",
    htmlProps: {
      id: "business_phone",
      name: "business_phone",
      type: "tel",
      required: false,
      autoComplete: "tel",
      maxLength: 10,
      placeholder: ""
    }
  },

  opening_time: {
    htmlFor: "opening_time",
    label: "Opening Time",
    iconName: "schedule",
    helper: "Time from which you start accepting appointments.",
    htmlProps: {
      id: "opening_time",
      name: "opening_time",
      type: "time",
      required: true
    }
  },

  closing_time: {
    htmlFor: "closing_time",
    label: "Closing Time",
    iconName: "schedule",
    helper: "Time after which you stop accepting appointments.",
    htmlProps: {
      id: "closing_time",
      name: "closing_time",
      type: "time",
      required: true
    }
  },

  // add these because your form uses them

};
